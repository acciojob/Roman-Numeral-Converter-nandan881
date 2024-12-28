function convertToRoman(num) {
    if (num < 1 || num > 100000) {
        return "Invalid input: Number out of range.";
    }

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

    let result = "";

    for (const [symbol, value] of romanSymbols) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

// Example usage:
const input = prompt("Enter a number between 0 and 100000");
alert(convertToRoman(parseInt(input, 10)));
