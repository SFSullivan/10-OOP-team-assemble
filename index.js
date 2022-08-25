
const inquirer = require('inquirer');

const Engineer = require('./library/Engineer');
const path = require('path');
const fs = require('fs');
const OUTPUT_DIR = path.resolve(__dirname, 'output');

const makeTeam = require('./src/html-template');

wholeTeam = [];

function runApp () {

    function assembleTeam () {
        inquirer.prompt([{
            type: 'list',
            message: 'What role of employee is joining the team?',
            name: 'addEmployee',
            choices: ['Engineer']
        }]).then(function (userInput) {
            switch(userInput.addEmployee) {
                case 'Engineer':
                    addEngineer();
                    break;

                default:
                    htmlBuilder();
            }
        })
    }

    function addEngineer() {
        inquirer.prompt ([
            {
                type: 'input',
                name: 'enName',
                message: 'What is the name of the engineer?'
            },
            {
                type: 'input',
                name: 'enId',
                message: 'What is their ID number?'
            },
            {
                type: 'input',
                name: 'enEmail',
                message: 'What is their email?'
            },
            {
                type: 'input',
                name: 'enGitHub',
                message: 'What is their Github profile?'
            }
        ])
    }

assembleTeam();

}

runApp();