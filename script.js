function convertToRoman(num) {
    const symbols = [
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

    if (num < 0 || num > 100000) {
        return ""; // Out-of-range values return an empty string
    }

    if (num === 0) {
        return ""; // Explicitly handle 0
    }

    let result = '';

    for (const [symbol, value] of symbols) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

// Test cases
console.log(convertToRoman(14));    // Output: XIV
console.log(convertToRoman(798));   // Output: DCCXCVIII
console.log(convertToRoman(0));     // Output: ""
console.log(convertToRoman(100000)); // Output: MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
