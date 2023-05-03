// Function that returns given number in roman numerals

function convertToRoman(num) {
    // create an array out of given num and an empty array for the answer:
    let numArray = num.toString().split('');
    let romanArray = [];

    // for the first three digits from the right:
    for (let i = numArray.length - 1; numArray.length - i <= 3; i--) {
        let digit, half, whole;
        switch (i) {
            // assign roman digits for first number:
            case numArray.length - 1:
                digit = 'I', half = 'V', whole = 'X';
                break;
            // assign roman digits for second number:
            case numArray.length - 2:
                digit = 'X', half = 'L', whole = 'C';
                break;
            // assign roman digits for third number:
            case numArray.length - 3:
                digit = 'C', half = 'D', whole = 'M';
                break;
        }
        // calculate roman numeral using roman digits:
        const value = numArray[i];

        if      (value == 9)    romanArray.unshift(digit + whole);
        else if (value == 4)    romanArray.unshift(digit + half);
        else if (value == 5)    romanArray.unshift(half);
        else if (value > 5)     romanArray.unshift(half + digit.repeat(value - 5));
        else if (value < 5)     romanArray.unshift(digit.repeat(value));
    }

    // append M for each thousand in num:
    const thousandsAmount = Math.floor(num / 1000);
    romanArray.unshift('M'.repeat(thousandsAmount));

    // concatenate result into a string:
    let romanNumber = '';
    for (i in romanArray) {
        if (i != '') {
            romanNumber += romanArray[i];
        }
    }

    return romanNumber;
}
