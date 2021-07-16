const inquirer = require("inquirer")
const jest = require("jest")
const fs = require("fs")

const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")

//?generate a webpage that displays my teams info (emails and github profiles)
//HTML file is generated that displays a nicely formatted team roster based on user input

// jack = new Manager("jack", 584968, "jack@work.com", 169)
// brandon = new Engineer("brandon", 156615, "brandon@work.com", "brandonnorsworthy")
// zach = new Engineer("zach", 156515, "zach@work.com", "zach1234")
// willy = new Intern("willy", 564648, "willy@work.com", "University of Texas")

// console.log("1", jack)
// console.log("2", brandon)
// console.log("3", zach)
// console.log("4", willy)

const employeeQuestions = [ //questions that are uniform for all basic employees
    {type: 'input', message: "Enter the Team Manager's name", name: 'employeeName'},
    {type: 'input', message: "Enter the Team Manager's employee ID", name: 'id'},
    {type: 'input', message: "Enter the Team Manager's email address", name: 'email'},
]

let team = []

function init(){
    //?start the application
    //am prompted to enter the team manager’s name, employee ID, email address, and office number
    inquirer
    .prompt([
        ...employeeQuestions,
        {type: 'input', message: "Enter the manager's office number", name: 'office'},
        ])
    .then((value) => {
        team.push(new Manager(...Object.values(value)))
        console.log(team)
    })
}

init()

//!js
    //?enter the team manager’s name, employee ID, email address, and office number
    //presented with a menu with the option to add an engineer or an intern or to finish building my team
    //?select the engineer option
    //prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
    //?select the intern option
    //prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
    //?decide to finish building my team
    //exit the application, and the HTML is generated

//!html
    //?clickable email address
    //default email program opens and populates the TO field of the email with the address
    //?clickable github username
    //GitHub profile opens in a new tab