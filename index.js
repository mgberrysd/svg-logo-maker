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
      name: 'text',
      message: 'Enter up to 3 characters:',
    },
    {
      type: 'list',
      name: 'textColor',
      message: 'What color would you like the text?',
      choices: ['white', 'blue', 'red', 'black', 'yellow']
    },
    {
      type: 'list',
      name: 'shape',
      message: 'What shape would you like the image to be?',
      choices: ['circle', 'triangle', 'square']
    },
    {
      type: 'list',
      name: 'shapeColor',
      message: 'What color would you like the shape?',
      choices: ['white', 'blue', 'red', 'black', 'yellow']
    },
  ])
  .then((data) => {
    const svg = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <${data.shape} cx="150" cy="100" r="80" fill="${data.shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>

</svg>
`;
    // Writes the markdown to README.md in the generated folder after all questions have been answered

    fs.writeFile('./generated/logo.svg', svg, (err) =>
      err ? console.log(err) : console.log('Generated logo.svg')
    );
  });
