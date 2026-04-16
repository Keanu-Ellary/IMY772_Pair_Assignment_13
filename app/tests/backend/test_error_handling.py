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


def test_handle_invalid_input():
    with pytest.raises(ValueError):
        handle_input("1F +")
        
def test_handle_empty_input():
    with pytest.raises(ValueError):
        handle_input("")

def test_is_invalid_digit_amount():
    with pytest.raises(ValueError):
        handle_output("1F1F1")
    
def test_is_no_digit_amount():
    with pytest.raises(ValueError):
        handle_output("")
    
def test_is_negative():
    with pytest.raises(ValueError):
        handle_output("-1")
    
def test_contains_decimal_places():
    with pytest.raises(ValueError):
        handle_output("1.0")
        
def test_empty_addition():
    with pytest.raises(ValueError):
        perform_addition("", "B78")
        
def test_invalid_addition():
    with pytest.raises(ValueError):
        perform_addition("1FF", "B78")
        
def test_empty_division():
    with pytest.raises(ValueError):
        perform_division("", "B78")
        
def test_invalid_division():
    with pytest.raises(ValueError):
        perform_division("1FF", "B78")
        
def test_division_by_zero():
    with pytest.raises(ValueError):
        perform_division("1FF", "0")

def test_output_too_long():
    with pytest.raises(ValueError):
        perform_multiplication("FFFF", "FF")

def test_invalid_hex_number():
    with pytest.raises(ValueError):
        perform_multiplication("Z", "2")

def test_invalid_input():
    with pytest.raises(ValueError):
        perform_multiplication("123", "2")

def test_negative_result():
    with pytest.raises(ValueError):
        perform_subtraction("5", "A")

def test_invalid_hex_number():
    with pytest.raises(ValueError):
        perform_subtraction("G", "1")

def test_invalid_input():
    with pytest.raises(ValueError):
        perform_subtraction("ABC", "1")

def test_no_decimal():
    result = perform_multiplication("2", "2")
    assert "." not in result

def test_output_too_long():
    with pytest.raises(ValueError):
        perform_subtraction("FFFF", "1")