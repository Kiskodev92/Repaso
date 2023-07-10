import { Point } from "./point";
let coordenadas = new Point (17,40)
let textcoord = coordenadas.toString()
console.log(textcoord);
let distancia = coordenadas.calculateTolOrigin()
console.log(distancia);
let point1 = new Point (2, 4);
let point2 = new Point (9, 7);
let calculoPoint = point1.calculateDistance(point2);
console.log(calculoPoint);