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

function adder() {
  let newValor = Number(prompt('Digite um valor a ser somado'))
  number += newValor
  writer()
}

function subtracter() {
    let newValor = Number(prompt('Digite um valor a ser subtraído'))
  number -= newValor
  writer()
}

function multiplyer() {
    let newValor = Number(prompt('Digite um valor a ser multiplicado'))
  number *= newValor
  writer()
}

function divider() {
    let newValor = Number(prompt('Digite um valor a ser dividido'))
  number /= newValor
  writer()
}

function cleaner() {
    result.innerHTML = `Resultado: <br>`
    number = 0
}

add.addEventListener('click', adder)
subtract.addEventListener('click', subtracter)
multiply.addEventListener('click', multiplyer)
divide.addEventListener('click', divider)
clean.addEventListener('click', cleaner)