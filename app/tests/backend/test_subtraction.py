import pytest

from backend.features.arithmetic_calculation.subtraction import (perform_subtraction, valid_hexadecimal)

def test_valid_subtraction():
    assert perform_subtraction("A", "5") == "5"

def test_valid_subtraction():
    assert perform_subtraction("5", "5") == "0"

def test_valid_subtraction():
    assert perform_subtraction("F", "A") == "6"

def test_valid_subtraction():
    assert perform_subtraction("99", "32") == "67"

def test_valid_hexadecimal():
    res = valid_hexadecimal("1F")
    assert res == True
    
def test_valid_hexadecimal():
    res = valid_hexadecimal("1FF")
    assert res == False