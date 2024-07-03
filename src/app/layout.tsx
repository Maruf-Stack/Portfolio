import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import useSmoothScroll from '@/library/scroll/Scroll';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <html lang="en">
        <body
          className={inter.className}
          style={{ backgroundColor: '#040316' }}
        >
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
