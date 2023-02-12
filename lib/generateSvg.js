const generateSvg = ({
  logoName,
  textColour,
  logoShape,
  logoColour,
} = data) => {
  return `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <${logoShape} cx="50" cy="50" r="50" fill="${logoColour}" />
      <text x="50%" y="50%" text-anchor="middle" fill="${textColour}" font-size="2.3rem" letter-spacing="2" dy=".3em" font-family="monospace">${logoName}</text>
    </svg>
    `;
};

module.exports = { generateSvg };
