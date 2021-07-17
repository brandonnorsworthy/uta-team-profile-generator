const Employee = require("./Employee")
//require employee
class Engineer extends Employee {
    //engineer name, id, email, github
    constructor(employeeName, id, email, githubUsername) {
        super(employeeName, id, email);
        this.githubUsername = githubUsername;
    }
    getGithub() {
        return this.githubUsername;
    }
    getRole() {
        return this.constructor.name;
    }
}

module.exports = Engineer