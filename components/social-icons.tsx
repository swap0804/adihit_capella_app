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
