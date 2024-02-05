"use client"
/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import researchAgent from "@/lib/action/researchAgent";
export default function Home() {
  const generateTutorial = async () => {
    const res = await researchAgent({ topic: "Nodejs" })
    console.log(res);
  }
  return (
    <>
      <div className="h-[1000px]">
        <Button onClick={generateTutorial}>
          Generate
        </Button>
      </div>
    </>
  );
}
