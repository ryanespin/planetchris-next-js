'use client'

import { faPaperPlane, faSmile } from '@fortawesome/duotone-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Alert, Button, Card, Flex, Textarea, TextInput } from '@mantine/core'
import { isNotEmpty, useForm } from '@mantine/form'
import { notifications } from '@mantine/notifications'
import { useState } from 'react'

import Section from '@/app/_components/Section'

import classes from './ContactSection.module.css'

function ContactSection() {
  const [messageSentSuccessfully, setMessageSentSuccesfully] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const form = useForm({
    initialValues: {
      email: '',
      message: '',
      name: '',
    },
    mode: 'uncontrolled',
    validate: {
      email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      message: isNotEmpty('Message is required.'),
      name: isNotEmpty('Name is required.'),
    },
  })

  const onSubmit = async (values: { email: string, message: string, name: string }) => {
    setIsSending(true)
    try {
      const response = await fetch('/api/contact', {
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setMessageSentSuccesfully(true)
    }
    catch (_error) {
      console.error(_error)
      notifications.show({
        color: 'red',
        message: `Please try again.`,
        title: 'Sorry, an error has occurred.',
      })
    }
    finally {
      setIsSending(false)
    }
  }

  const onSendAnother = () => {
    form.reset()
    setMessageSentSuccesfully(false)
  }

  return (
    <Section
      anchorId="contact"
      badgeText="Contact"
      sectionTitle="Let's Get in Touch!"
      sectionVariant="denim"
    >
      {messageSentSuccessfully
        ? (
            <Alert
              color="pc-orange"
              icon={<FontAwesomeIcon icon={faSmile} shake />}
              title="Thanks for your email!"
              variant="filled"
            >
              Thanks for reaching out to PlanetChris Consulting. We have received your email.
              <Button color="pc-orange" mt="md" onClick={onSendAnother} variant="white">
                Send Another Message
              </Button>
            </Alert>
          )
        : (
            <Card
              className={classes.card}
              component="form"
              noValidate
              onSubmit={form.onSubmit(values => onSubmit(values))}
            >
              <TextInput key={form.key('name')} label="Name" withAsterisk {...form.getInputProps('name')} />
              <TextInput key={form.key('email')} label="Email" withAsterisk {...form.getInputProps('email')} />
              <Textarea key={form.key('message')} label="Message" withAsterisk {...form.getInputProps('message')} />
              <Flex align={{ base: 'center', sm: 'flex-end' }} direction={{ base: 'column', sm: 'row' }} gap="md" justify={{ base: 'center', sm: 'space-between' }}>
                <Button className={classes.button} color="pc-denim.4" loading={isSending} size="xl" type="submit">
                  Send Message
                </Button>
                <Button
                  component="a"
                  href="mailto:planetchris@gmail.com?subject=[planetchris.net] I'd Like to Learn More About PlanetChris Consulting"
                  rightSection={<FontAwesomeIcon icon={faPaperPlane} />}
                  size="lg"
                  target="_blank"
                  variant="outline"
                >
                  Or Email Me Directly
                </Button>
              </Flex>
            </Card>
          )}
    </Section>
  )
}

export default ContactSection
