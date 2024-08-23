function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    throw new Error("Divison by Zero!");
  }
  return a / b;
}

function calculate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      throw new Error("Invalid Operator");
  }
}
try {
  console.log("addition:", calculate("+", 5, 3));
  console.log("subtraction:", calculate("-", 10, 3));
  console.log("multiplication:", calculate("*", 7, 3));
  console.log("division:", calculate("/", 12, 3));
  console.log("division:", calculate("/", 5, 0));
} catch (error) {
  console.log(error.message);
}
