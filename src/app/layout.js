import './globals.css'; // or any other global styles
import { Inter } from 'next/font/google';

// Load fonts using the new font system
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>{`
          /* Additional global styles if needed */
        `}</style>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
