function friendlyNumber(number1, number2) {
    let num1divisors = 0;
    let num2divisors = 0;

    for (let i = 1; i <= number1/2; i++) {
        if (number1 % i === 0) num1divisors += i;
    }

    for (let i = 1; i <= number2/2; i++) {
        if (number2 % i === 0) num2divisors += i;
    }

    if (number1 === num2divisors && number2 === num1divisors)
        console.log(number1 + " and " + number2 + " are friendly numbers");
    else console.log(number1 + " and " + number2 + " are NOT friendly numbers");
}

friendlyNumber(220, 284);
friendlyNumber(220, 22);

console.log("---------------------------")

// PerfectNumbers

function isPerfect(num) {
    let sumofdivisors = 0

    for (let i = 1; i <= num/2; i++){
        if (num % i === 0)
            sumofdivisors = i +sumofdivisors

    }
    if (num === sumofdivisors){
        return true
    }
}
for (let i = 1; i <= 1000; i++){
    if (isPerfect(i)){
        console.log(i+ " is a perfect number")
    }
}