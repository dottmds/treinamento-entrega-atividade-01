import leia from 'readline-sync'

var kwhGasto = leia.questionFloat("INFORME KWh GASTO: ");
var temTS = leia.keyInYN("TEM TARIFA SOCIAL? ");

var valorPagar = 0;

if(kwhGasto <= 100) {
    valorPagar = kwhGasto * 0.60;
} else if(kwhGasto > 100 && kwhGasto <= 300) {
    valorPagar = kwhGasto * 0.75;
} else {
    valorPagar = kwhGasto * 0.90;
}

var valorFinal = (temTS === true) ? valorPagar - (valorPagar * 0.20) : valorPagar;
console.log("VALOR FINAL A PAGAR: R$" + valorFinal);