const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    // Test for all use cases when initializing a new Employee object
    describe("Initialization", () => {
      it("should create an object with a role of Engineer and a github  if provided valid arguments", () => {
        const engineer = new Engineer("Sarah", 3 , "sarah@gmail.com", "Engineer", "sarahsGithub");
        const role = "Engineer";
        const name = "Sarah"
        const github = "sarahsGithub";
  
        // Verify that the new object has the correct properties and that the functions return correct values.
        expect(engineer.getRole()).toBe(role);
        expect(engineer.getName()).toBe(name);
        
        //expect(engineer.getGithub()).toEqual(expect.any(String));
        expect(engineer.getGithub()).toBe(github);
        expect(engineer.github).toEqual(expect.any(String));
      
         
        
      })
    });
});
     