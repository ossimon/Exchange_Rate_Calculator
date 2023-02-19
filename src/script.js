async function getExchangeRate(currency) {
    let response = await fetch('http://api.nbp.pl/api/exchangerates/rates/a/' + currency + '/?format=json')
    let data = await response.json()
    let exchangeRate = data.rates[0].mid
    
    return exchangeRate
}

function calculateOutput(inputValue, exchangeRate, boxId) {
    const numberValue = Number(inputValue)
    if (isNaN(numberValue)) {
        return 'Please, input a number!'
    }

    let outputValue
    switch (boxId) {
        case 'send':
            outputValue = numberValue * exchangeRate
            break
        case 'receive':
            outputValue = numberValue / exchangeRate
            break
    }
    outputValue = Math.floor(outputValue * 100) / 100

    return outputValue.toString()
}

async function updateBox(boxId) {
    const inputValue = document.getElementById(boxId).value
    const exchangeRate = await getExchangeRate("gbp")
    const outputValue = calculateOutput(inputValue, exchangeRate, boxId)

    let boxToUpdateId
    switch (boxId) {
        case 'send':
            boxToUpdateId = 'receive'
            break
        case 'receive':
            boxToUpdateId = 'send'
            break
    }
    document.getElementById(boxToUpdateId).value = outputValue
    updateExchangeRate(exchangeRate);
}

async function printExchangeRate() {
    const exchangeRate = await getExchangeRate("gbp")
    updateExchangeRate(exchangeRate)
}

function updateExchangeRate(exchangeRate) {
    document.getElementById('exchange-rate-info2').textContent = `${exchangeRate}`
}

module.exports = {
    getExchangeRate: getExchangeRate,
    calculateOutput: calculateOutput,
    updateBox: updateBox
}