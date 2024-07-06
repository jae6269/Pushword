import type { AppProps } from 'next/app';
import Head from 'next/head';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import { Home, MenuBook, Search, Subscriptions } from '@mui/icons-material';
import '@/styles/globals.css';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { fireAuth } from '@/firebase/firebase';
import Sign from '@/components/Sign';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(fireAuth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AppCacheProvider>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>PushWord</title>
        <meta
          name="description"
          content="Set notifications with your own keywords"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />

        {/* favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* for ios */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="PushWord" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link
          rel="apple-touch-startup-image"
          href="/icon-512x512.png"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
        ></link>
        <link
          rel="apple-touch-icon"
          href="/images/icons/apple/apple-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/images/icons/apple/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/images/icons/apple/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/images/icons/apple/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/images/icons/apple/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/images/icons/apple/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/images/icons/apple/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/images/icons/apple/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/icons/apple/apple-icon-180x180.png"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <div className="wrapper">
          <AppBar>
            <Sign user={user} />
          </AppBar>
          <Component {...pageProps} user={user} />
          <BottomNavigation showLabels>
            <BottomNavigationAction label="home" icon={<Home />} />
            <BottomNavigationAction label="channel" icon={<Subscriptions />} />
            <BottomNavigationAction label="search" icon={<Search />} />
            <BottomNavigationAction label="manual" icon={<MenuBook />} />
          </BottomNavigation>
        </div>
      </ThemeProvider>
    </AppCacheProvider>
  );
}
