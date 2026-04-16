import re

def perform_subtraction(value_one, value_two):
    if not valid_hexadecimal(value_one) or not valid_hexadecimal(value_two):
        raise ValueError("Input for subtraction must be a valid hexadecimal bewteen 1 and 2 digits")

    numOne = int(value_one, 16)
    numTwo = int(value_two, 16)

    res = numOne - numTwo

    # check if output is negative
    if res < 0:
        raise ValueError("Output of subtraction must not be negative")
    
    hex_res = hex(res)[2:].upper()

    # check if output is greater than 4 digits
    if len(hex_res) > 4:
        raise ValueError("Output is greater than 4 digits")
    
    return hex_res

def valid_hexadecimal(value):
    if len(value) == 0 or len(value) > 2:
        return False

    hex_pattern = r"^[0-9A-Fa-f]+$"
    return bool(re.match(hex_pattern, value))