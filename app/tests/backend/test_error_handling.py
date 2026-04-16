import pytest

from backend.features.input_handling import (
    handle_input,
)
from backend.features.output_handling import (
    handle_output,
)
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
from backend.calculator import (
    calculate
)


def test_handle_invalid_input():
    with pytest.raises(ValueError) as error:
        handle_input("1F +")
    assert str(error.value) == "Input must have atleast 2 hexadecimals values and 1 operator"
        
def test_handle_empty_input():
    with pytest.raises(ValueError) as error:
        handle_input("")
    assert str(error.value) == "Input must have atleast 2 hexadecimals values and 1 operator"

def test_is_invalid_digit_amount():
    with pytest.raises(ValueError) as error:
        handle_output("1F1F1")
        
    assert str(error.value) == "Output too large to return"
    
def test_is_no_digit_amount():
    with pytest.raises(ValueError) as error:
        handle_output("")
    assert str(error.value) == "Output too large to return"
    
def test_is_negative():
    with pytest.raises(ValueError) as error:
        handle_output("-1")
    assert str(error.value) == "Output cannot be negative"
    
def test_contains_decimal_places():
    with pytest.raises(ValueError) as error:
        handle_output("1.0")
    assert str(error.value) == "Output cannot contain decimal values"
    
def test_empty_addition():
    with pytest.raises(ValueError) as error:
        perform_addition("", "B78")
    assert str(error.value) == "Input for addition must be a valid hexadecimal bewteen 1 and 2 digits"
    
def test_invalid_addition():
    with pytest.raises(ValueError) as error:
        perform_addition("1FF", "B78")
    assert str(error.value) == "Input for addition must be a valid hexadecimal bewteen 1 and 2 digits"
    
def test_empty_division():
    with pytest.raises(ValueError) as error:
        perform_division("", "B78")
    assert str(error.value) == "Input for division must be a valid hexadecimal bewteen 1 and 2 digits"
    
def test_invalid_division():
    with pytest.raises(ValueError) as error:
        perform_division("1FF", "B78")
    assert str(error.value) == "Input for division must be a valid hexadecimal bewteen 1 and 2 digits"
    
def test_division_by_zero():
    with pytest.raises(ValueError) as error:
        perform_division("1FF", "0")
    assert str(error.value) == "Input for division must be a valid hexadecimal bewteen 1 and 2 digits"
    
def test_output_too_long():
    with pytest.raises(ValueError) as error:
        perform_multiplication("FFFF", "FF")
    assert str(error.value) == "Input must have atleast 2 hexadecimals values and 1 operator"
    
def test_invalid_hex_number():
    with pytest.raises(ValueError) as error:
        perform_multiplication("Z", "2")
    assert str(error.value) == "Input must have atleast 2 hexadecimals values and 1 operator"
    
def test_invalid_input():
    with pytest.raises(ValueError) as error:
        perform_multiplication("123", "2")
    assert str(error.value) == "Input must have atleast 2 hexadecimals values and 1 operator"
    
def test_negative_result():
    with pytest.raises(ValueError) as error:
        perform_subtraction("5", "A")
    assert str(error.value) == "Output of subtraction must not be negative"
    
def test_invalid_hex_number():
    with pytest.raises(ValueError) as error:
        perform_subtraction("G", "1")
    assert str(error.value) == "Input for subtraction must be a valid hexadecimal bewteen 1 and 2 digits"
    
def test_invalid_input():
    with pytest.raises(ValueError) as error:
        perform_subtraction("ABC", "1")
    assert str(error.value) == "Input for subtraction must be a valid hexadecimal bewteen 1 and 2 digits"
    
def test_no_decimal():
    result = perform_multiplication("2", "2")
    assert "." not in result
   
def test_output_too_long():
    with pytest.raises(ValueError) as error:
        perform_subtraction("FFFF", "1")
    assert str(error.value) == "Input for subtraction must be a valid hexadecimal bewteen 1 and 2 digits"
        
"Calculate"
def test_calculate_invalid_input():
    with pytest.raises(ValueError) as error:
        calculate("1F +")
    assert str(error.value) == "Input must have atleast 2 hexadecimals values and 1 operator"
        
def test_calculate_empty_input():
    with pytest.raises(ValueError) as error:
        calculate("")
    assert str(error.value) == "Input must have atleast 2 hexadecimals values and 1 operator"
    
def test_calculate_is_negative():
    with pytest.raises(ValueError) as error:
        calculate("4 - 5")
    assert str(error.value) == "Output of subtraction must not be negative"
    
def test_calculate_contains_decimal_places():
    with pytest.raises(ValueError) as error:
        calculate("1 / 4")
    assert str(error.value) == "Decimal results not allowed"
        
def test_calculate_invalid_addition():
    with pytest.raises(ValueError) as error:
        calculate("1FF + B78")
    assert str(error.value) == "Input values must be 1 or 2 digits"
        
def test_calculate_invalid_division():
    with pytest.raises(ValueError) as error:
        calculate("1FF / B78")
    assert str(error.value) == "Input values must be 1 or 2 digits"
        
def test_calculate_division_by_zero():
    with pytest.raises(ValueError) as error:
        calculate("1FF / 0")
    assert str(error.value) == "Input values must be 1 or 2 digits"


