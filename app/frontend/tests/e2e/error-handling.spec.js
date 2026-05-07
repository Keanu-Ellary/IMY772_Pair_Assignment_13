import {test, expect} from '@playwright/test'

// Errors
test('Should handle invalid input', async ({page}) => {
    await page.goto('http://localhost:5173');

    await page.getByTestId('btn-a').click();
    await page.getByTestId('btn-f').click();
    await page.getByTestId('btn-plus').click();

    await page.getByTestId('btn-equals').click();

    page.on('dialog', async (dialog) => {
        expect(dialog.message()).toContain(
            'Input must have atleast 2 hexadecimals values and 1 operator'
        );

        await dialog.accept();
    });

    await expect(
        page.getByTestId('calculator-output')
    ).toHaveText('Error');
});
test('Should handle invalid input - Single number input', async ({page}) => {
    await page.goto('http://localhost:5173');

    await page.getByTestId('btn-a').click();

    await page.getByTestId('btn-equals').click();

    page.on('dialog', async (dialog) => {
        expect(dialog.message()).toContain(
            'Input must contain an operator'
        );

        await dialog.accept();
    });

    await expect(
        page.getByTestId('calculator-output')
    ).toHaveText('Error');
});
test('Should handle invalid input - Single operator input', async ({page}) => {
    await page.goto('http://localhost:5173');

    await page.getByTestId('btn-minus').click();

    await page.getByTestId('btn-equals').click();

    page.on('dialog', async (dialog) => {
        expect(dialog.message()).toContain(
            'Input must have atleast 2 hexadecimals values and 1 operator'
        );

        await dialog.accept();
    });

    await expect(
        page.getByTestId('calculator-output')
    ).toHaveText('Error');
});
test('Should handle empty input', async ({page}) => {
    await page.goto('http://localhost:5173');

    await page.getByTestId('btn-equals').click();

    page.on('dialog', async (dialog) => {
        expect(dialog.message()).toContain(
            'Input cannot be empty'
        );

        await dialog.accept();
    });

    await expect(
        page.getByTestId('calculator-output')
    ).toHaveText('Error');
});
test('Should handle negative output', async ({page}) => {
    await page.goto('http://localhost:5173');

    await page.getByTestId('btn-minus').click();
    await page.getByTestId('btn-3').click();
    await page.getByTestId('btn-plus').click();
    await page.getByTestId('btn-f').click();

    await page.getByTestId('btn-equals').click();

    page.on('dialog', async (dialog) => {
        expect(dialog.message()).toContain(
            'Invalid operator used'
        );

        await dialog.accept();
    });

    await expect(
        page.getByTestId('calculator-output')
    ).toHaveText('Error');
});
test('Should handle incorrect addition input', async ({page}) => {
    await page.goto('http://localhost:5173');

    await page.getByTestId('btn-2').click();
    await page.getByTestId('btn-plus').click();
    await page.getByTestId('btn-plus').click();

    await page.getByTestId('btn-equals').click();

    page.on('dialog', async (dialog) => {
        expect(dialog.message()).toContain(
            'Input values must be a hexadecimal'
        );

        await dialog.accept();
    });

    await expect(
        page.getByTestId('calculator-output')
    ).toHaveText('Error');
});
test('Should handle incomplete addition input', async ({page}) => {
    await page.goto('http://localhost:5173');

    await page.getByTestId('btn-2').click();
    await page.getByTestId('btn-plus').click();

    await page.getByTestId('btn-equals').click();

    page.on('dialog', async (dialog) => {
        expect(dialog.message()).toContain(
            'Input values must be a hexadecimal'
        );

        await dialog.accept();
    });

    await expect(
        page.getByTestId('calculator-output')
    ).toHaveText('Error');
});
test('Should handle incorrect subtraction - negative input', async ({page}) => {
    await page.goto('http://localhost:5173');

    await page.getByTestId('btn-2').click();
    await page.getByTestId('btn-minus').click();
    await page.getByTestId('btn-5').click();

    await page.getByTestId('btn-equals').click();

    page.on('dialog', async (dialog) => {
        expect(dialog.message()).toContain(
            'Output of subtraction must not be negative'
        );

        await dialog.accept();
    });

    await expect(
        page.getByTestId('calculator-output')
    ).toHaveText('Error');
});
test('Should handle incorrect multiplication - invalid input', async ({page}) => {
    await page.goto('http://localhost:5173');

    await page.getByTestId('btn-f').click();
    await page.getByTestId('btn-f').click();
    await page.getByTestId('btn-f').click();
    await page.getByTestId('btn-f').click();
    await page.getByTestId('btn-mult').click();
    await page.getByTestId('btn-f').click();
    await page.getByTestId('btn-f').click();

    await page.getByTestId('btn-equals').click();

    page.on('dialog', async (dialog) => {
        expect(dialog.message()).toContain(
            'Input values must be 1 or 2 digits'
        );

        await dialog.accept();
    });

    await expect(
        page.getByTestId('calculator-output')
    ).toHaveText('Error');
});
test('Should handle incorrect division - division by 0', async ({page}) => {
    await page.goto('http://localhost:5173');

    await page.getByTestId('btn-2').click();
    await page.getByTestId('btn-div').click();
    await page.getByTestId('btn-0').click();

    await page.getByTestId('btn-equals').click();

    page.on('dialog', async (dialog) => {
        expect(dialog.message()).toContain(
            'Division by 0 is not allowed'
        );

        await dialog.accept();
    });

    await expect(
        page.getByTestId('calculator-output')
    ).toHaveText('Error');
});
test('Should handle incorrect division - decimal output', async ({page}) => {
    await page.goto('http://localhost:5173');

    await page.getByTestId('btn-1').click();
    await page.getByTestId('btn-div').click();
    await page.getByTestId('btn-4').click();

    await page.getByTestId('btn-equals').click();

    page.on('dialog', async (dialog) => {
        expect(dialog.message()).toContain(
            'Decimal results not allowed'
        );

        await dialog.accept();
    });

    await expect(
        page.getByTestId('calculator-output')
    ).toHaveText('Error');
});