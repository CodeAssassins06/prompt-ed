
import React from 'react'
import ParseHtml from './ParseHtml';
import { Button } from './ui/button';
import { Input } from './ui/input';

function Generated({ title, isCheck, setIsCheck, ...tutorialDetail }: any) {
    const formattedCode = tutorialDetail?.exampleCode?.code?.code?.join("\n");
    // const {}=tutorialDetail;
    console.log(tutorialDetail)
    function handleQuiz(e: any) {
        e.preventDefault();
        setIsCheck(true);
    }
    return (
        <div className="flex w-full flex-col gap-5">
            <section className="flex flex-col gap-2">
                <h1 className="py-2 text-center text-[28px] font-bold capitalize">
                    {title}
                </h1>
                <p className="text-justify font-[20px]">{tutorialDetail.moduleOverview}</p>
            </section>
            <section>
                <h1 className="h2-bold text-left">Learning Objectives</h1>
                <ul className="my-3 list-disc pl-6 leading-loose">
                    {tutorialDetail.learningObjectives.map((objective: any) => {
                        return (
                            <>
                                <li className="list-item">{objective}</li>
                            </>
                        );
                    })}
                </ul>
            </section>
            <section>
                <h1 className="h2-bold text-left">Prerequisites</h1>
                <ul className="my-3 list-disc pl-6 leading-loose">
                    {tutorialDetail.prerequisites.map((objective: any) => {
                        return (
                            <li className="list-item" key={objective}>
                                {objective}
                            </li>
                        );
                    })}
                </ul>
            </section>
            <section className="flex flex-col gap-5">
                {tutorialDetail.introduction.map((objective: any) => {
                    return (
                        <div className="" key={objective.heading}>
                            <h1 className="h3-bold mb-3">{objective.heading}</h1>
                            <p className="">{objective.paragraph}</p>
                        </div>
                    );
                })}
            </section>
            <section>
                <h1 className="h2-bold mb-4 text-left">
                    <span className=" capitalize">Code Sample</span>
                </h1>
                <p className="">{tutorialDetail.exampleCode.beforeCodeExplanation}</p>
                <ParseHtml
                    data={`<pre class="language-${tutorialDetail.exampleCode.code.languageName.toLowerCase()}"> <code>${formattedCode}</code></pre>`}
                />
                <p className="">{tutorialDetail.exampleCode.afterCodeExplanation}</p>
            </section>
            {
                tutorialDetail.testYourKnowledge?.length > 0 &&
                <form onSubmit={(e) => handleQuiz(e)} className="flex flex-col gap-6">
                    <h1 className="h3-bold">Test Your Knowledge</h1>
                    {tutorialDetail.testYourKnowledge.map((testObject: any) => {
                        return (
                            <div key={testObject.question}>
                                <h1 className="base-bold text-[14px]">{testObject.question}</h1>
                                <div className="ml-4">
                                    {testObject.options.map((option: any) => {
                                        return (
                                            <div
                                                className={`flex items-center gap-2 ${isCheck && option.includes(testObject.correctOption)
                                                    ? "text-green-600"
                                                    : ""
                                                    }`}
                                                key={option}
                                            >
                                                <Input
                                                    className="size-min font-[12px]"
                                                    type="radio"
                                                    name={testObject.question}
                                                    value={option}
                                                    id={option}
                                                />
                                                <label className="ml-2" htmlFor={option}>
                                                    {option}
                                                </label>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                    <Button
                        disabled={isCheck}
                        className=" w-fit"
                    >
                        Check Your Answers
                    </Button>
                </form>
            }
        </div>
    )
}

export default Generated