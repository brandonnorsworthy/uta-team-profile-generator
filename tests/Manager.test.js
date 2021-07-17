//require Manager
const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        test("Manager class contains name, id, email, officeNumber", () => {
            //create test on manager class
            const obj = new Manager();

            expect("employeeName" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("officeNumber" in obj).toEqual(true);
        })

        test("Manager class contains name, id, email, officeNumber", () => {
            //test to see if you can set officeNumber using our constructor
            const test = "teststring"
            const obj = new Manager("name", "id", "email", test);

            expect(obj.officeNumber).toEqual(test);
        })

        test("Manager class contains name, id, email, officeNumber", () => {
            //test to see if class name returns "Manager"
            const obj = new Manager();

            expect(obj.constructor.name).toEqual("Manager");
        })
    })
});