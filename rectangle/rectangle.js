"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Point = void 0;
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
}
exports.Point = Point;
class Rectangle {
    constructor(topLeft, topRight, bottomLeft, bottomRight) {
        this.topLeft = topLeft;
        this.topRight = topRight;
        this.bottomLeft = bottomLeft;
        this.bottomRight = bottomRight;
    }
    move(dx, dy) {
        this.topLeft.move(dx, dy);
        this.topRight.move(dx, dy);
        this.bottomLeft.move(dx, dy);
        this.bottomRight.move(dx, dy);
    }
    getArea() {
        const width = Math.abs(this.topRight.x - this.topLeft.x);
        const height = Math.abs(this.topLeft.y - this.bottomLeft.y);
        return width * height;
    }
}
exports.Rectangle = Rectangle;
