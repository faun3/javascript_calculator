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

let displayValue = 1234567;

const display = document.querySelector('.calcDisplay');
display.textContent = `${displayValue}`;

displayValue = 12;
let clearButton = document.querySelector('.operations button.clear');
console.log(clearButton);
clearButton.addEventListener('click', () => {
    displayValue++;
    refreshDisplay(displayValue);
});