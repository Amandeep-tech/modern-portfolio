import Image from 'next/image'
import React from 'react'
import { DownloadIcon, Send } from 'lucide-react'
import Link from 'next/link'
const homePageHero = () => {
	return (
		<div className='home-page-hero-wrapper flex justify-between items-center w-full p-4'>
			<div className="left flex flex-col gap-4 pl-20">
				<h1 className='text-6xl font-bold leading-tight flex items-center gap-4'>
					<div className='text-gray-500'>{`I'm`}</div>
					<div className='animate-typing text-primary overflow-hidden whitespace-nowrap'>Amandeep Singh</div>
				</h1>
				<div className='text-gray-500 text-xl flex flex-col gap-2'>
					<div className='flex items-center gap-2'>
						<div className='text-primary text-4xl font-bold'>
							{[...'Frontend', ' ',].map((letter, index) => (
								<span
									key={index}
									className={`inline-block ${letter !== ' ' ? 'animate-letter-wave' : ''}`}
									style={{ animationDelay: `${index * 0.1}s` }}
								>
									{letter}
								</span>
							))}
						</div>
						<div className='text-primary text-4xl font-bold'>
							{[...'Engineer', ' ',].map((letter, index) => (
								<span
									key={index}
									className={`inline-block ${letter !== ' ' ? 'animate-letter-wave' : ''}`}
									style={{ animationDelay: `${index * 0.1}s` }}
								>
									{letter}
								</span>
							))}
						</div>
					</div>
					<div className='text-gray-500 text-xl'>specializing in building exceptional digital experiences</div>
				</div>
				<div className="buttons flex gap-4 mt-8">
					<Link href='https://drive.google.com/file/d/17CoUh5PZgfSWqsaM7wmFPRJts2r6D8Ix/view?usp=sharing'
						target='_blank'
					>
						<button
							className='relative border border-primary rounded-full px-8 py-2 group'
						>
							{/* <span className='absolute inset-0 rounded-full border border-gray-300 group-hover:border-transparent group-hover:bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:200%_100%] group-hover:animate-border-running'></span> */}
							<div className='flex items-center gap-2 group'>
								<DownloadIcon 
									className='w-4 h-4 group-hover:animate-bounce'
									style={{ color: "#3b82f6" }}
								/>
								<span className='text-primary text-md font-bold'>
									{`Download Resume`}
								</span>
							</div>
						</button>
					</Link>
					<Link href='/contact-me'>
						<button className='border border-primary rounded-full px-8 py-2'>
							<div className='flex items-center gap-2 group'>
								<span className='text-primary text-md font-bold'>
									{`Contact Me`}
								</span>
								<Send className='w-4 h-4 group-hover:animate-bounce' 
									style={{ color: "#3b82f6" }}
								/>
							</div>
						</button>
					</Link>
				</div>
			</div>
			<div className="right rounded-full overflow-hidden animate-scale-bounce">
				<Image src="/photos/myPhoto.jpeg" alt="photo" width={500} height={500} />
			</div>
		</div>
	)
}

export default homePageHero