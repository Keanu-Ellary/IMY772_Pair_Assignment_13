from backend.features.arithmetic_calculation.addition import (
    perform_addition
)
from backend.features.arithmetic_calculation.subtraction import (
    perform_subtraction
)
from backend.features.arithmetic_calculation.division import (
    perform_division
)
from backend.features.arithmetic_calculation.multiplication import (
    perform_multiplication
)

from backend.features.input_handling import(
    handle_input
)
from backend.features.output_handling import(
    handle_output
)

def calculate(user_input):
    try:
        value_one, operator, value_two = handle_input(user_input)
        match operator:
            case "+":
                result = perform_addition(value_one, value_two)
            case "-":
                result = perform_subtraction(value_one, value_two)
            case "/":
                result = perform_division(value_one, value_two)
            case "*":
                result = perform_multiplication(value_one, value_two)
                
        final_result = handle_output(result)
        
        return final_result
    except Exception as e:
        raise
    