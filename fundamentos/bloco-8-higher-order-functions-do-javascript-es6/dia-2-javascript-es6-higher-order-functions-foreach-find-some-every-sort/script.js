/* const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
  // Adicione seu código aqui


  emailListInData.forEach((item,position, size) => {
    showEmailList(item);
    console.log(`Your position is ${position}`);
    console.log(`There are ${size.length} students`);
});



const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = numbers.find((element) => element % 3 === 0 || element % 5 === 0)

console.log(findDivisibleBy3And5)



const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = names.find((name) => name.length === 5) 
 


console.log(findNameWithFiveLetters);


const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
  return musicas.find((musica) => musica.id === id );
  }
  
  console.log(findMusic('31031685'))


const nameSs = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
    return arr.some((foundName) => foundName === name);
};


console.log(hasName(nameSs, 'Ana'))



const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
    //Adicione seu código aqui
  }
  
  console.log(verifyAges(people, 18));


  const printName = function () {
    const myName = 'Lucas';
    return myName;
  };
  
  console.log(printName());

  const printName = () => 'Lucas';
    
  
  console.log(printName());


   */


  /* Declare a função 'minhaFunção' */
function minhaFuncao(objeto) {
    objeto.marca = "Toyota";
  }
 
  /*
   * Declare a variável 'meucarro';
   * crie e inicialize um novo Objeto;
   * atribua referência para 'meucarro'
   */
  var meucarro = {
    marca: "Honda",
    modelo: "Accord",
    ano: 1998
  };
 
  /* Exibe 'Honda' */
  console.log(meucarro.marca);
 
  /* Passe a referência do objeto para a função */
  minhaFuncao(meucarro);
 
  /*
   * Exibe 'Toyota' como valor para a propriedade 'marca'
   * do objeto, mudado pela função.
   */
  console.log(meucarro.marca);
 