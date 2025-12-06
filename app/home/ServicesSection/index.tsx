import {
  faChild,
  faFistRaised,
  faHandshakeAngle,
  faHandsHoldingHeart,
  faLightbulbMessage,
  faScaleUnbalanced,
  faTransgender,
} from '@fortawesome/duotone-light-svg-icons';
import { Alert, Button, Flex, SimpleGrid, Text, Title } from '@mantine/core';

import Section from '@/app/_components/Section';

import IconFactItem from './_components/IconFactItem';
import classes from './ServicesSection.module.css';

function ServicesSection() {
  return (
    <Section
      anchorId="services"
      badgeText="Services"
      sectionTitle="Training & Coaching That Transforms Your Team"
      sectionTitleProps={{ style: { alignSelf: 'flex-start' }, ta: 'left' }}
    >
      <Flex direction="column" gap="md">
        <Text>
          Every training I offer is interactive, practical, and built for real-world impact. I
          don&apos;t just lecture—I create experiences where teams engage, reflect, and walk away
          with tangible tools to improve their work. My approach is{' '}
          <Text component="strong" fw={700}>
            empathetic, honest, and genuine
          </Text>
          , allowing open conversations and meaningful change.
        </Text>
        <Text>
          I provide{' '}
          <Text component="strong" fw={700}>
            group training
          </Text>{' '}
          for staff and leadership teams and one-on-one{' '}
          <Text component="strong" fw={700}>
            coaching
          </Text>{' '}
          for managers and youth development professionals looking to strengthen their leadership
          skills. Every session can be customized to fit your organization&apos;s needs, but these
          are some of the most popular topics:
        </Text>
      </Flex>
      <Title order={3}>Workshops &amp; Training Topics</Title>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <IconFactItem factTitle="Creating Safer Spaces for LGBTQ+ Youth" icon={faTransgender}>
          Understand sexual orientation, gender identity, and expression (SOGIE) and learn practical
          ways to ensure that LGBTQ+ young people feel safe, welcome, and supported in your program.
        </IconFactItem>
        <IconFactItem
          factTitle="Designing Inclusive & Equitable Programs"
          icon={faHandsHoldingHeart}
        >
          Move beyond buzzwords. This session will explain what diversity, equity, and inclusion
          (DEI) mean and how to build programs that reflect and uplift all participants.
        </IconFactItem>
        <IconFactItem factTitle="Recognizing & Reducing Implicit Bias" icon={faScaleUnbalanced}>
          Bias isn&apos;t always obvious but can impact decision-making, behavior management, and
          team culture. This session helps frontline staff and leaders become more aware of their
          biases and develop strategies to minimize them.
        </IconFactItem>
        <IconFactItem factTitle="Building a Strong & Positive Program Culture" icon={faFistRaised}>
          Culture isn&apos;t accidental—it&apos;s built with intention. Learn how to create an
          environment where staff and participants feel connected, respected, and engaged through
          routines, rituals, and clear expectations.
        </IconFactItem>
        <IconFactItem factTitle="Professional Skills for Youth Workers" icon={faChild}>
          Perfect for young staff or those new to working with kids, this session covers the
          essentials: professionalism, reliability, communication, and how to be a positive role
          model for youth.
        </IconFactItem>
        <IconFactItem
          factTitle="Coaching & Feedback for Stronger Leadership"
          icon={faHandshakeAngle}
        >
          Designed for new and experienced managers, this session focuses on giving effective
          feedback, setting clear expectations, and building leadership skills that inspire and
          support staff.
        </IconFactItem>
        <IconFactItem factTitle="Mindful Communication in Youth Work" icon={faLightbulbMessage}>
          Whether you&apos;re interacting with staff, families, or young people, intentional
          communication makes all the difference. Learn strategies for listening actively, setting
          boundaries, and having meaningful conversations that build trust.
        </IconFactItem>
        <Alert
          classNames={{
            body: classes['alert-body'],
            message: classes['alert-body'],
            title: classes['alert-title'],
          }}
          color="pc-denim"
          title="Do you need something else?"
        >
          <Text fz="sm" ta="center">
            I also create <strong>custom training</strong> based on your team&apos;s unique challenges
            and goals. Let&apos;s discuss what your team needs!
          </Text>
          <Button radius="xl" variant="outline">
            Get in Touch
          </Button>
        </Alert>
      </SimpleGrid>
    </Section>
  );
}

export default ServicesSection;
