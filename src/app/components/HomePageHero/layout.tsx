import React from 'react'

export default function HomePageHeroLayout({
    children
} : {
    children: React.ReactNode
}) {
    return (
        <div className='h-screen'>
            {children}
        </div>
    )
}