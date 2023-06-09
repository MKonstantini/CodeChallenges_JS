// Function that checks if a number is a palindrome

function checkPalindrome(num) {
    //Break digits into an array:
    let draftNum = num;
    let arrayNum1 = [];
    while(draftNum > 0) {
        let x = draftNum % 10;
        arrayNum1.push(x);
        draftNum = Math.floor(draftNum / 10);
    }
    //Duplicate and reverse array:
    let arrayNum2 = arrayNum1.slice();
    arrayNum1.reverse();
    
    //Check if arrays match each other:
    let isPalindrome = true;
    for (let i = 0; i < arrayNum1.length / 2; i++) {
        if (arrayNum1[i] != arrayNum2[i]) {
            isPalindrome = false;
            break;
        }
    }

    return isPalindrome;
}
