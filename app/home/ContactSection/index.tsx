'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { faPaperPlane, faSmile } from '@fortawesome/duotone-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert, Button, Card, Flex, Text, Textarea, TextInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import Section from '@/app/_components/Section';
import classes from './ContactSection.module.css';

function ContactSection() {
  const [messageSentSuccessfully, setMessageSentSuccesfully] = useState(false);
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      message: '',
      name: '',
    },
    validate: {
      email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      message: isNotEmpty('Message is required.'),
      name: isNotEmpty('Name is required.'),
    },
  });

  const onSubmit = (values: { email: string; message: string; name: string }) => {
    emailjs
      .send('service_tf8sn9l', 'template_bragcbu', values, {
        publicKey: 'ygrizlPbKT8aBlFdr',
      })
      .then(
        () => {
          setMessageSentSuccesfully(true);
        },
        (_error) => {
          console.log(_error);
          notifications.show({
            title: 'Sorry, an error has occurred.',
            message: `Please try again.`,
            color: 'red',
          });
        }
      );
  };

  return (
    <Section
      anchorId="contact"
      badgeText="Contact"
      sectionTitle="Let's Get in Touch!"
      sectionVariant="denim"
    >
      {messageSentSuccessfully ? (
        <Alert
          color="pc-orange"
          icon={<FontAwesomeIcon icon={faSmile} shake />}
          title="Thanks for your email!"
          variant="filled"
        >
          Thanks for reaching out to PlanetChris Consulting. We have received your email.
        </Alert>
      ) : (
        <Card
          className={classes.card}
          component="form"
          noValidate
          onSubmit={form.onSubmit((values) => onSubmit(values))}
        >
          <TextInput label="Name" key={form.key('name')} {...form.getInputProps('name')} />
          <TextInput label="Email" key={form.key('email')} {...form.getInputProps('email')} />
          <Textarea label="Message" key={form.key('message')} {...form.getInputProps('message')} />
          <Flex align="flex-end" gap="md">
            <Button className={classes.button} size="xl" type="submit">
              Send Message
            </Button>
            <Flex flex={1} />
            <Button
              component="a"
              variant="outline"
              href="mailto:planetchris@gmail.com?subject=[planetchris.net] I'd Like to Learn More About PlanetChris Consulting"
              rightSection={<FontAwesomeIcon icon={faPaperPlane} />}
              target="_blank"
            >
              Or Email Me Directly
            </Button>
          </Flex>
        </Card>
      )}
    </Section>
  );
}

export default ContactSection;
