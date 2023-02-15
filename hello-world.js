console.log("Helo World!");
console.log("Oi, cara de boi");

let ladoA = 1;
let ladoB = 1;
let ladoC = 2;
let ladoD = 2;


if (ladoA === ladoB) {
    if (ladoB === ladoC) {
        if (ladoC === ladoD) {
            console.log("É quadrado")
        } else {
            console.log("Não é quadrado")
        }
    } else {
        console.log("Não é quadrado")
    }
} else {
    console.log("Não é quadrado")
}