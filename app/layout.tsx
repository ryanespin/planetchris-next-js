import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/notifications/styles.css';
import '@fontsource/dm-sans';

import './_theme/styles.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Metadata, Viewport } from 'next';
import '@fortawesome/fontawesome-svg-core/styles.css';
import React from 'react';

import Footer from './_components/Footer';
import Header from './_components/Header';
import { theme } from './_theme';

config.autoAddCss = false;

export const metadata: Metadata = {
  description:
    'PlanetChris Consulting helps youth-serving organizations build stronger, more inclusive cultures. Through interactive training and hands-on coaching, teams gain the tools they need to lead with confidence, create welcoming spaces, and make a lasting impact.',
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
  metadataBase: new URL('https://planetchris.net'),
  openGraph: {
    images: '/og-image.png',
  },
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
      noimageindex: false,
    },
    index: true,
    nocache: false,
  },
  title: 'PlanetChris Consulting',
  twitter: {
    card: 'summary_large_image',
    description:
      'PlanetChris Consulting helps youth-serving organizations build stronger, more inclusive cultures. Through interactive training and hands-on coaching, teams gain the tools they need to lead with confidence, create welcoming spaces, and make a lasting impact.',
    images: ['https:/planetchris.net/og-image.png'], // Must be an absolute URL
    title: 'PlanetChris Consulting',
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
        <link href="/favicon.svg" rel="shortcut icon" />
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          name="viewport"
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
