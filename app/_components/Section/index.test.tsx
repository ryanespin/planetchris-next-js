import { render, screen } from '@/app/_test-utils'

import Section from './index'

describe('Section', () => {
  it('renders children, badge, and title when provided', () => {
    render(
      <Section badgeText="Contact" sectionTitle="Let's Get in Touch!">
        <p>Section content</p>
      </Section>,
    )

    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Let\'s Get in Touch!' })).toBeInTheDocument()
    expect(screen.getByText('Section content')).toBeInTheDocument()
  })

  it('omits the badge and title when not provided', () => {
    render(<Section>content only</Section>)

    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
  })

  it('renders a divider by default and omits it when hideDivider is set', () => {
    const { container, rerender } = render(<Section>content</Section>)
    expect(container.querySelector('.divider')).toBeInTheDocument()

    rerender(<Section hideDivider>content</Section>)
    expect(container.querySelector('.divider')).not.toBeInTheDocument()
  })

  it('applies the requested section variant class', () => {
    const { container } = render(<Section sectionVariant="denim">content</Section>)
    expect(container.querySelector('.section-denim')).toBeInTheDocument()
  })
})
