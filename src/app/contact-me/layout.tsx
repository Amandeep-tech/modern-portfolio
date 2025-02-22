import React from 'react'

export default function ContactMeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="container mx-auto px-4">
      {children}
    </section>
  )
} 