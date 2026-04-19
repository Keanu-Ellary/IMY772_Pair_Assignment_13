import pytest

from backend.features.arithmetic_calculation.multiplication import (perform_multiplication, valid_hexadecimal)

def test_valid_multiplication_simple():
    assert perform_multiplication("1", "2") == "2"

def test_valid_multiplication_two_digits():
    assert perform_multiplication("20", "10") == "200"

def test_valid_multiplication_complex():
    assert perform_multiplication("A", "F") == "96"

def test_valid_multiplication_mix_inputs():
    assert perform_multiplication("A", "4") == "28"

def test_valid_hexadecimal():
    res = valid_hexadecimal("1F")
    assert res == True
    
def test_invalid_hexadecimal():
    res = valid_hexadecimal("1FF")
    assert res == False