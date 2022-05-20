// Primeira parte 

const a = 3;
const b = 15;
const c = 45;
const d = 30;
const e = 50;
const f = -90;


console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//Segunda parte 



if (a>b) {
    console.log("O " +a+ " é maior do que o " +b);   
} 
else {
    console.log("O " +b+ " é maior do que o " +a);
}


//Terceira parte

if (a > b && a > c) {
    console.log(a);
} else if ( b > a && b > c) {
    console.log(b);
} else {
    console.log(c);
}
    
//Quarta parte 

if (a > 0) {
    console.log("positive");
} else if (a < 0) {
    console.log("negative");
} else {
    console.log("Zero");
}
    
//Quinta parte 

if (d + e + f === 180) {
    console.log(true);
} else if ( d + e + f < 180 && d + e + f  > 0){
    console.log(false);
} else if (( d | e | f) <= 0) {
    console.log("Invalido");
}

 //Sexta parte

 const pecaXadrez = "rEI";
 const pecaXadrezLower = pecaXadrez.toLowerCase();
 


 switch (pecaXadrezLower) {
     case "peao":
     console.log("Frente");
         break;
         
     case "torre":
         console.log("Frente e pros lados");
         break;
    
    case "bispo":
        console.log("Diagonais");
        break;
    
    case "cavalo":
        console.log("Em L");
        break;
   
    case "rei":
        console.log("Todas as direções");    
        break;
         
        default:
         console.log("não identicado");
 }

 //Setima parte 





 