import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";

const roadMapPrompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    "You are a helpful assistant who will provide a comprehensive learning roadmap for understanding {input} in a form of list. Please create a roadmap for the {input}. The roadmap should include a list of key topics that progressively break down the overall subject. Each topic title should be concise and descriptive. . Must provide your answer in the formate of response schema formate instead of giving the output in a single string. Output must be in json formate. You must always call one of the provided tools",
  ],
  ["user", "{input}"],
  new MessagesPlaceholder("agent_scratchpad"),
]);
const tutorialPrompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    "You are a helpful assistant who will provide aYou are a helpful assistant who will provide a tutorial about the given topic. You should give the response that synchronize all the schema items. You must always call one of the provided tools.",
  ],
  ["user", "{input}"],
  new MessagesPlaceholder("agent_scratchpad"),
]);
export { tutorialPrompt, roadMapPrompt };
