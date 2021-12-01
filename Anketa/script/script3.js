// const user = {
//     fitstname: "John",
//     lastname: "Doe",
//     age: 19,
//     pet: {
//         type:"Rabbit"
//     },
// };

// console.log(user);
// console.log(user.firstname);
// console.log(user.lastname);
// console.log(user.age);
// console.log(user.pet);
// console.log(user.pet.type);

// const numbers = [1, "sfsdf", 3];

// console.log(numbers[0]);
// console.log(numbers.length);

// const str = "zdsfds";
// const number = [1,2,3];
// number.push(str);
// number.unshift(0);
// number.pop();
// number.shift()

    const data = [
    {
        firstName: "Ashton",
        lastName: "Kutcher",
        age: 40,
    },
    {
        firstName: "Bradley",
        lastName: "Pitt",
        age: 54,
    },
    {
        firstName: "Hannah",
        lastName: "Dakota",
        age: 24,
    },
];

let askAge = +prompt("Your age");

for (let index = 0; index < data.length; index++ ){
    if (data[index].age === askAge){
        alert(
            `${data[index].firstName} ${data[index].lastName} ${data[index].age} `
            )
    }
}