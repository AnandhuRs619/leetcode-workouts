
// let charCount = {};
// for (let i = 0 ; i< str.length ; i++){
//     let chara = str[i];
//     if(chara !== " " && chara.match(/[a-zA-Z]/)){
//         charCount[chara]=(charCount[chara]|| 0) + 1 ;
//     }
// }
//  for (let char in charCount){
//     if (charCount[char]>1){
//         console.log(char + " count = " ,charCount[char])
//     }
//  }



// function countRepeatedWords(str) {
//     let word = str.toLowerCase().split(" ");
//     let repeatedWords = {};

//     for (let i = 0; i < word.length; i++) {
//         if (repeatedWords[word[i]] === undefined) {
//             repeatedWords[word[i]] = 1;
//         } else {
//             repeatedWords[word[i]]++;
//         }
//     }

//     return repeatedWords;
// }

// let str = "hi developer My name is Anandhu i am a MERN stack Developer";
// console.log(countRepeatedWords(str));



// function countRepeatedWords(str) {
//     let words = str.toLowerCase().split(" ");
//     let map = new Map();

//     for (const word of words) {
//         if (map.has(word)) {
//             map.set(word, map.get(word) + 1);
//         } else {
//             map.set(word, 1);
//         }
//     }

//     let result = [];
//     map.forEach((frq, word) => {
//         if(frq>1){
//          result.push(`The word "${word}" is repeated ${frq} times.`);
//         }

//     });

//     return result;
// }

// let str = "hi developer My name is Anandhu i am a MERN stack Developer";
// console.log(countRepeatedWords(str));


function repeatedWords(str){
let words = str.toLowerCase().split(" ");
let map = new Map();

    for (const word of words){
        if(map.has(word)){
            map.set(word,map.get(word)+1)
        }else{
            map.set(word,1)
        }
    }
    let result = [];
    map.forEach((count,word)=>{
        if(count>1){
            result.push(word,count);
        }
    })
    return result;
}


let str = "i am looking for a nice job in it it is really nice to meet you "
console.log(repeatedWords(str));