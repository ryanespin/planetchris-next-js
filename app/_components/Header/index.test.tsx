import { render, screen, userEvent } from '@/app/_test-utils'

import Header from './index'

describe('Header', () => {
  it('opens the mobile drawer when the burger button is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Menu Toggle Button' }))

    expect(await screen.findByRole('dialog')).toBeInTheDocument()
  })

  it('links the logo to the home page', () => {
    render(<Header />)

    const logoLinks = screen.getAllByRole('link')
    expect(logoLinks[0]).toHaveAttribute('href', 'home#top')
  })
})
