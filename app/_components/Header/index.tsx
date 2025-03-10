'use client';

import { Anchor, Burger, Button, Container, Drawer, Flex, FlexProps } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Logo } from '../Logo';
import { LogoType } from '../LogoType';
import classes from './Header.module.css';

function Header() {
  const [opened, { open, close }] = useDisclosure(false);

  function HeaderButtonGroup(props: FlexProps) {
    return (
      <Flex className={classes['button-group']} {...props}>
        <Button component="a" href="#ourCommitment" onClick={close} variant="subtle">
          Our Commitment
        </Button>
        <Button component="a" href="#services" onClick={close} variant="subtle">
          Services
        </Button>
        <Button component="a" href="#about" onClick={close} variant="subtle">
          About
        </Button>
        <Button component="a" href="#testimonials" onClick={close} variant="subtle">
          Testimonials
        </Button>
        {props.children}
      </Flex>
    );
  }

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
      <HeaderButtonGroup visibleFrom="sm" />
      <Button component="a" href="#contact" onClick={close} visibleFrom="sm">
        Contact
      </Button>
      <Drawer
        opened={opened}
        onClose={close}
        size="max-content"
        title={
          <Anchor className={classes.logo} href="#top">
            <Logo height={80} style={{ color: 'var(--mantine-color-pc-denim-4)' }} />
            <LogoType height={50} />
          </Anchor>
        }
        withCloseButton={false}
        pos="relative"
      >
        <HeaderButtonGroup>
          <Button component="a" href="#contact" onClick={close} variant="subtle">
            Contact
          </Button>
        </HeaderButtonGroup>
      </Drawer>
    </Container>
  );
}

export default Header;
