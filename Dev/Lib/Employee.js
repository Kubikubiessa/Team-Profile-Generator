class Employee {
    constructor(name, id, email, role){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        
}
getName(){
    return this.name;

};
getId(){
    return this.id;

};
getEmail(){
    return this.email;
};
getRole(){
    return 'Employee';

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