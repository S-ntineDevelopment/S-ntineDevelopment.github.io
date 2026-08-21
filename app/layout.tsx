import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'S_ntinel — Roblox Scripter & Luau Developer',
  description: 'A portfolio for S_ntinel, a Roblox scripter building reliable gameplay systems and framework foundations in Luau.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
