import { DefaultMantineColor, MantineColorsTuple } from '@mantine/core'

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
]

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
]

const pcShamrock: MantineColorsTuple = [
  '#F3F9F8',
  '#E6F7F1',
  '#C8EFDE',
  '#9BE2C6',
  '#50CC9F',
  '#23AF74',
  '#1B8F56',
  '#207249',
  '#1F573E',
  '#1B4635',
]

export const colors = {
  'pc-denim': pcDenim,
  'pc-orange': pcOrange,
  'pc-shamrock': pcShamrock,
}

type ExtendedCustomColors = 'pc-denim' | 'pc-orange' | 'pc-shamrock' | DefaultMantineColor

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>
  }
}
