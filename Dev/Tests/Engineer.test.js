const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    // Test for all use cases when initializing a new Employee object
    describe("Initialization", () => {
      it("should create an object with a role of Engineer and a github  if provided valid arguments", () => {
        const engineer = new Engineer("Sarah", 3 , "sarah@gmail.com", "Engineer", "sarahsGithub");
        const role = "Engineer";
        const name = "Sarah"
        const github = "sarahsGithub";
  
        // Verify that the new object has the correct properties\
        expect(engineer.getRole()).toBe(role);
        expect(engineer.getName()).toBe(name);
        
        //expect(engineer.getGithub()).toEqual(expect.any(String));
        expect(engineer.getGithub()).toBe(github);
        expect(engineer.github).toEqual(expect.any(String));
      
         
        
      })
    });
});
    // Test for all use cases when initializing a new Employee object

      
      
      

    //   // Act
    //   engineer.getGithub(github);
    //   engineer.getRole(role);
     

    //   // Assert
    //   expect( instanceof ).toEqual(true);
      
      
    //   it("should return Sarah when running getName()", () => {
    //     const employee = new Employee("Sarah", "Manager", 3 , "sarah@gmail.com")
    //     employee.getName()
    //     expect(employee.name).toEqual("Sarah");

    //   })
    // }
    //   )
    // })
  