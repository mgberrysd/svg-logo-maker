// Requires the file system and inquirer packages to ask questions and write new files
const fs = require('fs');
const inquirer = require('inquirer');

// Requires the svg and shape classes to make the svg after the prompt is answered
const SVG = require("./app/lib/svg");
const {Shapes, Circle, Triangle, Square} = require("./app/lib/shapes");


// Propmpts the user to answer questions about thier desired svg including:
// Characters as part of image, will throw an error if >3
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
      choices: ['blue', 'red', 'black', 'yellow', 'green']
    },
  ])
  .then((data) => {
    // renders a new svg based on the prompts
    // methods to set svg properties are similar to those in the unit tests
    const svg = new SVG();
    let shape;
    // makes new shape objects based on the selection
    if (data.shape === 'Circle') {
      shape = new Circle();
    }
    if (data.shape === 'Triangle') {
      shape = new Triangle();
    }
    if (data.shape === 'Square') {
      shape = new Square();
    }
    svg.setText(data.text, data.textColor);
    shape.setColor(data.shapeColor);
    svg.setShape(shape);

    // Renders a new svg file in the examples folder after all questions have been answered

    fs.writeFile('./examples/logo.svg', svg.render(), (err) =>
      err ? console.log(err) : console.log('Generated logo.svg')
    );
  });
