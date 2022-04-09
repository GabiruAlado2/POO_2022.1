//Faça um programa que dado um vetor (lista) de números inteiros, imprima apenas os elementos
//que são maiores ou iguais a média aritmética dos elementos do mesmo vetor.
var A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var soma = 0;
for (var i = 0; i < A.length; i++) {
    soma += A[i];
}
var media = soma / A.length;
for (var j = 0; j < A.length; j++) {
    if (A[j] >= media) {
        console.log(A[j]);
    }
}
