const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateDynamicCards =  require('./lib/generateDynamicCards');
const generateHtml = require('./lib/generateHtml');

//?generate a webpage that displays my teams info (emails and github profiles)
//HTML file is generated that displays a nicely formatted team roster based on user input

const employeeQuestions = [ //questions that are uniform for all basic employees
    {
        type: 'input',
        message: (prompt) => prompt.role ? `Enter the ${prompt.role}'s name` : `Enter the Team Managers's name`,
        name: 'employeeName'
    },
    {
        type: 'input',
        message: (prompt) => prompt.role ? `Enter the ${prompt.role}'s employee ID` : `Enter the Team Managers's employee ID`,
        name: 'id'
    },
    {
        type: 'input',
        message: (prompt) => prompt.role ? `Enter the ${prompt.role}'s email address` : `Enter the Team Managers's email address`,
        name: 'email'
    },
]
let team = [] // array containing all team employee objects

function init(){
    //?start the application
    //am prompted to enter the team manager’s name, employee ID, email address, and office number
    inquirer
    .prompt([
        ...employeeQuestions,
        {
            type: 'input',
            message: `Enter the Team Managers's office number`,
            name: 'office'},
        //?enter the team manager’s name, employee ID, email address, and office number
        //presented with a menu with the option to add an engineer or an intern or to finish building my team
        {
            type: 'confirm',
            message: `Would you like to add another employee?`,
            name: 'newEmployee'
        },
        ])
    .then((value) => {
        team.push(new Manager(...Object.values(value)));
        value.newEmployee ? createEmployee() : createHtml();
    })
}

function createEmployee() {
    inquirer
    .prompt([
    {
        type: 'list',
        message: 'Is this new employee an Engineer or Intern?',
        name: 'role',
        choices: ['Engineer', 'Intern']
    },
    ...employeeQuestions,
    {
        //?select the engineer option
        //prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
        type: 'input',
        message: (prompt) => `Enter the ${prompt.role}'s github username`,
        when: (prompt) => prompt.role === 'Engineer',
        name: 'githubUsername'
    },
    {
        //?select the intern option
        //prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
        type: 'input',
        message: (prompt) => `Enter the ${prompt.role}'s school`,
        when: (prompt) => prompt.role === 'Intern',
        name: 'school'
    },
    {
        type:'confirm',
        message: `Would you like to add another employee?`,
        name: 'newEmployee'
    },
    ])
    .then((value) => {
        //?decide to finish building my team
        //exit the application, and the HTML is generated
        value.role == 'Engineer' ? team.push(new Engineer(value.employeeName, value.id, value.email, value.githubUsername))
        : value.role == 'Intern' ? team.push(new Intern(value.employeeName, value.id, value.email, value.school))
        : console.log("Error", value.role);

        value.newEmployee ? createEmployee() : createHtml();
    })
}

function createHtml() {
    let allTeamCardsStr = ``
    for (teamMember of team) {
        allTeamCardsStr += generateDynamicCards(teamMember);
    }
    writeToFile(generateHtml(allTeamCardsStr));
}

function writeToFile(htmlData) {
    fs.writeFile("index.html", htmlData, (error) =>
        error ? console.log("error occured while writing file") : console.log("successfully written to file")
    );
}

init()