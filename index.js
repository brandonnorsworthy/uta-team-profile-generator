const inquirer = require("inquirer")
const jest = require("jest")
const fs = require("fs")

//?generate a webpage that displays my teams info (emails and github profiles)
//HTML file is generated that displays a nicely formatted team roster based on user input

class Employee {
    constructor(employeeName, id, email) {
        this.employeeName = employeeName;
        this.id = id;
        this.email = email;
    }
}

//require employee
class Manager extends Employee {
    //manager name, id, email, office
    constructor(employeeName, id, email, officeNumber) {
        super(employeeName, id, email);
        this.officeNumber = officeNumber;
    }
}

class Engineer extends Employee {
    //engineer name, id, email, github
    constructor(employeeName, id, email, githubUsername) {
        super(employeeName, id, email);
        this.githubUsername = githubUsername;
    }
}

class Intern extends Employee {
    //intern name, id, email, school
    constructor(employeeName, id, email, school) {
        super(employeeName, id, email);
        this.school = school;
    }
}

jack = new Manager("jack", 584968, "jack@work.com", 169)
brandon = new Engineer("brandon", 156615, "brandon@work.com", "brandonnorsworthy")
zach = new Engineer("zach", 156515, "zach@work.com", "zach1234")
willy = new Intern("willy", 564648, "willy@work.com", "University of Texas")

console.log("1", jack)
console.log("2", brandon)
console.log("3", zach)
console.log("4", willy)

//!js
    //?start the application
    //am prompted to enter the team manager’s name, employee ID, email address, and office number
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