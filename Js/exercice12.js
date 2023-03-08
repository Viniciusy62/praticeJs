let number = document.querySelector('#number')
let verify = document.querySelector('#verify')
let clean = document.querySelector('#clean')
let result = document.querySelector('#result')

function calculator() {
    let multiple = 0
    if(number.value == "") {
        result.textContent = "Digite um valor numérico para criar uma tabuada"
    } else {
        cleaner()
        for(i=1;i<=10;i++) {
            multiple = number.value * i
            result.innerHTML += `${number.value} x ${i} = ${multiple} <br>` 
        }
    }
}

function cleaner() {
    result.innerHTML = `Resultado: <br>`
}

verify.addEventListener('click', calculator)
clean.addEventListener('click', cleaner)