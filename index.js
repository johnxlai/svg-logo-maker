const inquirer = require('inquirer');
const fs = require('fs');

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
      type: 'list',
      name: 'logoShape',
      message: `Please choose logo shape`,
      choices: ['triangle', 'circle', 'square'],
    },
    {
      type: 'input',
      name: 'logoColour',
      message: `Please enter a colour keyword or a hexadecimal number for the logo's background colour`,
    },
  ])
  .then((data) => {
    console.log(data);
    //We want to generate the svg logo here.
    const path = './examples/svg.svg';

    fs.writeFile(path, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
    console.log('Generated logo.svg');
  })
  .catch((err) => console.error(err));
