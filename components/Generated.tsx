
import React from 'react'
import { getTutorial } from '@/lib/actions/researchAgent';
import { findCourseByIdAndUpdate } from '@/lib/actions/course.action';
import KnowledgeTest from './KnowledgeTest';
import Landing from './codeEditor/Landing';

async function Generated({ course, courseId, activeId }: any) {
    if (course.course[activeId].tutorial === undefined) {
        const newTutorial = await getTutorial({ topic: course.title });
        course.course[activeId].tutorial = JSON.parse(newTutorial!).tutorial;
        await findCourseByIdAndUpdate({ courseId, updatedData: course })
    }
    course = course.course[activeId];
    const formattedCode = course.tutorial?.exampleCode?.code?.code?.join("\n");

    return (
        <>
            <div className="flex w-full flex-col gap-5 overflow-y-scroll px-8 py-4">
                <section className="flex flex-col gap-2">
                    <h1 className="py-2 text-center text-[28px] font-bold capitalize">
                        {course.title}
                    </h1>
                    <p className="text-justify font-[20px]">{course.tutorial.moduleOverview}</p>
                </section>
                <section>
                    <h1 className="h2-bold text-left">Learning Objectives</h1>
                    <ul className="my-3 list-disc pl-6 leading-loose">
                        {course.tutorial.learningObjectives.map((objective: any) => {
                            return (
                                <>
                                    <li key={objective} className="list-item">{objective}</li>
                                </>
                            );
                        })}
                    </ul>
                </section>
                <section>
                    <h1 className="h2-bold text-left">Prerequisites</h1>
                    <ul className="my-3 list-disc pl-6 leading-loose">
                        {course.tutorial.prerequisites.map((objective: any) => {
                            return (
                                <li className="list-item" key={objective}>
                                    {objective}
                                </li>
                            );
                        })}
                    </ul>
                </section>
                <section className="flex flex-col gap-5">
                    {course.tutorial.introduction.map((topic: any) => {
                        return (
                            <div className="" key={topic.heading}>
                                <h1 className="h3-bold mb-3">{topic.heading}</h1>
                                <p className="">{topic.paragraph}</p>
                            </div>
                        );
                    })}
                </section>
                <section>
                    <h1 className="h2-bold mb-4 text-left">
                        <span className=" capitalize">Code Sample</span>
                    </h1>
                    <p className="">{course.tutorial.exampleCode.beforeCodeExplanation}</p>
                    <Landing codeInput={formattedCode} />

                    <p className="">{course.tutorial.exampleCode.afterCodeExplanation}</p>
                </section>
                <KnowledgeTest testYourKnowledge={course.tutorial.testYourKnowledge} />
                <section>
                    {course.tutorial.sources?.length > 0 &&
                        <h1 className="h2-bold text-left">Sources</h1>
                    }
                    <ul className="my-3 list-disc pl-6 leading-loose">
                        {course.tutorial.sources.map((source: any) => {
                            return (
                                <li className="list-item" key={source}>
                                    <a href={source} target="_blank" className="text-blue-800 hover:underline">
                                        {source}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </section>
            </div>

        </>
    )
}

export default Generated