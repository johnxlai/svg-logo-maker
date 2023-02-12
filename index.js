const inquirer = require('inquirer');
const fs = require('fs');
const { generateSvg } = require('./lib/generateSvg');
// const Circle = require('./lib/circle');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'logoName',
      message: 'Please enter text, must not be more than 3 letters',
    },
    {
      type: 'input',
      name: 'textColour',
      message: `Please enter text colour keyword or a hexadecimal number for the logo's test color`,
    },
    {
      type: 'input',
      name: 'logoColour',
      message: `Please enter a colour keyword or a hexadecimal number for the logo's background colour`,
    },
    {
      type: 'list',
      name: 'logoShape',
      message: `Please choose logo shape`,
      choices: ['triangle', 'circle', 'square'],
    },
  ])
  .then((data) => {
    console.log(data);
    // JSON.stringify(data);
    //We want to generate the svg logo here.
    // const { logoName, textColour, logoColour } = data;

    // const makeCircle = new Circle(logoName, textColour, logoColour);

    const svgPath = './examples/svg.svg';

    fs.writeFile(
      svgPath,
      generateSvg(({ logoName, textColour, logoColour } = data)),
      (err) => (err ? console.log(err) : console.log('Generated logo.svg'))
    );
  })
  .catch((err) => console.error(err));
