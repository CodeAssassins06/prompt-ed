/* eslint-disable camelcase */
import { TavilySearchAPIRetriever } from "@langchain/community/retrievers/tavily_search_api";
import { DynamicTool } from "@langchain/community/tools/dynamic";
import { ChatOpenAI } from "@langchain/openai";
import { AgentFinish, AgentStep } from "langchain/agents";
import { FunctionsAgentAction } from "langchain/agents/openai/output_parser";
import { RunnableSequence } from "@langchain/core/runnables";
import { AIMessage, BaseMessage, FunctionMessage } from "@langchain/core/messages";
import zodToJsonSchema from "zod-to-json-schema";
import { convertToOpenAIFunction } from "@langchain/core/utils/function_calling";

function getSearchTool(tavilyKey?: string) {
  return new DynamicTool({
    name: "web-search-tool",
    description: "Tool for getting the latest information from the web",
    func: async (searchQuery: string, runManager) => {
      const retriever = new TavilySearchAPIRetriever({ apiKey: tavilyKey !== "" ? process.env.TAVLY_SEARCH_API : tavilyKey });
      const docs = await retriever.invoke(
        searchQuery,
        runManager?.getChild()
      );
      return docs.map((doc) => doc.pageContent).join("\n-----\n");
    },
  });
}
function getOpenAiLLM(modelName?: string, openAiKey?: string) {
  return new ChatOpenAI({
    modelName: modelName === "" ? "gpt-4-1106-preview" : modelName,
    openAIApiKey: openAiKey === "" ? process.env.OPENAI_API_KEY : openAiKey
  });
}
const structuredOutputParser = (
  message: AIMessage
): FunctionsAgentAction | AgentFinish => {
  if (message.content && typeof message.content !== "string") {
    throw new Error("This agent cannot parse non-string model responses.");
  }
  if (message.additional_kwargs.function_call) {
    const { function_call } = message.additional_kwargs;
    try {
      const toolInput = function_call.arguments
        ? JSON.parse(function_call.arguments)
        : {};
      // If the function call name is `response` then we know it's used our final
      // response function and can return an instance of `AgentFinish`
      if (function_call.name === "response") {
        return { returnValues: { ...toolInput }, log: message.content };
      }
      return {
        tool: function_call.name,
        toolInput,
        log: `Invoking "${function_call.name}" with ${function_call.arguments ?? "{}"
          }\n${message.content}`,
        messageLog: [message],
      };
    } catch (error) {
      throw new Error(
        `Failed to parse function arguments from chat model response. Text: "${function_call.arguments}". ${error}`
      );
    }
  } else {
    return {
      returnValues: { output: message.content },
      log: message.content,
    };
  }
};
function getRunnableAgent(prompt: any, responseSchema: any, modelName?: any, openAiKey?: any, tavilyKey?: any) {
  const llm = getOpenAiLLM(modelName, openAiKey)
  const searchTool = getSearchTool(tavilyKey);

  const formatAgentSteps = (steps: AgentStep[]): BaseMessage[] =>
    steps.flatMap(({ action, observation }) => {
      if ("messageLog" in action && action.messageLog !== undefined) {
        const log = action.messageLog as BaseMessage[];
        return log.concat(new FunctionMessage(observation, action.tool));
      } else {
        return [new AIMessage(action.log)];
      }
    });

  const responseOpenAIFunction = {
    name: "response",
    description: "Return the response to the user",
    parameters: zodToJsonSchema(responseSchema),
  };
  const llmWithTools = llm.bind({
    functions: [convertToOpenAIFunction(searchTool), responseOpenAIFunction],
  });
  /** Create the runnable */
  const runnableAgent = RunnableSequence.from<{
    input: string;
    steps: Array<AgentStep>;
  }>([
    {
      input: (i) => i.input,
      agent_scratchpad: (i) => formatAgentSteps(i.steps),
    },
    prompt,
    llmWithTools,
    structuredOutputParser,
  ]);
  return runnableAgent;
}
export {
  getSearchTool,
  getOpenAiLLM,
  getRunnableAgent
}