//5º Pedir para o usuario digitar um numero; Converter em numero inteiro; pedir para digitar outro numero; converter em um numero inteiro; mostrar um alert com o texto "O resto da divisao de (n1) por (n2) é: (resultado)"; mostrar um alert com o texto "O numero (n1) elevado a (n2) é: (resultado)";

let num1 = Number(prompt("Digite um número"));
let num2 = Number(prompt("Digite outro número"));

alert(`O resto da divisão entre ${num1} e ${num2} é ${num1 % num2}`)
alert(`O número ${num1} elevado a ${num2} é ${num1 ** num2}`)
