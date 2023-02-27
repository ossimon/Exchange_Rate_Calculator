// Testing the calculator.js module

const script = require('../src/calculator')

describe('Calculating output', () => {
    test('Calculates received amount correctly', () => {
        expect(
            script.calculateOutput('4.63', 2, 'gbp')
            ).toBe('9.26')
    })
    
    test('Calculates sent amount correctly', () => {
        expect(
            script.calculateOutput('4.63', 2, 'pln')
            ).toBe('2.31')
    })
    
    test('Handles invalid input', () => {
        expect(
            script.calculateOutput('one', 2, 'pln')
            ).toBe('Please input a number!')
    })
})

describe('Fetching exchange rates', () => {
    test('Fetches a numerical value from NBP API', async () => {
        const exchangeRate = await script.getExchangeRate('USD')
        expect(
            typeof exchangeRate
            ).toBe('number')
    })
    
    test('Returns proper message in case of failure', async () => {
        const exchangeRate = await script.getExchangeRate('Invalid Currency')
        expect(
            exchangeRate
            ).toBe('Can\'t get exchange rate!')
    })
})