import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { Toaster } from "sonner";
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className} dark`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <title>Patara Referral App</title>
        <link rel="icon" href="/logo/patara-favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/logo/patara-favicon.png" type="image/png" />
      </Head>
      <Component {...pageProps} />
      <Toaster 
        position="top-right" 
        richColors
        expand={false}
        duration={3000}
        toastOptions={{
          style: { 
            background: 'rgb(39, 39, 42)',
            color: 'white',
            border: '1px solid rgb(63, 63, 70)'
          }
        }}
      />
    </div>
  );
}