
console.log("Que tipo de usuário está entrando?");
console.log("Insira\n\nA: Administrador\n\nB: Usuário comum\n\nC Usuário assinante");
let Acesso = prompt();
//let cont = "a"

while(Acesso !== "a"){
    cont = cont + tipo
    console.log("Acesso negado!")  
    Acesso= prompt()
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