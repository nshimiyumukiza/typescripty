// console.log("bla bla")
// let age : number = 12;
// const firstName: string = "erneste";
// const isGoing = true;
// const pinaple : number = 43;
// const corse :number[] = [1,2,3,4,5];
// let scores: number[] = [100, 95, 98];
// console.log(age)
// console.log(firstName)
// console.log(isGoing)
// console.log(pinaple)
// console.log(corse)
// console.log(scores)
// function greet(name:string){
//     return `hello!, ${name}`
// }
// console.log(greet("alice"));
// const user = {
//     name:"alice",
//     age:12,
//     reapt: false
// }
// console.log(user.age)
// const userName : string = "alice";
// function add(a:number, b:number) {
//     return a+b;
// }
// console.log(add(2,5))
// const data = JSON.parse('{"name":"alice","age":30}')
// console.log(data)
// let something;
// something = "cyusa";
// something = 10;
// console.log(something)
// const names :string[] = [];
// names.push("alice","erneste","cyusa");
// console.log(names);
// enum countryProvence {
//     north,
//     south,
//     east,
//     west
// }
// let provence = countryProvence.south
// console.log(provence)
// type carYear = number;
// type carName = string
// type carModal = string;
// type car {
//     year:carYear;
//     name: carName;
//     modal:carModal;
// }
var userName = "erneste";
var age = 20;
var isDev = true;
var scores = [10, 20, 30];
var truple = ["you pass!", 1];
console.log(userName);
console.log(age);
console.log(isDev);
console.log(scores);
console.log(truple);
var add = function (a, b) {
    return a + b;
};
console.log(add(2, 3));
var greet = function (name) {
    return "hello! ".concat(name);
};
console.log(greet("erneste!"));
var isEven = function (num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
};
console.log(isEven(7));
var cor = { brand: "Ferali", year: 2025, electric: true };
console.log(cor);
var printCar = function (car) {
    console.log("car name is ".concat(car.brand));
};
var myCar = {
    brand: "rambogin",
    year: 2025
};
printCar(myCar);
var role;
(function (role) {
    role[role["admin"] = 0] = "admin";
    role[role["user"] = 1] = "user";
    role[role["guest"] = 2] = "guest";
})(role || (role = {}));
var checkRole = function (myRole) {
    if (myRole === role.admin) {
        console.log("admin");
    }
    else {
        if (myRole === role.guest) {
            console.log("you are gusest");
        }
        else {
            console.log("you are user");
        }
    }
};
checkRole(role.admin);
checkRole(role.guest);
checkRole(role.user);
