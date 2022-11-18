class Employee {
    constructor(name, role, id, email){
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
        
}
getName(){
    return this.name;

};
getRole(){
    return 'Employee';

};
getId(){
    return this.id;

};
getEmail(){
    return this.email;
};
};

module.exports = Employee;

/*const init = () => {
    promptUser()
      // Use writeFile method imported from fs.promises to use promises instead of
      // a callback function
      .then((answers) => writeFile('index.html', generateHTML(answers)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
  
  init();*/