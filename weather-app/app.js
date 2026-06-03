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
1. The purpose of package.json is to hold details about the git project. It includes the folder, version number,
   a description, debug information, and a list of dependencies which are modules the program uses to run. This list
   of dependencies is key as anyone who downloads the repo can find out which dependencies are used to download them locally.
   Without it, git uploads would be packaged with the installed dependencies which would greatly increase the project size.

2. In a git project, node_modules is the folder created whenever you install a module. It contains all the data for the modules
   used by your program. As a program swells in size, the number of dependencies and thus the data inside node_modules can 
   increase drastically. As a result the file size of the whole project increases. Luckily as described above, pacakge.json
   includes a list of all dependencies installed in your project and the version of each dependency. This allows the developer
   to use a .gitignore file to exclude node_modules from being uploaded with the main project files. This way, the file size is
   reduced, and should another developer download your repository, they will know exactly which dependencies they need to install
   by looking at your package.json file.

3. The npm install console command is essential in collaborative work. As mentioned above, due to the chance of an increase in
   file size from uploading the node_modules folder, it is standard practice to omit it from uploads. But collaborators, should
   they need to fork your repository to add their own functions, will need the same module depdencies as your program. To bypass
   this, collaborators, can look at the project's package.json file which will list under dependencies all modules used. The
   collaborator can then use npm install <module name> to install the needed modules so the program will work as intended.


*/
