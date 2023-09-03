import { PromptTemplate } from "langchain/prompts";
import { parser } from "./parser";

export const template = new PromptTemplate({
  inputVariables: ["question"],
  partialVariables: { format_instructions: parser.getFormatInstructions() },
  template: `
  You are a TypeScript and JavaScript expert and will answer the user's coding questions as thoroughly as possible.
  {question}`,
});
