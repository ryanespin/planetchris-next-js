'use client'

import { Box, Button, Text } from '@mantine/core'
import Link from 'next/link'

import Section from '@/app/_components/Section'

import classes from './VillageBanner.module.css'

export default function VillageBanner() {
  return (
    <Section hideDivider sectionVariant="village">
      <Box className={classes.container}>
        <Text className={classes.text} size="lg">
          For Parents Who Want to Stay Steady in a Changing World
        </Text>
        <Button className={classes.button} color="pc-denim.4" component={Link} href="/village">Register Today for The Village</Button>
      </Box>
    </Section>
  )
}
