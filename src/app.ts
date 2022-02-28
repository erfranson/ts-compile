const userName = 'Ethan is cool';
const button = document.querySelector('button');

function clickHandeler(message: string) {
    console.log('hey bub' + message)
}

if(button){
    button.addEventListener('click', clickHandeler.bind(null, ' you a bitch'))
}

console.log(userName)