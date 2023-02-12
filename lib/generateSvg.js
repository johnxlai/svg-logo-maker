const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');

const generateSvg = ({
  logoName,
  textColour,
  logoColour,
  logoShape,
} = data) => {
  switch (logoShape) {
    case 'circle':
      const makeCircle = new Circle(logoName, textColour, logoColour);
      return makeCircle.render();
      break;

    case 'triangle':
      const makeTriangle = new Triangle(logoName, textColour, logoColour);
      return makeTriangle.render();
      break;

    case 'square':
      const makeSquare = new Square(logoName, textColour, logoColour);
      return makeSquare.render();
      break;

    default:
      return `Something is not right!`;
      break;
  }
};

module.exports = { generateSvg };
