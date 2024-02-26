"use client"
import ParseHtml from "@/components/ParseHtml";
import RightSideBar from "@/components/RightSideBar";
/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import researchAgent from "@/lib/action/researchAgent";
import { useState } from "react";
export default function Home() {
  const [tutorials, setTutorials] = useState<any>(undefined);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [activeTutId, setActiveTutId] = useState(0);
  const [isCheck, setIsCheck] = useState(false);
  const generateTutorial = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const topic = form.topic.value;

    setIsGenerating(true);
    setIsGenerated(false);
    const res = await researchAgent({ topic })
    setTutorials(JSON.parse(res!));
    console.log(JSON.parse(res!));
    setIsGenerating(false);
    setIsGenerated(true);
  }
  let tutorial;
  let tutorialDetail;
  if (tutorials) {
    tutorial = tutorials?.tutorials[activeTutId];
    tutorialDetail = tutorials?.tutorials[activeTutId]?.tutorial;
  }
  const formattedCode = tutorialDetail?.exampleCode?.code?.code?.join("\n");
  function handleQuiz(e: any) {
    e.preventDefault();
    setIsCheck(true);
  }
  return (
    <>
      {
        isGenerated && !isGenerating ? (
          <div className="relative flex">
            <div className="flex w-full flex-col gap-5 p-5">
              <section className="flex flex-col gap-2">
                <h1 className="py-2 text-center text-[28px] font-bold capitalize">
                  {tutorial.title}
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
              <section>
                {tutorialDetail.sources?.length > 0 &&
                  <h1 className="h2-bold text-left">Sources</h1>
                }
                <ul className="my-3 list-disc pl-6 leading-loose">
                  {tutorialDetail.sources.map((source: any) => {
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

            <div className="" >

              <RightSideBar setIsCheck={setIsCheck} activeId={activeTutId} setActiveTutId={setActiveTutId} title={tutorials.input} learningPath={tutorials.tutorials} />
            </div>
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center">
            <form onSubmit={(e) => generateTutorial(e)} className="flex items-center justify-center gap-2">
              <Input type="text" name="topic" className="max-w-[300px] rounded-md border border-blue-500 bg-blue-100/50 shadow-sm duration-300 focus:bg-gray-50 focus-visible:ring-transparent" />
              <Button className="bg-blue-600 hover:bg-blue-500" disabled={isGenerating}>
                {
                  isGenerating ? (
                    <>
                      <svg aria-hidden="true" role="status" className="me-3 inline size-4 animate-spin text-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                      </svg>
                      Generating...
                    </>
                  ) : (
                    <>
                      Generate
                    </>
                  )
                }
              </Button>
            </form>
          </div>
        )
      }
    </>
  );
}
