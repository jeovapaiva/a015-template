
console.log("Que tipo de usuário está entrando?");
console.log("Insira\n\nA: Administrador\n\nB: Usuário comum\n\nC Usuário assinante");
let Acesso = prompt().toUpperCase();
//let cont = "a"

while(Acesso !== "A"){
    if (Acesso === "B"){
        console.log("Usuário comum")
    }else if (Acesso === "C"){
        console.log("Usuário assinante") 
    }//else {
        //console.log("Acesso negado")   
    //}
    console.log("Acesso negado!")  
    Acesso = prompt("Insira\n\nA: Administrador\n\nB: Usuário comum\n\nC Usuário assinante").toUpperCase();
}   

console.log("Bem vido admin!");    

// let num 

// for (let i = 0; i <= 10; i++){
//     num = i*2
//     console.log(num);  
// } 

// let arrey = ["jeova","pedro","ana"]

// for(let i = 0;  i < arrey.length; i++){
//     console.log(arrey[i].toLocaleUpperCase())
// }