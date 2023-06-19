// TODO: Include packages needed for this application

// External packages
const inquirer = require('inquirer');
const fs = require('fs');

// Internal module 
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// const questions = [];
const questions =   [{
            type: 'input',
            message: 'What is the Project Title?',
            name: 'Title'
        },
        {
            type: 'input',
            message: 'What is the project about? Detailed description.',
            name: 'Description',
        },
        {
            type: 'input',
            message: 'What does the user need to install to run this app? (ie..dependencies)?',
            name: 'Installation',
        },
        {
            type: 'input',
            message: 'How is the app used? Give Instructions.',
            name: 'Usage',
        },
        {
            type: 'input',
            message: 'If applicable, list contributions to this project.',
            name: 'Contributing',
        },
        {
            type: 'input',
            message: 'What command are needed to test this app?',
            name: 'Tests',
        },
        {
            type: 'list',
            message: "Choose a license for your project",
            choices: ['Apache 2.0', 'Boost Software License 1.0', 'Eclipse Publice License 1.0', 'GNU GPLv3', 'GNU AGPLv3', 'the MIT License','The Unlicense' ],
            name: 'license',
        }
    ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if(err) {
            return console.log(err)
        } else {
            console.log("Success! Your README.md file has been generated")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generateMarkdown(data));
            console.log(data)

        })
}

// Function call to initialize app
init();
