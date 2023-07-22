import { StructuredOutputParser } from 'langchain/output_parsers';

export const parser = StructuredOutputParser.fromNamesAndDescriptions({
  code: "JavaScript code that answers the user's question",
  explanation: 'detailed explanation of the example code provided',
});
