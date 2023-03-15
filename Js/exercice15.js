let number = Number(prompt('Digite um valor inicial'))
let clean = document.querySelector('#clean')

let add = document.querySelector('#add')
let subtract = document.querySelector('#subtract')
let multiply = document.querySelector('#multiply')
let divide = document.querySelector('#divide')

let result = document.querySelector('#result')

function writer() {
    result.textContent = number
}

function calculator(sinal) {
    let newValor = 0
    switch(sinal) {
        case '+':
            newValor = Number(prompt('Digite um valor a ser somado'))
            number += newValor
            result.textContent = number
            break
        case '-':
            newValor = Number(prompt('Digite um valor a ser somado'))
            number -= newValor
            result.textContent = number
            break
        case '*':
            newValor = Number(prompt('Digite um valor a ser somado'))
            number *= newValor
            result.textContent = number
            break
        case '/':
            newValor = Number(prompt('Digite um valor a ser somado'))
            number /= newValor
            result.textContent = number
            break
        default:
            result.textContent = "Tente novamente"
    }
}

function cleaner() {
    result.innerHTML = `Resultado: <br>`
    number = 0
}

add.addEventListener('click', function() {calculator('+')})
subtract.addEventListener('click', function() {calculator('-')})
multiply.addEventListener('click', function() {calculator('*')})
divide.addEventListener('click', function() {calculator('/')})
clean.addEventListener('click', cleaner)