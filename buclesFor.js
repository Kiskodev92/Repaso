// function evenNumbers(num : number = 20){
//     for (let i = 0 ; i <= num; i++){
//         if(i%2!=0){
//             console.log(i)
//             }
//         } 
// }
// evenNumbers();
function myRevert(myArr) {
    if (myArr === void 0) { myArr = [1, 2, 3, 4, 5, 6, 7]; }
    var invers = [];
    for (var i = myArr.length - 1; i >= 0; i--) {
        invers.push(myArr[i]);
    }
    return invers;
}
console.log(myRevert());
