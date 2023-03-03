let number = document.querySelector('#number')
let verify = document.querySelector('#verify')
let clean = document.querySelector('#clean')

function calculator() {
    alert('teste')
}

function cleaner() {
    alert('cleaner')
}

verify.addEventListener('click', calculator)
clean.addEventListener('click', cleaner)