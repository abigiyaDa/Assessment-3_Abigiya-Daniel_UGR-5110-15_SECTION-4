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
                // Prevent consecutive operators
                if (operatorPressed) return;
                operatorPressed = true;
            } else {
                operatorPressed = false;
            }

            // Update the input and display
            currentInput += value;
            display.value = currentInput;
        }
    });
});
