function operate(operator, num1, num2) {

}

const display = document.querySelector('#divDisplay');

document.querySelectorAll('button').forEach(element => {
    element.addEventListener('click', function() {
        // console.log(element.textContent);
        display.textContent += element.textContent;
    })
})