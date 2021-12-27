function isPrime(num) {
    for (let i = 2; i <= num/2; i++){
        if (num % i === 0)
            return false;
    }
    return num



}

function findPrime(...numbers) {
    // console.log("Output:");

    for (let i = 0; i < numbers.length; i++) {
        if (isPrime(numbers[i]))
            console.log(numbers[i] + " is a prime number");
        // else
        //     console.log(numbers[i] + " is NOT a prime number");
    }
}

console.log(findPrime(2,256,789,153,742,15,13,11,35,10,25,45,55,65,75,));

for (let i = 2; i <= 1000; i++){
    if (findPrime(i))
        console.log(i + " is a prime number");
}