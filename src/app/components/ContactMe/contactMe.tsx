'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { itemVariants, containerVariants } from '@/app/utils/framer-motion/variant'

export default function ContactMe() {

	const [data, setData] = useState({
		name: '',
		email: '',
		message: ''
	})

	const isSubmitBtnDisabled = !data.name || !data.email || !data.message

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setData({ ...data, [e.target.name]: e.target.value })
	}

	const handleSubmit = () => {
		console.log(data)
	}

	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={containerVariants}
			className="max-w-md mx-auto p-6 shadow-lg rounded-xl"
		>
			<motion.h1
				variants={itemVariants}
				className="text-6xl font-bold mb-6 text-center"
			>
				{`Let's`}
				<span className='text-primary'>
					{` Discuss`}
				</span>
			</motion.h1>

			<motion.form
				className="flex flex-col gap-4"
				onSubmit={(e) => e.preventDefault()}
			>
				<motion.input
					variants={itemVariants}
					type="text"
					name="name"
					placeholder="Name"
					onChange={handleChange}
					className="py-2 px-4 rounded-xl border dark:bg-dark-background-secondary dark:border-gray-700"
				/>
				<motion.div className='w-full'
					variants={itemVariants}
				>
					<input
						type="email"
						name="email"
						placeholder="Email"
						onChange={handleChange}
						className="py-2 px-4 w-full rounded-xl border dark:bg-dark-background-secondary dark:border-gray-700"
					/>
					<div className='text-sm pl-1 text-gray-400 font-semibold'>
						Not gonna spam you, I promise.😇
					</div>
				</motion.div>
				<motion.textarea
					variants={itemVariants}
					placeholder="Message"
					name="message"
					onChange={handleChange}
					className="py-2 px-4 rounded-xl border h-32 dark:bg-dark-background-secondary dark:border-gray-700"
				/>
				<motion.button
					variants={itemVariants}
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
					type="submit"
					disabled={isSubmitBtnDisabled}
					className="bg-primary border border-primary text-white py-2 px-4 rounded-xl hover:bg-primary/90 transition-colors"
					onClick={handleSubmit}
				>
					Submit
				</motion.button>
			</motion.form>
		</motion.div>
	)
}