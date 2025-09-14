const args = process.argv;

const num = parseInt(args[2], 10);

if (!isNaN(num)) {
    console.log("My number: " + num);
} else {
    console.log("Not a number");
}
