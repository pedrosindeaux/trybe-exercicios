const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
  // Adicione seu código aqui

  emailListInData.forEach((element) => {
    showEmailList(element)
  });

  const numbers = [19, 21, 30, 3, 45, 22, 15];

  const findDivisibleBy3And5 = (number) => {
    // Adiciona seu código aqui
    return number % 3 === 0 && number % 5 === 0
}
  
const verify = numbers.find(findDivisibleBy3And5);
  console.log(verify)


  const names = ['João', 'Irene', 'Fernando', 'Maria'];

  const findNameWithFiveLetters = () => {
    return  names.find((element) => {
   return element.length === 5
   })
  }
  
  console.log(findNameWithFiveLetters()); 

  const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
    // Adicione seu código aqui
    return musicas.find((musica) => musica.id === id )
  }
  
  console.log(findMusic('31031685'))

  const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((nomePassado) => {
    return nomePassado === name
  })
  
}

console.log(hasName(names, 'Ana'))

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((currentName) => currentName === name);
}

console.log(hasName(names, 'Ana'));


