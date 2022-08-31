let balance = 1000;
let beer = 100;
let wine = 50;
let pepsi = 80;
let sum = 0;

function addBeer(number) {
    beer -= number;
    balance += number * 50;
    sum += number * 50;
    return beer;
}

function addWine(number) {
    wine -= number;
    balance += number * 150;
    sum += number * 50;
    return wine;
}

function addPepsi(number) {
    pepsi -= number;
    balance += number * 40;
    sum += number * 50;
    return pepsi;
}
export {
    addBeer,
    addPepsi,
    addWine,
    balance,
    beer,
    wine,
    pepsi,
    sum
}