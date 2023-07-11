"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
var Triangle = /** @class */ (function () {
    function Triangle(vertex1, vertex2, vertex3) {
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }
    Triangle.prototype.calculateLengthSides = function () {
        var lados = [];
        var lado1 = this.vertex1.calculateDistance(this.vertex2);
        lados.push(lado1);
        var lado2 = this.vertex1.calculateDistance(this.vertex3);
        lados.push(lado2);
        var lado3 = this.vertex2.calculateDistance(this.vertex3);
        lados.push(lado3);
        return lados;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
