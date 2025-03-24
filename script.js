function operate(operator, num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
    }
}

const display = document.querySelector('#divDisplay');
let operator = '';
let num1 = 0;
let num2 = 0;

document.querySelectorAll('.numKey').forEach(element => {
    element.addEventListener('click', function() {
        // console.log(element.textContent);
        display.textContent += element.textContent;
    })
})

document.querySelectorAll('.opKey').forEach(element => {
    element.addEventListener('click', function() {
        // console.log(element.textContent);

        operator = element.textContent;
        num1 = display.textContent;
        display.textContent += element.textContent;
    
            console.log(num1);
            console.log(operator);
            console.log(display.textContent)
    })
})

document.querySelectorAll('#btnClear').forEach(element => {
    element.addEventListener('click', function() {
        // console.log(element.textContent);
        operator = '';
        num1 = 0;
        num2 = 0;
        display.textContent = '';
    })
})

document.querySelectorAll('#btnEqual').forEach(element => {
    element.addEventListener('click', function() {
        // console.log(element.textContent);
        string = display.textContent;
        const displayValues = string.split(operator);
        num2 = displayValues[1]

            // console.log(displayValues);
            // console.log(num2);
            // console.log(operate(operator, num1, num2));

        display.textContent = operate(operator, num1, num2)
        operator = '';
        num2 = 0;
    })
})

