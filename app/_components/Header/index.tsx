'use client'

import { Anchor, Burger, Button, Container, Drawer } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Logo } from '../Logo'
import { LogoType } from '../LogoType'
import HeaderButtonGroup from './components/HeaderButtonGroup'
import classes from './Header.module.css'

function Header() {
  const [opened, { close, open }] = useDisclosure(false)
  const pathname = usePathname()
  const showConsultingNav = !pathname?.startsWith('/village')

  return (
    <Container className={classes.header} size="xl">
      {showConsultingNav && (
        <Burger
          aria-controls="mobile-nav-drawer"
          aria-expanded={opened}
          aria-label="Menu Toggle Button"
          color="pc-denim"
          hiddenFrom="sm"
          id="Menu Button"
          m="sm"
          onClick={open}
          opened={opened}
          style={{ borderRadius: 4, minHeight: 44, minWidth: 44, position: 'fixed', zIndex: 101 }}
          variant="filled"
        />
      )}
      <Anchor aria-label="PlanetChris Consulting home" className={classes.logo} component={Link} href="home#top">
        <Logo className={classes['logo-image']} />
        <LogoType className={classes['logo-type']} />
      </Anchor>
      {showConsultingNav && (
        <>
          <HeaderButtonGroup close={close} visibleFrom="sm" />
          <Button color="pc-denim.4" component="a" href="#contact" onClick={close} visibleFrom="sm">
            Contact
          </Button>
          <Drawer
            id="mobile-nav-drawer"
            onClose={close}
            opened={opened}
            pos="relative"
            size="max-content"
            title={(
              <Anchor aria-label="PlanetChris Consulting home" className={classes.logo} component={Link} href="home#top">
                <Logo height={80} style={{ color: 'var(--mantine-color-pc-denim-4)' }} />
                <LogoType height={50} />
              </Anchor>
            )}
            withCloseButton={false}
          >
            <HeaderButtonGroup close={close}>
              <Button component="a" href="#contact" onClick={close} size="lg" variant="subtle">
                Contact
              </Button>
            </HeaderButtonGroup>
          </Drawer>
        </>
      )}
    </Container>
  )
}

export default Header
