let surname = prompt("Назовите вашу фамилию","");
while (surname === "") {
    surname = prompt("Вы ввели пустую строку. Назовите вашу фамилию","");
}

let name = prompt("Назовите ваше имя","");
while (name === "") {
    name = prompt("Вы ввели пустую строку. Назовите ваше имя","");
}

let midname = prompt("Назовите ваше отчество","");
while (midname === "") {
    midname = prompt("Вы ввели пустую строку. Назовите ваше отчество","");
}

let age = +prompt("Сколько вам полных лет?","");
while (!age) {
    age = +prompt( " Вы ввели не число. Сколько вам полных лет?","")
}


let gender = (confirm("Ваш пол мужской?")) ? "Мужской" : "Женский";

let ageInDays = age * 365;
let after5Years = age + 5;

function pension() {
    switch (gender) {
        case "Мужской":
            if (age >= 65) {
                return ("Да")        
            } else {
                return ("Нет")
            };
            break;
        case "Женский":
            if (age >= 55) {
                return ("Да")        
            } else {
                return ("Нет")
            };
            break;
        default:
            alert( "Нет таких значений" );
    }
}



alert(`Ваше ФИО: ${surname} ${name} ${midname}
Ваш возраст в годах: ${age}
Ваш возраст в днях: ${ageInDays}
Через 5 лет вам будет: ${after5Years}
Ваш пол: ${gender}
Вы на пенсии: ${pension()}
`)