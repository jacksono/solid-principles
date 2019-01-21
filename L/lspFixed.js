class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }
}

class Square {
  constructor(side) {
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }
}

const rectangle = new Rectangle(4, 3);
const square = new Square(4);

console.log('Rectangle area: ', rectangle.area());
console.log('Square area: ', square.area());


class FancyRectangle extends Rectangle {
  constructor(name, height, width) {
    super(height, width);
    this.name = name;
  }
}

const fancyRectangle = new FancyRectangle('boxy', 5, 6);

console.log('Fancy Rectangle area: ', fancyRectangle.area());
