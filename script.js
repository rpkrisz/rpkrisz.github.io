/**
 * body HTMLBodyElement
 */
const body = document.querySelector("body");

document.createElement("main");
const main = document.querySelector("main");
body.appendChild(main);



document.createElement("h1");
const h1 = document.querySelector("h1");
main.appendChild(h1);

h1.innerText = "Hello";