// Requires the file system and inquirer packages to ask questions and write new files
const fs = require('fs');
const inquirer = require('inquirer');

// Propmpts the user to answer questions about thier desired svg including:
// Characters as part of image
// text color
// svg shape
// shape color

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter up to 3 characters:',
    },
    {
      type: 'list',
      name: 'textColor',
      message: 'What color would you like the text?',
      choices: ['white','blue','red','black','yellow']
    },
    {
      type: 'list',
      name: 'shape',
      message: 'What shape would you like the image to be?',
      choices: ['Circle','Triangle','Square']
    },
    {
      type: 'list',
      name: 'shapeColor',
      message: 'What color would you like the shape?',
      choices: ['white','blue','red','black','yellow']
    },
  ])
  .then((data) => {

    // Writes the markdown to README.md in the generated folder after all questions have been answered

    fs.writeFile('./generated/logo.svg', readme, (err) =>
      err ? console.log(err) : console.log('Generated logo.svg')
    );
  });
