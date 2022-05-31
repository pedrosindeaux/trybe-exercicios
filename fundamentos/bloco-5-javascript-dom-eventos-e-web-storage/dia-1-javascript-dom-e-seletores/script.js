 /* document.getElementById('patternText');
let patternText = document.getElementById('patternText');
patternText.innerText = 'Desenvolvedor full stack'; */


 /* console.log(document.getElementsByName('main-content'));

let bordaLateral = document.getElementsByName('main-content');

bordaLateral[0].style.backgroundColor = 'red' 
 */
let myTest = document.getElementsByTagName('p');
myTest[1].innerText = 'Criando uma solução inovadora';

 let mainContent = document.getElementsByClassName('main-content');
 mainContent[0].style.backgroundColor = 'rgb(76,164,109)';

let centeContent = document.getElementsByClassName('center-content');
centeContent[0].style.backgroundColor = 'white'

let h1 = document.getElementsByTagName('h1');
h1[0].innerText = 'Exercício 5.1 - Java Script '
 
for(i=0; i<myTest.length; i+=1){
    let myTest = document.getElementsByTagName('p');
    myTest[i].style.textTransform = 'UpperCase';
}

for(i=0; i<myTest.length; i+=1){
    let myTest = document.getElementsByTagName('p');
    console.log(myTest[i].innerText);
}