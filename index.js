const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// title, Description, Installation, Usage, License, Contributing, Tests, and Questions
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is project title?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide project description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions?'
      },
    {
    type: 'input',
    name: 'usage',
    message: 'Provide usage instructions?'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which is your favorite color?',
      choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'None']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution instructions?'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please provide testing instructions?'
    },
    {
        type: 'input',
        name: 'questionusername',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'questionemail',
        message: 'What is your github email?'
    }

  ])
  .then((answers) => {

    fs.writeFile("./README.md", generateMarkdown(answers), function(err) {
        if (err){
            console.log(err);
        } else {
            console.log("File created!");
        }
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error('Prompt couldn\'t be rendered');
    } else {
      console.error('Something else went wrong:', error);
    }
  });
