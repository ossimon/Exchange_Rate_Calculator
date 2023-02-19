const script = require('../script')

describe('Calculating output', () => {
    test('Calculates received amount correctly', () => {
        expect(
            script.calculateOutput('4.63', 2, 'send')
            ).toBe('9.26')
    })
    
    test('Calculates sent amountcorrectly', () => {
        expect(
            script.calculateOutput('4.63', 2, 'receive')
            ).toBe('2.31')
    })
    
    test('Handles invalid input', () => {
        expect(
            script.calculateOutput('one', 2, 'receive')
            ).toBe('Your input should be a number!')
    })
})

describe('Fetching exchange rates', () => {
    test('Fetches a numerical value from NBP API', async () => {
        const exchangeRate = await script.getExchangeRate('USD')
        expect(
            typeof exchangeRate
            ).toBe('number')
    })
})