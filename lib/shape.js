//npm package to vaild for CSS3 compatible color value.
const isCss3Color = require('is-css3-color');

class Shape {
  constructor({ text, textColour, bgColour, logoShape }) {
    this.logoShape = logoShape;

    this.vaildTextInput(text);
    this.text = text;

    this.vaildColourInput(textColour);
    this.textColour = textColour;

    this.vaildColourInput(bgColour);
    this.bgColour = bgColour;
  }

  ifInputEmpty(input) {
    if (!input) throw new Error('Input cannot be empty');
  }

  vaildTextInput(input) {
    this.ifInputEmpty(input);

    if (input.length > 3) {
      throw new Error('Logo text cannot be more than 3 characters');
    }
  }

  vaildColourInput(input) {
    this.ifInputEmpty(input);

    //Change all css named color to lowercase
    input = input.toLowerCase();

    if (!isCss3Color(input)) {
      throw new Error('Please enter a vaild css color keyword or hex code');
    }
  }

  render() {
    throw new Error('Child shapes must implement a render() method');
  }
}
module.exports = Shape;
