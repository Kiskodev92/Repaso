export class Point {
    private x : number;
    private y : number;
    constructor(x : number, y : number){
        this.x = x;
        this.y = y;
    }
    public setx(newx : number):void{
        this.x= newx;
    }
    public getx() :number{
        return this.x
    }
        public sety(newy : number):void{
        this.y= newy;
    }
    public gety() :number{
        return this.y
    }
    toString(): string{
        return `(${this.x}, ${this.y})`
    }
    calculateTolOrigin(): number{
        let origin = Math.sqrt(this.x * this.x + this.y * this.y);
        return origin
    }
}