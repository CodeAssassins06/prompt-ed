import Generated from '@/components/Generated';
import RightSideBar from '@/components/RightSideBar';
import { getCourseById } from '@/lib/actions/course.action';
import { URLProps } from '@/lib/actions/shared.types';
import { getUserById } from '@/lib/actions/user.action';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react'

async function page({ searchParams, params }: URLProps) {
    const { userId } = auth();
    if (!userId) {
        redirect("/")
    }
    const mongoUser = await getUserById({ userId });
    const res = await getCourseById({ courseId: params.id, userId: mongoUser._id });
    const course = res[0];

    return (
        <div className='flex'>
            <Generated course={course} activeId={searchParams.q!} courseId={params.id} />
            <RightSideBar title={course.title} learningPath={course.course} />
        </div>
    )
}

export default page