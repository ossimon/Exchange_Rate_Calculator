async function getExchangeRate(currency) {
    // Retrieving exchange rate info from NBP API
    let response = await fetch('http://api.nbp.pl/api/exchangerates/rates/a/' + currency + '/?format=json/')
    if (!response.ok) {
        return 'Can\'t get exchange rate!'
    }
    // Exchange rate extraction
    let data = await response.json()
    let exchangeRate = data.rates[0].mid
    
    return exchangeRate
}

function calculateOutput(inputValue, exchangeRate, inputCurrency) {
    // Analysing user input 
    if (exchangeRate == 'Can\'t get exchange rate!') {
        return exchangeRate
    }
    const numberValue = Number(inputValue)
    if (isNaN(numberValue)) {
        return 'Please input a number!'
    }
    // Calculating the output value
    let outputValue
    switch (inputCurrency) {
        case 'gbp':
            outputValue = numberValue * exchangeRate
            break
        case 'pln':
            outputValue = numberValue / exchangeRate
            break
    }
    outputValue = Math.floor(outputValue * 100) / 100

    return outputValue.toString()
}

module.exports = {
    getExchangeRate: getExchangeRate,
    calculateOutput: calculateOutput
}