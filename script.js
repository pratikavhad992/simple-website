let display = document.getElementById('display');

// Append a character to the display
function appendToDisplay(value) {
    display.innerText += value;
}

// Clear the display
function clearDisplay() {
    display.innerText = '';
}

// Calculate the expression in the display
function calculate() {
    try {
        let result = eval(display.innerText);
        display.innerText = result;
    } catch (error) {
        display.innerText = 'Error';
    }
}
