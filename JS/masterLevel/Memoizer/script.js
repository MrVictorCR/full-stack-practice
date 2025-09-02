"use strict";

let cache = [];

const memoizer = func => { // Guarda en el array los datos que podrian ser reutilizados

    // Esto seria mejor trabajarlo en un WebWorker

    return e => {
        const index = e.toString()
        if (cache[index] == undefined){
            cache[index] = func(e);
        }
        return cache[index];
    }

}

const hacerAlgo = num => {
    const a = 20;
    const b = 12;
    let c = 0;

    for(let i = num - 1; i >= 0; i--){
        for(let j = num - 1; j >= 0; j--){
            c+= a*b
        }
    }
    return c;
}

console.log("Sin Memo")

const date = new Date();
hacerAlgo(90000);
console.log(new Date() - date);

const date1 = new Date();
hacerAlgo(90000);
console.log(new Date() - date1);

const date2 = new Date();
hacerAlgo(90000);
console.log(new Date() - date2);

const date3 = new Date();
hacerAlgo(90000);
console.log(new Date() - date3);

console.log("Con Memo") // Los procesos repetidos tendran un Output de 0 ya que al estar almacenados ya se sabe cuanto da

const memo = memoizer(hacerAlgo)
const date4 = new Date();
memo(90000);
console.log(new Date() - date4);
const date5 = new Date();
memo(70000);
console.log(new Date() - date5);
const date6 = new Date();
memo(90000);
console.log(new Date() - date6);
const date7 = new Date();
memo(70000);
console.log(new Date() - date7);

