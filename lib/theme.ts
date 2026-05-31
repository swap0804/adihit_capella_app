export const THEME_STORAGE_KEY = "adihit-capella-theme";
export const THEME_PALETTE_STORAGE_KEY = "adihit-capella-palette";

export const THEMES = ["light"] as const;
export const THEME_PALETTES = ["solidBlue"] as const;

export type ThemeMode = (typeof THEMES)[number];
export type ThemePalette = (typeof THEME_PALETTES)[number];

export const DEFAULT_THEME: ThemeMode = "light";
export const DEFAULT_THEME_PALETTE: ThemePalette = "solidBlue";

export const THEME_COLORS: Record<ThemePalette, Record<ThemeMode, string>> = {
  solidBlue: {
    light: "#ffffff",
  },
};

export function isThemeMode(value: string | null | undefined): value is ThemeMode {
  return value === DEFAULT_THEME;
}

export function resolveThemePalette(): ThemePalette {
  return DEFAULT_THEME_PALETTE;
}

export function getThemeInitScript() {
  return `(() => {
    const storageKey = ${JSON.stringify(THEME_STORAGE_KEY)};
    const paletteStorageKey = ${JSON.stringify(THEME_PALETTE_STORAGE_KEY)};
    const theme = ${JSON.stringify(DEFAULT_THEME)};
    const palette = ${JSON.stringify(DEFAULT_THEME_PALETTE)};
    const themeColor = ${JSON.stringify(THEME_COLORS.solidBlue.light)};

    try {
      window.localStorage.setItem(storageKey, theme);
      window.localStorage.setItem(paletteStorageKey, palette);
    } catch {}

    const root = document.documentElement;
    root.dataset.theme = theme;
    root.dataset.palette = palette;
    root.style.colorScheme = theme;

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", themeColor);
    }
  })();`;
}
