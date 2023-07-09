import { isEven } from "./condicionales";
import { add } from "./buclesFor";

let arr1 :string[] = ["Casa","Coche","Ciudad","Cesta"];
let arr2 :string[] = ["Barco","Baca","Bicicleta","Balon","Bisiesto","Brasil"];
let arr3 :string[] = ["Venezuela","Veneno","Voltaje"];
let sumadd = add(arr1);
console.log(sumadd);

let sumeven = isEven(sumadd);

let sumarr2 = add(arr2);
console.log(sumarr2);

let sumeven1 = isEven(sumarr2)

let sumarr3 = add(arr3);
console.log(sumarr3);

let sumeven2 = isEven(sumarr3)
