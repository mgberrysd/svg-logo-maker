// parent class of shapes passes the shape color and setColor method

class Shapes {
    constructor(shapeColorObject) {
      this.shapeColorObject= '';
    }
    setColor(shapeColor) {
        this.shapeColorObject = shapeColor;
    }
  }
  
  // child classes inherit the above
  // render functions all have different outputs but same function
  // could have had the child classes have a render function inherited, would need to be written differently
  class Circle extends Shapes {
    constructor(shapeColorObject) {
      super(shapeColorObject);
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColorObject}" />`
    }
  }
  
  class Triangle extends Shapes {
    constructor(shapeColorObject) {
      super(shapeColorObject);
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColorObject}" />`
    }
  }
  
  class Square extends Shapes {
    constructor(shapeColorObject) {
      super(shapeColorObject);
    }
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColorObject}" />`
    }
  }

  // exports the 4 classes for use in other parts of the code
  module.exports = {Shapes, Circle, Triangle, Square};