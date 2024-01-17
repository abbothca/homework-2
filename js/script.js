"use strict";

// --------------- Завдання 1 ----------------------------------------------------------------------------
console.log("%c Task 1", "color:red");

// let variable = prompt("Please, type the variable value:");
let variable = "0";
console.log("Введена змінна: ", {variable}, "\n typeof is ", typeof variable);

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
console.log("%c Task 2", "color:red");
let rate = 37.87;
let amountUa = +prompt("How many UA do you want to exchange to USD?");
console.log("You have ", amountUa, "UA");
let amountUsd = Math.floor(100*amountUa/rate)/100;
let restUa = Math.floor(100*(amountUa - amountUsd*rate))/100;
console.log(`You can exchange your ${amountUa} UA to`, amountUsd, " USD and ", restUa, " UA");

// --------------- Завдання 3 ----------------------------------------------------------------------------
console.log("------------------------------");
console.log("%c Task 3", "color:red");

let litersOrder = +prompt("Введіть скільки літрів бензину Ви бажаєте купити?");
let priceLitrePetrol = +prompt("!!!Акція!!!\nСьогодні ціну встановлюєте Ви! \nТо яка ціна за літр бензину?");
console.log(`Ви замовили ${litersOrder} л бензину за ціною ${priceLitrePetrol} грн/л`);
// let orderPrice = litersOrder * priceLitrePetrol;
let orderPrice = Math.round(100*litersOrder * priceLitrePetrol)/100;
console.log(`Вартість Вашого замовлення сьогодні: ${orderPrice} грн! Бажаємо гарного дня!`);