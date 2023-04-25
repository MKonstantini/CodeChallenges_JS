// Function that checks if num is a palindrome //

function CheckPalindrome(num) {
    let draftNum = num;
    let arrayNum1 = [];
    while(draftNum > 0) {
        let x = draftNum % 10;
        arrayNum1.push(x);
        draftNum = Math.floor(draftNum / 10);
    }
    let arrayNum2 = arrayNum1.slice();
    arrayNum1.reverse();

    let isPalindrome = true;
    for (let i = 0; i < arrayNum1.length / 2; i++) {
        if (arrayNum1[i] != arrayNum2[i]) {
            isPalindrome = false;
            break;
        }
    }

    console.log(`Palindrome status: ${isPalindrome}`);
}