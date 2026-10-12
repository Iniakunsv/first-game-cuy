import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Healthcare English', description: 'A pixel-art English exploration game for healthcare students.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
