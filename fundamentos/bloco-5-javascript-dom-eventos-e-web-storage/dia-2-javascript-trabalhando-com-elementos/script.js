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