// let a = 12

// function isPrime(n){
//     if(n<2) return false

//     for(let i=2; i<=Math.sqrt(n);i++){
//         if(n%i === 0){
//             return false
//         }
//     }

//     return true
// }


// function findClosestPrime(target){
//     let lower = target - 1
//     let upper = target + 1

//     while(true){
//     if(isPrime(lower)) return lower
//     if(isPrime(upper)) return upper
//         lower--
//         upper++
        
//     }
// }

// console.log(findClosestPrime(a))


// function Findprime(n){
//     if(n<2) return false;
//     for( let i = 2 ; i<=Math.sqrt(n);i++){
//         if(n%2===0){
//             return false;
//         }
//     }
//     return true;
// }

// function findClosestPrime(target){
//     let left = target - 1;
//     let right = target+1;

//     while(true){
//         if(Findprime(left)) return left ;
//         if(Findprime(right)) return right;
//         left --
//         right++
//     }
// }
// console.log(findClosestPrime(10));