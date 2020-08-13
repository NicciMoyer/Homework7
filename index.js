var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown.js")

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project's title?"
    },
    {
      type: "input",
      name: "author",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "description",
      message: "Briefly describe your project:"
    },
    {
      type: "input",
      name: "contents",
      message: "Insert your table of contents:"
    },
    {
      type: "input",
      name: "installation",
      message: "What does the user need to know to install this application?"
    },
    {
      type: "input",
      name: "usage",
      message: "What does the user need to know to use this program?"
    },
    {
      type: "list",
      name: "license",
      message: "Which license do you have?",
      choices: ["Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        "BSD 2-clause 'Simplified' License",
        "BSD 3-clause 'New' or 'Reserved' License",
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v2.1",
        "Mozilla Public License 2.0",
        "The Unilicense"
      ]
    },
    {
      type: "input",
      name: "contributors",
      message: "Who has contributed to this project?"
    },
    {
      type: "input",
      name: "tests",
      message: "How has this been tested?"
    },
    {
      type: "input",
      name: "questions",
      message: "Where should the user direct their questions?"
    },

  ])
  .then(function (data) {

    fs.writeFile("README.md", generateMarkdown(data), function (err) {
      if (err) {
        return console.log(ERROR);
      }
      console.log("Success!");
    });
  });
