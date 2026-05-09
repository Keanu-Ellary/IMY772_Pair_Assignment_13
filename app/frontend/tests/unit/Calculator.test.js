import { mount, flushPromises } from '@vue/test-utils'
import Calculator from '../../src/components/Calculator.vue'
import { describe, test, expect, vi } from 'vitest'

describe('Calculator', () => {
    let calculator

    beforeEach(async() => {
        calculator = mount(Calculator)
        const inputButtons = calculator.findAll('button')
        const clearButton = inputButtons[inputButtons.length - 2]
        await clearButton.trigger('click')
    })

    test('Renders correctly', () => {
        expect(calculator.exists()).toBe(true)
    })

    test('Backspaces Input Successfully', async() => {
        const inputButtons = calculator.findAll('button')

        const inputButton = inputButtons.find(b => b.text() === '4')
        await inputButton.trigger('click')
        await inputButton.trigger('click')

        const backspaceButton = inputButtons[inputButtons.length - 1]
        await backspaceButton.trigger('click')

        const calculatorInput = calculator.find('.calculator-input')
        expect(calculatorInput.text()).toBe('4')
        const calculatorOutput = calculator.find('.calculator-output')
        expect(calculatorOutput.text()).toBe('')

    })

    test('Can add input after backspaces input successfully', async() => {
        const inputButtons = calculator.findAll('button')

        const inputButton = inputButtons.find(b => b.text() === '4')
        await inputButton.trigger('click')
        await inputButton.trigger('click')
        const backspaceButton = inputButtons[inputButtons.length - 1]
        await backspaceButton.trigger('click')
        await inputButton.trigger('click')

        const calculatorInput = calculator.find('.calculator-input')
        expect(calculatorInput.text()).toBe('44')
        const calculatorOutput = calculator.find('.calculator-output')
        expect(calculatorOutput.text()).toBe('')

    })

    test('Can add input after backspaces operator successfully', async() => {
        const inputButtons = calculator.findAll('button')

        const inputButton = inputButtons.find(b => b.text() === '4')
        const operatorButton = inputButtons[inputButtons.length - 8]
        const backspaceButton = inputButtons[inputButtons.length - 1]
        await inputButton.trigger('click')
        await operatorButton.trigger('click')
        await backspaceButton.trigger('click')
        await inputButton.trigger('click')

        const calculatorInput = calculator.find('.calculator-input')
        expect(calculatorInput.text()).toBe('44')
        const calculatorOutput = calculator.find('.calculator-output')
        expect(calculatorOutput.text()).toBe('')

    })

     test('Can add input after backspaces input after operator successfully', async() => {
        const inputButtons = calculator.findAll('button')

        const inputButton = inputButtons.find(b => b.text() === '4')
        const operatorButton = inputButtons[inputButtons.length - 8]
        const backspaceButton = inputButtons[inputButtons.length - 1]
        await inputButton.trigger('click')
        await operatorButton.trigger('click')
        await inputButton.trigger('click')
        await backspaceButton.trigger('click')
        await inputButton.trigger('click')

        const calculatorInput = calculator.find('.calculator-input')
        expect(calculatorInput.text()).toBe('4 + 4')
        const calculatorOutput = calculator.find('.calculator-output')
        expect(calculatorOutput.text()).toBe('')

    })


    test('Clears Input Successfully', async() => {
        const inputButtons = calculator.findAll('button')

        const inputButton = inputButtons.find(b => b.text() === '4')
        await inputButton.trigger('click')
        await inputButton.trigger('click')

        const clearButton = inputButtons[inputButtons.length - 2]
        await clearButton.trigger('click')

        const calculatorInput = calculator.find('.calculator-input')
        expect(calculatorInput.text()).toBe('')
        const calculatorOutput = calculator.find('.calculator-output')
        expect(calculatorOutput.text()).toBe('')

    })
})

describe('Input Handling', () => {
    let calculator

    beforeEach(async() => {
        calculator = mount(Calculator)
        const inputButtons = calculator.findAll('button')
        const clearButton = inputButtons[inputButtons.length - 2]
        await clearButton.trigger('click')
    })

    test('Accepts Input Successfully: 0', async() => {
        const inputButton = calculator.findAll('button').find(b => b.text() === '0')
        await inputButton.trigger('click')
        
        const calculatorInput = calculator.find('.calculator-input')
        expect(calculatorInput.text()).toBe('0')
    })
    test('Accepts Input Successfully: 1', async() => {
        const inputButton = calculator.findAll('button').find(b => b.text() === '1')
        await inputButton.trigger('click')
        
        const calculatorInput = calculator.find('.calculator-input')
        expect(calculatorInput.text()).toBe('1')
    })
    test('Accepts Input Successfully: 2', async() => {
        const inputButton = calculator.findAll('button').find(b => b.text() === '2')
        await inputButton.trigger('click')
        
        const calculatorInput = calculator.find('.calculator-input')
        expect(calculatorInput.text()).toBe('2')
    })
    test('Accepts Input Successfully: 3', async() => {
        const inputButton = calculator.findAll('button').find(b => b.text() === '3')
        await inputButton.trigger('click')
        
        const calculatorInput = calculator.find('.calculator-input')
        expect(calculatorInput.text()).toBe('3')
    })
    test('Accepts Input Successfully: 4', async() => {
        const inputButton = calculator.findAll('button').find(b => b.text() === '4')
        await inputButton.trigger('click')
        
        const calculatorInput = calculator.find('.calculator-input')
        expect(calculatorInput.text()).toBe('4')
    })
    test('Accepts Input Successfully: 5', async() => {
        const inputButton = calculator.findAll('button').find(b => b.text() === '5')
        await inputButton.trigger('click')
        
        const calculatorInput = calculator.find('.calculator-input')
        expect(calculatorInput.text()).toBe('5')
    })
    test('Accepts Input Successfully: 6', async() => {
        const inputButton = calculator.findAll('button').find(b => b.text() === '6')
        await inputButton.trigger('click')
        
        const calculatorInput = calculator.find('.calculator-input')
        expect(calculatorInput.text()).toBe('6')
    })
    test('Accepts Input Successfully: 7', async() => {
        const inputButton = calculator.findAll('button').find(b => b.text() === '7')
        await inputButton.trigger('click')
        
        const calculatorInput = calculator.find('.calculator-input')
        expect(calculatorInput.text()).toBe('7')
    })
    test('Accepts Input Successfully: 8', async() => {
        const inputButton = calculator.findAll('button').find(b => b.text() === '8')
        await inputButton.trigger('click')
        
        const calculatorInput = calculator.find('.calculator-input')
        expect(calculatorInput.text()).toBe('8')
    })
    test('Accepts Input Successfully: 9', async() => {
        const inputButton = calculator.findAll('button').find(b => b.text() === '9')
        await inputButton.trigger('click')
        
        const calculatorInput = calculator.find('.calculator-input')
        expect(calculatorInput.text()).toBe('9')
    })
    test('Accepts Input Successfully: A', async() => {
        const inputButton = calculator.findAll('button').find(b => b.text() === 'A')
        await inputButton.trigger('click')
        
        const calculatorInput = calculator.find('.calculator-input')
        expect(calculatorInput.text()).toBe('A')
    })
    test('Accepts Input Successfully: B', async() => {
        const inputButton = calculator.findAll('button').find(b => b.text() === 'B')
        await inputButton.trigger('click')
        
        const calculatorInput = calculator.find('.calculator-input')
        expect(calculatorInput.text()).toBe('B')
    })
    test('Accepts Input Successfully: C', async() => {
        const inputButton = calculator.findAll('button').find(b => b.text() === 'C')
        await inputButton.trigger('click')
        
        const calculatorInput = calculator.find('.calculator-input')
        expect(calculatorInput.text()).toBe('C')
    })
    test('Accepts Input Successfully: D', async() => {
        const inputButton = calculator.findAll('button').find(b => b.text() === 'D')
        await inputButton.trigger('click')
        
        const calculatorInput = calculator.find('.calculator-input')
        expect(calculatorInput.text()).toBe('D')
    })
    test('Accepts Input Successfully: E', async() => {
        const inputButton = calculator.findAll('button').find(b => b.text() === 'E')
        await inputButton.trigger('click')
        
        const calculatorInput = calculator.find('.calculator-input')
        expect(calculatorInput.text()).toBe('E')
    })
    test('Accepts Input Successfully: F', async() => {
        const inputButton = calculator.findAll('button').find(b => b.text() === 'F')
        await inputButton.trigger('click')
        
        const calculatorInput = calculator.find('.calculator-input')
        expect(calculatorInput.text()).toBe('F')
    })

    test('Accepts Operator Successfully: +', async() => {
        const inputButton = calculator.find('.addition-button')
        await inputButton.trigger('click')
        
        const calculatorInput = calculator.find('.calculator-input')
        expect(calculatorInput.text()).toBe('+')
    })
    test('Accepts Operator Successfully: -', async() => {
        const inputButton = calculator.find('.subtraction-button')
        await inputButton.trigger('click')
        
        const calculatorInput = calculator.find('.calculator-input')
        expect(calculatorInput.text()).toBe('-')
    })
    test('Accepts Operator Successfully: ×', async() => {
        const inputButton = calculator.find('.multiplication-button')
        await inputButton.trigger('click')
        
        const calculatorInput = calculator.find('.calculator-input')
        expect(calculatorInput.text()).toBe('×')
    })
    test('Accepts Operator Successfully: ÷', async() => {
        const inputButton = calculator.find('.division-button')
        await inputButton.trigger('click')
        
        const calculatorInput = calculator.find('.calculator-input')
        expect(calculatorInput.text()).toBe('÷')
    })

    test('Accepts Addition Equation Successfully', async() => {
        const inputButtons = calculator.findAll('button')
        const inputButton = inputButtons.find(b => b.text() === '4')
        const operatorButton = calculator.find('.addition-button')
        await inputButton.trigger('click')
        await operatorButton.trigger('click')
        await inputButton.trigger('click')
        
        const calculatorInput = calculator.find('.calculator-input')
        expect(calculatorInput.text()).toBe('4 + 4')
        
    })

    test('Accepts Subtraction Equation Successfully', async() => {
        const inputButtons = calculator.findAll('button')

        const inputButton = inputButtons.find(b => b.text() === '4')
        const operatorButton = calculator.find('.subtraction-button')
        await inputButton.trigger('click')
        await operatorButton.trigger('click')
        await inputButton.trigger('click')
        
        const calculatorInput = calculator.find('.calculator-input')
        expect(calculatorInput.text()).toBe('4 - 4')
        
    })

    test('Accepts Multipication Equation Successfully', async() => {
        const inputButtons = calculator.findAll('button')

        const inputButton = inputButtons.find(b => b.text() === '4')
        const operatorButton = calculator.find('.multiplication-button')
        await inputButton.trigger('click')
        await operatorButton.trigger('click')
        await inputButton.trigger('click')
        
        const calculatorInput = calculator.find('.calculator-input')
        expect(calculatorInput.text()).toBe('4 × 4')
        
    })

    test('Accepts Division Equation Successfully', async() => {
        const inputButtons = calculator.findAll('button')

        const inputButton = inputButtons.find(b => b.text() === '4')
        const operatorButton = calculator.find('.division-button')
        await inputButton.trigger('click')
        await operatorButton.trigger('click')
        await inputButton.trigger('click')
        
        const calculatorInput = calculator.find('.calculator-input')
        expect(calculatorInput.text()).toBe('4 ÷ 4')
        
    })

})

describe('Output Handling', () => {
    let calculator

    beforeEach(async() => {
        calculator = mount(Calculator)
        const inputButtons = calculator.findAll('button')
        const clearButton = inputButtons[inputButtons.length - 2]
        await clearButton.trigger('click')

        global.fetch = vi.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ result: '8' })
            })
        )
    })

    test('Displays output Successfully', async() => {
        const inputButtons = calculator.findAll('button')
        const inputButton = inputButtons.find(b => b.text() === '4')
        const operatorButton = calculator.find('.addition-button')
        const equalButton = calculator.find('.equal-button')
        await inputButton.trigger('click')
        await operatorButton.trigger('click')
        await inputButton.trigger('click')
        await equalButton.trigger('click')

        await new Promise(resolve => setTimeout(resolve))
        
        const calculatorOutput = calculator.find('.calculator-output')
        expect(calculatorOutput.text()).toBe('8')
        
    })

})

describe('Error Handling', () => {
    let calculator

    beforeEach(async() => {
        calculator = mount(Calculator)
        window.alert = vi.fn()
        const inputButtons = calculator.findAll('button')
        const clearButton = inputButtons[inputButtons.length - 2]
        await clearButton.trigger('click')

        global.fetch = vi.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ error: 'Error' })
            })
        )

    })

    test('Displays error Successfully', async() => {
        const inputButtons = calculator.findAll('button')
        const inputButton = inputButtons.find(b => b.text() === '4')
        const operatorButton = calculator.find('.addition-button')
        const equalButton = calculator.find('.equal-button')
        await inputButton.trigger('click')
        await inputButton.trigger('click')
        await inputButton.trigger('click')
        await operatorButton.trigger('click')
        await inputButton.trigger('click')
        await equalButton.trigger('click')

        await flushPromises()
        
        const calculatorOutput = calculator.find('.calculator-output')
        expect(calculatorOutput.text()).toBe('Error')
        
    })

    test('Alerts error Successfully', async() => {
        const inputButtons = calculator.findAll('button')
        const inputButton = inputButtons.find(b => b.text() === '4')
        const operatorButton = calculator.find('.addition-button')
        const equalButton = calculator.find('.equal-button')
        await inputButton.trigger('click')
        await inputButton.trigger('click')
        await operatorButton.trigger('click')
        await inputButton.trigger('click')
        await equalButton.trigger('click')

        await flushPromises()
        
        expect(window.alert).toHaveBeenCalled()
        expect(window.alert).toHaveBeenCalledWith("Error")
        
    })

    test('No operator in input must display error', async() => {
        const inputButtons = calculator.findAll('button')
        const inputButton = inputButtons.find(b => b.text() === '4')
        const equalButton = calculator.find('.equal-button')
        await inputButton.trigger('click')
        await inputButton.trigger('click')
        await equalButton.trigger('click')
        
        expect(window.alert).toHaveBeenCalled()
        expect(window.alert).toHaveBeenCalledWith("Input must contain an operator")
        
    })

    test('Inputs that are more than 2 digits must display an error', async() => {
        const inputButtons = calculator.findAll('button')
        const inputButton = inputButtons.find(b => b.text() === '4')
        const equalButton = calculator.find('.equal-button')
        const operatorButton = calculator.find('.addition-button')
        await inputButton.trigger('click')
        await inputButton.trigger('click')
        await inputButton.trigger('click')
        await operatorButton.trigger('click')
        await equalButton.trigger('click')
        
        expect(window.alert).toHaveBeenCalled()
        expect(window.alert).toHaveBeenCalledWith("Input values must be 1 or 2 digits")
        
    })
    
    test('Inputs without 2 hexadecimals and an operator must display an error', async() => {
        const inputButtons = calculator.findAll('button')
        const inputButton = inputButtons.find(b => b.text() === '4')
        const equalButton = calculator.find('.equal-button')
        const operatorButton = calculator.find('.addition-button')
        await inputButton.trigger('click')
        await inputButton.trigger('click')
        await operatorButton.trigger('click')
        await equalButton.trigger('click')
        
        expect(window.alert).toHaveBeenCalled()
        expect(window.alert).toHaveBeenCalledWith("Input must have atleast 2 hexadecimals values and 1 operator")
        
    })

    test('Negative output should display an error', async() => {
        window.alert = vi.fn()

        global.fetch = vi.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ result: '-2' })
            })
        )

        const inputButtons = calculator.findAll('button')
        const inputButton = inputButtons.find(b => b.text() === '4')
        const inputButton2 = inputButtons.find(b => b.text() === '6')
        const equalButton = calculator.find('.equal-button')
        const operatorButton = calculator.find('.subtraction-button')
        await inputButton.trigger('click')
        await operatorButton.trigger('click')
        await inputButton2.trigger('click')
        await equalButton.trigger('click')
        
        expect(window.alert).toHaveBeenCalled()
        expect(window.alert).toHaveBeenCalledWith("Output is negative")
        
    })

    test('Output greater than 4 digits should display an error', async() => {
        window.alert = vi.fn()

        global.fetch = vi.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ result: '10000' })
            })
        )

        const inputButtons = calculator.findAll('button')
        const inputButton = inputButtons.find(b => b.text() === 'A')
        const equalButton = calculator.find('.equal-button')
        const operatorButton = calculator.find('.multiplication-button')
        await inputButton.trigger('click')
        await operatorButton.trigger('click')
        await inputButton.trigger('click')
        await equalButton.trigger('click')

        await flushPromises()
        
        expect(window.alert).toHaveBeenCalled()
        expect(window.alert).toHaveBeenCalledWith("Output is greater than 4 digits")
        
    })

    test('Output with decimal places should display an error', async() => {
        window.alert = vi.fn()

        global.fetch = vi.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ result: '10.0' })
            })
        )

        const inputButtons = calculator.findAll('button')
        const inputButton = inputButtons.find(b => b.text() === '2')
        const inputButton2 = inputButtons.find(b => b.text() === '4')
        const equalButton = calculator.find('.equal-button')
        const operatorButton = calculator.find('.division-button')
        await inputButton.trigger('click')
        await operatorButton.trigger('click')
        await inputButton2.trigger('click')
        await equalButton.trigger('click')

        await flushPromises()
        
        expect(window.alert).toHaveBeenCalled()
        expect(window.alert).toHaveBeenCalledWith("Output has decimal places")
        
    })

})