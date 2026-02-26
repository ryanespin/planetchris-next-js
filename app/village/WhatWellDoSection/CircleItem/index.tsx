import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Center, Flex, rem, Text } from '@mantine/core'

import classes from './CircleItem.module.css'

export interface CircleItemProps {
  icon: IconProp
  subtitle?: string
  text?: string
  title?: string
}

export default function CircleItem({ icon, subtitle, text, title }: CircleItemProps) {
  return (
    <Flex align="flex-start" gap="lg">
      <Center className={classes['icon-circle']}>
        <FontAwesomeIcon className={classes.icon} icon={icon} />
      </Center>
      <Flex direction="column" gap={rem(4)}>
        <Text fw={500}>{title}</Text>
        <Text fs="italic" fw={300} fz={15} maw="60ch">{subtitle}</Text>
        <Text c="dimmed" maw="55ch" size="sm">
          {text}
        </Text>
      </Flex>
    </Flex>
  )
}
