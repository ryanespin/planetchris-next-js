import emailjs from '@emailjs/browser'

import { render, screen, userEvent } from '@/app/_test-utils'

import ContactSection from './index'

jest.mock('@emailjs/browser', () => ({
  send: jest.fn(),
}))

describe('ContactSection', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('shows validation errors when submitting an empty form', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)

    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(await screen.findByText('Name is required.')).toBeInTheDocument()
    expect(screen.getByText('Invalid email')).toBeInTheDocument()
    expect(screen.getByText('Message is required.')).toBeInTheDocument()
    expect(emailjs.send).not.toHaveBeenCalled()
  })

  it('sends the message and shows a confirmation on valid submit', async () => {
    (emailjs.send as jest.Mock).mockResolvedValueOnce(undefined)
    const user = userEvent.setup()
    render(<ContactSection />)

    await user.type(screen.getByLabelText('Name', { exact: false }), 'Jane Doe')
    await user.type(screen.getByLabelText('Email', { exact: false }), 'jane@example.com')
    await user.type(screen.getByLabelText('Message', { exact: false }), 'Hello there')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(await screen.findByText('Thanks for your email!')).toBeInTheDocument()
    expect(emailjs.send).toHaveBeenCalledWith(
      'service_tf8sn9l',
      'template_bragcbu',
      { email: 'jane@example.com', message: 'Hello there', name: 'Jane Doe' },
      { publicKey: 'ygrizlPbKT8aBlFdr' },
    )
  })
})
