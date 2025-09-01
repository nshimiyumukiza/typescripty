
let userName : string = "erneste";
let age : number = 20;
let isDev : boolean = true

let scores : number[] = [10,20,30];
let truple : [string,number] = ["you pass!",1]

console.log(userName);
console.log(age);
console.log(isDev);
console.log(scores);
console.log(truple)

const add = (a: number, b:number) => {
    return a +b;
}
console.log(add(2,3));

const greet = (name : string) => {
    return `hello! ${name}`

}
console.log(greet("erneste!"))

const isEven = (num :number) => {
    if(num % 2 == 0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(7))

interface Car {
    brand : string,
    year: number,
    electric:boolean
}

const cor : Car = {brand:"Ferali",year:2025 ,electric:true}
console.log(cor)

interface newCar {
    brand: string,
    year: number
}


const printCar = (car:newCar) =>{
    console.log(`car name is ${car.brand}`)
}
const myCar:newCar ={
    brand:"rambogin",
    year: 2025
}
printCar(myCar)

type ID = string | number;

enum role {admin, user,guest}
const checkRole = (myRole:role) => {
    if(myRole === role.admin){
        console.log("admin")
    }else{
        if(myRole === role.guest){
            console.log("you are gusest")
        }else{
            console.log("you are user")
        }
    }
    

}
checkRole(role.admin)
checkRole(role.guest);
checkRole(role.user)


interface student {
    id: 1,
    name: string;
    grads:number[];
}

