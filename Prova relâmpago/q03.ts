//Faça um programa que imprima se um determinado número faz parte ou não da sequência de Fibonacci

var num = 21;
var lim = 100
var fibonacci: number[] = [0, 1];
var a: boolean = false;

for (let i = 2; i < lim; i++){
    fibonacci.push(fibonacci[i-2]+fibonacci[i-1]);
}

for(let j = 0; j < lim; j++) {
    if (num == fibonacci[j]){
        a = true;
        break;
    }
}

if (a == true) {
    console.log(num + " faz parte da sequência de Fibonacci");
}
else {
    console.log(num + " não faz parte da sequência de Fibonacci");
}