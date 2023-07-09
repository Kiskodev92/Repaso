function hasEven(myNums) {
    if (myNums === void 0) { myNums = []; }
    var i = 0;
    while (i < myNums.length) {
        if (i % 2 === 0) {
            console.log(i);
        }
        i++;
    }
}
hasEven([1, 2, 5, 6, 8, 7, 5, 22, 3]);
