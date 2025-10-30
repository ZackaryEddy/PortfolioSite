import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-coral-50 text-gray-900`}
      >
        {/* Sticky navigation bar with coral theming */}
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-coral-50/90 border-b border-coral-200 px-6 py-4 shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-8">
              {/* Company logo - unoptimized for static export */}
              <Image
                src="/assets/SparklineLogo.png"
                alt="Logo"
                width={40}
                height={40}
                unoptimized
              />
              {/* Company name/brand */}
              <span className="text-xl font-bold text-gray-900">
                Sparkline Creative
              </span>
              {/* Navigation menu - hidden on mobile, visible on desktop */}
              <div className="hidden md:flex space-x-5">
                <a
                  href="#home"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Home
                </a>
                <a
                  href="#services"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main content area with coral background */}
        <main className="min-h-screen bg-coral-50">
          {children}
        </main>
      </body>
    </html>
  );
}
