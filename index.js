// external lib depends
const inquirer = require('inquirer');
const fs = require('fs');

// internal depends
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const generateHTML = require('./src/generateHTML');


const teamMembers = [];

// Step 1: Prompt for manager method
const addManager = () => {
    console.log("Prompting for manager entry.");
    return inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the name of the manager?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the manager employee ID?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager email address"
        },
        {
            type: "input",
            name: "managerOffice",
            message: "What is the office number?"
        }
    ]).then((answers) => {
        console.log("Creating Manager object.");
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
        console.log("Adding manager to data array: %o", manager);
        teamMembers.push(manager);
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.error("Prompt could not be rendered.");
        } else {
            console.error("Parsing input failed with error. %o", error);
        }
    });
}

// Step 2..n: collect employee data for engineer, intern
const addEmployee = () => {
    console.log("Prompting for employee entry...");
    return inquirer.prompt([
        {
            type: "input",
            name: "employeeName",
            message: "What is the name of the employee?"
        },
        {
            type: "input",
            name: "ID",
            message: "What is the manager employee ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email address?"
        },
        {
            type: "list",
            name: "role",
            message: "What is the employee's job role?",
            choices: ["Engineer", "Intern"]
        },
        {
            type: "input",
            name: "github",
            message: "What is the Engineer's github account name?",
            when: (input) => input.role === "Engineer"
        },
        {
            type: "input",
            name: "school",
            message: "What is the Intern's school name?",
            when: (input) => input.role === "Intern"
        },
        {
            type: "confirm",
            name: "continue",
            message: "Add an another employee to the team?",
            default: false
        }
    ]).then((employeeAnswers) => {
        let employee;
        if(employeeAnswers.role === "Engineer") {
            employee = new Engineer(
                employeeAnswers.employeeName, 
                employeeAnswers.ID, 
                employeeAnswers.email, 
                employeeAnswers.github,
            );
        } else if(employeeAnswers.role === "Intern") {
            employee = new Intern(
                employeeAnswers.employeeName, 
                employeeAnswers.ID, 
                employeeAnswers.email, 
                employeeAnswers.school,
            );
        }
        console.log("Created an %s object.", employee.getRole());
        console.log("Adding employee to data array.");
        teamMembers.push(employee);
        console.log("Team members so far: %o", teamMembers);

        if(employeeAnswers.continue) {
            return addEmployee(teamMembers);
        } else {
            return teamMembers;
        }
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.error("Prompt could not be rendered.");
        } else {
            console.error("Parsing input failed with error code: %o", error);
        }
    });
}


const writeFile = data =>{
    fs.writeFileSync("./dist/index.html", data, err=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("Your team profile has been generated successfully! Please check the index.html")
        }
    })
};

// step of the function in command line
addManager()
    .then (addEmployee)
    .then (teamMembers=>{
        return generateHTML(teamMembers);
    })
    .then (pageHTML=>{
        return writeFile(pageHTML);
    })
    .catch (err=>{
        console.log(err);
    })
    