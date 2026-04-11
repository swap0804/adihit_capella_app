export const THEME_STORAGE_KEY = "adihit-capella-theme";
export const THEME_PALETTE_STORAGE_KEY = "adihit-capella-palette";

export const THEMES = ["dark", "light"] as const;
export const THEME_PALETTES = ["classic", "current", "previous"] as const;

export type ThemeMode = (typeof THEMES)[number];
export type ThemePalette = (typeof THEME_PALETTES)[number];

export const DEFAULT_THEME: ThemeMode = "dark";
export const DEFAULT_THEME_PALETTE: ThemePalette = "classic";

export const THEME_PALETTE_LABELS: Record<ThemePalette, string> = {
  classic: "Classic",
  current: "Ember",
  previous: "Logo Prism",
};

export const THEME_COLORS: Record<ThemePalette, Record<ThemeMode, string>> = {
  classic: {
    dark: "#04111f",
    light: "#f5f8fc",
  },
  current: {
    dark: "#180707",
    light: "#fff1df",
  },
  previous: {
    dark: "#08090d",
    light: "#fffaf0",
  },
};

export function isThemeMode(value: string | null | undefined): value is ThemeMode {
  return value === "dark" || value === "light";
}

export function isThemePalette(
  value: string | null | undefined,
): value is ThemePalette {
  return value === "classic" || value === "current" || value === "previous";
}

export function resolveThemePalette(
  value: string | null | undefined,
): ThemePalette {
  if (value === "ember") {
    return "current";
  }

  if (value === "logo") {
    return "previous";
  }

  return isThemePalette(value) ? value : DEFAULT_THEME_PALETTE;
}

export function getNextThemePalette(palette: ThemePalette): ThemePalette {
  const index = THEME_PALETTES.indexOf(palette);
  const nextIndex = (index + 1) % THEME_PALETTES.length;

  return THEME_PALETTES[nextIndex];
}

export function getThemeInitScript() {
  return `(() => {
    const storageKey = ${JSON.stringify(THEME_STORAGE_KEY)};
    const paletteStorageKey = ${JSON.stringify(THEME_PALETTE_STORAGE_KEY)};
    const defaultTheme = ${JSON.stringify(DEFAULT_THEME)};
    const defaultPalette = ${JSON.stringify(DEFAULT_THEME_PALETTE)};
    const themeColors = ${JSON.stringify(THEME_COLORS)};

    try {
      const storedTheme = window.localStorage.getItem(storageKey);
      const storedPalette = window.localStorage.getItem(paletteStorageKey);
      const theme = storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : defaultTheme;
      const palette = storedPalette === "classic" || storedPalette === "current" || storedPalette === "previous"
        ? storedPalette
        : storedPalette === "ember"
        ? "current"
        : storedPalette === "logo"
        ? "previous"
        : defaultPalette;
      const root = document.documentElement;
      root.dataset.theme = theme;
      root.dataset.palette = palette;
      root.style.colorScheme = theme;
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) {
        meta.setAttribute("content", themeColors[palette][theme]);
      }
    } catch (error) {
      document.documentElement.dataset.theme = defaultTheme;
      document.documentElement.dataset.palette = defaultPalette;
      document.documentElement.style.colorScheme = defaultTheme;
    }
  })();`;
}
