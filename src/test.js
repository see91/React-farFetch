function getPrice() {
    let price = '';
    let a = Math.round(Math.random() * (5 - 4) + 4);
    for (var i = 0; i < a; i++) {
        price += Math.round(Math.random() * (9 - 0) + 0);
    }
    return price
}

let price = getPrice();

