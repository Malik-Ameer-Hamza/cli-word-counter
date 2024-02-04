#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
import { createSpinner } from "nanospinner";
// Function to create a delay for visual effects
let wait = (time = 2000) => new Promise((r) => setTimeout(r, time));
// Function to display a visual banner with the app title and description
let displayBanner = async () => {
    showBanner("Word Counter", "You can count number of words by pasting or writing below.");
};
// Function to prompt the user for a paragraph of text
let paragraph = async () => {
    let { userPara } = await inquirer.prompt({
        name: "userPara",
        type: "input",
        message: chalk.rgb(102, 102, 255)("Enter Paragraph: ")
    });
    let input = await userPara;
    return input;
};
// Function to count the words and letters in the given text
let wordsAndLettersCounter = async (para) => {
    let words = para.split(" ").filter((val) => val !== "");
    let letters = words.join("");
    let spinner = createSpinner("counting...").start();
    await wait();
    spinner.success();
    console.log(`Total Words : ${words.length}`);
    console.log(`Total Letters : ${letters.length}`);
};
// Function to confirm if the user wants to exit the application
let confirmExit = async () => {
    let { userExit } = await inquirer.prompt({
        name: "userExit",
        type: "confirm",
        message: "Do you want to exit?"
    });
    return userExit;
};
// Main function 
(async () => {
    await displayBanner();
    await wait();
    while (true) {
        let input = await paragraph();
        await wordsAndLettersCounter(input);
        let exit = await confirmExit();
        if (exit) {
            console.log(`Thank you for using counter app. Hope you like it.`);
            break;
        }
        ;
    }
    ;
})();
