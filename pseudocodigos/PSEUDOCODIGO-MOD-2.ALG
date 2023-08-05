Algoritmo "Pseudocodigo-mod-2"

Var
   origem, destino, nomes: vetor[1..5] de caractere
   i,opcao:inteiro
Inicio
   escreval("Olá, seja bem-vindo(a) a HP Viagens. Escolha uma opção abaixo")
   repita
      escreval("Digite 1 para cadastrar clientes")
      escreval("Digite 2 para ver a lista de clientes cadastrados")
      escreval("Digite 3 para cadastrar origem e destino do cliente")
      escreval("Digite 4 para ver a origem e o destino do cliente")
      escreval("Digite 5 para sair...")
      leia(opcao)

      escolha(opcao)
      caso 1
         escreval("Vamos iniciar seu cadastro!")
         para i de 1 ate 5 faca
            escreval("Digite seu nome e sobrenome: ")
            leia(nomes[i])
         fimpara
      caso 2
            escreval("Temos os clientes: ")
         para i de 1 ate 5 faca
            escreval(nomes[i])
         fimpara
      caso 3
         para i de 1 ate 5 faca
            escreval("De onde está saindo ", nomes[i],"?")
            leia(origem[i])
            escreval("Para onde vai ",nomes[i],"?")
            leia(destino[i])
         fimpara
      caso 4
         para i de 1 ate 5 faca
            escreval("O cliente ",nomes[i])
            escreval("Está saindo de ",origem[i], " e indo para ",destino[i])
         fimpara
      caso 5
         escreval("Encerrando o programa...")
         opcao <- 5
      outrocaso
         escreval("Opção inválida, digite novamente!")
      fimescolha

   ate opcao = 5
Fimalgoritmo