"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
function evenNumbers(num) {
    for (var i = 0; i <= num; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
evenNumbers(20);
function myRevert(myArr) {
    var invers = [];
    for (var i = myArr.length - 1; i >= 0; i--) {
        invers.push(myArr[i]);
    }
    return invers;
}
console.log(myRevert([1, 2, 3, 4, 5, 6, 7]));
function isRainbow(colors) {
    if (colors === void 0) { colors = []; }
    for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
        var color = colors_1[_i];
        if (color == "Azul" || color == "Rojo" || color == "Amarillo" || color == "Verde" || color == "Añil" || color == "Violeta") {
            console.log("Pertenece al arcoiris");
        }
        else {
            console.log("No esta en el arcoiris");
        }
    }
    return isRainbow;
}
isRainbow(["Azul", "Rojo", "Amapola"]);
function add(myWords) {
    if (myWords === void 0) { myWords = []; }
    var total = 0;
    for (var _i = 0, myWords_1 = myWords; _i < myWords_1.length; _i++) {
        var word = myWords_1[_i];
        total += word.length;
    }
    return total;
}
exports.add = add;
console.log(add(["paco", " pepe"]));
