import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const EMAIL_REGEX = /^\S+@\S+\.\S+$/

interface ContactPayload {
  email: string
  message: string
  name: string
}

export async function POST(request: NextRequest) {
  const body = await request.json() as Partial<ContactPayload>
  const { email, message, name } = body

  if (!name?.trim() || !message?.trim() || !email?.trim() || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: 'Missing or invalid form fields.' }, { status: 400 })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: 'PlanetChris Contact Form <onboarding@resend.dev>',
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      `,
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      to: ['planetchris@gmail.com'],
    })

    if (error) {
      console.error('Resend API error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  }
  catch (err) {
    console.error('Failed to send contact email:', err)
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}
