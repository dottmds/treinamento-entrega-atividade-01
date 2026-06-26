import leia from 'readline-sync'

var vitorias = leia.question("INFORME O NUMERO DE VITORIAS: ") * 3
var empates = leia.question("INFORME O NUMERO DE EMPATES: ") * 1
var derrotas = leia.question("INFORME O NUMERO DE DERROTAS: ") * 0

var pontuacao = vitorias + empates + derrotas

if(pontuacao >= 70) {
    console.log("CAMPEAO!!!")
} else if(pontuacao > 4) {
    console.log("CLASSIFICADO!!!")
} else {
    console.log("REBAIXADO!!!")
}