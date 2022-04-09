//Faça um programa que dado dois pontos no plano X,Y, calcule a distância entre os dois pontos.

let xa:number = 0, xb: number = 3, ya: number = 0, yb: number = 4, D: number = 0;

D = Math.sqrt(Math.pow((xb - xa),2) + Math.pow((yb - ya),2));

console.log(D);