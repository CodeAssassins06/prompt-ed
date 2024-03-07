import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import LandingNavbar from '@/components/LandingNavbar/LandingNavbar'
import StarsCanvas from '@/components/canvas/StarsCanvas'
import React from 'react'

const page = () => {
    return (
        <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-center bg-no-repeat'>

                <LandingNavbar />
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