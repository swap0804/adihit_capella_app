type SocialIconProps = {
  className?: string;
};

export function LinkedInIcon({ className }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="8" cy="9" r="1.3" fill="currentColor" />
      <path d="M7 11.5v5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M11 17v-3.2c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8V17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M11 12.2V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function InstagramIcon({ className }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.1" cy="7.2" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M13.4 20v-6.2h2.1l.4-2.6h-2.5V9.5c0-.75.3-1.5 1.5-1.5h1.1V5.7c-.2-.03-.9-.1-1.9-.1-2.1 0-3.4 1.26-3.4 3.56v2.02H8.8v2.6h1.9V20"
        fill="currentColor"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5.35 18.65 6.4 15.2A7.1 7.1 0 1 1 9 17.75l-3.65.9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.25 8.6c.2-.45.4-.5.7-.5h.55c.18 0 .4.04.6.48l.55 1.28c.12.28.08.52-.1.75l-.38.48c.62 1.06 1.48 1.88 2.6 2.45l.5-.62c.2-.26.46-.32.76-.2l1.36.64c.32.15.48.38.42.72-.08.5-.32.93-.72 1.28-.42.36-.93.5-1.55.43-1.44-.14-2.84-.88-4.22-2.22-1.38-1.35-2.17-2.76-2.38-4.23-.08-.58.02-1.06.3-1.44.27-.38.6-.62 1-.7Z"
        fill="currentColor"
      />
    </svg>
  );
}
