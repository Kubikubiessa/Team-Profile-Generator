const Intern = require("../lib/Intern");

describe("Intern", () => {
    // Test for all use cases when initializing a new Employee object
    describe("Initialization", () => {
      it("should create an object with a role of Intern and a school if provided valid arguments", () => {
        const intern = new Intern("Tom",  5 , "tom@gmail.com", "Intern", "University of Utah");
        const role = "Intern";
        const name = "Tom"
        const school = "University of Utah";
  
        // Verify that the new object has the correct properties and that the functions return correct values.
        expect(intern.getRole()).toBe(role);
        expect(intern.getName()).toBe(name);

        
        expect(intern.getSchool()).toBe(school);
        expect(intern.school).toEqual(expect.any(String));

      
         
        
      })
    });
});