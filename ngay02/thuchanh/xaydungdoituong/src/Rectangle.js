import { Shapes } from "./Shapes";
export class Rectangle extends Shapes {
    constructor(x, y, color) {
        super(x, y);
        this._color = color;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    getArea() {
        return this.x * this.y;
    }
    showInfo() {
        return "x:" + this.x + " ;" + "y: " + this.y + " Area : " + this.getArea();
    }
}
