"use strict";

// --------------- Завдання 1 ----------------------------------------------------------------------------
console.log("%c    Task 1", "color:red");

// let variable = prompt("Please, type the variable value:");
let variable = "jhf43";
console.log("Введена змінна: ", { variable }, "\n typeof is ", typeof variable);

// let numberValue = +variable;
let numberValue = Number(variable);
console.log(`Number(${variable}) =`, numberValue, `\ntype of the result is `, typeof numberValue);
// Нотатка. Якщо вввести рядкову змінну, виходить, що NaN відповідає типу Number

// let booleanValue = Boolean(variable);
let booleanValue = !!variable;
console.log(`!!${variable} =`, booleanValue, `\ntype of the result is `, typeof booleanValue);

// let srtingValue = variable+"";  - , так, пам'ятаю, що краще так не робити, просто спробувала
let srtingValue = variable.toString();
console.log(`${variable}.toString =`, srtingValue, `\ntype of the result is `, typeof srtingValue);


// --------------- Завдання 2 ----------------------------------------------------------------------------
console.log("------------------------------");
console.log("%c    Task 2", "color:red");
let rate = 37.87;
let amountUa = +prompt("Скільки UA Ви хочете конвертувати в USD?");   // зчитуємо і зразу перетворюємо в Number
console.log("You have ", amountUa, "UA");
let amountUsd = Math.floor(100 * amountUa / rate) / 100;              // рахуємо кількість USD і заокруглюємо до меншого
let restUa = Math.floor(100 * (amountUa - amountUsd * rate)) / 100;   // рахуємо решту UA, яка не може бути конвертована
console.log(`Ви можете обміняти ваші ${amountUa} UA на `, amountUsd, " USD і ", restUa, " UA решти");

// --------------- Завдання 3 ----------------------------------------------------------------------------
console.log("------------------------------");
console.log("%c     Task 3", "color:red");

let litersOrder = +prompt("Введіть скільки літрів бензину Ви бажаєте купити?");
// Далі зчитуємо в змінну priceLitrePetrol і зразу перетворюємо в Number
let priceLitrePetrol = +prompt("!!!Акція!!!\nСьогодні ціну встановлюєте Ви! \nТо яка ціна за літр бензину?");   
console.log(`Ви замовили ${litersOrder} л бензину за ціною ${priceLitrePetrol} грн/л`);
// let orderPrice = Math.round(100 * litersOrder * priceLitrePetrol) / 100;
let orderPrice = (litersOrder * priceLitrePetrol).toFixed(2);   // одразу рахуємо вартість бензину і лишаємо два знаки після коми
console.log(`Вартість Вашого замовлення сьогодні: ${orderPrice} грн! \nБажаємо гарного дня!`);

// --------------- Завдання 4 ----------------------------------------------------------------------------
console.log("------------------------------");
console.log("%c     Task 4", "color:red");

let a = 2 // може бути будь-яке інше ціле додатнє число 
let b = 2 // може бути будь-яке інше ціле додатнє число 
console.log(`Обрані такі числа в десятковій системі числення: \n a = ${a} \n b = ${b}`);
let binaryResult = (a + b).toString(2); // користуємося методом .toString передавши як аргумент 2 - основу системи числення, отримуємо реультак у вигляді String
console.log('Сума чисел, записана у десятковій системі числення:  ', a + b); // виведе в консоль бінарне число строкою
console.log('Сума чисел, записана у двійковій системі числення:  ', binaryResult); // виведе в консоль бінарне число строкою