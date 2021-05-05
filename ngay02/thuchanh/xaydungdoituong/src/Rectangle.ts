import {Shapes} from "./Shapes";
import {IArea} from "./IArea";

export  class Rectangle extends Shapes implements IArea{
    private _color:string;


    constructor(x: number, y: number, color: string) {
        super(x, y);
        this._color = color;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    getArea(): number {
        return this.x*this.y;
    }

    showInfo(): string {
        return "x:"+ this.x+ " ;" + "y: " +this.y +" Area : " + this.getArea();
    }
}
