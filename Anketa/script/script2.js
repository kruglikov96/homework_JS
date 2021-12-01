const validation = (text) => {
    let result = prompt(text);

    while (!result){
        result = prompt(text);
    }
}

const getInfo = (text) => {
    const result = validation(text);

    return result;
};

const getGenderBoolean = () => {
    const result = confirm("Your gender is male?");

    return result;
};

const getPension = (age, gender) => {
    if ((genderBoolean && age >= 65) || (!genderBoolean && age >= 55)){
        return "Yes";
    } else {
        return "No";
    }
};

const showInfo = (name, surname, midname, age, gender, pension) => {
    alert(`
    Ваше ФИО: ${surname} ${name} ${midname}
    Ваш возраст в годах: ${age}
    Ваш возраст в днях: ${age * 365}
    Через 5 лет вам будет: ${age + 5}
    Ваш пол: ${gender}
    Вы на пенсии: ${pension}
    `);
};

const init = () => {
    const name = getInfo("Enter your name");
    const surname = getInfo("Enter your surname");
    const midname = getInfo("Enter your midname");
    const age = getInfo("Your age?");
    const genderBoolean = getGenderBoolean();
    const gender = genderBoolean ? "Мужской" : "Женский";
    const pension = getPension(age, genderBoolean);

    showInfo(name, surname, midname, age, gender, pension);
};

init ()

