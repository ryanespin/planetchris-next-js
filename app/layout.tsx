import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@fontsource/dm-sans';
import './_theme/styles.css';

import React from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from '@mantine/core';
import Header from './_components/Header';
import { theme } from './_theme';

import '@fortawesome/fontawesome-svg-core/styles.css';

import Footer from './_components/Footer';
import { Metadata, Viewport } from 'next';

config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'PlanetChris Consulting',
  description: 'PlanetChris Consulting helps youth-serving organizations build stronger, more inclusive cultures. Through interactive training and hands-on coaching, teams gain the tools they need to lead with confidence, create welcoming spaces, and make a lasting impact.',
  metadataBase: new URL('https://planetchris.net'),
  openGraph: {
    images: '/og-image.png'
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PlanetChris Consulting',
    description: 'PlanetChris Consulting helps youth-serving organizations build stronger, more inclusive cultures. Through interactive training and hands-on coaching, teams gain the tools they need to lead with confidence, create welcoming spaces, and make a lasting impact.',
    images: ['https:/planetchris.net/og-image.png'], // Must be an absolute URL
  },
};

export const viewport: Viewport = {
  themeColor: theme.primaryColor,
}

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <AppShell header={{ height: 116 }}>
            <AppShellHeader>
              <Header />
            </AppShellHeader>
            <AppShellMain>
              {children}
              <Footer />
            </AppShellMain>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
