import pytest

from backend.features.output_handling import (
    handle_output,
    has_valid_digit_amount,
    is_negative,
    contains_decimal_values
)

def test_is_valid_digit_amount_output():
    res = handle_output("1F")
    assert res == "1F"
    
def test_is_positive_output():
    res = handle_output("1")
    assert res == "1"
    
def test_contains_decimal_places_output():
    res = handle_output("1")
    assert res == "1"
    
def test_is_valid_digit_amount():
    res = has_valid_digit_amount("1F")
    assert res == True
    
def test_is_invalid_digit_amount():
    res = has_valid_digit_amount("1F1F1")
    assert res == False
    
def test_is_empty_digit_amount():
    res = has_valid_digit_amount("")
    assert res == False
    
def test_is_negative():
    res = is_negative("-1")
    assert res == True
    
def test_is_positive():
    res = is_negative("1")
    assert res == False
    
def test_contains_decimal_places():
    res = contains_decimal_values("1.0")
    assert res == True
    
def test_no_decimal_places():
    res = contains_decimal_values("1")
    assert res == False
    
    
    