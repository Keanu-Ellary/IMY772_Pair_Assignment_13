def handle_output(output):
    if not has_valid_digit_amount(output):
        raise ValueError("Output too large to return")
    
    if is_negative(output):
        raise ValueError("Output cannot be negative")
    
    if contains_decimal_values(output):
        raise ValueError("Output cannot contain decimal values")
    
    return output
    
def has_valid_digit_amount(value):
    if len(value) > 4 or len(value)==0:
        return False
    return True
    
def is_negative(value):
    if value.startswith("-"):
        return True
    return False
    
def contains_decimal_values(value):
    if "." in value:
        return True
    return False