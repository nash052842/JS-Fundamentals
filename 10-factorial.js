const args = process.argv;

function factorial(n) {
    if (n <= 1 || isNaN(n)) {
        return 1;
    }
    return n * factorial(n - 1);
}

const num = parseInt(args[2], 10);
console.log(factorial(num));
