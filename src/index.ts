import "dotenv/config";
import fsp from "fs/promises";
import dayjs from "dayjs";
import { input } from "@inquirer/prompts";
import { model } from "./model";
import { template } from "./template";

main();

async function main() {
  try {
    await fsp.access("history", fsp.constants.F_OK);
  } catch (error) {
    console.log(error);
    await fsp.mkdir("history");
  }

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

          const path = `history/question_${dayjs().format(
            "YYYY_MM_DD-HH_mm_sss"
          )}.md`;
          await fsp.writeFile(path, output);
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
