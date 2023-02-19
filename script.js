async function getExchangeRate(currency) {
    let response = await fetch('http://api.nbp.pl/api/exchangerates/rates/a/' + currency + '/?format=json')
    let data = await response.json()
    let exchangeRate = data.rates[0].mid
    
    return exchangeRate
}

async function calculateOutput(inputValue, boxId) {
    const numberValue = Number(inputValue)
    if (isNaN(numberValue)) {
        return 'Your input should be a number!'
    }

    const exchangeRate = await getExchangeRate("gbp")
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
    const outputValue = await calculateOutput(inputValue, boxId)

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
}