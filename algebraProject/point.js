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
    return Point;
}());
exports.Point = Point;
