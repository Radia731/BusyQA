// let totalAmount = 100;
// console.log(applyDiscountCode(totalAmount, 'SAVE10')); // Output: 90 (10% discount)
// console.log(applyDiscountCode(totalAmount, 'SAVE20')); // Output: 80 (20% discount)
// console.log(applyDiscountCode(totalAmount, 'UNKNOWN')); // Output: 100 (no discount)


function applyDiscountCode(total, discountCode) {
    switch (discountCode) {
        case 'SAVE10':
            return total - total * 0.1; // Apply 10% discount
        case 'SAVE20':
            return total - total * 0.2; // Apply 20% discount
        // Add more cases for other discount codes here
        default:
            return total; // No discount applied for unknown codes
    }
}

