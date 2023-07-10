import { Point } from "./point";
let coordenadas = new Point (17,40)
let textcoord = coordenadas.toString()
console.log(textcoord);
let distancia = coordenadas.calculateTolOrigin()
console.log(distancia);
