"use client";

import {
  createContext,
  startTransition,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  DEFAULT_THEME_PALETTE,
  DEFAULT_THEME,
  isThemeMode,
  resolveThemePalette,
  THEME_COLORS,
  THEME_PALETTE_STORAGE_KEY,
  THEME_STORAGE_KEY,
  type ThemePalette,
  type ThemeMode,
} from "@/lib/theme";

type ThemeContextValue = {
  mounted: boolean;
  palette: ThemePalette;
  setPalette: (palette: ThemePalette) => void;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function applyTheme(theme: ThemeMode, palette: ThemePalette) {
  const root = document.documentElement;

  root.dataset.theme = theme;
  root.dataset.palette = palette;
  root.style.colorScheme = theme;

  const meta = document.querySelector('meta[name="theme-color"]');

  if (meta) {
    meta.setAttribute("content", THEME_COLORS[palette][theme]);
  }
}

export function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mounted, setMounted] = useState(false);
  const [theme, setThemeState] = useState<ThemeMode>(DEFAULT_THEME);
  const [palette, setPaletteState] = useState<ThemePalette>(DEFAULT_THEME_PALETTE);

  useEffect(() => {
    queueMicrotask(() => {
      const root = document.documentElement;
      const rootTheme = root.dataset.theme;

      setThemeState(isThemeMode(rootTheme) ? rootTheme : DEFAULT_THEME);
      setPaletteState(resolveThemePalette());
      setMounted(true);
    });
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    applyTheme(theme, palette);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
      window.localStorage.setItem(THEME_PALETTE_STORAGE_KEY, palette);
    } catch {
      // Ignore storage write failures and keep the theme applied for the session.
    }
  }, [mounted, palette, theme]);

  useEffect(() => {
    function handleStorage(event: StorageEvent) {
      if (event.key === THEME_STORAGE_KEY && isThemeMode(event.newValue)) {
        setThemeState(DEFAULT_THEME);
        applyTheme(DEFAULT_THEME, DEFAULT_THEME_PALETTE);
      }

      if (event.key === THEME_PALETTE_STORAGE_KEY) {
        setPaletteState(DEFAULT_THEME_PALETTE);
        applyTheme(DEFAULT_THEME, DEFAULT_THEME_PALETTE);
      }
    }

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, [palette, theme]);

  function setPalette(nextPalette: ThemePalette) {
    startTransition(() => {
      setPaletteState(nextPalette);
    });
  }

  function setTheme(nextTheme: ThemeMode) {
    startTransition(() => {
      setThemeState(nextTheme);
    });
  }

  return (
    <ThemeContext.Provider
      value={{
        mounted,
        palette,
        setPalette,
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider.");
  }

  return context;
}
