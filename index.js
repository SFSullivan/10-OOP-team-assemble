const inquirer = required('inquirer');

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



assembleTeam();
}