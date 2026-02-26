import { Badge, BadgeProps, Box, BoxProps, Flex, Text, Title } from '@mantine/core'

export interface PricingCardProps extends BoxProps {
  badge?: BadgeProps['children']
  discountedPrice?: number
  price?: number
  subtitle?: string
  title?: string
}

export default function PricingCard({ badge, discountedPrice, price, subtitle, title, ...other }: PricingCardProps) {
  return (
    <Box bg="pc-denim.0" pos="relative" px="xl" py="md" style={{ borderRadius: 'var(--mantine-radius-lg)' }} {...other}>
      {badge && <Badge color="pc-shamrock" pos="absolute" right={-8} top={-8}>{badge}</Badge>}
      <Title component="p" mb="md" order={3}>{title}</Title>
      <Flex gap="xs">
        <Title component="p" order={1} td={discountedPrice ? 'line-through' : 'none'}>
          {price?.toLocaleString('en', { currency: 'USD', style: 'currency', trailingZeroDisplay: 'stripIfInteger' })}
        </Title>
        {discountedPrice && (
          <Title c="pc-shamrock" component="p" order={1}>
            {discountedPrice?.toLocaleString('en', { currency: 'USD', style: 'currency', trailingZeroDisplay: 'stripIfInteger' })}
          </Title>
        )}
      </Flex>
      <Text c="dimmed" fw="bold">{subtitle}</Text>
    </Box>
  )
}
