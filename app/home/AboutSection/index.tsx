import { Box, Card, Flex, Image, Text } from '@mantine/core';
import NextImage from 'next/image';

import Section from '@/app/_components/Section';

import image from './about-chris-hudson.jpg';
import classes from './AboutSection.module.css';

function AboutSection() {
  return (
    <Section
      anchorId="about"
      badgeText="About Chris Hudson"
      sectionTitle="Love Must Not Be Rare"
      sectionVariant="denim"
    >
      <Card className={classes.card}>
        <Flex className={classes.copy}>
          <Text>
            For over a decade, I&apos;ve dedicated my career to creating spaces where young people
            and those working with them can thrive. My work is driven by a simple but powerful
            belief:{' '}
            <strong>
              every child, staff member, and family deserves access to high-quality youth
              programs—no matter who they are, where they come from, or how they identify.
            </strong>
          </Text>
          <Text>
            Compassion and intentionality are at the heart of everything I do. As a social worker,
            youth development specialist, and a camp director with over 30 years of camp experience,
            I&apos;ve seen firsthand how proper training, leadership, and culture can transform a program
            from good to life changing. I don&apos;t just teach theory—I bring{' '}
            <strong>real world experience</strong> in guiding teams, shaping inclusive policies, and
            helping professionals grow into the leaders young people need.
          </Text>
          <Text>
            Through my work at <strong>PlanetChris Consulting</strong>, I help summer camps,
            afterschool programs, and youth-serving organizations create stronger, more inclusive
            environments. My approach is hands-on, interactive, and rooted in the belief that{' '}
            <strong>when we invest in people, we build communities where everyone belongs.</strong>
          </Text>
          <Text>
            At the end of every training, I leave teams with the same message:{' '}
            <Text c="pc-denim" component="em" fw={700}>
              Love must not be rare
            </Text>
            . Because when we lead with love and make space for understanding, connection, and
            equity, we create programs that change lives.
          </Text>
        </Flex>
        <Box className={classes['image-box']}>
          <Image
            alt="Chris Hudson looking out at the sunset"
            className={classes.image}
            component={NextImage}
            src={image}
          />
        </Box>
      </Card>
    </Section>
  );
}

export default AboutSection;
