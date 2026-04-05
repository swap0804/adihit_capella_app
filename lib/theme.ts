export const THEME_STORAGE_KEY = "adihit-capella-theme";

export const THEMES = ["dark", "light"] as const;

export type ThemeMode = (typeof THEMES)[number];

export const DEFAULT_THEME: ThemeMode = "dark";

export const THEME_COLORS: Record<ThemeMode, string> = {
  dark: "#04111f",
  light: "#f5f8fc",
};

export function isThemeMode(value: string | null | undefined): value is ThemeMode {
  return value === "dark" || value === "light";
}

export function getThemeInitScript() {
  return `(() => {
    const storageKey = ${JSON.stringify(THEME_STORAGE_KEY)};
    const defaultTheme = ${JSON.stringify(DEFAULT_THEME)};
    const themeColors = ${JSON.stringify(THEME_COLORS)};

    try {
      const storedTheme = window.localStorage.getItem(storageKey);
      const theme = storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : defaultTheme;
      const root = document.documentElement;
      root.dataset.theme = theme;
      root.style.colorScheme = theme;
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) {
        meta.setAttribute("content", themeColors[theme]);
      }
    } catch (error) {
      document.documentElement.dataset.theme = defaultTheme;
      document.documentElement.style.colorScheme = defaultTheme;
    }
  })();`;
}
