// Ao chamar a função doingThings:
/* doingThings(wakeUp); */

const wakeUp = () => 
'Acordando!!';

const breakfast = () => 
  'Bora tomar café!!';


const sleepNow = () => 
  'Partiu dormir!!';

const doingThings = (callback ) => {
    return callback()
}

let message = doingThings(sleepNow);
console.log(message);
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
