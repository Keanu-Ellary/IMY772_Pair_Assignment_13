import { describe, test, expect, vi } from 'vitest'

describe("API Integration", () => {
    // Addition
    test('Performs Addition Successfully: Simple Inputs', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "2 + 3"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(true);
        expect(data.result).toBe("5");
    });
    test('Performs Addition Successfully: Mixed Inputs', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "A + 3"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(true);
        expect(data.result).toBe("D");
    });
    test('Performs Addition Successfully: Same Inputs', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "2 + 2"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(true);
        expect(data.result).toBe("4");
    });

    // Subtraction
    test('Performs Subtraction Successfully: Simple Inputs', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "3 - 2"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(true);
        expect(data.result).toBe("1");
    });
    test('Performs Subtraction Successfully: Mixed Inputs', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "D - 3"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(true);
        expect(data.result).toBe("A");
    });
    test('Performs Subtraction Successfully: Same Inputs', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "2 - 2"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(true);
        expect(data.result).toBe("0");
    });

    // Multiplication
    test('Performs Multiplication Successfully: Simple Inputs', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "3 * 2"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(true);
        expect(data.result).toBe("6");
    });
    test('Performs Multiplication Successfully: Mixed Inputs', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "D * 3"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(true);
        expect(data.result).toBe("27");
    });
    test('Performs Multiplication Successfully: Same Inputs', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "A * A"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(true);
        expect(data.result).toBe("64");
    });

    // Division
    test('Performs Division Successfully: Simple Inputs', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "6 / 2"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(true);
        expect(data.result).toBe("3");
    });
    test('Performs Division Successfully: Mixed Inputs', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "A / 2"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(true);
        expect(data.result).toBe("5");
    });
    test('Performs Division Successfully: Same Inputs', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "2 / 2"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(true);
        expect(data.result).toBe("1");
    });

    // Errors
    test('Should handle invalid input', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "AF +"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(false);
        expect(data.error).toBeDefined();
        expect(data.error).toBe("Input must have atleast 2 hexadecimals values and 1 operator")
    });
    test('Should handle invalid input - Single number', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "A"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(false);
        expect(data.error).toBeDefined();
        expect(data.error).toBe("Input must have atleast 2 hexadecimals values and 1 operator")
    });
    test('Should handle invalid input - Single operator', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "+"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(false);
        expect(data.error).toBeDefined();
        expect(data.error).toBe("Input must have atleast 2 hexadecimals values and 1 operator")
    });
    test('Should handle empty input', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: ""})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(false);
        expect(data.error).toBeDefined();
        expect(data.error).toBe("Input cannot be empty")
    });
    test('Should handle invalid digit amount', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "1F1F1"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(false);
        expect(data.error).toBeDefined();
        expect(data.error).toBe("Input must have atleast 2 hexadecimals values and 1 operator")
    });
    test('Should handle negative output', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "-30 + 20"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(false);
        expect(data.error).toBeDefined();
        expect(data.error).toBe("Input values must be 1 or 2 digits")
    });
    test('Should handle decimal places', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "1.0 + 1"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(false);
        expect(data.error).toBeDefined();
        expect(data.error).toBe("Input values must be 1 or 2 digits")
    });
    test('Should handle invalid hex numbers', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "Z + 2"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(false);
        expect(data.error).toBeDefined();
        expect(data.error).toBe("Input values must be a hexadecimal")
    });
    test('Performs Addition Unsuccessfully - Incorrect addition input', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "2 + +"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(false);
        expect(data.error).toBeDefined();
        expect(data.error).toBe("Input values must be a hexadecimal")
    });
    test('Performs Addition Unsuccessfully - Empty addition', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "2 + "})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(false);
        expect(data.error).toBeDefined();
        expect(data.error).toBe("Input must have atleast 2 hexadecimals values and 1 operator")
    });
    test('Performs Subtraction Unsuccessfully - Output negative', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "20 - 30"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(false);
        expect(data.error).toBeDefined();
        expect(data.error).toBe("Output of subtraction must not be negative")
    });
    test('Performs Multiplication Unsuccessfully - Invalid input exceeding 2 digits', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "FFFF * FF"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(false);
        expect(data.error).toBeDefined();
        expect(data.error).toBe("Input values must be 1 or 2 digits")
    });
    test('Performs Division Unsuccessfully - Division by 0', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "2 / 0"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(false);
        expect(data.error).toBeDefined();
        expect(data.error).toBe("Division by 0 is not allowed")
    });
    test('Performs Division Unsuccessfully - Decimal output', async() => {
        const res = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({expression: "1 / 4"})
        });

        const data = await res.json();
        
        expect(res.ok).toBe(false);
        expect(data.error).toBeDefined();
        expect(data.error).toBe("Decimal results not allowed")
    });
});