let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let result = 0;



/* for(index = 0;index < numbers.length;index += 1) {
    console.log(numbers[index]);
} */

/* for(index=0;index<numbers.length;index+=1){
    result += numbers[index];
}

console.log(result);

console.log(result/numbers.length); */


let sum = 0;

let average = sum/numbers.length;

/* for(index=0;index<numbers.length;index+=1){
    sum= sum + numbers[index];
    }
    if ((sum/numbers.length) > 20) {
        console.log("valor maior que 20");
    }else{
        console.log("valor menor ou igual a 20");
    } */

    /* for(let index=0; index < numbers.length; index+=1){
        
    } */

    /* let hightNumber = numbers[0];

    for(let index=0;index < numbers.length;index+=1){
        if (numbers[index] > hightNumber) {
            hightNumber = numbers[index];
        }
    }

    console.log(hightNumber);
 */
/* Exercicio 6

let result = 0;

for (let index=0; index<numbers.length;index+=1){
    if (numbers[index] % 2 !== 0) {
        result += 1
     }
}

if (result === 0) {
    console.log('nenhum valor ímpar encontrado');
  } else {
    console.log(result);
  }
 */

  //Exercicio 7

  /* let smallerNumber = numbers[0];

  for(let index = 1; index < numbers.length; index +=1){
      if (numbers[index] < smallerNumber) {
          smallerNumber = numbers[index];
      }
  }

  console.log(smallerNumber);
 */

//Exercicio 8


  let arrayNumbers = [];

  for(let index=1; index <= 25; index+=1){
    arrayNumbers.push(index);
  }

  console.log(arrayNumbers);


  //Exercicio 9

  for(let index=0; index < arrayNumbers.length; index+=1){
      console.log(arrayNumbers[index]/2);
  }

 


  