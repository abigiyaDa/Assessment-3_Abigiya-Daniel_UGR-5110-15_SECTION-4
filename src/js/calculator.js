const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = ''; // Stores the current input
let operatorPressed = false; // Tracks if the last button pressed was an operator

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        const buttonId = button.id;

        if (buttonId === 'clear') {
            // Clear button: reset everything
            currentInput = '';
            display.value = '';
            return;
        }

        if (buttonId === 'equals') {
            // Evaluate the expression
            try {
                currentInput = eval(currentInput);
                display.value = currentInput;
            } catch (error) {
                display.value = 'Error';
                currentInput = '';
            }
            return;
        }

        if (value) {
            if (['+', '-', '*', '/'].includes(value)) {
                // If the last character is an operator, replace it with the new operator
                if (operatorPressed) {
                    currentInput = currentInput.slice(0, -1); // Remove the last operator
                }
                operatorPressed = true; // Mark that the last pressed button was an operator
            } else {
                operatorPressed = false; // Reset if the value is not an operator
            }

            // Update the input and display
            currentInput += value;
            display.value = currentInput;
            
            display.scrollLeft = display.scrollWidth;
        }
    });
});
