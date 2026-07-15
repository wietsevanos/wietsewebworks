<?php
// Contact formulier handler voor Wietse Webworks
// Verstuurt via de Resend HTTP API (betrouwbaarder dan mail() op shared hosting)
//
// SETUP (eenmalig op de DirectAdmin server):
//   Maak in dezelfde map als dit bestand een file "contact-config.php" met:
//
//     <?php
//     return [
//       'resend_api_key' => 're_xxx_JOUW_KEY',
//       'to'             => 'wietsevanos@gmail.com',
//       'from'           => 'Wietse Webworks <onboarding@resend.dev>',
//     ];
//
//   Zorg dat contact-config.php NIET in git komt (staat via .htaccess ook geblokkeerd voor http toegang).

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// --- Config laden ---
$configPath = __DIR__ . '/contact-config.php';
if (!file_exists($configPath)) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Server niet geconfigureerd (contact-config.php ontbreekt)']);
    exit;
}
$config = require $configPath;
$apiKey = $config['resend_api_key'] ?? '';
$to     = $config['to']             ?? 'wietsevanos@gmail.com';
$from   = $config['from']           ?? 'Wietse Webworks <onboarding@resend.dev>';

if (!$apiKey) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Server niet geconfigureerd (API key ontbreekt)']);
    exit;
}

// --- Input verzamelen ---
$input = $_POST;
if (empty($input)) {
    $raw = file_get_contents('php://input');
    $decoded = json_decode($raw, true);
    if (is_array($decoded)) $input = $decoded;
}

function clean($v, $max = 2000) {
    $v = is_string($v) ? trim($v) : '';
    return mb_substr($v, 0, $max);
}

$name    = clean($input['name']    ?? '', 100);
$email   = clean($input['email']   ?? '', 255);
$company = clean($input['company'] ?? '', 150);
$subject = clean($input['subject'] ?? '', 200);
$message = clean($input['message'] ?? '', 5000);

$errors = [];
if ($name === '')    $errors[] = 'Naam is verplicht';
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Geldig e-mailadres is verplicht';
if ($subject === '') $errors[] = 'Onderwerp is verplicht';
if ($message === '') $errors[] = 'Bericht is verplicht';

foreach ([$name, $email, $company, $subject] as $line) {
    if (preg_match('/[\r\n]/', $line)) { $errors[] = 'Ongeldige invoer'; break; }
}

if ($errors) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => implode(', ', $errors)]);
    exit;
}

// --- HTML body opbouwen ---
$esc = fn($s) => htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
$companyRow = $company !== ''
    ? '<tr><td style="padding:6px 12px;color:#64748b;">Bedrijf</td><td style="padding:6px 12px;color:#0f172a;font-weight:500;">' . $esc($company) . '</td></tr>'
    : '';

$html = '<div style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;background:#f8fafc;padding:24px;color:#0f172a;">'
      . '<div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;">'
      . '<div style="padding:20px 24px;border-bottom:1px solid #e2e8f0;">'
      . '<div style="font-size:12px;letter-spacing:0.15em;text-transform:uppercase;color:#f97316;font-weight:600;">Nieuw bericht</div>'
      . '<div style="font-size:18px;font-weight:600;margin-top:4px;">' . $esc($subject) . '</div>'
      . '</div>'
      . '<table style="width:100%;border-collapse:collapse;font-size:14px;padding:8px 12px;">'
      . '<tr><td style="padding:6px 12px;color:#64748b;width:110px;">Naam</td><td style="padding:6px 12px;color:#0f172a;font-weight:500;">' . $esc($name) . '</td></tr>'
      . '<tr><td style="padding:6px 12px;color:#64748b;">E-mail</td><td style="padding:6px 12px;color:#0f172a;font-weight:500;">' . $esc($email) . '</td></tr>'
      . $companyRow
      . '</table>'
      . '<div style="padding:16px 24px 24px;border-top:1px solid #e2e8f0;">'
      . '<div style="font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#64748b;margin-bottom:8px;">Bericht</div>'
      . '<div style="font-size:14px;line-height:1.6;white-space:pre-wrap;color:#0f172a;">' . $esc($message) . '</div>'
      . '</div>'
      . '</div></div>';

$text = "Nieuw bericht via de website\n"
      . str_repeat('-', 40) . "\n"
      . "Naam:      $name\nE-mail:    $email\n"
      . ($company !== '' ? "Bedrijf:   $company\n" : '')
      . "Onderwerp: $subject\n"
      . str_repeat('-', 40) . "\n\n$message\n";

// --- Naar Resend API sturen ---
$payload = json_encode([
    'from'     => $from,
    'to'       => [$to],
    'reply_to' => $email,
    'subject'  => '[Contactformulier] ' . $subject,
    'html'     => $html,
    'text'     => $text,
]);

$ch = curl_init('https://api.resend.com/emails');
curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => $payload,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT        => 15,
    CURLOPT_HTTPHEADER     => [
        'Authorization: Bearer ' . $apiKey,
        'Content-Type: application/json',
    ],
]);
$response = curl_exec($ch);
$status   = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlErr  = curl_error($ch);
curl_close($ch);

if ($response === false) {
    http_response_code(502);
    echo json_encode(['ok' => false, 'error' => 'Kon Resend niet bereiken: ' . $curlErr]);
    exit;
}

if ($status < 200 || $status >= 300) {
    http_response_code(502);
    $decoded = json_decode($response, true);
    $msg = is_array($decoded) && isset($decoded['message']) ? $decoded['message'] : 'Onbekende fout van Resend';
    echo json_encode(['ok' => false, 'error' => $msg]);
    exit;
}

echo json_encode(['ok' => true]);
