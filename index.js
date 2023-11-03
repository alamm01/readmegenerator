var inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'state',
      message: 'Where do you live?'
    },
    {
      type: 'list',
      name: 'favColor',
      message: 'Which is your favorite color?',
      choices: ['Red', 'Green', 'Blue', 'Yellow']
    }
  ])
  .then((answers) => {
    console.log(`Hello, ${answers.name}! you live in ${answers.state}.`);
    console.log(`Your favorite color is ${answers.favColor}.`);
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error('Prompt couldn\'t be rendered');
    } else {
      console.error('Something else went wrong:', error);
    }
  });
