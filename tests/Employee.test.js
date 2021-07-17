//require Employee
const Employee = require("../lib/Employee")

describe("Employee", () => {
    describe("Initialization", () => {
        // create test for employee 
        test('should return an object containing "employeeName, id, email" property when called with the "new" keyword', () => {
        const obj = new Employee();
        //employeeName, id, email
        expect("employeeName" in obj).toEqual(true);
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
      });
    });

    // test to see if type of new employee is an object
    describe("New Employee", () => {
        test('should become a object when use new employee', () => {
            const obj = new Employee();

            expect(typeof obj).toEqual("object")
        })
    })

    // test if can set name via constructor
    describe("New Employee", () => {
        test('should become a object when use new employee', () => {
            const test = "Bob"
            const obj = new Employee(test);

            expect(obj.employeeName).toEqual(test)
        })
    })

    // test if can set id via constructor
    describe("New Employee", () => {
        test('should become a object when use new employee', () => {
            const test = "1234"
            const obj = new Employee('name', test);

            expect(obj.id).toEqual(test)
        })
    })

    // test if can set email via constructor
    describe("New Employee", () => {
        test('should become a object when use new employee', () => {
            const test = "person@email.com"
            const obj = new Employee('email', 'id', test);

            expect(obj.email).toEqual(test)
        })
    })

    //test to see if class name returns "Employee"
    describe("New Employee", () => {
        test('should become a object when use new employee', () => {
            const obj = new Employee();

            expect(obj.constructor.name).toEqual("Employee")
        })
    })
});