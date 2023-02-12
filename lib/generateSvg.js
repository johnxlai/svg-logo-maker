const Circle = require('./circle');

const generateSvg = ({
  logoName,
  textColour,
  logoColour,
  logoShape,
} = data) => {
  const makeCircle = new Circle(logoName, textColour, logoColour);
  return makeCircle.render();
};

module.exports = { generateSvg };
