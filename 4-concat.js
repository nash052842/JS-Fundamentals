const args = process.argv;

const firstArg = args[2] || "No first argument";
const secondArg = args[3] || "No second argument";

console.log(firstArg + " is " + secondArg);
