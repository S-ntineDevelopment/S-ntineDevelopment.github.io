import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'S_ntinel — Roblox Studio Luau Developer & Commercial UI Designer',
  description:
    'Roblox Studio developer and commercial UI designer building full-game UI suites across 6+ genres, 60fps animated interfaces, gameplay systems, vehicles, and tooling.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
