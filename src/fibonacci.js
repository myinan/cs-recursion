// Fibonacci iterative
function fibonacciIterate(num) {
  const fibArr = [0, 1];
  for (let i = 2; i < num; i += 1) {
    const a = fibArr[i - 2];
    const b = fibArr[i - 1];
    const c = a + b;
    fibArr.push(c);
  }
  return fibArr;
}

console.log(fibonacciIterate(8));

// Fibonacci recursive
function fibonacciArray(n) {
  const result = [];

  function calculateFibonacci(i) {
    if (i <= 1) {
      return i;
    }
    return calculateFibonacci(i - 1) + calculateFibonacci(i - 2);
  }

  for (let i = 0; i < n; i += 1) {
    result.push(calculateFibonacci(i));
  }

  return result;
}

const fibArray = fibonacciArray(8);
console.log(fibArray);
