//Pedir para o usuário digitar um número e mostrar a tabuada desse número de 1 a 100.
let number = Number(prompt('Digite um número qualquer'))

for(i = 0; i <= 100; i++) {
    document.write(`${number} x ${i} = ${number * i} <br>`) 
}