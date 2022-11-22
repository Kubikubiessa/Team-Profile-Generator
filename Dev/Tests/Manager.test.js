const Manager = require("../lib/Manager");

describe("Manager", () => {
    // Test for all use cases when initializing a new Employee object
    describe("Initialization", () => {
      it("should create an object with a role of Manager and an office number if provided valid arguments", () => {
        const manager = new Manager("Brittany" , 4 , "bt@gmail.com", "892-345-4455");
        const role = "Manager";
        const name = "Brittany"
        const office = "892-345-4455";
  
        // Verify that the new object has the correct properties\
        expect(manager.getRole()).toBe(role);
        expect(manager.getName()).toBe(name);

        
        expect(manager.getOffice()).toBe(office);
        expect(manager.office).toEqual(expect.any(String));
      
         
        
      })
    });
});