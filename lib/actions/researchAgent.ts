"use server";
import fs from "fs";
import { AgentExecutor } from "langchain/agents";

import { getRunnableAgent, getSearchTool } from "../tools";
import { tutorialSchema, roadMapSchema } from "../schemas";
import { roadMapPrompt, tutorialPrompt } from "../prompts";
interface Props {
  topic: string;
  openAiKey?: string;
  tavilyKey?: string;
  modelName?: string;
}

const getRoadmap = async ({ topic }: Props) => {
  try {
    const searchTool = getSearchTool();

    // const runnableAgent=getRunnableAgent(modelName,openAiKey,tavilyKey,roadmapPrompt,roadMapSchema);
    const runnableAgentRoadmap = getRunnableAgent(roadMapPrompt, roadMapSchema);
    const executorRoadmap = AgentExecutor.fromAgentAndTools({
      agent: runnableAgentRoadmap,
      tools: [searchTool],
    });
    const res = await executorRoadmap.invoke({
      input: topic,
    });
    console.log({
      res,
    });
    return JSON.stringify(res);
  } catch (error) {
    console.log(error);
  }
};
export const getTutorial = async ({ topic }: Props) => {
  try {
    const searchTool = getSearchTool();

    // const runnableAgent=getRunnableAgent(modelName,openAiKey,tavilyKey,roadmapPrompt,roadMapSchema);
    const runnableAgentRoadmap = getRunnableAgent(
      tutorialPrompt,
      tutorialSchema
    );
    const executorRoadmap = AgentExecutor.fromAgentAndTools({
      agent: runnableAgentRoadmap,
      tools: [searchTool],
    });
    const res = await executorRoadmap.invoke({
      input: topic,
    });
    console.log({
      res,
    });
    return JSON.stringify(res);
  } catch (error) {
    console.log(error);
  }
};
export default getRoadmap;
