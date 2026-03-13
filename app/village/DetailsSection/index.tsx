import { Button, Flex, Text, Title } from '@mantine/core'

import Section from '@/app/_components/Section'

import classes from './DetailsSection.module.css'
import PricingCard, { PricingCardProps } from './PricingCard'

const items: PricingCardProps[] = [
  {
    price: 450,
    subtitle: 'per adult participant',
    title: '(5) 90 min virtual sessions',
  },
  {
    badge: 'Best Value',
    discountedPrice: 650,
    price: 900,
    subtitle: 'for two adults registering together from the same family system',
    title: '(5) 90 min virtual sessions x2',
  },
]

export default function DetailsSection() {
  return (
    <Section anchorId="details" sectionTitle="Details">
      <Flex direction="column" gap="xs" ta="center">
        <Text size="lg">
          Tuesdays 7:00–8:30 PM ET
        </Text>
        <Text size="lg">
          Live on Zoom
        </Text>
      </Flex>
      <Flex className={classes.container}>
        {items.map(i => <PricingCard flex={1} key={i.price?.toString()} {...i} />)}
      </Flex>
      <Button component="a" href="https://forms.gle/5z1nWSVoesCusoTv8" size="xl">Register Today</Button>
      <Text maw="60ch">Limited to 10 participants per cohort.</Text>
    </Section>
  )
}
