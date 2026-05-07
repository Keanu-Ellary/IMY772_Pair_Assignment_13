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

def calculate_multiple(user_input):
    user_input_data = user_input.strip().split()

    try:
        if len(user_input_data) <3:
            return calculate(user_input)
        
        is_combined_value = False

        while len(user_input_data) > 1:
            expr = " ".join(user_input_data[:3])

            result = calculate(expr, is_combined_value)

            user_input_data = [result] + user_input_data[3:]
            is_combined_value = True

        return user_input_data[0]
    except Exception as e:
        raise

def calculate(user_input, has_combined_value):
    try:
        value_one, operator, value_two = handle_input(user_input, has_combined_value)
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
    