import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import { Navbar } from '../components/layout/navbar';
import { ProviderTheme } from '../providers/theme-provider';
import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'AgenForce Template',
  description:
    'AgenForce is a multipurpose marketing tempplate build with Next.js,Tailwind and motion',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${inter.variable} antialiased`}>
        <ProviderTheme
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {/* <Toggle/> */}
          <main className="bg-background  text-foreground">{children}</main>
        </ProviderTheme>
      </body>
    </html>
  );
}
