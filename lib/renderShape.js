const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');

const renderShape = ({
  logoName,
  textColour,
  logoColour,
  logoShape,
} = data) => {
  switch (logoShape) {
    case 'circle':
      const makeCircle = new Circle(logoName, textColour, logoColour);
      return makeCircle;
      break;

    case 'triangle':
      const makeTriangle = new Triangle(logoName, textColour, logoColour);
      return makeTriangle;
      break;

    case 'square':
      const makeSquare = new Square(logoName, textColour, logoColour);
      return makeSquare;
      break;

    default:
      return `Something is not right!`;
      break;
  }
};

module.exports = { renderShape };
