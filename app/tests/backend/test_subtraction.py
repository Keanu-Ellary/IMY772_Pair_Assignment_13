import pytest

from backend.features.arithmetic_calculation.subtraction import (perform_subtraction, valid_hexadecimal)

def test_valid_subtraction_mix_inputs():
    assert perform_subtraction("A", "5") == "5"

def test_valid_subtraction_simple():
    assert perform_subtraction("5", "5") == "0"

def test_valid_subtraction_complex():
    assert perform_subtraction("F", "A") == "5"

def test_valid_subtraction_two_digits():
    assert perform_subtraction("99", "32") == "67"

def test_valid_hexadecimal():
    res = valid_hexadecimal("1F")
    assert res == True
    
def test_invalid_hexadecimal():
    res = valid_hexadecimal("1FF")
    assert res == False