import pytest

from backend.features.arithmetic_calculation.division import (
    perform_division,
    valid_hexadecimal
)

def test_valid_division_simple():
    res = perform_division("1", "1")
    assert res ==  "1"
    
def test_valid_division_mix_inputs():
    res = perform_division("A", "2")
    assert res ==  "5"
    
def test_valid_division_two_digits():
    res = perform_division("20", "10")
    assert res ==  "2"
    
def test_valid_division_complex():
    res = perform_division("C8", "0A")
    assert res ==  "14"
    
def test_valid_hexadecimal():
    res = valid_hexadecimal("1F")
    assert res == True
    
def test_invalid_hexadecimal():
    res = valid_hexadecimal("1FF")
    assert res == False
    