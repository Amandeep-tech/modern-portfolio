'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function ContactMe() {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

//   Child elements animation variants
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-md mx-auto p-6"
    >
      <motion.h1 
        variants={itemVariants}
        className="text-2xl font-bold mb-6 text-center"
      >
        Contact Me
      </motion.h1>
      
      <motion.form 
        className="flex flex-col gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <motion.input
          variants={itemVariants}
          type="text"
          placeholder="Name"
          className="p-2 rounded border"
        />
        <motion.input
          variants={itemVariants}
          type="email"
          placeholder="Email"
          className="p-2 rounded border"
        />
        <motion.textarea
          variants={itemVariants}
          placeholder="Message"
          className="p-2 rounded border h-32"
        />
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Submit
        </motion.button>
      </motion.form>
    </motion.div>
  )
}