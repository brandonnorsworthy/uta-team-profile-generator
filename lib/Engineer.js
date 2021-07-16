const Employee = require("./Employee")
//require employee
class Engineer extends Employee {
    //engineer name, id, email, github
    constructor(employeeName, id, email, githubUsername) {
        super(employeeName, id, email);
        this.githubUsername = githubUsername;
    }
}

module.exports = Engineer