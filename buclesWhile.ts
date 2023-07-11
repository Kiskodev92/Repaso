function hasEven(myNums : number[] = []){
    let i = 0;
    while(i < myNums.length){
        if(myNums[i]%2==0){
            console.log(myNums[i]);
        } i++;
    }
}
hasEven([1,2,5,6,8,7,5,22,3]);

function starWithM(myNames : string []):boolean{
    let i = 0;
    while(i< myNames.length){
        if(myNames[i][0] != "M"){
            return false;
        }i++
    } return true;
}
console.log(starWithM(["Manolo","Paco"]))