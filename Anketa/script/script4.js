// let arr = ["Я","изучаю","JavaScript","прямо", "сейчас"];

// const res = arr.splice(0,3,"Давай","танцевать");

// console.log("arr", arr);

// console.log("res", res);

// arr.forEach(function (item, index, array){

// })

// ["fsdfds","fdsfdsf","sfdsfdsf"].forEach((item, index, array) => {
//     console.log(`${item} имеет позиию ${index} в ${array}`);
// });

// let user = [
//     {id: 1, name:"Вася"},
//     {id: 2, name:"Маша"},
//     {id: 3, name:"Петя"},
// ]

// let someUser = user.filter((item) => item.id < 3);

// console.log(someUser);

// let arr = ["John","Петя","Лола"];
// let str = arr.join(";");
// console.log(str.length)


// let arr = [5,7,3,4,5];
// let result = arr.reduce((acc, current) => {
//     console.log("acc", acc);
//     console.log("current", current);

//     return acc + current;
// },0);

// console.log(result);

let arr = [1,2,15];
arr.sort((a,b) => b - a);

alert(arr);

function compare(a,b){
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
}


