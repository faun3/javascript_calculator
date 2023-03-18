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
    
    if (parseInt(displayValue.toFixed(2)) !== displayValue){
        displayValue = parseFloat(displayValue.toPrecision(5));
    }

    if (displayValue === 0){
        display.TextContent = "";
    }
    else{
        display.textContent = `${displayValue}`;
    }
}

let displayValue = 0;
let currentValue = 0;
let operation ="";
let pastOperation = "";
let currentOperation = "";

const display = document.querySelector('.calcDisplay');
display.textContent = `${displayValue}`;

let clearButton = document.querySelector('.operations button.clear');
clearButton.addEventListener('click', () => {
    displayValue = 0;
    currentValue = 0;
    display.textContent = "";
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
    if (i === 0 || i === 1){
        operations[i].addEventListener('click', () => {
            if (pastOperation === ""){
                pastOperation = operations[i].className;
                currentOperation = pastOperation;
            }
            else{
                currentOperation = operations[i].className;
            }
            displayValue = operate(pastOperation, currentValue, displayValue);
            currentValue = displayValue;
            displayValue = 0;
            refreshDisplay(currentValue);
            pastOperation = currentOperation;
        });
    }
    if (i === 2 || i === 3){
        operations[i].addEventListener('click', () => {
            if (pastOperation === ""){
                pastOperation = operations[i].className;
                currentOperation = pastOperation;
            }
            else{
                currentOperation = operations[i].className;
            }
            if (!currentValue){
                currentValue = displayValue;
                displayValue = 0;
                refreshDisplay(currentValue);
            }
            else{
                displayValue = operate(pastOperation, currentValue, displayValue);
                currentValue = displayValue;
                displayValue = 0;
                refreshDisplay(currentValue);
            }
            pastOperation = currentOperation;
        });
    }
    if (i === 4){
        operations[i].addEventListener('click', () => {
            if (pastOperation !== ""){
                displayValue = operate(pastOperation, currentValue, displayValue);
                refreshDisplay(displayValue);
                currentValue = displayValue;
                displayValue = 0;
            }
        });
    }
}