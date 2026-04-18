import pytest

from backend.features.arithmetic_calculation.addition import (
    perform_addition,
    valid_hexadecimal
)

def test_valid_addition_simple():
    res = perform_addition("1", "1")
    assert res ==  "2"
    
def test_valid_addition_mix_inputs():
    res = perform_addition("5", "A")
    assert res ==  "F"
    
def test_valid_addition_two_digits():
    res = perform_addition("10", "10")
    assert res ==  "20"
    
def test_valid_addition_complex():
    res = perform_addition("8A", "B7")
    assert res ==  "141"
    
def test_valid_hexadecimal():
    res = valid_hexadecimal("1F")
    assert res == True
    
def test_invalid_hexadecimal():
    res = valid_hexadecimal("1FF")
    assert res == False
    