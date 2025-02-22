'use client'
import { SunIcon, MoonIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useTheme } from '../ThemeProvider/ThemeProvider'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className='flex justify-between items-center p-4 bg-background/70 dark:bg-dark-background/70 backdrop-blur-md border-b border-gray-200/20 sticky top-0 z-10 shadow-sm'>
      <Link href="/">
        <div className='text-2xl font-bold'>Amandeep</div>
      </Link>
      <div className='flex gap-4'>
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <Link href="/about" className="hover:text-primary transition-colors">About</Link>
        <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
        <Link 
          href="/contact-me"
          className="hover:text-primary transition-colors"
        >
          Contact Me
        </Link>
      </div>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg hover:bg-background-secondary dark:hover:bg-dark-background-secondary transition-colors"
      >
        {theme === 'light' ? (
          <SunIcon className="w-5 h-5" />
        ) : (
          <MoonIcon className="w-5 h-5" />
        )}
      </button>
    </div>
  )
}

export default Navbar