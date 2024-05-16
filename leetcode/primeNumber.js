// const arr = [2, 3, 4, 6,45, 21,7,8, 5, 26, 89];
// let selectednum = false;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 45) {
//         selectednum  = true;
//     }
//     if (selectednum) {
//         let count = 0;
//         for (let j = 2; j < arr[i]; j++) {
//             if (arr[i] % j === 0) {
//                 count = 1;
//                 break;
//             }
//         }
//         if (count === 0 && arr[i] >= 2) {
//             console.log(arr[i]);
//         }
//     }
// }


 
// function countPrimesLessThanN(n){

//     let count = 0;
//     let prime = []
//     for (let i = 2; i < n; i++) {
//         let isPrime = true;
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             prime.push(i)
//             count++;
            
//         }
//     }
    
//     return {count , prime} ; 
    
// }
// console.log(countPrimesLessThanN(49))



function duplicateNum(arr) {
    let duplicates = [];
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        let duplicate = false;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] && i !== j) {
                duplicate = true;
               
                break;
            }
        }
        if (duplicate) {
            duplicates.push(arr[i]);
            count++;
        }
    }

    return {duplicates , count};
}

let arr = [1, 2, 3, 2, 4, 7, 3, 5];
console.log(duplicateNum(arr));


// function isPrime(num) {
//     if (num < 2) {
//         return false;
//     }

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// function primePairs(target) {
//     if (target < 2) {
//         return null; // No valid prime pairs for targets less than 2
//     }

//     let closestSum = Infinity;
//     let pair = [];

//     for (let i = 2; i <= target / 2; i++) {
//         if (isPrime(i) && isPrime(target - i)) {
//             let currentSum = i + (target - i);

//             if (Math.abs(target - currentSum) < Math.abs(target - closestSum)) {
//                 closestSum = currentSum;
//                 pair = [i, target - i];
//             }
//         }
//     }

//     return pair;
// }

// // Example usage:
// let targetNumber = 30;
// let closestPrimePair = primePairs(targetNumber);
// console.log(`Prime pair closest to ${targetNumber}: ${closestPrimePair}`);