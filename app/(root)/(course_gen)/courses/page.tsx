import React from 'react'
import { getAllCourses } from '@/lib/actions/course.action'
import { getUserById } from '@/lib/actions/user.action';
import { auth } from '@clerk/nextjs';
import Card from '@/components/cards/Card';
async function Page() {
    const { userId } = auth();
    if (!userId) return;
    const mongoUser = await getUserById({ userId });
    const courses = await getAllCourses({ userId: mongoUser._id });
    return (
        <div className='background-light700_dark300 flex h-full flex-wrap gap-4 px-6 pt-20'>
            {courses.map((course: any) => (
                <Card key={course._id} title={course.title} course={course.course} id={course._id} />
            ))}
        </div>
    )
}

export default Page


