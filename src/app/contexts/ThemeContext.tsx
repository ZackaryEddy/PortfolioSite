'use client';

import { createContext, useContext, useEffect, useState } from 'react';

// Type definition for theme options
type Theme = 'light' | 'dark';

// Interface defining what the theme context provides
interface ThemeContextType {
  theme: Theme; // Current theme state
  toggleTheme: () => void; // Function to switch between themes
}

// Create React context for theme management
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * ThemeProvider Component
 * Wraps the app to provide theme functionality throughout the component tree
 * Handles theme persistence, system preference detection, and DOM class management
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  // Effect to initialize theme on component mount
  useEffect(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Check system preference if no saved theme
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  // Effect to apply theme changes to the DOM and persist to localStorage
  useEffect(() => {
    // Apply theme to document root for Tailwind dark mode
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    // Save theme preference for future visits
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Custom hook to access theme context
 * Provides theme state and toggle function to components
 * Throws error if used outside of ThemeProvider
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
