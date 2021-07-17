//Require Intern
const Intern = require("../lib/Intern");

describe("Intern", () => {
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

    test('should return intern school when call getSchool()', () => {
        const test = "University of Testing"
        const obj = new Intern("name", "id", "email", test);

        expect(obj.getSchool()).toEqual(test);
    })

    //test to see if getRole() returns role
    test('should return Intern role when call getRole()', () => {
        const obj = new Intern();

        expect(obj.getRole()).toEqual("Intern");
    })
});