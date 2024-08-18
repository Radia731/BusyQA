function applyDiscountCode(total, discountCode) {
  debugger;
  switch (discountCode) {
    case "SAVE10":
      return total - total * 0.1; // Apply 10% discount
    case "SAVE20":
      return total - total * 0.2; // Apply 20% discount
    // Add more cases for other discount codes here
    default:
      return total; // No discount applied for unknown codes
  }
}
let total = 100;

console.log(applyDiscountCode(total, "SAVE10"));
console.log(applyDiscountCode(total, "SAVE20"));
console.log(applyDiscountCode(total, "UNKNOWN"));
