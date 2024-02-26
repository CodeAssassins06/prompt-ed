"use server";
import fs from "fs";
import { AgentExecutor } from "langchain/agents";
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";

import { getRunnableAgent, getSearchTool } from "./tools";
import { responseSchema } from "./schemas";
interface Props {
  topic: string;
  openAiKey?: string;
  tavilyKey?: string;
  modelName?: string;
}

const researchAgent = async ({ topic }: Props) => {
  try {
    const searchTool = getSearchTool();
    const prompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        "You are a helpful assistant who will provide a a comprehensive learning roadmap for understanding {input}. Please list the key topics in a logical order with the title and detail as described in the response schema, starting from the foundations and progressing towards advanced concepts. which will contain different topic titles and its details as described in the response schema which u must follow. You must give me a complete list of topics in learning path instead of a single topic and it should be in the json format. You should give the response that synchronize all the schema items. You must always call one of the provided tools.",
      ],
      ["user", "{input}"],
      new MessagesPlaceholder("agent_scratchpad"),
    ]);
    // const runnableAgent=getRunnableAgent(modelName,openAiKey,tavilyKey,roadmapPrompt,roadMapSchema);
    const runnableAgent = getRunnableAgent(prompt, responseSchema);
    const executor = AgentExecutor.fromAgentAndTools({
      agent: runnableAgent,
      tools: [searchTool],
    });
    /** Call invoke on the agent */
    const res = await executor.invoke({
      input: topic,
    });
    console.log({
      res,
    });
    fs.writeFileSync("res.json", JSON.stringify(res));
    return JSON.stringify(res);
  } catch (error) {
    console.log(error);
  }
};

export default researchAgent;
