import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Image from 'next/image';

// Load Google Fonts with CSS variable configuration
// These fonts are optimized for web performance and modern design
const geistSans = Geist({
  variable: '--font-geist-sans', // CSS variable for Tailwind integration
  subsets: ['latin'], // Load only Latin character subset
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono', // CSS variable for monospace font
  subsets: ['latin'],
});

// SEO metadata configuration for the portfolio site
export const metadata: Metadata = {
  title: 'Zack Eddy - Web Developer | Sparkline Creative',
  description:
    'Professional web development services. Custom websites that help small businesses stand out and stay ahead.',
  // Custom favicon configuration using the Sparkline logo
  icons: {
    icon: '/assets/SparklineLogo.png', // Standard favicon
    shortcut: '/assets/SparklineLogo.png', // Shortcut icon for bookmarks
    apple: '/assets/SparklineLogo.png', // Apple touch icon for iOS
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Set initial theme class and language
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-coral-50 dark:bg-slate-900 text-gray-900 dark:text-slate-100 transition-colors`}
      >
        {/* Wrap entire app in theme context for dark/light mode functionality */}
        <ThemeProvider>
          {/* Sticky navigation bar with backdrop blur and coral/slate theming */}
          <nav className="sticky top-0 z-50 backdrop-blur-md bg-coral-50/90 dark:bg-slate-900/90 border-b border-coral-200 dark:border-slate-700 px-6 py-4 shadow-sm dark:shadow-slate-900/50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center space-x-8">
                {/* Company logo */}
                <Image
                  src="/assets/SparklineLogo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                />
                {/* Company name/brand link */}
                <Link
                  href="/"
                  className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Sparkline Creative
                </Link>
                {/* Navigation menu - hidden on mobile, visible on desktop, ordered to match page sections */}
                <div className="hidden md:flex space-x-5">
                  <a
                    href="#home"
                    className="text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="#services"
                    className="text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    Services
                  </a>
                  <a
                    href="#about"
                    className="text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    About
                  </a>
                  <a
                    href="#contact"
                    className="text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    Contact
                  </a>
                </div>
              </div>
              {/* Right side of navigation - contains theme toggle */}
              <div className="flex items-center space-x-4">
                <ThemeToggle />
              </div>
            </div>
          </nav>

          {/* Main content area with coral/slate background that transitions with theme */}
          <main className="min-h-screen bg-coral-50 dark:bg-slate-900 transition-colors">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
