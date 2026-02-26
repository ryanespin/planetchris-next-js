import { alpha, Box, Button, Flex, Image, Text, Title } from '@mantine/core'
import NextImage from 'next/image'

import Section from '@/app/_components/Section'

import classes from './HeroSection.module.css'
import image from './village.png'

export default function HeroSection() {
  return (
    <Section hideDivider sectionVariant="denim">
      <Flex className={classes.container}>
        <Flex className={classes.content}>
          <Title bg={alpha('var(--mantine-color-pc-denim-4)', 0.74)}>The Village</Title>
          <Text bg={alpha('var(--mantine-color-pc-denim-4)', 0.74)} size="lg">For Parents Who Want to Stay Steady in a Changing World</Text>
          <Text bg={alpha('var(--mantine-color-pc-denim-4)', 0.74)}>The Village is a five-circle, small-cohort experience for parents unsettled by the cultural, educational, and political systems shaping their children&apos;s lives. Together, we practice reflection over reactivity, long-view thinking over urgency, and growth over blame. This is not therapy and not a debate forum. It is a guided space for parents committed to equity, inclusion, and raising future adults.</Text>
          <Button c="dark" color="pc-orange.2" component="a" href="#details" radius="xl" size="lg">See Details</Button>
        </Flex>
        <Flex flex={1}>
          <Box className={classes['image-container']}>
            <Image alt="Snowy village illustration" className={classes.image} component={NextImage} src={image} />
          </Box>
        </Flex>
      </Flex>
    </Section>
  )
}
