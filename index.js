const inquirer = require("inquirer")
const jest = require("jest")
const fs = require("fs")

//?generate a webpage that displays my teams info (emails and github profiles)
//HTML file is generated that displays a nicely formatted team roster based on user input

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