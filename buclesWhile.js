function hasEven(myNums) {
    if (myNums === void 0) { myNums = [1, 2, 5, 6, 8, 7, 5, 2, 3]; }
    var i;
    while (i = myNums.length) {
        if (i % 2 === 0) {
            console.log(i);
        }
        i++;
    }
}
console.log(hasEven());
