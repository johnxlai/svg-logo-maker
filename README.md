# svg-logo-maker
![License Badge](https://img.shields.io/badge/license-MIT-brightgreen)

## User Story
As a freelance web developer, I want to generate a simple logo for my projects, so that I dont have to pay a graphic designer. (You really should hire a graphic designer if you want a professional designed logo)
## Acceptance
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered


## Description
* This is a command-line application, which will prompt users for infomation about their repository. At the end of all the questions a professional README.md is generated with the title of the project, description, table of contents, installation steps, usage, license, how to contribute, tests and questions.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#how-to-contribute)
- [Questions](#questions)
- [License](#license)

## Installation
* In the root directory you want to run "npm i" to install all the required packages.

## Usage
* User can type "npm start" or "node index.js" to start the user prompt in the root directory.
* The user must pass all the requirements of making the svg logo, otherwise it prompt a corresponding message.
* Upon finishing all the questions, a svg file will be generated called logo.svg in the dist folder.

* This project uses the npm inquirer package.


## License
* This project is under the MIT license.
* If you want to get more details about the license, please visit [Choose License](https://choosealicense.com "Choose License")

## How to Contribute
* Feel free to contact via email or github or fork my repo and request for pull request!

## Tests
* Its been tested for correct user input, logo text must not exceed 3 characters and must contain atleast 1 character.
* It must be a vaild CSS named value or hex code to set the text colour of the logo and the background colour of the logo.
* These tests must be passed in order for the logo.svg file to be generated.

## Questions
* Please contact me via my [Github Username](https://github.com/johnxlai)

* You can reach me with additional questions <a href="mailto:lai.john.py@gmail.com">lai.john.py@gmail.com</a>


## Repo
https://github.com/johnxlai/svg-logo-maker
## WalkThrough Video
https://drive.google.com/file/d/1zKDm3_RNRF0xhl7HIcSfiNnQ_BCQhymY/view

