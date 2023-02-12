const Shape = require('./shape');

class Circle extends Shape {
  constructor(text, textColour, bgColour, logoShape) {
    super(text, textColour, bgColour, logoShape);
  }
  render() {
    return `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="300" height="200">

      <circle cx="50" cy="50" r="50" fill="${this.bgColour}" />

      <text x="50%" y="50%" text-anchor="middle" fill="${this.textColour}" font-size="2.3rem" letter-spacing="2" dy=".3em" font-family="monospace">${this.text}</text>
    </svg>`;
  }
}

module.exports = Circle;
