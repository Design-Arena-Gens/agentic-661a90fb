import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nifty 50 AI S/R Agent',
  description: 'TradingView Pine Script indicator and signals for Nifty 50',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
