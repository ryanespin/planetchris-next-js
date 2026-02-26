import { Button, Flex, FlexProps } from '@mantine/core'
import Link from 'next/link'

import classes from './HeaderButtonGroup.module.css'

interface HeaderButtonGroupProps extends FlexProps {
  close: () => void
}

function HeaderButtonGroup(props: HeaderButtonGroupProps) {
  const { close, ...other } = props
  return (
    <Flex className={classes.group} {...other}>
      <Button component={Link} href="home#ourCommitment" onClick={close} variant="subtle">
        Our Commitment
      </Button>
      <Button component={Link} href="home#services" onClick={close} variant="subtle">
        Services
      </Button>
      <Button component={Link} href="home#about" onClick={close} variant="subtle">
        About
      </Button>
      <Button component={Link} href="home#testimonials" onClick={close} variant="subtle">
        Testimonials
      </Button>
      {props.children}
    </Flex>
  )
}

export default HeaderButtonGroup
