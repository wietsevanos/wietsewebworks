<?php
// Contact form handler voor Wietse Webworks (DirectAdmin hosting)
// Verstuurt formulierinzendingen naar wietsevanos@gmail.com via PHP mail()

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

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

// Header-injection guard
foreach ([$name, $email, $company, $subject] as $line) {
    if (preg_match('/[\r\n]/', $line)) {
        $errors[] = 'Ongeldige invoer';
        break;
    }
}

if ($errors) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => implode(', ', $errors)]);
    exit;
}

$to = 'wietsevanos@gmail.com';
$mailSubject = '[Contactformulier] ' . $subject;

$bodyLines = [
    'Nieuw bericht via de website',
    str_repeat('-', 40),
    'Naam:      ' . $name,
    'E-mail:    ' . $email,
];
if ($company !== '') $bodyLines[] = 'Bedrijf:   ' . $company;
$bodyLines[] = 'Onderwerp: ' . $subject;
$bodyLines[] = str_repeat('-', 40);
$bodyLines[] = '';
$bodyLines[] = $message;
$body = implode("\r\n", $bodyLines);

// From-adres: standaard server-adres van de eigen hosting
// (goed voor SPF/DKIM zonder eigen mail-domein instellen)
$serverName = $_SERVER['SERVER_NAME'] ?? 'localhost';
$fromAddress = 'no-reply@' . preg_replace('/^www\./', '', $serverName);

$headers = [
    'From: Website contactformulier <' . $fromAddress . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/plain; charset=UTF-8',
    'MIME-Version: 1.0',
];

$sent = @mail(
    $to,
    '=?UTF-8?B?' . base64_encode($mailSubject) . '?=',
    $body,
    implode("\r\n", $headers)
);

if (!$sent) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Mailserver weigerde het bericht']);
    exit;
}

echo json_encode(['ok' => true]);
