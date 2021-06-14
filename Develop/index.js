// TODO: Include packages needed for this application
var inquirer = require("inquirer");
const fs = require("fs");
const makeReadMe = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "whats the name of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What does your project do?",
    name: "Description",
  },
  {
    type: "input",
    message: "How do i install your project?",
    name: "Installation",
  },
  {
    type: "input",
    message: "Whats the use of your project?",
    name: "Usage",
  },
  {
    type: "input",
    message: "who contributed to your project?",
    name: "Contribution",
  },
  {
    type: "input",
    message: "Did you run any test for your project?",
    name: "Tests",
  },
  {
    type: "input",
    message: "Whats the hub?",
    name: "Github",
  },
  {
    type: "input",
    message: "whats your email?",
    name: "Email",
  },
  {
    type: "list",
    message: "What licenses are you using?",
    name: "License",
    choices: [
      "MIT",
      "Mozilla Public License 2.0",
      "Apache 2.0",
      "Boost Software License 1.0",
      "No license",
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (error) {
    if (error) return consoleLog(error);
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) => writeToFile("readme.md", makeReadMe(response)));
}

// Function call to initialize app
init();
