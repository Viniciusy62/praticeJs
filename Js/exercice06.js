
//6º Pedir para o usuário digitar dois números e mostrar um boolean indicando se a média for maior que 5.

let num1 = Number(prompt("Digite um número"));
let num2 = Number(prompt("Digite outro número"));

let boolean = (num1 + num2) / 2;

alert(`A média entre ${num1} e ${num2} é ${(num1 + num2) / 2 }! ${boolean > 5}`)
