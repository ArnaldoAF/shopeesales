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
    console.table(sells);
}