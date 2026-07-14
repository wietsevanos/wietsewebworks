import { ReactNode } from "react";

export const WHATSAPP_URL = "https://wa.me/31647872734";

interface WhatsAppLinkProps {
  children: ReactNode;
  className?: string;
  message?: string;
  ariaLabel?: string;
}

export const WhatsAppLink = ({
  children,
  className,
  message,
  ariaLabel,
}: WhatsAppLinkProps) => {
  const href = message
    ? `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
    : WHATSAPP_URL;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel ?? "Stuur een WhatsApp bericht naar Wietse"}
    >
      {children}
    </a>
  );
};

/** Inline WhatsApp glyph (matches the brand mark, no extra dep). */
export const WhatsAppIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M20.52 3.48A11.9 11.9 0 0 0 12.03 0C5.44 0 .08 5.36.08 11.95c0 2.11.55 4.16 1.6 5.98L0 24l6.24-1.63a11.95 11.95 0 0 0 5.79 1.48h.01c6.59 0 11.95-5.36 11.95-11.95 0-3.19-1.24-6.19-3.47-8.42ZM12.04 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.7.97.99-3.61-.23-.37a9.85 9.85 0 0 1-1.51-5.25c0-5.45 4.43-9.88 9.88-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.43 9.88-9.91 9.88Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
  </svg>
);
