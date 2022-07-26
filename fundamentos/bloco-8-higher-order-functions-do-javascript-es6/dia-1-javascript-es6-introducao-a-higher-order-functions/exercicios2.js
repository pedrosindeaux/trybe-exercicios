const nomes = 'Pedro Sindeaux Braga'
const person = ((nome)=> {
   const fullName = nome.toLowerCase().split(' ').join('_');
   return {fullName, email:`${fullName}@gmail.com`}
})


const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  console.log(newEmployees(person));


  //exercicio 3

  const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const respostas = (RIGHT_ANSWERS,STUDENT_ANSWERS) => {
        if(RIGHT_ANSWERS === STUDENT_ANSWERS) {
            return 1
        } 
        if ( STUDENT_ANSWERS === "N.A") {
            return 0;
        } else {
            return 0.5
        }
}

const compare = ((RIGHT_ANSWERS,STUDENT_ANSWERS,callback) => {
    let total = 0;
    for(let i = 0; i <STUDENT_ANSWERS.length; i += 1) {
        const soma = callback(RIGHT_ANSWERS[i],STUDENT_ANSWERS[i]);
        total += soma;
    }
    return total

})

console.log(compare(RIGHT_ANSWERS,STUDENT_ANSWERS,respostas));