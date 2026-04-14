import pytest

from backend.features.arithmetic_calculation.division import (
    perform_division,
    valid_hexadecimal
)

def test_valid_division():
    res = perform_division("1", "1")
    assert res ==  "1"
    
def test_valid_division():
    res = perform_division("6", "3")
    assert res ==  "2"
    
def test_valid_division():
    res = perform_division("20", "2")
    assert res ==  "10"
    
def test_valid_division():
    res = perform_division("8A", "B7")
    assert res ==  "0"
    
def test_valid_hexadecimal():
    res = valid_hexadecimal("1F")
    assert res == True
    
def test_valid_hexadecimal():
    res = valid_hexadecimal("1FF")
    assert res == False
    