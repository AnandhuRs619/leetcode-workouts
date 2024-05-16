// function higherOrderFunction(fn) {
//     return function(x) {
//         return fn(x) * 2;
//     };
// }

// function multiplyBy3(num) {
//     return num * 3;
// }

// const newFunction = higherOrderFunction(multiplyBy3);
// console.log(newFunction(5)); // Output: 30


// promise 

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = true;
//             if (success) {
//                 resolve('Data fetched');
//             } else {
//                 reject('Error fetching data');
//             }
//         }, 2000);
//     });
// }

// fetchData()
//     .then((data) => {
//         console.log(data); // Output: Data fetched
//     })
//     .catch((error) => {
//         console.error(error);
//     });


function fetchData( handleData) {
    setTimeout(() => {
        handleData('Data fetched')
    }, 2000);
}

function  handleData(data) {
    console.log(data); // Output: Data fetched
}

fetchData(handleData);
