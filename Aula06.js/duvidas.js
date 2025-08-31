// let ligado = true ;
// while (ligado) {
//     let num1= Number(prompt("digite o primeiro número"));
    
    
//     if (num1 != null && num1 != "") {
//         let num2= Number(prompt("digite o primeiro número"));
        
//         alert(num1 + num1);
//         ligado = false;
//     }
// }

if (navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone|iPad|iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i)
|| navigator.userAgent.match(/Opera Mini/i)
|| navigator.userAgent.match(/IEMobile/i)

) {
   console.log("Celular"); 
}else{
    console.log("PC"); 

}

