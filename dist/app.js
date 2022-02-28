"use strict";
const userName = 'Ethan is cool';
const button = document.querySelector('button');
function clickHandeler(message) {
    console.log('hey bub' + message);
}
if (button) {
    button.addEventListener('click', clickHandeler.bind(null, ' you a bitch'));
}
console.log(userName);
