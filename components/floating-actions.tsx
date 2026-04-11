import { BharatChat } from "@/components/bharat-chat";
import { ThemePaletteToggle, ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/site-config";
import { WhatsAppIcon } from "@/components/social-icons";

export function FloatingActions() {
  return (
    <div className="floating-action-stack">
      <ThemeToggle />
      <ThemePaletteToggle />
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="floating-action floating-action--whatsapp"
        aria-label="WhatsApp chat"
      >
        <WhatsAppIcon className="h-5 w-5" />
        <span className="floating-action__label">WhatsApp Chat</span>
      </a>
      <BharatChat />
    </div>
  );
}
