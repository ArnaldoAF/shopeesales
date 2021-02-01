console.log("ITS ALIVE!!!");
const readline = require('readline-sync')

var sellers = [
    "Jean-Luc Picard",
    "Benjamin Sisko",
    "Miles O'Brien",
    "Willian Riker",
    "Kathryn Janeway"
];

var sells = [];
var orderedSellers = [];

function sortSells() {
    var orderedSellers = [];
    sellers.forEach(seller => {
        var value = sells.filter(sell => sell.sellerName == seller)
            .reduce((total, sell) => total + sell.saleValue, 0);

        orderedSellers.push({
            name: seller,
            value
        })
    });

    orderedSellers.sort((a, b) => {
        if (a.value < b.value) return 1;
        if (a.value > b.value) return -1;
        return 0;
    });

    sells.sort((a, b) => {
        var sellerOrdered = orderedSellers.map(x => x.name);

        if (sellerOrdered.indexOf(a.sellerName) > sellerOrdered.indexOf(b.sellerName))
            return 1;
        if (sellerOrdered.indexOf(a.sellerName) < sellerOrdered.indexOf(b.sellerName))
            return -1;
        return 0;
    })
}

while (true) {
    var sellerName = 0;
    do {
        sellerName = readline.keyInSelect(sellers, 'Seller ID: ');
    } while (sellerName == -1);

    var customerName = readline.question("Customer's Name: ", {
        limit: (input) => input.length > 0,
        limitMessage: 'Type Something!'
    });
    var dateOfSale = readline.question('Date of Sale: ', {
        limit: (input) => input.length > 0 && !Number.isNaN(Date.parse(input)),
        limitMessage: 'Type a Valid Date!'
    });
    var saleItemName = readline.question('Sale Item Name: ', {
        limit: (input) => input.length > 0,
        limitMessage: 'Type Something!'
    });
    var saleValue = readline.questionFloat('Sale Value: ', {
        limit: (input) => input > 0,
        limitMessage: 'Must have some value!'
    });

    var saleItem = {
        sellerName: sellers[sellerName],
        customerName,
        dateOfSale,
        saleItemName,
        saleValue
    }

    sells.push(saleItem);
    sortSells();
    console.table(sells);
}