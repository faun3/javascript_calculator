function operate(operator, operand1, operand2)
{
    switch (operator){
        case "+":
            return add(operand1, operand2);
        case "-":
            return subtract(operand1, operand2);
        case "*":
            return multiply(operand1, operand2);
        case "/":
            return divide(operand1, operand2);
    }
}

function add(operand1, operand2)
{
    return (operand1 + operand2);
}

function subtract(operand1, operand2)
{
    return (operand1 - operand2);
}

function multiply(operand1, operand2)
{
    return (operand1 * operand2);
}

function divide(operand1, operand2)
{
    if (operand2 === 0){
        alert("Division by 0 is impossible!");
        console.log("Divide by 0!");
        return;
    }
    return (operand1 / operand2);
}

function refreshDisplay(displayValue)
{
    display.textContent = `${displayValue}`;
}

let displayValue = 0;
let currentValue = 0;
let operation ="";

const display = document.querySelector('.calcDisplay');
display.textContent = `${displayValue}`;

let clearButton = document.querySelector('.operations button.clear');
clearButton.addEventListener('click', () => {
    displayValue = 0;
    refreshDisplay(displayValue);
});


let digits = document.querySelectorAll('.digits > button');
for (let i = 0; i < digits.length; i++){
    digits[i].addEventListener('click', () => {
        let digitValue = parseInt(digits[i].className);
        displayValue *= 10;
        displayValue += digitValue;
        refreshDisplay(displayValue);
    });
}

let operations = document.querySelectorAll('.operations > button');
for (let i = 0; i < operations.length - 1; i++){
    console.log(operations[i]);
    if (i == 0 || i == 1){
        operations[i].addEventListener('click', () => {
            operation = operations[i].className;
            displayValue = operate(operation, displayValue, 0);
            currentValue = displayValue;
            displayValue = 0;
            refreshDisplay(displayValue);
        });
    }
    if (i == 2 || i == 3){
        operations[i].addEventListener('click', () => {
            operation = operations[i].className;
            displayValue = operate(operation, displayValue, 1);
            currentValue = displayValue;
            displayValue = 0;
            refreshDisplay(displayValue);
        });
    }
    if (i == 4){
        operations[i].addEventListener('click', () => {
            displayValue = operate(operation, currentValue, displayValue);
            refreshDisplay(displayValue);
        });
    }
}