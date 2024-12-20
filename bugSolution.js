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
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function operate(operator, a, b) {
  if (typeof operator !== 'string') {
    throw new Error('Operator must be a string');
  }
  operator = operator.trim(); //remove extra spaces
  if (operator === '+') {
      return add(a, b);
  } else if (operator === '-') {
      return subtract(a, b);
  } else if (operator === '*') {
      return multiply(a, b);
  } else if (operator === '/') {
      return divide(a, b);
  } else {
    throw new Error('Invalid operator');
  }
}

console.log(operate('+', 5, 3)); // Output: 8
console.log(operate('-', 5, 3)); // Output: 2
console.log(operate('*', 5, 3)); // Output: 15
console.log(operate('/', 5, 0)); // Throws an error: Cannot divide by zero
console.log(operate('%', 5, 3)); //Throws an error: Invalid operator
