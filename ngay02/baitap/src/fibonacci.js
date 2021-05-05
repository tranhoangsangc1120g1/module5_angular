// happy coding
let fibonacci = [0, 1];
function fibonacciList(n) {
    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci;
}
console.log(fibonacciList(10));
