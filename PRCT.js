import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: Number,
        name: "numberOne",
        massage: "kindly enter your first no."
    },
    {
        type: Number,
        name: "numberTwo",
        massage: "kindly enter your second no."
    },
    {
        type: 'list',
        name: "operator",
        choices: ["*", "+", "-", "/",],
        massage: "select an operator: "
    },
]);
const { numberOne, numberTwo, operator } = answers;
if (numberOne && numberTwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = +numberOne + +numberTwo;
        //we add +with value just in case to add two num
    }
    else if (operator === "-") {
        result = numberOne - numberTwo;
    }
    if (operator === "/") {
        result = numberOne / numberTwo;
    }
    if (operator === "*") {
        result = numberOne * numberTwo;
    }
    console.log("your result is :", result);
}
else {
    console.log("please enter valid input");
}
