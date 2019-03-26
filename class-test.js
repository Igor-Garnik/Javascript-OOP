function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.drow = function () {
    console.log('drow');
}

Circle.prototype.duplicate = function () {
    Shape.prototype.duplicate.call(this);
    console.log('duplicate circle');
}

const shape = new Shape();
const circle = new Circle(5, 'red');