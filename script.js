function convertToRoman(num) {
    const romanSymbols = [
        ['M', 1000], 
        ['D', 500], 
        ['C', 100], 
        ['L', 50], 
        ['X', 10], 
        ['V', 5], 
        ['I', 1]
    ];

    let result = '';

    for (let i = 0; i < romanSymbols.length; i++) {
        const [symbol, value] = romanSymbols[i];
        while (num >= value) {
            result += symbol;
            num -= value;
        }

        // Handle special cases like IV (4), IX (9), etc.
        if (i < romanSymbols.length - 1) {
            const [nextSymbol, nextValue] = romanSymbols[i + 1];
            if (num >= value - nextValue && value - nextValue > nextValue) {
                result += nextSymbol + symbol;
                num -= (value - nextValue);
            }
        }
    }

    return result;
}

// Examples
console.log(convertToRoman(14)); // Output: XIV
console.log(convertToRoman(798)); // Output: DCCXCVIII
