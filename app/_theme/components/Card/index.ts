'use client';

import { Card as MantineCard, MantineThemeComponent } from '@mantine/core';

const Card: MantineThemeComponent = MantineCard.extend({
  defaultProps: {
    padding: 'xl',
    radius: 'lg',
  },
});

export default Card;
