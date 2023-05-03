// Primorial: The primorial of a number is the product of all the prime numbers less than or equal to that number

//function that checks if num is prime:
function checkPrime(num) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if ((num / i ) % 1 == 0) {
            isPrime = false; 
            break;
        }
    }
    return isPrime;
}

//function that uses checkPrime to solve for primorial:
function primorialOf(num) {
    let product = 1;
    for (let i = 1; i <= num; i++) {
        if (checkPrime(i) == true) {
            product *= i;
        }
    }
    return product;
}