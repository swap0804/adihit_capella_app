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
  getNextThemePalette,
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
  togglePalette: () => void;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
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
  const [palette, setPaletteState] = useState<ThemePalette>(
    DEFAULT_THEME_PALETTE,
  );

  useEffect(() => {
    queueMicrotask(() => {
      const root = document.documentElement;
      const rootTheme = root.dataset.theme;
      const rootPalette = root.dataset.palette;

      setThemeState(isThemeMode(rootTheme) ? rootTheme : DEFAULT_THEME);
      setPaletteState(resolveThemePalette(rootPalette));
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
        setThemeState(event.newValue);
        applyTheme(event.newValue, palette);
      }

      if (event.key === THEME_PALETTE_STORAGE_KEY) {
        const nextPalette = resolveThemePalette(event.newValue);

        setPaletteState(nextPalette);
        applyTheme(theme, nextPalette);
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

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  function togglePalette() {
    setPalette(getNextThemePalette(palette));
  }

  return (
    <ThemeContext.Provider
      value={{
        mounted,
        palette,
        setPalette,
        togglePalette,
        theme,
        setTheme,
        toggleTheme,
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
