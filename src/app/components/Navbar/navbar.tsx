'use client'
import { SunIcon, MoonIcon, HomeIcon, UserIcon, BriefcaseIcon, MailIcon } from 'lucide-react'
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
			<div className='hidden md:flex gap-8'>
				<Link href="/" className="hover:text-primary transition-colors group">
					<div className='flex items-center gap-2'>
						<HomeIcon className='w-5 h-5 group-hover:animate-bounce' />
						<span className='group-hover:animate-pulse'>Home</span>
					</div>
				</Link>
				<Link href="/about" className="hover:text-primary transition-colors group">
					<div className='flex items-center gap-2'>
						<UserIcon className='w-5 h-5 group-hover:animate-bounce' />
						<span className='group-hover:animate-pulse'>About</span>
					</div>
				</Link>
				<Link href="/projects" className="hover:text-primary transition-colors group">
					<div className='flex items-center gap-2'>
						<BriefcaseIcon className='w-5 h-5 group-hover:animate-bounce' />
						<span className='group-hover:animate-pulse'>Projects</span>
					</div>
				</Link>
				<Link
					href="/contact-me"
					className="hover:text-primary transition-colors group"
				>
					<div className='flex items-center gap-2'>
						<MailIcon className='w-5 h-5 group-hover:animate-bounce' />
						<span className='group-hover:animate-pulse'>Contact Me</span>
					</div>
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