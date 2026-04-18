import re

def handle_input(user_input):
    if (user_input == ""):
        raise ValueError("Input cannot be empty")
    
    "input must contain valid hexadecimals"
    input_values = user_input.strip().split()
    if len(input_values) < 3:
        raise ValueError("Input must have atleast 2 hexadecimals values and 1 operator")

    value_one, operator, value_two = input_values

    "input must include valid operator"
    if not contains_valid_operator(operator):
        raise ValueError("Invalid operator used")

    "input must be 1 or 2 digits"
    if not is_one_or_two_digits(value_one):
        raise ValueError("Input values must be 1 or 2 digits")
    if not is_one_or_two_digits(value_two):
        raise ValueError("Input values must be 1 or 2 digits")

    "input must be a valid hexadecimal"
    if not is_hexadecimal(value_one):
        raise ValueError("Input values must be a hexadecimal")
    if not is_hexadecimal(value_two):
        raise ValueError("Input values must be a hexadecimal")

    return value_one, operator, value_two

def contains_valid_operator(operator):
    valid_operators = ["+","*","-","/"]
    if operator in valid_operators:
        return True
    
    return False


def is_one_or_two_digits(hexadecimal_number):
    if len(hexadecimal_number) == 1 or len(hexadecimal_number) == 2:
        return True

    return False

def is_hexadecimal(hexadecimal_number):
    hex_pattern = r"^[0-9A-Fa-f]+$"
    return bool(re.match(hex_pattern, hexadecimal_number))
    