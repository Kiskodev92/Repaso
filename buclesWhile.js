function hasEven(myNums) {
    if (myNums === void 0) { myNums = []; }
    var i = 0;
    while (i < myNums.length) {
        if (myNums[i] % 2 == 0) {
            console.log("Existe numero par");
        }
        else {
            console.log("No existe numero par");
        }
        i++;
    }
}
hasEven([1, 2, 5, 6, 8, 7, 5, 22, 3]);
function starWithM(myNames) {
    var i = 0;
    while (i < myNames.length) {
        if (myNames[i][0] != "M") {
            return false;
        }
        i++;
    }
    return true;
}
console.log(starWithM(["Manolo", "Paco"]));
