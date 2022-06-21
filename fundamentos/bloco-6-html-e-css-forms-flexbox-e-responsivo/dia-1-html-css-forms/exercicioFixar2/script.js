// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

/* function elementoA (event){
    event.preventDefault();
}

HREF_LINK.addEventListener('click',elementoA);  */

 HREF_LINK.addEventListener('click', (event) => 
    event.preventDefault());  

INPUT_CHECKBOX.addEventListener('click', (event) => event.preventDefault());