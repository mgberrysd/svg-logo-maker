class Shapes {
    constructor(shapeColorObject) {
      this.shapeColorObject= shapeColorObject;
    }

    setColor(shapeColor) {
        this.shapeColorObject = shapeColor;
    }
  }
  
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

  module.exports = {Shapes, Circle, Triangle, Square};