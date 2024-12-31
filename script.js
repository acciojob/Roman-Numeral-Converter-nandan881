function convertToRoman(num) {
    const romanSymbols = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];

    let result = '';

    for (const [symbol, value] of romanSymbols) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

function convertAndDisplay() {
    const input = document.getElementById('numberInput').value;
    const outputDiv = document.getElementById('output');

    if (input === '' || input < 0 || input > 100000) {
        outputDiv.textContent = 'Please enter a valid number between 0 and 100000.';
    } else {
        const romanNumeral = convertToRoman(Number(input));
        outputDiv.textContent = romanNumeral;
    }
}
