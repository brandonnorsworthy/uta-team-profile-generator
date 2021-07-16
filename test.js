
employeeQuestions = [
    {type: 'input', message: "Enter the manager's name", name: 'name'},
    {type: 'input', message: "Enter the manager's employee ID", name: 'employee'},
    {type: 'input', message: "Enter the manager's email address", name: 'email'},
]

//!manager
inquirer
    .prompt([
    ...employeeQuestions,
    {type: 'input', message: "Enter the manager's office number", name: 'office'},
    ])

//! employees
inquirer
.prompt([
    {type: 'list', message: 'Is this new employee an Engineer or Intern?', name: 'role', choices: ['Engineer','Intern']},
    ...employeeQuestions,
    {type: 'input', message: "Enter the employee's github username", when: (list) => list.role == "Engineer", name: "github"},
    {type: 'input', message: "Enter the employee's school",when: (list) => list.role == "Intern", name: "school"},
    {type: 'confirm', message: "Would you like to add another employee?", name: "add"}
    ])