#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: chalk.blue("Please guess a number between 1 to 6:"),
    },
]);
if (answer.UserGuessedNumber === randomNumber) {
    console.log(chalk.magenta.bold.italic("Congratulation! you guess a right number"));
}
else {
    console.log(chalk.red(`You guess a wrong number, Right number is ${chalk.green(randomNumber)}`));
}
