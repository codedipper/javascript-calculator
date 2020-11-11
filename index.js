const { createInterface } = require("readline");
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("1. Add\n2. Subtract\n3. Multiply\n4. Divide");
rl.question("\nPick a method.\n", method => {
    if (method == "1"){
        rl.question("\nEnter the first number to add.\n", num1 => {
            rl.question("\nEnter the second number to add.\n", num2 => {
                console.log(`\n${parseFloat(num1)} + ${parseFloat(num2)} = ${parseFloat(num1) + parseFloat(num2)}`);
                rl.close();
            });
        });
    } else if (method == "2"){
        rl.question("\nEnter the first number to subtract.\n", num1 => {
            rl.question("\nEnter the second number to subtract.\n", num2 => {
                console.log(`\n${parseFloat(num1)} - ${parseFloat(num2)} = ${parseFloat(num1) - parseFloat(num2)}`);
                rl.close();
            });
        });
    } else if (method == "3"){
        rl.question("\nEnter the first number to multiply.\n", num1 => {
            rl.question("\nEnter the second number to multiply.\n", num2 => {
                console.log(`\n${parseFloat(num1)} * ${parseFloat(num2)} = ${parseFloat(num1) * parseFloat(num2)}`);
                rl.close();
            });
        });
    } else if (method == "4"){
        rl.question("\nEnter the first number to divide.\n", num1 => {
            rl.question("\nEnter the second number to divide.\n", num2 => {
                console.log(`\n${parseFloat(num1)} / ${parseFloat(num2)} = ${parseFloat(num1) / parseFloat(num2)}`);
                rl.close();
            });
        });
    } else {
        console.log("\nInvalid method.");
        rl.close();
    }
});
