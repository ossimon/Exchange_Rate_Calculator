async function getExchangeRate(currency) {
    let response = await fetch('http://api.nbp.pl/api/exchangerates/rates/a/' + currency + '/?format=json')
    let data = await response.json()
    let exchangeRate = data.rates[0].mid
    
    return exchangeRate
}

function calculateOutput(inputValue, exchangeRate, inputCurrency) {
    const numberValue = Number(inputValue)
    if (isNaN(numberValue)) {
        return 'Please input a number!'
    }

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