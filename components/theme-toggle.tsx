"use client";

import { MoonStar, Palette, SunMedium } from "lucide-react";

import { useTheme } from "@/components/theme-provider";
import { getNextThemePalette, THEME_PALETTE_LABELS } from "@/lib/theme";

export function ThemeToggle() {
  const { mounted, theme, toggleTheme } = useTheme();
  const isLight = mounted && theme === "light";
  const Icon = isLight ? MoonStar : SunMedium;
  const label = isLight ? "Switch to dark theme" : "Switch to light theme";

  return (
    <button
      type="button"
      className="floating-action floating-action--theme"
      aria-label={label}
      disabled={!mounted}
      onClick={toggleTheme}
    >
      <Icon className="h-5 w-5" />
      <span className="floating-action__label">
        {isLight ? "Dark theme" : "Light theme"}
      </span>
    </button>
  );
}

export function ThemePaletteToggle() {
  const { mounted, palette, togglePalette } = useTheme();
  const nextPalette = getNextThemePalette(palette);
  const currentLabel = THEME_PALETTE_LABELS[palette];
  const nextLabel = THEME_PALETTE_LABELS[nextPalette];

  return (
    <button
      type="button"
      className="floating-action floating-action--palette"
      aria-label={`Switch color theme to ${nextLabel}`}
      disabled={!mounted}
      onClick={togglePalette}
    >
      <Palette className="h-5 w-5" />
      <span className="floating-action__label">
        {currentLabel} theme
      </span>
    </button>
  );
}
