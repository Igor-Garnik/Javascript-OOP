class Shape {
    constructor(color) {
        this.color = color;
    }
    drow() {
        console.log('drow' + 'with ' + this.color);
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    move() {
        console.log('move');
    }
}

const c = new Circle('red', 5);