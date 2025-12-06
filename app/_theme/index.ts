import { createTheme, MantineThemeOverride } from '@mantine/core';

import { colors } from './colors';
import { components } from './components';

export const theme: MantineThemeOverride = createTheme({
  colors,
  components,
  fontFamily: "'Dm Sans', sans-serif",
  primaryColor: 'pc-denim',
  primaryShade: 5,
});
