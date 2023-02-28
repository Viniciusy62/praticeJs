//9º Pedir para o usuário digitar dois números, se a média for maior que 5, aprovado, senão reprovado. Caso alguma nota seja igual a 0, reprovado.

let num1 = Number(prompt('Digite a primeira nota'))
let num2 = Number(prompt('Digite a segunda nota'))

const media = (num1 + num2) / 2

if(num1 > 0 && num2 > 0 && media >= 5) {
    document.write(`Suas notas foram ${num1} e ${num2}, você obteve média ${media} ponto(s), portanto, está aprovado.`)
} else {
    document.write(`Infelizmente suas notas foram, ${num1} e ${num2}, você obteve média ${media} ponto(s), portanto, está reprovado`)
}