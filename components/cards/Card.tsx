
import Link from 'next/link';
import React from 'react'

interface Props {
    title: string;
    course: [];
    id: string;
}

function Card({ title, course, id }: Props) {
    return (
        <Link href={`/courses/${id}?q=0`} className='background-light800_dark400 max-h-[260px] max-w-[300px] rounded p-6 shadow-xl '>

            <h2 className='h3-bold mb-4 line-clamp-1 text-center capitalize text-dark-300  dark:text-light-700'>{title}</h2>
            {
                course.length > 0 && (
                    <ul>
                        {
                            course.slice(0, 6).map((tut: any) => (
                                <li key={tut.title}>
                                    <p className='line-clamp-1 text-light-500'>
                                        {tut.title}
                                    </p>
                                </li>
                            )
                            )
                        }
                    </ul>
                )
            }
        </Link>
    )
}

export default Card