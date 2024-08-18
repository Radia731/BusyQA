
// GLOBAL 
const HST_TAX = 0.13;
const QST_TAX = 0.09;

function isNumber(value) {
    return typeof value === 'number';
}

// default parameters..
function calculateTotal(items = 5, price = 100, discount = 0) {


    // check for number
    if (!isNumber(items) && !isNumber(price) || discount === null) {
        window.alert(`Error not a number`);

        // exit
        return 0;
    }
    else {
        // alert This is a valid number...
    }

    console.log(`items ` + items)
    // camel cased...variable name
    var subTotal = items * price;

    var tax = subTotal * HST_TAX;  // null ==> 0
    var total = tax + subTotal;

    return total;

};
