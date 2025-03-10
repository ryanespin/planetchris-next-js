import NextImage from 'next/image';
import { Box, Button, Container, Flex, Highlight, Image, Text, Title } from '@mantine/core';
import image from './pc-hero-image.png';
import classes from './HeroSection.module.css';

function HeroSection() {
  return (
    <Box className={classes['outer-container']}>
      <Box className={classes.anchor} />
      <Container className={classes.container}>
        <Flex className={classes['left-section']}>
          <Flex className={classes.copy}>
            <Highlight
              className={classes.title}
              color="pc-denim"
              component={Title}
              highlight="every"
            >
              Helping youth organizations build cultures where every individual feels seen, valued,
              and empowered
            </Highlight>
            <Text c="dimmed">
              PlanetChris Consulting helps youth-serving organizations build stronger, more
              inclusive cultures. Through interactive training and hands-on coaching, teams gain the
              tools they need to lead with confidence, create welcoming spaces, and make a lasting
              impact.
            </Text>
          </Flex>
          <Button
            className={classes.button}
            color="pc-orange"
            component="a"
            href="#contact"
            size="xl"
          >
            Get in Touch
          </Button>
        </Flex>
        <Flex bg="var(--mantine-color-pc-denim-4)" className={classes['image-container']} flex={1}>
          <Image className={classes.image} component={NextImage} src={image} alt="Chris Hudson" />
        </Flex>
      </Container>
    </Box>
  );
}

export default HeroSection;
