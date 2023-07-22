import 'dotenv/config';
import { input } from '@inquirer/prompts';
import { model } from './model';
import { parser } from './parser';
import { template } from './template';

(async () => {
  let loop = true;
  while (loop) {
    try {
      const question = await input({ message: 'Ask a coding question:' });
      switch (question) {
        default:
          const prompt = await template.format({ question });
          const output = await model.call(prompt);
          const result = await parser.parse(output);
          console.log(result);
          break;

        case '':
          console.log('Please enter a coding question\n');
          break;

        case 'q':
        case 'quit':
        case 'exit':
          loop = false;
          console.log('exiting...goodbye!');
      }
    } catch (error) {
      console.log(error);
    }
  }
})();
