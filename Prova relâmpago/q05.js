//Um funcionário trabalha de segunda a sexta, de 8 até 11:59 e de 14 até 17:59. Às 17:59 é pra
//ele ainda trabalhar! No sábado ele trabalha apenas de 8 até 11:59.
//O chefe cansou de tentar decorar isso tudo e deu 15 contos pra você fazer um código que lê o dia
//da semana, a hora e o minuto e informa ao chefe se ainda é pro funcionário trabalhar!
//Entrada
//• É formada por uma variável inteira representando o dia (1 = DOM, 2 = SEG, 3 = TER, 4 =
//QUA, 5 =QUI, 6 = SEX, 7 = SAB) e mais duas variáveis inteiras representando hora e
//minuto.
//Saída
//• Deve ser SIM se ele deve está trabalhando ou NAO se ele não deve está trabalhando.
var dia = 7, hora = 15, minuto = 59;
if (dia > 2 && dia < 7) {
    if ((hora >= 8 && hora <= 11) || (hora >= 14 && hora <= 17)) {
        if (minuto >= 0 && minuto <= 59) {
            console.log("Sim.");
        }
        else {
            console.log("não.");
        }
    }
    else {
        console.log("não.");
    }
}
else if (dia == 7) {
    if (hora >= 8 && hora <= 11) {
        if (minuto >= 0 && minuto <= 59) {
            console.log("Sim.");
        }
        else {
            console.log("não.");
        }
    }
    else {
        console.log("não.");
    }
}
else {
    console.log("não.");
}
