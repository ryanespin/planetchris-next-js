import { DefaultMantineColor, MantineColorsTuple } from '@mantine/core';

const pcDenim: MantineColorsTuple = [
  '#F3FAFC',
  '#E2F6FB',
  '#BCE9F8',
  '#8FD6F6',
  '#73AEE5',
  '#268BEF',
  '#1B67E4',
  '#1C51C4',
  '#1A3F93',
  '#163371',
];

const pcOrange: MantineColorsTuple = [
  '#FAF9F0',
  '#FAF5D6',
  '#F5EB9D',
  '#EED958',
  '#E1BA1F',
  '#D2980B',
  '#B57307',
  '#8D570A',
  '#6C420F',
  '#543511',
];

export const colors = {
  'pc-denim': pcDenim,
  'pc-orange': pcOrange,
};

type ExtendedCustomColors = 'pc-denim' | 'pc-orange' | DefaultMantineColor;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>;
  }
}
