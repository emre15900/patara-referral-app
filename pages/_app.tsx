import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { Toaster } from "sonner";

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className} dark`}>
      <Component {...pageProps} />
      <Toaster position="top-right" />
    </div>
  );
}