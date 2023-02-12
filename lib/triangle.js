const Shape = require('./shape');

class Triangle extends Shape {
  constructor(text, textColour, bgColour, logoShape) {
    super(text, textColour, bgColour, logoShape);
  }
  render() {
    return `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="300" height="200">

      <polygon points="100 0, 0 ,0 50, 100" fill="${this.bgColour}" />

      <text x="50%" y="40%" text-anchor="middle" fill="${this.textColour}" font-size="2.3rem" letter-spacing="2" dy=".3em" font-family="monospace">${this.text}</text>
    </svg>`;
  }
}

module.exports = Triangle;
