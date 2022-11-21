const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    // Test for all use cases when initializing a new Employee object
    describe("Initialization", () => {
      it("should create an object with a role of Engineer and a github  if provided valid arguments", () => {
        const engineer = new Engineer("Sara" , "Engineer", "sarahgithub");
  
        // Verify that the new object has the correct properties\
        expect(getRole()).toBe("Engineer");
        expect(engineer.github).toBe("sarahgithub");
      
         
        
      })
      const engineer = new Engineer();
      const role = "Engineer";
      const github = "sarahsGithub";
      ;

      // Act
      engineer.getGithub(github);
      engineer.getRole(role);
     

      // Assert
      expect( instanceof ).toEqual(true);
      
      
      it("should return Sarah when running getName()", () => {
        const employee = new Employee("Sarah", "Manager", 3 , "sarah@gmail.com")
        employee.getName()
        expect(employee.name).toEqual("Sarah");

      })
    }
      )
    })
  