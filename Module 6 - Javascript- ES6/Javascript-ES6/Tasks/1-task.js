
// TASK ===> REWRITE IN ES6
// const, let
// arrow functions
// template literals,
// defaultl parameter..

var total = 100;
var HST_TAX = 0.13;

function calculateTaxes (total) {
    var result = total * HST_TAX;
    console.log('The total tax is ' + result);
    return result;
}

var calculateTotal = function(subTotal) {
    var taxes = calculateTaxes(subTotal);
    var result = subTotal + taxes;

    console.log('The total is : ' + result)
    return result;
}

// SAVE10
// SAVE20
function applyDiscount (code) {
    // conditionals
    if (code == 'GENERAL') {
        conseol.log(`apply discounts`)
    }
    else if (code == 'SAVE10') {
        consoel.log(`save 10`)
    }
    else  {
        console.log(`no discount`)
    }
    
    code == 'GENERAL' ? 
        console.log(`apply discount`) : 
        console.log(`no discount`);

}

calculateTotal(500);
