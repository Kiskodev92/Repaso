"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var coordenadas = new point_1.Point(17, 40);
var textcoord = coordenadas.toString();
console.log(textcoord);
var distancia = coordenadas.calculateTolOrigin();
console.log(distancia);
var point1 = new point_1.Point(2, 4);
var point2 = new point_1.Point(9, 7);
var calculoPoint = point1.calculateDistance(point2);
console.log(calculoPoint);
