const args = process.argv;
const size = parseInt(args[2], 10);

if (isNaN(size)) {
    console.log("Missing size");
} else {
    let i = 0;
    while (i < size) {
        let line = "";
        let j = 0;
        while (j < size) {
            line += "X";
            j++;
        }
        console.log(line);
        i++;
    }
}
