//require Engineer
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    test("Engineer class contains name, id, email, github", () => {
        //create test on Engineer class
        const obj = new Engineer();

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

    //test to see if getGithub() returns github username
    test('should return engineer github when call getGithub()', () => {
        const test = "brandonsgithub"
        const obj = new Engineer("name", "id", "email", test);

        expect(obj.getGithub()).toEqual(test);
    })

    //test to see if getRole() returns role
    test('should return engineer role when call getRole()', () => {
        const obj = new Engineer();

        expect(obj.getRole()).toEqual("Engineer");
    })
});