class Shape {
  constructor(text, textColour, bgColour) {
    this.text = text;
    this.textColour = textColour;
    this.bgColour = bgColour;
  }

  render() {
    console.log(this.bgColour);
  }
}

console.log(new Shape('JLJ', 'white', 'green'));
