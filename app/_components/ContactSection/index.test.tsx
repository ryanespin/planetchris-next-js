import { render, screen, userEvent } from '@/app/_test-utils'

import ContactSection from './index'

describe('ContactSection', () => {
  beforeEach(() => {
    global.fetch = jest.fn()
  })

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
    expect(global.fetch).not.toHaveBeenCalled()
  })

  it('sends the message and shows a confirmation on valid submit', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({ ok: true })
    const user = userEvent.setup()
    render(<ContactSection />)

    await user.type(screen.getByLabelText('Name', { exact: false }), 'Jane Doe')
    await user.type(screen.getByLabelText('Email', { exact: false }), 'jane@example.com')
    await user.type(screen.getByLabelText('Message', { exact: false }), 'Hello there')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(await screen.findByText('Thanks for your email!')).toBeInTheDocument()
    expect(global.fetch).toHaveBeenCalledWith('/api/contact', {
      body: JSON.stringify({ email: 'jane@example.com', message: 'Hello there', name: 'Jane Doe' }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })
  })

  it('shows an error notification when the request fails', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({ ok: false })
    const user = userEvent.setup()
    render(<ContactSection />)

    await user.type(screen.getByLabelText('Name', { exact: false }), 'Jane Doe')
    await user.type(screen.getByLabelText('Email', { exact: false }), 'jane@example.com')
    await user.type(screen.getByLabelText('Message', { exact: false }), 'Hello there')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(await screen.findByText('Sorry, an error has occurred.')).toBeInTheDocument()
  })
})
