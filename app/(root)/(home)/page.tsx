import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import StarsCanvas from '@/components/canvas/StarsCanvas'
import React from 'react'

const page = () => {
    return (
        <div className='bg-primary relative z-0'>
            <div className='bg-hero-pattern bg-cover bg-center bg-no-repeat'>
                <Hero />
            </div>
            <About />
            <Experience />
            <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
            </div>
        </div>
    )
}

export default page