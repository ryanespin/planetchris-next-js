import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/notifications/styles.css';
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

import { Metadata, Viewport } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Notifications } from '@mantine/notifications';
import Footer from './_components/Footer';

config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'PlanetChris Consulting',
  description:
    'PlanetChris Consulting helps youth-serving organizations build stronger, more inclusive cultures. Through interactive training and hands-on coaching, teams gain the tools they need to lead with confidence, create welcoming spaces, and make a lasting impact.',
  metadataBase: new URL('https://planetchris.net'),
  keywords: [
    'youth development consultant',
    'camp staff training',
    'DEI training for camps',
    'inclusive leadership consulting',
    'culture change consultant',
    'equity and inclusion trainer',
    'LGBTQ+ affirming staff training',
    'training for youth-serving organizations',
    'summer camp DEI consultant',
    'anti-racism training for nonprofits',
    'inclusive hiring practices youth organizations',
    'culturally responsive training',
    'virtual DEI training',
    'in-person workshop facilitator',
    'professional development for camp staff',
    'keynote speaker youth development',
    'leadership training for camp directors',
    'nonprofit consultant NYC',
    'how to build inclusive camp culture',
    'DEI strategy for youth organizations',
    'improve staff culture at camp',
    'staff training that sticks',
    'engaging DEI workshops for nonprofits',
  ],
  openGraph: {
    images: '/og-image.png',
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
    description:
      'PlanetChris Consulting helps youth-serving organizations build stronger, more inclusive cultures. Through interactive training and hands-on coaching, teams gain the tools they need to lead with confidence, create welcoming spaces, and make a lasting impact.',
    images: ['https:/planetchris.net/og-image.png'], // Must be an absolute URL
  },
};

export const viewport: Viewport = {
  themeColor: theme.primaryColor,
};

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
          <Notifications />
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
        <GoogleAnalytics gaId="G-S7HT0L60MG" />
      </body>
    </html>
  );
}
