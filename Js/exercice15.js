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
            newValor += number
            result.textContent = newValor
            break
        case '-':
             newValor = Number(prompt('Digite um valor a ser somado'))
            newValor -= number
            result.textContent = newValor
            break
    }
} //Incompleto/incorreto

function cleaner() {
    result.innerHTML = `Resultado: <br>`
    number = 0
}

add.addEventListener('click', function() {calculator('+')})
subtract.addEventListener('click', function() {calculator('-')})
multiply.addEventListener('click', multiplyer)
divide.addEventListener('click', divider)
clean.addEventListener('click', cleaner)