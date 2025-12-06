'use client';

import { Anchor, Burger, Button, Container, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { Logo } from '../Logo';
import { LogoType } from '../LogoType';
import HeaderButtonGroup from './components/HeaderButtonGroup';
import classes from './Header.module.css';

function Header() {
  const [opened, { close, open }] = useDisclosure(false);

  return (
    <Container className={classes.header} size="xl">
      <Burger
        aria-label="Menu Togle Button"
        aria-labelledby="menuButtonLabelDiv"
        color="pc-denim"
        hiddenFrom="sm"
        id="Menu Button"
        m="sm"
        onClick={open}
        opened={opened}
        role="menubar"
        style={{ borderRadius: 4, position: 'fixed', zIndex: 101 }}
        variant="filled"
      />
      <Anchor className={classes.logo} href="#top">
        <Logo className={classes['logo-image']} />
        <LogoType className={classes['logo-type']} />
      </Anchor>
      <HeaderButtonGroup close={close} visibleFrom="sm" />
      <Button component="a" href="#contact" onClick={close} visibleFrom="sm">
        Contact
      </Button>
      <Drawer
        onClose={close}
        opened={opened}
        pos="relative"
        size="max-content"
        title={
          <Anchor className={classes.logo} href="#top">
            <Logo height={80} style={{ color: 'var(--mantine-color-pc-denim-4)' }} />
            <LogoType height={50} />
          </Anchor>
        }
        withCloseButton={false}
      >
        <HeaderButtonGroup close={close}>
          <Button component="a" href="#contact" onClick={close} variant="subtle">
            Contact
          </Button>
        </HeaderButtonGroup>
      </Drawer>
    </Container>
  );
}

export default Header;
