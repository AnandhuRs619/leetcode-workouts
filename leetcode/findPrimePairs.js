function findPrimePairs(n) {
    const primePairs = [];

    for (let i = 2; i <= n / 2; i++) {
        const x = i;
        const y = n - x;
        let isXPrime = true;
        let isYPrime = true;

        for (let j = 2; j <= x; j++) {
            if (x % j === 0 && j !== x) {
                isXPrime = false;
                break;
            }
        }

        for (let k = 2; k <= y; k++) {
            if (y % k === 0 && k !== y) {
                isYPrime = false;
                break;
            }
        }

        if (isXPrime && isYPrime) {
            primePairs.push([x, y]);
        }
    }

    return primePairs;
}

console.log(findPrimePairs(15)); 

