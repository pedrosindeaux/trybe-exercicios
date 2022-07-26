const numeroAleatorio = (number,randomNumber) => number === randomNumber;


const sorteio = ((number,checkNumber) => {
    const randomNumber = Math.floor(Math.random() * (5)) + 1;
    return checkNumber (number,randomNumber) ? "Parabéns você ganhou" :  "Tente novamente";
})

console.log(sorteio(5,numeroAleatorio));