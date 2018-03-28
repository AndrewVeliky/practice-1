function sumPrimes(num) {
    let sum = 0;
    let n = 2;

    function isPrime(number) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }

    do {

        if (isPrime(n)) {
            console.log(n);
            sum += n;
        }

        n++;
    } while (n <= num);


    return sum;
}