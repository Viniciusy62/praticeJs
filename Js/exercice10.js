//Pedir para o usuário digitar um número e mostrar a tabuada desse número de 1 a 100.
let number = Number(prompt('Digite um número qualquer'))

for(i = 1; i <= 100; i++) {
    document.write(`${number} x ${i} = ${number * i} <br>`)
    if(i % 10 === 0) {
        document.write(`---------------- <br>`)
    }
}