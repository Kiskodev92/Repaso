import { Point } from "./point";
let coordenadas = new Point (17,40)
let textcoord = coordenadas.toString()
console.log(textcoord);
let distancia = coordenadas.calculateTolOrigin()
console.log(distancia);
let point1 = new Point (2, 4);
let point2 = new Point (99, 77);
let point3 = new Point (5,3)
let calculoPoint = point1.calculateDistance(point2);
console.log(calculoPoint);
let quadrante = new Point (-1, 2);
console.log(quadrante.calcularQuadrant());
let arrPoint = [point2, point3];
let nearPoint = point1.calculateNearest(arrPoint)
console.log(nearPoint);