import pytest

from backend.features.arithmetic_calculation.multiplication import (perform_multiplication, valid_hexadecimal)

def test_valid_multiplication():
    assert perform_multiplication("A", "2") == "20"

def test_valid_multiplication():
    assert perform_multiplication("20", "10") == "200"

def test_valid_multiplication():
    assert perform_multiplication("A", "F") == "160"

def test_valid_multiplication():
    assert perform_multiplication("A", "4") == "28"

def test_valid_hexadecimal():
    res = valid_hexadecimal("1F")
    assert res == True
    
def test_valid_hexadecimal():
    res = valid_hexadecimal("1FF")
    assert res == False