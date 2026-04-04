import Link from "next/link";
import { MessageCircleMore } from "lucide-react";

import { BharatChat } from "@/components/bharat-chat";
import { siteConfig } from "@/lib/site-config";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <Link
        href={`https://wa.me/${siteConfig.whatsapp}`}
        className="inline-flex items-center gap-3 rounded-full bg-[linear-gradient(135deg,#21d07a,#8af3de)] px-4 py-3 text-sm font-semibold text-slate-950 shadow-[0_14px_50px_rgba(0,0,0,0.28)] transition hover:scale-[1.02]"
      >
        <MessageCircleMore className="h-4 w-4" />
        WhatsApp Chat
      </Link>
      <BharatChat />
    </div>
  );
}
