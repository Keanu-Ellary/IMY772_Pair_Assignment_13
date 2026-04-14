import pytest

from backend.features.input_handling import (
    handle_input
)
from backend.features.output_handling import (
    handle_output,
)
from app.backend.features.arithmetic_calculation.addition import (
    perform_addition
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