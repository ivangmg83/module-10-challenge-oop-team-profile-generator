const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
{
    type:"input",
    name:"managerName",
    message:"What is the name of the manager?"
},
{
    type:"input",
    name:"managerId",
    message:"What is the manager employee ID?"
},
{
    type:"input",
    name:"managerEmail",
    message:"What is the manager email address"
},
{
    type:"input",
    name:"managerOffice",
    message:"What is the office number?"
},
{
    type:"list",
    name:"addEmployee",
    message:"Add employee to the team",
    choices:["Engineer", "Intern"]
},   

])
  .then((answers) => {
    console.log(answers)
    employeeInfo(answers);
})

const employeeInfo = (userAnswers)=>{
    if (userAnswers.addEmployee == "Engineer"){
    inquirer
     .prompt([
      {
      type:"input",
      name:"engineerName",
      message:"What is the name of the engineer?"
      },
      {
      type:"input",
      name:"engineerId",
      message:"What is the engineer employee ID?"
      },
      {
      type:"input",
      name:"engineerEmail",
      message:"What is the engineer email address"
      },
      {
      type:"input",
      name:"engineerOffice",
      message:"What is the office number?"
      },
      {
      type:"list",
      name:"addEmployee",
      message:"Add employee to the team",
      choices:["Engineer", "Intern"]
      },
     ])
     .then((answers) => {
     console.log(answers)
     // writeAnswersToFile(answers);
     })
    } else {
        inquirer
        .prompt([
         {
         type:"input",
         name:"interName",
         message:"What is the name of the intern?"
         },
         {
         type:"input",
         name:"interId",
         message:"What is the intern employee ID?"
         },
         {
         type:"input",
         name:"interEmail",
         message:"What is the intern email address"
         },
         {
         type:"input",
         name:"interOffice",
         message:"What is the office number?"
         },
         {
         type:"list",
         name:"addEmployee",
         message:"Add employee to the team",
         choices:["Engineer", "Intern"]
         },
        ])
        .then((answers) => {
        console.log(answers)
        })
    }
}

//   const writeAnswersToFile= (userAnswers)=>{
//     const initialData = `# ${userAnswers.title} 
//     \n## ${userAnswers.license} ${renderLicenseBadge(userAnswers.license)} \n### ${renderLicenseLink(userAnswers.license)}
//     \n## Table of contents: \n### * [License](#license) \n### * [Installation](#instalacion)\n### * [Usage](#usage)\n### * [Contributions](#contributions)\n### * [Tests](#tests)\n### * [Questions](#questions)
//     \n## Descrption \n### ${userAnswers.description}
//     \n## Installation \n### ${userAnswers.installation}
//     \n## Usage \n### ${userAnswers.usage}
//     \n## Contributions \n### ${userAnswers.contributions}
//     \n## Tests \n### ${userAnswers.tests}
//     \n## Questions \n### If you have any questions, you may contact me either \n### GitHub: https://github.com/${userAnswers.githubName} \n### Or \n### Email: ${userAnswers.email}`
//     fs.writeFile(
//         'README.md', 
//         initialData, 
//     (error)=>error?console.log(error):console.log("success")
//     )
//   }