import { PromptTemplate } from 'langchain/prompts';
import { parser } from './parser';

export const template = new PromptTemplate({
  template:
    'You are a javascript expert and will answer the user’s coding questions thoroughly as possible.\n{format_instructions}\n{question}',
  inputVariables: ['question'],
  partialVariables: { format_instructions: parser.getFormatInstructions() },
});
