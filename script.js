function calculateOutput(inputValue) {
    const numberValue = Number(inputValue)
    if (isNaN(numberValue)) {
        return 'Your input should be a number!';
    }
    
    const outputValue = numberValue * 2;
    return outputValue.toString();
}

function updateBox(boxId) {
    const inputValue = document.getElementById(boxId).value;
    const outputValue = calculateOutput(inputValue);

    var boxToUpdateId;
    switch (boxId) {
        case 'send':
            boxToUpdateId = 'receive';
            break;
        case 'receive':
            boxToUpdateId = 'send';
            break;
    }
    document.getElementById(boxToUpdateId).value = outputValue;
}