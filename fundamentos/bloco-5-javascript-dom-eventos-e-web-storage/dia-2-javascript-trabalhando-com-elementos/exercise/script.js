//1. 🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

let container = document.querySelector('body');

let tagH1 = document.createElement('h1');


container.appendChild(tagH1);

tagH1.innerText= ('Exercício 5.2 - JavaScript DOM ');

//2. 🚀 Adicione a tag main com a classe main-content como filho da tag body;

let tagMAin = document.createElement('main');

tagMAin.className = 'main-content';

container.appendChild(tagMAin);

//3. 🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let tagSection = document.createElement('section');

tagSection.className = 'center-content';

tagMAin.appendChild(tagSection);

//4. 🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let tagP = document.createElement('p');

tagP.innerText = 'Criando um texto na tag p';

tagSection.appendChild(tagP);

//5. 🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let tagSection2 = document.createElement('section');

tagSection2.className = 'left-content';

tagMAin.appendChild(tagSection2);

//6. 🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2; 

let tagSection3 = document.createElement('section');

tagSection3.className = 'right-content';

tagMAin.appendChild(tagSection3);

//7.🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

let image = document.createElement('img');

image.className = 'small-image';
image.src = 'https://picsum.photos/200';

tagSection2.appendChild(image);

//8🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

 let numbers = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis' , 'sete' , 'oito', 'nove', 'dez'];



let tagUl = document.createElement('ul');
tagSection3.appendChild(tagUl);

for(n in numbers){
   let lista = document.createElement('li');
   lista.innerText = numbers[n];
    tagUl.appendChild(lista);
    
}


/* for(n of numbers){
    let lista = document.createElement('li');
    lista.innerText = n;
     tagUl.appendChild(lista);
    }
 */

//9. 🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.


for (let i =1; i<=3; i +=1){
    let tagH3 = document.createElement('h3');
    tagH3.innerText = i;
    tagMAin.appendChild(tagH3);
}

//SEGUNDA PARTE\\

//1.🚀 Adicione a classe title na tag h1 criada;

tagH1.className = 'title'

//2. 🚀 Adicione a classe description nas 3 tags h3 criadas;

let description= document.getElementsByTagName('h3');
for (let i= 0; i <3; i+=1){
 description[i].className = 'description';
} 

//3. 🚀 Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();

/* let leftContent = document.querySelector('.left-content')[0];
tagMAin.removeChild(leftContent); */

let leftContent = document.querySelector('.left-content')[0];
        tagMAin.removeChild(leftContent);



//4.🚀 Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;

let section3 = document.querySelector('right-content')[0];
section3.style.marginRight = 'auto';


//5.🚀Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;

let section3a = document.querySelector('.center-content')[0];
section3a.parentNode.style.backgrounColor = 'green';

//6. 🚀 Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.

/* tagUl.lastChild.remove();
tagUl.lastChild.remove();
 */
 





