function evenNumbers(num) {
    if (num === void 0) { num = 20; }
    for (var i = 0; i <= num; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
evenNumbers();
