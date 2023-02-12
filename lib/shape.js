//npm package to vaild for CSS3 compatible color value.
const isCss3Color = require('is-css3-color');

class Shape {
  constructor(text, textColour, bgColour, logoShape) {
    this.logoShape = logoShape;

    // this.vaildTextInput(text);
    if (!text) throw new Error('Input cannot be empty');
    if (text.length > 3) {
      throw new Error('Logo text cannot be more than 3 characters');
    }
    this.text = text;

    // this.vaildColourInput(textColour);

    if (!isCss3Color(textColour)) {
      throw new Error('Please enter a vaild css color keyword or hex code');
    }
    this.textColour = textColour;

    if (!isCss3Color(bgColour)) {
      throw new Error('Please enter a vaild css color keyword or hex code');
    }
    this.bgColour = bgColour;

    // this.vaildColourInput(bgColour);
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

    if (!isCss3Color(input)) {
      throw new Error('Please enter a vaild css color keyword or hex code');
    }
  }

  render() {
    throw new Error('Child shapes must implement a render() method');
  }
}
module.exports = Shape;
