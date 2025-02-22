import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4'>
        <Link href="/">
            <div className='text-2xl font-bold'>Amandeep</div>
        </Link>
        <div className='flex gap-4'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link 
              href="/contact-me"
              className="hover:text-blue-500 transition-colors"
            >
              Contact Me
            </Link>
        </div>
    </div>
  )
}

export default Navbar