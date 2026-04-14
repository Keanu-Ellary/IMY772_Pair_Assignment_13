import pytest

from backend.features.input_handling import (
    handle_input,
    contains_valid_operator,
    is_one_or_two_digits,
    is_hexadecimal
)

def test_contains_valid_operator():
    res = contains_valid_operator("+")
    assert res == True

def test_does_not_contain_operator():
    res = contains_valid_operator("=")
    assert res == False

def test_is_one_or_two_digits():
    res = is_one_or_two_digits("1F")
    assert res == True

def test_not_one_or_two_digits():
    res = is_one_or_two_digits("1F0")
    assert res == False

def test_is_hexadecimal():
    res = is_hexadecimal("1F")
    assert res == True

def test_is_not_hexadecimal():
    res = is_hexadecimal("IF")
    assert res == False
    
def test_handle_valid_input():
    res = handle_input("1F + 2F")
    assert res ==   ("1F", "+", "2F")
    
def test_handle_invalid_input():
    with pytest.raises(ValueError):
        handle_input("1F +")
        
def test_handle_empty_input():
    with pytest.raises(ValueError):
        handle_input("")
        
    
