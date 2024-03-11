"use client"
import React, { useState } from 'react'
import { Button } from './ui/button';
import { Input } from './ui/input';

function KnowledgeTest(testYourKnowledge: any) {
    const [isCheck, setIsCheck] = useState(false);
    function handleQuiz(e: any) {
        e.preventDefault();
        setIsCheck(true);
    }
    return (
        <>
            {testYourKnowledge?.length > 0 &&
                <form onSubmit={(e) => handleQuiz(e)} className="flex flex-col gap-6">
                    <h1 className="h3-bold">Test Your Knowledge</h1>
                    {testYourKnowledge.map((testObject: any) => {
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
                </form>}
        </>
    )
}

export default KnowledgeTest