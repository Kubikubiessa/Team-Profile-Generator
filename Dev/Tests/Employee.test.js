const Employee = require("../lib/Employee");

describe("Employee", () => {
    // Test for all use cases when initializing a new Employee object
    describe("Initialization", () => {
      it("should create an object with a name, role, id, and email  if provided valid arguments", () => {
        const employee = new Employee("Sarah", "Manager", 3 , "sarah@gmail.com");

  
        // Verify that the new object has the correct properties\
        expect(employee.name).toEqual(expect.any(String));
        expect(employee.role).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));

        expect(employee.name).toEqual("Sarah");
        expect(employee.id).toEqual(3);
        expect(employee.role).toEqual("Manager");
        expect(employee.email).toEqual("sarah@gmail.com");

      })
      it("should return Sarah when running getName()", () => {
        const employee = new Employee("Sarah", "Manager", 3 , "sarah@gmail.com")
        expect(employee.getName()).toEqual(expect.any(String));
        expect(employee.getName()).toEqual("Sarah")

      });
      it ("should return id when running getId()", () => {
        const employee = new Employee("Sarah", "Manager", 3, "sarah@gmail.com")
        expect(employee.getId()).toEqual(expect.any(Number));
        expect(employee.getId()).toEqual(3)

    });
    it ("should return role when running getRole()", () => {
        const employee = new Employee("Sarah", "Manager", 3, "sarah@gmail.com")
        expect(employee.getRole()).toEqual(expect.any(String));
        expect(employee.getRole()).toEqual("Employee")
    });
    it ("should return email when running getEmail()", () => {
        const employee = new Employee("Sarah", "Manager", 3, "sarah@gmail.com")
        expect(employee.getEmail()).toEqual(expect.any(String));
        expect(employee.getEmail()).toEqual("sarah@gmail.com")


    })


    })});  