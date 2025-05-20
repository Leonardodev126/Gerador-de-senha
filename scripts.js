
const sliderElement = document.querySelector("#slider");
const buttonElement = document.querySelector("#button");
const sizePassword = document.querySelector("#valor");
const password = document.querySelector("#password");
const containerPasswod = document.querySelector("container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.ariaValueMax;