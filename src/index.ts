import "dotenv/config";
import fsp from "fs/promises";
import dayjs from "dayjs";
import { input } from "@inquirer/prompts";
import { model } from "./model";
import { template } from "./template";

main();

async function main() {
  let loop = true;
  while (loop) {
    try {
      const question = await input({ message: "Ask a coding question:" });
      switch (question) {
        default:
          const prompt = await template.format({ question });
          const output = await model.call(prompt);
          if (!output) {
            console.log("Hmmm...try rephrasing the question");
            break;
          }
          console.log(output);
          write(question, output);
          break;

        case "":
          console.log("Please enter a coding question\n");
          break;

        case "q":
        case "quit":
        case "exit":
          loop = false;
          console.log("exiting...goodbye!");
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

async function write(question: string, output: string) {
  try {
    await fsp.access("history", fsp.constants.F_OK);
  } catch (error) {
    await fsp.mkdir("history");
  }
  const time = dayjs().format("YYYY_MM_DD-HH_mm_sss");
  const path = `history/question_${time}.md`;

  await fsp.appendFile(path, `# ${question}\n\n`);
  await fsp.appendFile(path, output);
}
