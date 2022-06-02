// arquivo script.js

/* console.log(document.getElementById('start').nextSibling) // nó

console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p> */

//1. Acesse o elemento elementoOndeVoceEsta.console.log
(document.getElementById('elementoOndeVoceEsta'));

//2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let pai = document.getElementById('elementoOndeVoceEsta').parentElement

console.log(pai.style.color = 'blue');

//3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho') ;

console.log(primeiroFilhoDoFilho.innerText = "Text text text");

//4. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta. 
console.log(document.getElementById('pai').firstElementChild);

//5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

console.log(document.getElementById('elementoOndeVoceEsta').firstElementChild);

//6.Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

console.log(elementoOndeVoceEsta.parentElement.parentElement);

//7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

console.log(elementoOndeVoceEsta.nextElementSibling);

//8.Agora acesse o terceiroFilho a partir de pai.

console.log(document.querySelector('#pai').nextElementSibling);

//2° contaéudo
//1.Crie um irmão para elementoOndeVoceEsta.

let container = document.querySelector('#pai');
let brother = document.createElement('section');

container.appendChild(brother);

// 2.Crie um filho para elementoOndeVoceEsta.

let container2 = document.querySelector('#elementoOndeVoceEsta');

let sun = document.createElement('div');

container2.appendChild(sun);

 //3.Crie um filho para primeiroFilhoDoFilho.

 let container3 = document.querySelector('#primeiroFilhoDoFilho');

 let child2 = document.createElement('section');

 container3.appendChild(child2);



//4.  A partir desse filho criado, acesse terceiroFilho.  

let terceiroFilho = child2.parentElement.parentElement.nextElementSibling;