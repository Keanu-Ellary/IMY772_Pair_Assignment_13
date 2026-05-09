import {test, expect} from '@playwright/test'

// Addition
test('Should calculate addition correctly: Simple', async ({page}) => {
    await page.goto('http://localhost:5173');

    await page.getByTestId('btn-2').click();
    await page.getByTestId('btn-plus').click();
    await page.getByTestId('btn-3').click();

    await page.getByTestId('btn-equals').click();

    await expect(
        page.getByTestId('calculator-output')
    ).toHaveText('5');
});
test('Should calculate addition correctly: Mixed', async ({page}) => {
    await page.goto('http://localhost:5173');

    await page.getByTestId('btn-a').click();
    await page.getByTestId('btn-plus').click();
    await page.getByTestId('btn-3').click();

    await page.getByTestId('btn-equals').click();

    await expect(
        page.getByTestId('calculator-output')
    ).toHaveText('D');
});
test('Should calculate addition correctly: Same', async ({page}) => {
    await page.goto('http://localhost:5173');

    await page.getByTestId('btn-3').click();
    await page.getByTestId('btn-plus').click();
    await page.getByTestId('btn-3').click();

    await page.getByTestId('btn-equals').click();

    await expect(
        page.getByTestId('calculator-output')
    ).toHaveText('6');
});

// Subtraction
test('Should calculate subtraction correctly: Simple', async ({page}) => {
    await page.goto('http://localhost:5173');

    await page.getByTestId('btn-5').click();
    await page.getByTestId('btn-minus').click();
    await page.getByTestId('btn-2').click();

    await page.getByTestId('btn-equals').click();

    await expect(
        page.getByTestId('calculator-output')
    ).toHaveText('3');
});
test('Should calculate subtraction correctly: Mixed', async ({page}) => {
    await page.goto('http://localhost:5173');

    await page.getByTestId('btn-f').click();
    await page.getByTestId('btn-minus').click();
    await page.getByTestId('btn-3').click();

    await page.getByTestId('btn-equals').click();

    await expect(
        page.getByTestId('calculator-output')
    ).toHaveText('C');
});
test('Should calculate subtraction correctly: Same', async ({page}) => {
    await page.goto('http://localhost:5173');

    await page.getByTestId('btn-3').click();
    await page.getByTestId('btn-minus').click();
    await page.getByTestId('btn-3').click();

    await page.getByTestId('btn-equals').click();

    await expect(
        page.getByTestId('calculator-output')
    ).toHaveText('0');
});

// Multiply
test('Should calculate multiplication correctly: Simple', async ({page}) => {
    await page.goto('http://localhost:5173');

    await page.getByTestId('btn-3').click();
    await page.getByTestId('btn-mult').click();
    await page.getByTestId('btn-2').click();

    await page.getByTestId('btn-equals').click();

    await expect(
        page.getByTestId('calculator-output')
    ).toHaveText('6');
});
test('Should calculate multiplication correctly: Mixed', async ({page}) => {
    await page.goto('http://localhost:5173');

    await page.getByTestId('btn-a').click();
    await page.getByTestId('btn-mult').click();
    await page.getByTestId('btn-c').click();

    await page.getByTestId('btn-equals').click();

    await expect(
        page.getByTestId('calculator-output')
    ).toHaveText('78');
});
test('Should calculate multiplication correctly: Same', async ({page}) => {
    await page.goto('http://localhost:5173');

    await page.getByTestId('btn-3').click();
    await page.getByTestId('btn-mult').click();
    await page.getByTestId('btn-3').click();

    await page.getByTestId('btn-equals').click();

    await expect(
        page.getByTestId('calculator-output')
    ).toHaveText('9');
});

// Division
test('Should calculate division correctly: Simple', async ({page}) => {
    await page.goto('http://localhost:5173');

    await page.getByTestId('btn-6').click();
    await page.getByTestId('btn-div').click();
    await page.getByTestId('btn-2').click();

    await page.getByTestId('btn-equals').click();

    await expect(
        page.getByTestId('calculator-output')
    ).toHaveText('3');
});
test('Should calculate division correctly: Mixed', async ({page}) => {
    await page.goto('http://localhost:5173');

    await page.getByTestId('btn-a').click();
    await page.getByTestId('btn-div').click();
    await page.getByTestId('btn-5').click();

    await page.getByTestId('btn-equals').click();

    await expect(
        page.getByTestId('calculator-output')
    ).toHaveText('2');
});
test('Should calculate division correctly: Same', async ({page}) => {
    await page.goto('http://localhost:5173');

    await page.getByTestId('btn-3').click();
    await page.getByTestId('btn-div').click();
    await page.getByTestId('btn-3').click();

    await page.getByTestId('btn-equals').click();

    await expect(
        page.getByTestId('calculator-output')
    ).toHaveText('1');
});