import { Anchor, Box, Button, Container, Divider, Flex, Text } from '@mantine/core';
import { Logo } from '../Logo';
import { LogoType } from '../LogoType';
import classes from './Footer.module.css';

function Footer() {
  return (
    <Box className={classes.wrapper}>
      <Container className={classes.container}>
        <Flex className={classes['top-footer']}>
          <Flex className={classes['top-left']}>
            <Flex gap="xl">
              <Logo color="var(--mantine-color-pc-denim-4)" height={64} />
              <LogoType width={173} />
            </Flex>
            <Text c="dimmed">Love must not be rare.</Text>
          </Flex>
          <Flex className={classes['link-list']}>
            <Button component="a" href="#ourCommitment" variant="subtle">
              Our Commitment
            </Button>
            <Button component="a" href="#services" variant="subtle">
              Services
            </Button>
            <Button component="a" href="#about" variant="subtle">
              About
            </Button>
            <Button component="a" href="#testimonials" variant="subtle">
              Testimonials
            </Button>
            <Button component="a" href="#contact" variant="subtle">
              Contact
            </Button>
          </Flex>
        </Flex>
        <Divider />
        <Flex className={classes['bottom-footer']}>
          <Text flex={1}>@ 2025 PlanetChris Consulting. All rights reserved.</Text>
          <Text>
            Site designed by{' '}
            <Anchor href="https://ryanesp.in" target="_blank">
              Ryan Espin
            </Anchor>
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
