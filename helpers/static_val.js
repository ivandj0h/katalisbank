import fs from "fs";
import figlet from "figlet";
import chalk from "chalk";
import PromptSync from "prompt-sync";

const staticWelcomeScreenValue = () => {
  console.log(
    chalk.whiteBright(
      figlet.textSync("dkatalis bank", {
        horizontalLayout: "default",
        verticalLayout: "default",
      })
    )
  );
};

const staticWelcomeScreenValueTwo = () => {
  console.log(`Welcome`);
};

export { staticWelcomeScreenValue, staticWelcomeScreenValueTwo };
