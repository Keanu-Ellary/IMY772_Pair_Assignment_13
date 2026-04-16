import re

def perform_multiplication(value_one, value_two):
    if not valid_hexadecimal(value_one) or not valid_hexadecimal(value_two):
        raise ValueError("Input for multiplication must be a valid hexadecimal bewteen 1 and 2 digits")

    numOne = int(value_one, 16)
    numTwo = int(value_two, 16)

    res = numOne * numTwo
    
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