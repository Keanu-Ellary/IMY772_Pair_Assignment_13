import re

def perform_division(value_one, value_two):
    if not valid_hexadecimal(value_one) or not valid_hexadecimal(value_two):
        raise ValueError("Input for addition must be a valid hexadecimal bewteen 1 and 2 digits")
    
    decimal_one = int(value_one, 16)
    decimal_two = int(value_two, 16)
    
    if decimal_two == 0:
        raise ValueError("Division by 0 is not allowed")
    
    result_decimal = decimal_one // decimal_two
    
    final_result = hex(result_decimal)[2:].upper()
    
    return final_result

def valid_hexadecimal(value):
    if len(value) == 0 or len(value) > 2:
        return False

    hex_pattern = r"^[0-9A-Fa-f]+$"
    return bool(re.match(hex_pattern, value))