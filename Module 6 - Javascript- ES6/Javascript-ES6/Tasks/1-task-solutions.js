

let total = 100;
const HST_TAX = 0.13;

const calculateTaxes = (total = 0) => {
    let result = total * HST_TAX;

    console.log(`The total tax is ${result}`)
    return result;
}

const calculateTotal = (subTotal = 0) => {
    let taxes = calculateTaxes(subTotal);
    let result = subTotal + taxes;

    console.log(`The total is : ${result}`);
    return result;
}

calculateTotal();