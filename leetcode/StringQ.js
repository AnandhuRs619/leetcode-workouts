// function ReverseSting(str){

//     let reveresed = " ";


//     for(let i = str.length-1 ;i>=0;i--){
//         reveresed += str[i];
//     }
//     return reveresed
// }

//  let str = "botallanova" 
//  console.log(ReverseSting(str));

// function findlongestWord(str){
//     let words = str.split(' ');
//     let longestWord = " ";

//     for(let word of words){
//         if(word.length > longestWord.length){
//             longestWord = word;
//         }
//     }
//     return longestWord ;
// }

// let str = "my name is anandhu"
// console.log(findlongestWord(str));


// Palindrome ######################

// function Palindrome (str){
//     let reveresed= '';
//     for(let i = str.length - 1 ; i>=0;i--){
//         reveresed += str[i];
//     }
//     if(str===reveresed){
//         return true
//     }
//      return false
// }
// let str = "malayalam"
// console.log(Palindrome(str));


// write a function that checks whether two strings are anagrams or not ?


// function areAnangrms(str1, str2){
//     const sortedStr1 = str1.split("").sort().join("")
//     const sortedStr2 = str2.split("").sort().join("")

//     return sortedStr1 === sortedStr2
// }


// console.log(areAnangrms("listen","silent"))
// console.log(areAnangrms("hello", "world"));




// Write a function that returns the number of vowels in a string.



// function countVowels(str){
//     const vowels = ['a','e','i','o','u']
//     let count = 0;
    
//     for(let char of str.toLowerCase()){
//         if(vowels.includes(char)){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels('Hello,world!'))


//  find words starting with vowels 


function countWordsStartingWithVowels(sentence) {
    let word = sentence.split(/\s+/);
    let vowels = ['a','e','i','o','u'];
    let count = 0;
    for(let char of word){
        let firstchar = char[0].toLowerCase();
        if(vowels.includes(firstchar)){
            count ++;
            console.log(char)
        }
    }
    return count ;
}
// Test the function
let sentence = "My name is Anandhu";
console.log("Number of words starting with vowels:", countWordsStartingWithVowels(sentence));