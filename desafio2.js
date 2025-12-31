function saldo (vitoria, derrota){
    return vitoria - derrota
}

let result = saldo(105, 2);
let nivel;
    if (result <= 10){
    	nivel = "Ferro"
    } else if (result <= 20){
        nivel = "Bronze"
    } else if (result <= 50){
        nivel = "Prata"
    } else if (result <= 80){
        nivel = "Ouro"
    } else if (result <= 90){
        nivel = "Diamante"
    } else if (result <= 100){
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }

console.log("O Héroi tem de saldo de " + result + " está no nível " + nivel)