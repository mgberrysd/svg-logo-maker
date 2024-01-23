// Requires the file system and inquirer packages to ask questions and write new files
const fs = require('fs');
const inquirer = require('inquirer');

const SVG = require("./app/lib/svg");
const {Shapes, Circle, Triangle, Square} = require("./app/lib/shapes");


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
      choices: ['Circle', 'Triangle', 'Square']
    },
    {
      type: 'list',
      name: 'shapeColor',
      message: 'What color would you like the shape?',
      choices: ['white', 'blue', 'red', 'black', 'yellow']
    },
  ])
  .then((data) => {
    const svg = new SVG();
    let shape;
    if (data.shape == 'Circle') {
      shape = new Circle();
    }
    if (data.shape == 'Triangle') {
      shape = new Triangle();
    }
    if (data.shape == 'Square') {
      shape = new Square();
    }
    svg.setText(data.text, data.textColor);
    shape.setColor(data.shapeColor);
    svg.setShape(shape);

    // Writes the markdown to README.md in the generated folder after all questions have been answered

    fs.writeFile('./examples/logo.svg', svg.render(), (err) =>
      err ? console.log(err) : console.log('Generated logo.svg')
    );
  });
