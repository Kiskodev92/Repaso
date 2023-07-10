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
    calculateDistance(anotherPoint : Point): number{
        let dx = this.x - anotherPoint.x;
        let dy = this.y - anotherPoint.y;
        let dxy = Math.sqrt(dx * dx + dy * dy);
        return dxy;
    }
    calcularQuadrant(): number{
        if (this.x === 0 || this.y === 0){
            return 0;
        }else if (this.x > 0 && this.y > 0) {
            return 1;
        } else if (this.x < 0 && this.y > 0) {
            return 2;
        } else if (this.x < 0 && this.y < 0) {
            return 3;
        } else {
            return 4;
        }
    }
    calculateNearest(points: Point[]): Point{
        let lessDistance;
        for(let i = 0; i < points.length; i++){
            let distancia = this.calculateDistance(points[i]);
            if(distancia < lessDistance){
                lessDistance = distancia;
            }        
        } return points
    }
}