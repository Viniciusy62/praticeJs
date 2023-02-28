
//7º Pedir para o usuário digitar dois números e mostrar uma mensagem informando se foi aprovado ou não. A nota de corte é 5.

let num1 = Number(prompt("Digite um número entre 0 e 10"));
let num2 = Number(prompt("Digite outro número entre 0 e 10"));
let media = (num1 + num2) / 2;
alert(`A sua  média ficou em ${media} pontos. Você foi ${media > 5 ? "Aprovado" : "Reprovado"}`)

