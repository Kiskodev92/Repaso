"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.setx = function (newx) {
        this.x = newx;
    };
    Point.prototype.getx = function () {
        return this.x;
    };
    Point.prototype.sety = function (newy) {
        this.y = newy;
    };
    Point.prototype.gety = function () {
        return this.y;
    };
    Point.prototype.toString = function () {
        return "(".concat(this.x, ", ").concat(this.y, ")");
    };
    Point.prototype.calculateTolOrigin = function () {
        var origin = Math.sqrt(this.x * this.x + this.y * this.y);
        return origin;
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        var dx = this.x - anotherPoint.x;
        var dy = this.y - anotherPoint.y;
        var dxy = Math.sqrt(dx * dx + dy * dy);
        return dxy;
    };
    Point.prototype.calcularQuadrant = function () {
        if (this.x === 0 || this.y === 0) {
            return 0;
        }
        else if (this.x > 0 && this.y > 0) {
            return 1;
        }
        else if (this.x < 0 && this.y > 0) {
            return 2;
        }
        else if (this.x < 0 && this.y < 0) {
            return 3;
        }
        else {
            return 4;
        }
    };
    Point.prototype.calculateNearest = function (points) {
        var lessDistance = this.calculateDistance(points[0]);
        var point = points[0];
        for (var i = 1; i < points.length; i++) {
            var distancia = this.calculateDistance(points[i]);
            if (distancia < lessDistance) {
                lessDistance = distancia;
                point = point[i];
            }
        }
        return point;
    };
    return Point;
}());
exports.Point = Point;
