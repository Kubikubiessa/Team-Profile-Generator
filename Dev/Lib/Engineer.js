// Engineer sub-class with constructor function determining the engineer role attributes. 
const Employee = require('./Employee');
class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name, id, email, role);
        this.github = github;

    
    };
    getRole() {
        return 'Engineer';
    };
    getGithub() {
        return this.github;
    };
};
module.exports = Engineer;