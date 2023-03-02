/*
Para este exercício, mostre na tela todos os anos a partir de 1004, os anos bissextos. Onde: Os anos bissextos são múltiplos de 4, não múltiplos de 100 (1900 não é bissexto) e múltiplos de 400 (2000 é bissexto).
*/
let ano = 1004

while(ano < 2023) {
    if(ano % 4 == 0 && !(ano % 100 == 0) || ano % 400 == 0) {
        document.write(`Ano: ${ano}<br>`)
} else {
    document.write(`Ano: ${ano} não é bissexto.<br>`)
}
    ano += 4
}


