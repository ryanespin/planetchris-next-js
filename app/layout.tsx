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

config.autoAddCss = false;

export const metadata = {
  title: 'PlanetChris Consulting',
  description: 'PlanetChris Consulting helps youth-serving organizations build stronger, more inclusive cultures. Through interactive training and hands-on coaching, teams gain the tools they need to lead with confidence, create welcoming spaces, and make a lasting impact.',
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
