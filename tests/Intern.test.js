//Require Intern
const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        test("Intern class contains name, id, email, school", () => {
            //create test on Intern class
            const obj = new Intern();

            expect("employeeName" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("school" in obj).toEqual(true);
        })

        test("Intern class contains name, id, email, school", () => {
            //test to see if you can set school using our constructor
            const test = "teststring"
            const obj = new Intern("name", "id", "email", test);

            expect(obj.school).toEqual(test);
        })

        test("Intern class contains name, id, email, school", () => {
            //test to see if class name returns "Intern"
            const obj = new Intern();

            expect(obj.constructor.name).toEqual("Intern");
        })
    })
});