import React from 'react'
import ContactMe from '../components/ContactMe/contactMe'

export const metadata = {
  title: 'Contact Me',
  description: 'Get in touch with me',
}

export default function ContactMePage() {
  return (
    <main className="min-h-screen py-12">
      <ContactMe />
    </main>
  )
} 