function convertToRoman(num) {
    if (num < 1 || num > 100000) {
        return "Input number out of range. Please enter a number between 1 and 100000.";
    }

    // Roman numeral symbols and their corresponding values
    const romanNumerals = [
        ['M', 1000],
        ['D', 500],
        ['C', 100],
        ['L', 50],
        ['X', 10],
        ['V', 5],
        ['I', 1]
    ];

    let result = '';

    // Loop through each Roman numeral value
    for (let i = 0; i < romanNumerals.length; i++) {
        // Subtract as many of the current Roman numeral value as possible
        while (num >= romanNumerals[i][1]) {
            result += romanNumerals[i][0];
            num -= romanNumerals[i][1];
        }
    }

    return result;
}
