const writeAnswersToFile= (userAnswers)=>{
    const initialData = `# ${userAnswers.title} 
    \n## ${userAnswers.license} ${renderLicenseBadge(userAnswers.license)} \n### ${renderLicenseLink(userAnswers.license)}
    \n## Table of contents: \n### * [License](#license) \n### * [Installation](#instalacion)\n### * [Usage](#usage)\n### * [Contributions](#contributions)\n### * [Tests](#tests)\n### * [Questions](#questions)
    \n## Descrption \n### ${userAnswers.description}
    \n## Installation \n### ${userAnswers.installation}
    \n## Usage \n### ${userAnswers.usage}
    \n## Contributions \n### ${userAnswers.contributions}
    \n## Tests \n### ${userAnswers.tests}
    \n## Questions \n### If you have any questions, you may contact me either \n### GitHub: https://github.com/${userAnswers.githubName} \n### Or \n### Email: ${userAnswers.email}`
    fs.writeFile(
        'README.md', 
        initialData, 
    (error)=>error?console.log(error):console.log("success")
    )
  }