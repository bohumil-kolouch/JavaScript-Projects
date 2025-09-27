// Creates an object to keep track of values.
const Calculator = {
  // This will display 0 on the calculator screen.
  Display_Value: '0',
  // This will hold the first operand for any expressions; set to null for now.
  First_Operand: null,
  // This checks whether or not the second operand has been input by the user.
  Wait_Second_Operand: false,
  // This will hold the operator; set to null for now.
  operator: null,
};

// This modifies values each time a number button is clicked.
function Input_Digit(digit) {
  const { Display_Value, Wait_Second_Operand } = Calculator;

  // If waiting for second operand, replace the display with the new digit.
  if (Wait_Second_Operand === true) {
    Calculator.Display_Value = digit;
    Calculator.Wait_Second_Operand = false;
  } else {
    // Overwrite display if current value is 0, otherwise append.
    Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
  }
}

// This section handles decimal points.
function Input_Decimal(dot) {
  // Prevent adding a decimal while waiting for the second operand
  if (Calculator.Wait_Second_Operand === true) return;

  // Only add a decimal if one doesn’t already exist in the display value.
  if (!Calculator.Display_Value.includes(dot)) {
    Calculator.Display_Value += dot;
  }
}

// This section handles operators.
function Handle_Operator(Next_Operator) {
  const { First_Operand, Display_Value, operator } = Calculator;

  // Convert the current display value to a number.
  const Value_of_Input = parseFloat(Display_Value);

  // If an operator already exists and we’re waiting for the second operand,
  // update the operator and exit.
  if (operator && Calculator.Wait_Second_Operand) {
    Calculator.operator = Next_Operator;
    return;
  }

  if (First_Operand == null) {
    // No first operand yet—store current input as first operand.
    Calculator.First_Operand = Value_of_Input;
  } else if (operator) {
    // If operator exists, perform the calculation with the stored first operand.
    const Value_Now = First_Operand || 0;
    let result = Perform_Calculation[operator](Value_Now, Value_of_Input);

    // Fix floating point precision: keep a fixed amount, then normalize.
    result = Number(result).toFixed(9);
    result = (result * 1).toString();

    Calculator.Display_Value = parseFloat(result).toString();
    Calculator.First_Operand = parseFloat(result);
  }

  Calculator.Wait_Second_Operand = true;
  Calculator.operator = Next_Operator;
}

// Lookup table for performing calculations.
const Perform_Calculation = {
  '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
  '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
  '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
  '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
  '=': (First_Operand, Second_Operand) => Second_Operand,
};

// Reset calculator to initial state.
function Calculator_Reset() {
  Calculator.Display_Value = '0';
  Calculator.First_Operand = null;
  Calculator.Wait_Second_Operand = false;
  Calculator.operator = null;
}

// This function updates the calculator screen with the contents of Display_Value.
function Update_Display() {
  // Use the calculator-screen class to target the input element in the DOM.
  const display = document.querySelector('.calculator-screen');
  display.value = Calculator.Display_Value;
}

// Initialize display on load.
Update_Display();

// This section monitors button clicks.
const keys = document.querySelector('.calculator-keys');

keys.addEventListener('click', (event) => {
  // target is the element that was clicked.
  const { target } = event;

  // If the element clicked is not a button, exit.
  if (!target.matches('button')) return;

  if (target.classList.contains('operator')) {
    Handle_Operator(target.value);
    Update_Display();
    return;
  }

  if (target.classList.contains('decimal')) {
    Input_Decimal(target.value);
    Update_Display();
    return;
  }

  // Ensure AC clears all inputs from the calculator screen.
  if (target.classList.contains('all-clear')) {
    Calculator_Reset();
    Update_Display();
    return;
  }

  Input_Digit(target.value);
  Update_Display();
});
// End of JS/Calculator_Javascript.js