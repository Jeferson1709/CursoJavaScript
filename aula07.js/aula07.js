// && = and e 
// || = or ou 
// ! = not não

//Tabela verdade 

let n1, n2, n3, n4;

n1 = 10;
n2 = 5;
n3 = 15;
n4 = 2;

console.log((n1 > n2) && (n1 < n2));
console.log((n1 > n2) || (n1 < n2));
console.log(!((n1 > n2)||(n1 < n2)));

if (n1> n2) {
    console.log(n1 +" maior que "+n2 );
}else{
    console.log(n2 +" menorr que "+n1 );

}

if (!(n1> n2)||(n3> n4)) {
    console.log("verdadeiro");
}else{
    console.log("falso");

}