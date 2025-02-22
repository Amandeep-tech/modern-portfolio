import React from 'react'
import ContactMe from '../components/ContactMe/contactMe'
import Navbar from '../components/Navbar/navbar'
export const metadata = {
  title: 'Contact Me',
  description: 'Get in touch with me',
}

export default function ContactMePage() {
  return (
    <div className='bg-gray-100'>
      <Navbar />
      <main className="min-h-screen py-12">
        <ContactMe />
      </main>
    </div>
  )
} 