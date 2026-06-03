import yargs from "yargs";
import {hideBin} from "yargs/helpers";
import chalk from "chalk";

const weather = {
    "los angeles": `The weather in Los Angeles is ${chalk.yellow.bold("77")} and ${chalk.overline.underline.grey("partly cloudy")}!`,
    "chicago": `The weather in Chicago is ${chalk.green.bold("61")} and ${chalk.overline.underline.grey("partly cloudy")}!`,
    "st. louis": `The weather in St. Louis is ${chalk.bold.red("84")} and ${chalk.overline.underline.yellow("sunny")}!`,
    "denver": `The weather in Denver is ${chalk.bold.yellow("78")} and ${chalk.overline.underline.grey("mostly cloudy")}!`,
    "seattle": `The weather in Seattle is ${chalk.bold.green("69")} and ${chalk.overline.underline.blue("rainy")}! `,
    "houston": `The weather in Houston is ${chalk.bold.yellow("74")} and ${chalk.overline.underline.yellowBright("stormy")}! `,
    "new york": `The weather in New York is ${chalk.bold.green("63")} and ${chalk.overline.underline.green("clear")}!`

}

const argv = yargs(hideBin(process.argv)).argv
const city = argv.city || "Unknwon City";
console.log(weather[city.toLowerCase()]);

/*
The purpose of package.json is to hold details about the git project. It includes the folder, version number,
a description, debug information, and a list of dependencies which are modules the program uses to run. This list
of dependencies is key as anyone who downloads the repo can find out which dependencies are used to download them locally.
Without it, git uploads would have to be packages with the installed dependencies which would greatly increase their size.
*/
