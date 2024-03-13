import Generated from '@/components/Generated';
import SideBar from '@/components/sidebar/SideBar';
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
        <div className='background-light700_dark300 text-dark300_light700 flex h-screen pt-14'>
            <Generated course={course} activeId={searchParams.q!} courseId={params.id} />
            <div className="relative">
                <SideBar title={course.title} learningPath={course.course} />
            </div>
        </div>
    )
}

export default page