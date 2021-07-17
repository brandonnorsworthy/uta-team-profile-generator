//require Engineer
const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
    describe("Initialization", () => {
        test("Engineer class contains name, id, email, github", () => {
            //create test on Engineer class
            const obj = new Engineer;

            expect("employeeName" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("githubUsername" in obj).toEqual(true);
        })

        test("Engineer class contains name, id, email, github", () => {
            //test to see if you can set github using our constructor
            const test = "teststring"
            const obj = new Engineer("name", "id", "email", test);

            expect(obj.githubUsername).toEqual(test);
        })

        test("Engineer class contains name, id, email, github", () => {
            //test to see if class name returns "Engineer"
            const obj = new Engineer();

            expect(obj.constructor.name).toEqual("Engineer");
        })
    })
})