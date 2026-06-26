import leia from 'readline-sync'

var valor = leia.questionFloat("Digite o valor da compra: R$");
var estado = leia.keyInSelect(["SP", "SC", "PR", "RS", "OUTROS"], "INFORME O DESTINO: ");

if(valor > 500) {
    console.log("VALOR DA COMPRA EH: R$:" + valor.toFixed(2) + " E O FRETE GRATIS");
} else {
    switch(estado) {
        case 0:
        case 1:
        case 2:
        case 3:
           console.log("O VALOR DA COMPRA: R$" + valor.toFixed(2) + " FRETE R$" + 400);
           break;
        case 4:
            console.log("O VALOR DA COMPRA: R$" + valor.toFixed(2) + " E O FRETE R$: + 500")
            break;
    }
}
