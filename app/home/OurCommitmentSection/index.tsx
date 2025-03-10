import NextImage from 'next/image';
import { Box, Card, Flex, Image, Text } from '@mantine/core';
import { Logo } from '@/app/_components/Logo';
import Section from '@/app/_components/Section';
import signature from './signature.png';
import classes from './OurCommitmentSection.module.css';

function OurCommitmentSection() {
  return (
    <Section
      anchorId="ourCommitment"
      badgeText="Our Commitment"
      sectionTitle="Let's Build That Future Together"
      sectionVariant="denim"
    >
      <Card className={classes.card}>
        <Flex className={classes.copy}>
          <Text>
            In today's world, where the value of diversity, equity, and inclusion (DEI) is sometimes
            questioned, the need for meaningful, lasting change has never been more significant.
            PlanetChris Consulting focuses on helping summer camps, afterschool programs, and
            youth-serving organizations build cultures where every individual feels seen, valued,
            and empowered.
          </Text>
          <Text>
            This work goes beyond DEI. It&apos;s about effective leadership, strong staff
            management, and creating programs that make a real impact. Using practical tools and
            strategies, I help teams navigate challenges and foster environments where everyone can
            grow.
          </Text>
          <Text>
            This work is rooted in connection, collaboration, and a vision for a better future. If
            we are to arrive in that future, then love must not be rare. Let&apos;s build that
            future together.
          </Text>
          <Image
            className={classes.signature}
            component={NextImage}
            src={signature}
            alt="Chris Hudson signature"
          />
          <Text>Chris Hudson</Text>
        </Flex>
        <Box className={classes['logo-box']} visibleFrom="sm">
          <Logo className={classes.logo} />
        </Box>
      </Card>
    </Section>
  );
}

export default OurCommitmentSection;
