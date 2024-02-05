import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='flex h-10'>
            <Link href="/dashboard" className='rounded bg-blue-500 p-2 text-white duration-300 hover:bg-blue-500/90'>
                Go to dashboard
            </Link>
        </div>
    )
}

export default page