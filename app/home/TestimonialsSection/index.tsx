import { faQuoteLeft } from '@fortawesome/duotone-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import { Badge, Box, Card, CardSection, Text, Title } from '@mantine/core';

import Section from '@/app/_components/Section';

import bg from './testimonials-bg.jpg';
import classes from './TestimonialsSection.module.css';

const testimonials = [
  "Chris is by far the most engaging instructor I've ever had! Great insight and extremely knowledgeable. This training helped me come to some important realizations about myself, which not many trainings have done. THE BEST!",
  'So many times, I attend trainings like this and get absolutely nothing out of it. This time was very different. Chris was absolutely fantastic, the material was presented in a way that was engaging and thought provoking, and the environment was one that provided space for all types of questions/comments.',
  "Chris made the training very engaging and fun! I learned a lot. Now I'm determined to make a better impact on my students' lives.",
  "Thank you for explaining that there are no names for how I am feeling or how I should feel and validating feeling lost. I feel so unburdened.I hope I can help to change other people's lives as you changed mine today.",
  'Chris did an excellent job of making the training informative and engaging through his charismatic personality/public speaking skills.',
  'Chris has opened my perspective to the way I supervise. I feel like I have the knowledge now for more growth and development within myself and others.',
];

function TestimonialItem({ children }: { children?: React.ReactNode }) {
  return (
    <Box className={classes.testimonial}>
      <FontAwesomeIcon color="var(--mantine-color-pc-denim-5)" fontSize={48} icon={faQuoteLeft} />
      <Text p="sm">{children}</Text>
    </Box>
  );
}

function TestimonialsSection() {
  return (
    <Section
      anchorId="testimonials"
      image={{
        alt: 'Chris Hudson doing an energetic group selfie.',
        src: bg,
        style: {
          bottom: 0,
          height: '100%',
          right: 0,
        },
      }}
      sectionVariant="image-background"
    >
      <Card className={classes.card}>
        <Badge>Testimonials</Badge>
        <Title order={2}>What people have to say</Title>
        <CardSection maw="100%">
          <Carousel
            emblaOptions={{ align: 'center', loop: true }}
            height={450}
            hiddenFrom="sm"
            slideGap="xs"
            slideSize="90%"
            withIndicators
          >
            {testimonials.map((item, index) => (
              <CarouselSlide key={index}>
                <TestimonialItem>{item}</TestimonialItem>
              </CarouselSlide>
            ))}
          </Carousel>
        </CardSection>
        <Box visibleFrom="sm">
          {testimonials.map((item, index) => (
            <TestimonialItem key={index}>{item}</TestimonialItem>
          ))}
        </Box>
      </Card>
    </Section>
  );
}

export default TestimonialsSection;
