function evenNumbers(num : number = 20){
    for (let i = 0 ; i <= num; i++){
        if(i%2!=0){
            console.log(i)
            }
        } 
}
evenNumbers();

function myRevert(myArr : number[] = [1,2,3,4,5,6,7]){
let invers : number[] = [];
    for(let i = myArr.length -1; i>= 0; i--){
        invers.push(myArr[i]);
    } return invers;
}
console.log(myRevert());

function isRainbow(colors : string[] = []){
    for (let color of colors){
        if(color == "Azul" || color == "Rojo" || color == "Amarillo" || color == "Verde"|| color == "Añil"|| color == "Violeta"){
            console.log("Pertenece al arcoiris");
        } else {
            console.log("No esta en el arcoiris");
        }
    } return isRainbow;
}
isRainbow(["Azul","Rojo","Amapola"]);

function add(myWords : string[] = []){
    let total = 0;
    for(let word of myWords){
        total += word.length
    } return total;
}
console.log(add(["paco"," pepe"]));