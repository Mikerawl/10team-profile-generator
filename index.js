const generateHTML = require ('.src/generateHTML');

// required libraries
const fs = retuire('fs');
const inquirer = inguirer('inguirer');


//These are the employee profile classes
const Manager = require(./lib/Manager'); 
const Engineer =require(./lib/Engineer'); 
const Intern = require(./lib/Intern');

// An array of team members
const teamArray = [];


// This adds the employee to the team
const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the employees name?', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter a name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter a valid ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        }
    ])
    .then(employeeInput => {
        const  { name, id, email} = employeeInput; 
        const employee = new Employee (name, id, email);

        teamArray.push(employee); 
        console.log(manager); 
    })
};


// this adds members to the team

            Const addEmployee =
    return inquirer.prompts ([
        Const addManager = () => {
            return inquirer.pr1ompt ([
                {
                    type: 'input',
                    name: 'name',
                    message: "what is this persons name?"
                    validate name => {
                        if (nameInput) {
                            return true;
                    }   else {
                        console.log("Please enter a name!");
                        return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "Enter this persons's email address."
                    validate email => {
                        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                        if (valid) {
                            return true;
                        }   else {
                        console.log("Please enter the a valid email address!");
                        return false;
                        }
                    }
                }, 
                type: 'input',
                name: 'id',
                message: "Wha is this person's ID Number?"
                validate id => {
                    if (idInput) {
                        return true;
                }   else {
                    console.log("Please enter an ID number!");
                    return false;
                    }
                }
            },

            type: 'input',
                name: 'id',
                message: "Wha is this person's role?"
                validate id => {
                    if (idInput) {
                        return true;
                }   else {
                    console.log("Please enter a poition!");
                    return false;
                    }
                }
            },


// This adds information for an engineer
Const addEmployee =
    return inquirer.prompts ([
        Const addEngineer = () => {
            return inquirer.pr1ompt ([
                {
                    type: 'input',
                    name: 'name',
                    message: "what is this persons name?"
                    validate name => {
                        if (nameInput) {
                            return true;
                    }   else {
                        console.log("Please enter a name!");
                        return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "Enter this persons's email address."
                    validate email => {
                        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                        if (valid) {
                            return true;
                        }   else {
                        console.log("Please enter the a valid email address!");
                        return false;
                        }
                    }
                }, 
                type: 'input',
                name: 'id',
                message: "Wha is this person's ID Number?"
                validate id => {
                    if (idInput) {
                        return true;
                }   else {
                    console.log("Please enter an ID number!");
                    return false;
                    }
                }
            },

            type: 'input',
                name: 'id',
                message: "Wha is this person's role?"
                validate id => {
                    if (idInput) {
                        return true;
                }   else {
                    console.log("Please enter a poition!");
                    return false;
                    }
                }
            },

Employee {

    * `name` #

    * `id`#
    *
    * `email` 
    
    * `getName()`
    
    * `getId()`
    
    * `getEmail()`
    
    * `getRole()`&mdash;returns `'Employee'`
    }
    
    
    class Manager {
     * `name`
    
    * `id`
    
    * `email`
    
    * `office number`
    
    * `getName()`
    
    * `getId()`
    
    * `getEmail()`
    
    * `getRole()`&mdash;returns `'Employee'`
    
    class Engineer {
     * `name`
    
    * `id`
    
    * `email`
    
    * `getName()`
    
    * `getId()`
    
    * `getEmail()`
    
    * `getRole()`&mdash;returns `'Employee'`
    
    class Intern {
     * `name`
    
    * `id`
    
    * `email`
    
    * `getName()`
    
    * `getId()`
    
    * `getEmail()`
    
    * `getRole()`&mdash;returns `'Employee'`
    
    class Employee {
     * `name`
    
    * `id`
    
    * `email`
    
    * `getName()`
    
    * `getId()`
    
    * `getEmail()`
    
    * `getRole()`&mdash;returns `'Employee'`
    
    class Employee {
     * `name`
    
    * `id`
    
    * `email`
    
    * `getName()`
    
    * `getId()`
    
    * `getEmail()`
    
    * `getRole()`&mdash;returns `'Employee'`
    