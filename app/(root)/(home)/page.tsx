import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import StarsCanvas from '@/components/canvas/StarsCanvas'
import React from 'react'

const page = () => {
    return (
        <div className='background-light700_dark300  relative z-0'>
            <div className='bg-cover bg-center bg-no-repeat'>
                <Hero />
            </div>
            <About />
            <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
            </div>
        </div>
    )
}

export default page