'use client';

import { useTheme } from '../contexts/ThemeContext';

/**
 * ThemeToggle Component
 * Interactive toggle switch that allows users to switch between light and dark themes
 * Uses a sliding toggle design with smooth animations
 * Positioned in the top-right corner of the navigation bar
 */
export default function ThemeToggle() {
  // Get current theme and toggle function from context
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      // Styling: Toggle switch design with rounded corners, focus states, and theme-based background colors
      className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-gray-300 dark:bg-gray-600"
      // Accessibility: Clear description for screen readers
      aria-label="Toggle dark mode"
    >
      {/* Toggle switch circle that slides left/right based on theme */}
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
      {/* Screen reader only text that describes the current action */}
      <span className="sr-only">
        {theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      </span>
    </button>
  );
}
