//require Employee
const Employee = require("../lib/Employee");

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

            expect(typeof obj).toEqual("object");
        })
    })

    // test if can set name via constructor
    describe("Employee Name", () => {
        test('should set employee name equal to 1st param', () => {
            const test = "Bob";
            const obj = new Employee(test);

            expect(obj.employeeName).toEqual(test);
        })
    })

    // test if can set id via constructor
    describe("Employee Id", () => {
        test('should set employee id equal to 2nd param', () => {
            const test = "1234";
            const obj = new Employee('name', test);

            expect(obj.id).toEqual(test);
        })
    })

    // test if can set email via constructor
    describe("Employee Email", () => {
        test('should set employee email equal to 3rd param', () => {
            const test = "person@email.com";
            const obj = new Employee('email', 'id', test);

            expect(obj.email).toEqual(test);
        })
    })

    //test to see if class name returns "Employee"
    describe("Employee Class Name", () => {
        test('should become a object when use new employee', () => {
            const obj = new Employee();

            expect(obj.constructor.name).toEqual("Employee");
        })
    })

    //test to see if getName() returns name
    describe("Get Employee name", () => {
        test('should return employee name when call getName()', () => {
            const test = "Bobby"
            const obj = new Employee(test);

            expect(obj.getName()).toEqual(test);
        })
    })

    //test to see if getId() returns id
    describe("Get Employee id", () => {
        test('should return employee id when call getId()', () => {
            const test = "123456"
            const obj = new Employee("name", test);

            expect(obj.getId()).toEqual(test);
        })
    })

    //test to see if getEmail() returns email
    describe("Get Employee email", () => {
        test('should return employee email when call getEmail()', () => {
            const test = "email@email.com"
            const obj = new Employee("name", "id", test);

            expect(obj.getEmail()).toEqual(test);
        })
    })

    //test to see if getRole() returns role
    describe("Get Employee role name", () => {
        test('should return employee role when call getRole()', () => {
            const obj = new Employee();

            expect(obj.getRole()).toEqual("Employee");
        })
    })
});