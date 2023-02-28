/*8º  Jogador 1 digita um número;
      Jogador 2 digita outro número;
      Se forem iguais, mostrar mensagem "Empate";
      Senão, sortear um número entre 0 e 1;
      Se o número sorteado for 0, ganha quem escolher o número MENOR;
      Se o número sorteado for 1, ganha quem escolher o número MAIOR;*/


  let num1 = Number(prompt("Jogador 01: Digite um número."))
  let num2 = Number(prompt("Jogador 02: Digite um número."))
  if(num1 == num2) {
        document.write("Empataram!")
  } else {
        let random = parseInt(Math.random() * 2)
        if(random == 0 && num1 < num2) {
            document.write("O jogador 01 venceu")
        } else if(random == 0 && num2 < num1) {
            document.write("O jogador 02 venceu")
        } else if(random == 1 && num1 > num2) {
            document.write(`O jogador 01 venceu`)
        } else if(random == 1 && num2 > num1) {
            document.write(`O jogador 02 venceu`)
        } else {
            document.write("Dados inválidos")
        }
  }

