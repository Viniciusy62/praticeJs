//Pedir para o usuário digitar dois números que representam os lados de um retângulo assim que a página é carregada. Mostrar na tela a área total quando clicar num botão.

let larg = Number(prompt('Digite o valor da largura de um retângulo'))
let alt = Number(prompt('Digite o valor da altura de um retângulo'))
let show = document.querySelector('#show')
let clean = document.querySelector('#clean')
let result = document.querySelector('#result')


function calculator(l, a) {
    const area = l * a
    result.textContent = `A área total do retângulo é de ${area}`
    return area
}

function cleaner() {
    result.innerHTML = `Resultado: <br>`
    window.location.reload()
}

show.addEventListener('click', function() {calculator(larg, alt)}, false)
clean.addEventListener('click', cleaner)