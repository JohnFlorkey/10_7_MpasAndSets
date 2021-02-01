// Quick Question #1
// [1,2,3,4]
// solution {1,2,3,4}

// Quick Question #2
// "ref"

// Quick Question #3
// {[1,2,3]: false}
// solution
// {[1,2,3]: true},
// {[1,2,3]: false}

const hasDuplicate = ((arr) => 
    arr.length === new Set(arr).size ? false : true
)
// solution
// const hasDuplicate = arr => new Set(arr).size !=== arr.length

const vowelMap = ((str) => {
    const m = new Map();
    [...'aeiou'].forEach((vowel) => {
        const count = [...str].filter((char) => {
            return char === vowel;
        }).length
        if (count > 0){
            m.set(vowel, count);
        }
    })
    return m;
})
// solution
// function isVowel(char){
//     return "aeiou".includes(char);
//   }
  
//   function vowelCount(str){
//     const vowelMap = new Map();
//     for(let char of str){
//       let lowerCaseChar = char.toLowerCase()
//       if(isVowel(lowerCaseChar)){
//         if(vowelMap.has(lowerCaseChar)){
//           vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
//         } else {
//           vowelMap.set(lowerCaseChar, 1);
//         }
//       }
//     }
//     return vowelMap;
//   }