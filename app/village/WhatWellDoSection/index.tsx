import { Alert, Flex, rem, Text } from '@mantine/core'

import Section from '@/app/_components/Section'

import CircleItem from './CircleItem'
import items from './data'

export default function WhatWellDoSection() {
  return (
    <Section sectionTitle="What We’ll Do" sectionVariant="denim-light">
      <Text ta="center">The Village unfolds over five Circles. Each builds on the last.</Text>
      <Flex direction="column" gap="inherit">
        {items.map(i => <CircleItem key={i.title} {...i} />)}
      </Flex>
      <Alert color="pc-denim" maw={rem(480)}>
        Each Circle is conversational, cumulative, and grounded in reflection rather than advice. We practice listening as much as speaking, asking questions before offering answers, and staying with complexity rather than rushing toward certainty.
      </Alert>
    </Section>
  )
}
