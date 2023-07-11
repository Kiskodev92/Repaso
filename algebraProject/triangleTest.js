"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var triangle_1 = require("./triangle");
var punto1 = new point_1.Point(4, 30);
var punto2 = new point_1.Point(10, 60);
var punto3 = new point_1.Point(20, 37);
var myTriangle = new triangle_1.Triangle(punto1, punto2, punto3);
console.log(myTriangle.calculateLengthSides());
