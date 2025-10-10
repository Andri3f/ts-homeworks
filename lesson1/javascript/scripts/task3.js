"use strict";
const cart = [];
const prodCount = 2;
window.onload = () => {
    for (let i = 0; i < prodCount; i++) {
        const name = prompt(`Введіть назву ${i + 1} продукту`);
        const price = parseInt(prompt(`Введіть ціну ${i + 1} продукту`));
        const quantity = parseInt(prompt(`Введіть кількість ${i + 1} продукту`));
        cart.push({ name, price, quantity });
    }
    document.write(`<table>`);
    document.write(`<tr>`);
    document.write(`<th>Назва</th>`);
    document.write(`<th>Ціна</th>`);
    document.write(`<th>Кількість</th>`);
    document.write(`</tr>`);
    for (const item of cart) {
        document.write(`<tr>`);
        document.write(`<td>${item.name}</td>`);
        document.write(`<td>${item.price}</td>`);
        document.write(`<td>${item.quantity}</td>`);
        document.write(`</tr>`);
    }
    document.write(`<tr>`);
    document.write(`<td>Всього</td>`);
    document.write(`<td>${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</td>`);
    document.write(`<td>${cart.reduce((acc, item) => acc + item.quantity, 0)}</td>`);
    document.write(`</tr>`);
    document.write(`</table>`);
};
