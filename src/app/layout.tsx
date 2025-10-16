import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Image from 'next/image';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Zack Eddy - Web Developer | Sparkline Creative',
  description:
    'Professional web development services. Custom websites that help small businesses stand out and stay ahead.',
  icons: {
    icon: '/assets/SparklineLogo.png',
    shortcut: '/assets/SparklineLogo.png',
    apple: '/assets/SparklineLogo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-coral-50 dark:bg-slate-900 text-gray-900 dark:text-slate-100 transition-colors`}
      >
        <ThemeProvider>
          <nav className="sticky top-0 z-50 backdrop-blur-md bg-coral-50/90 dark:bg-slate-900/90 border-b border-coral-200 dark:border-slate-700 px-6 py-4 shadow-sm dark:shadow-slate-900/50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <Image
                  src="/assets/SparklineLogo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                />
                <Link
                  href="/"
                  className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Sparkline Creative
                </Link>
                <div className="hidden md:flex space-x-6">
                  <Link
                    href="/"
                    className="text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    About
                  </Link>
                  <Link
                    href="/projects"
                    className="text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    Projects
                  </Link>
                  <Link
                    href="/contact"
                    className="text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <ThemeToggle />
              </div>
            </div>
          </nav>

          <main className="min-h-screen bg-coral-50 dark:bg-slate-900 transition-colors">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
