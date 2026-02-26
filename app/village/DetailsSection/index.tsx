import { Button, Flex, Text, Title } from '@mantine/core'

import Section from '@/app/_components/Section'

import PricingCard, { PricingCardProps } from './PricingCard'

const items: PricingCardProps[] = [
  {
    price: 450,
    subtitle: 'per adult participant',
    title: '(5) 90 min virtual session',
  },
  {
    badge: 'Best Value',
    discountedPrice: 650,
    price: 900,
    subtitle: 'for two adults registering together from the same family system',
    title: '(5) 90 min virtual session x2',
  },
]

export default function DetailsSection() {
  return (
    <Section anchorId="details" sectionTitle="Details">
      <Flex direction="column" gap="xs" ta="center">
        <Text size="lg">
          Tuesdays 7:00–8:30 PM ET
        </Text>
        <Title order={3}>March 24, March 31, April 7, April 14, April 21</Title>
        <Text size="lg">
          Live on Zoom
        </Text>
      </Flex>
      <Flex gap="lg">
        {items.map(i => <PricingCard flex={1} key={i.price?.toString()} {...i} />)}
      </Flex>
      <Button component="a" href="https://forms.gle/5z1nWSVoesCusoTv8" size="xl">Register Today</Button>
      <Text maw="60ch">Enrollment closes March 17. The series will proceed with a minimum of 6 participants. Limited to 10 participants. If cost is a barrier, please reach out directly.</Text>
    </Section>
  )
}
