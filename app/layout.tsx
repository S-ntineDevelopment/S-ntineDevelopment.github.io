import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'S_ntinel — Roblox Studio Luau Developer',
  description: 'Roblox Studio and Luau developer building gameplay systems, vehicles, player features, and tools.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
