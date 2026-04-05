"use client";

import { MoonStar, SunMedium } from "lucide-react";

import { useTheme } from "@/components/theme-provider";
import type { ThemeMode } from "@/lib/theme";

function ThemeOptionButton({
  active,
  disabled,
  icon,
  label,
  onClick,
}: {
  active: boolean;
  disabled: boolean;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={`theme-toggle__button ${active ? "is-active" : ""}`}
      aria-pressed={active}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

export function ThemeToggle() {
  const { mounted, setTheme, theme } = useTheme();

  function selectTheme(nextTheme: ThemeMode) {
    setTheme(nextTheme);
  }

  return (
    <div className="theme-toggle" role="group" aria-label="Theme switcher">
      <ThemeOptionButton
        active={mounted && theme === "dark"}
        disabled={!mounted}
        icon={<MoonStar className="h-4 w-4" />}
        label="Dark"
        onClick={() => selectTheme("dark")}
      />
      <ThemeOptionButton
        active={mounted && theme === "light"}
        disabled={!mounted}
        icon={<SunMedium className="h-4 w-4" />}
        label="Light"
        onClick={() => selectTheme("light")}
      />
    </div>
  );
}
