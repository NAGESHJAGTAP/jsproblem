// // quaction 1
// function message(){
//     print("hello world")
// }
// console.log("hello world!")


// // quaction 2
// const person = {
//     fullName : "john",
//     age:25,
//     city:"new york"

// };
// console.log(person)


// // quaction 3
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }

// console.log(reverseString("hello"));  









// // quaction 4
// function isPalindrome(str) {
//     return str === str.split("").reverse().join("");
// }

// console.log(isPalindrome("racecar"));  
// console.log(isPalindrome("hello"));   


// // quaction 5
// function countVowels(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase();
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels("hello world"));



// // quaction 6
// function countWords(str) {
//     return str.split(" ").length;
// }

// console.log(countWords("This is a test string"))



// // quaction 7
// function areAnagrams(str1, str2) {
//     return str1.split('').sort().join('') === str2.split('').sort().join('');
// }

// console.log(areAnagrams("listen", "silent"));  
// console.log(areAnagrams("hello", "world"));  


// // quaction 8
// function findLargest(a, b, c) {
//     return Math.max(a, b, c);
// }

// console.log(findLargest(2, 8, 5))



// // quaction 9
// function isEven(n) {
//     return n % 2 === 0;
// }

// console.log(isEven(4));  

// // quaction 10
// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// console.log(factorial(5));  




// // quaction 11
// function reverseString(s) {
//     return s.split("").reverse().join("");
// }

// console.log(reverseString('hello'));


// // quaction 12
// function isPalindrome(s) {
//     let reversed = s.split("").reverse().join("");
//     return s === reversed;
// }

// console.log(isPalindrome('madam'));


// // quaction 13

// function repeatString(s, n) {
//     return s.repeat(n);
//   }
  
//   console.log(repeatString("abc", 3));

// // quaction 14
// function capitalizeFirstLetters(str) {
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
//   }
  
//   console.log(capitalizeFirstLetters("javascript is fun"));




// //   quaction 15
// function removeDuplicates(str) {
//     return [...new Set(str)].join('');
//   }
  
//   console.log(removeDuplicates("programming"));





// //   quaction 16


//   function containsSubstring(str, substr) {
//     return str.includes(substr);
//   }
  
//   console.log(containsSubstring("hello world", "world"));  
//   console.log(containsSubstring("hello world", "planet"));  
  


// //   quaction 17

// function sumArray(arr) {
//     return arr.reduce((acc, current) => acc + current, 0);
//   }
  
//   console.log(sumArray([1, 2, 3, 4, 5]));


// //   quaction 18
// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//     return sum;
//   }



// //   quaction 19
// function sortArray(arr) {
//     return arr.sort((a, b) => a - b);
//   }
  
//   console.log(sortArray([5, 2, 9, 1, 5, 6]));



// //   quaction 20
// function reverseArray(arr) {
//     return arr.slice().reverse();
//   }
  
//   console.log(reverseArray([1, 2, 3, 4, 5]));


// //   quaction 21
// function countFrequency(arr) {
//     const frequency = {};
//     for (const element of arr) {
//       if (frequency[element]) {
//         frequency[element]++;
//       } else {
//         frequency[element] = 1;
//       }
//     }
//     return frequency;
//   }
  





// //   quaction 22

// function moveZeros(arr) {
//     const nonZeroElements = arr.filter(element => element !== 0);
//     const zeros = arr.filter(element => element === 0);
//     return [...nonZeroElements, ...zeros];
//   }
  
  
// // quaction 23
// function stringToWords(str) {
//     return str.trim().split(/\s+/);
//   }
  
  
//   console.log(stringToWords("This   is  a test")); 


// //   quaction 24
// function truncateString(str, length) {
    
//     if (str.length > length) {
      
//       return str.slice(0, length) + "...";
//     } else {
      
//       return str;
//     }
//   }
  
 
//   console.log(truncateString("This is a long string", 10)); 




// //   quaction 25
// function startsWith(str, substring) {
//     return str.startsWith(substring);
//   }
  
  
//   console.log(startsWith("hello world", "hello")); 
//   console.log(startsWith("hello world", "world")); 



// //   quaction 26
// function endsWith(str, substring) {
//     return str.endsWith(substring);
//   }
  
 
//   console.log(endsWith("hello world", "world")); 
//   console.log(endsWith("hello world", "hello")); 



// // quaction 27
// function insertSubstring(str, substring, position) {
    
//     if (position < 0) {
//       position = 0;
//     }
//     if (position > str.length) {
//       position = str.length; 
//     }
  
//     return str.slice(0, position) + substring + str.slice(position);
//   }
//   console.log(insertSubstring("Hello World", "Beautiful ", 6));

// //   quaction 28


// function removeSubstring(str, substring) {
    
//     const regex = new RegExp(substring, 'g');
   
//     return str.replace(regex, '');
//   }
  
  
//   console.log(removeSubstring("This is a test. This is only a test.", "test")); 





// //   quaction 29

// function sumArray(arr) {
   
//     return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//   }
  
 
//   console.log(sumArray([1, 2, 3, 4, 5]));



// //   quaction 30
// function containsElement(arr, element) {
    
//     return arr.includes(element);
//   }
  
 
//   console.log(containsElement([1, 2, 3, 4, 5], 3));


// //   quaction 31
// function removeDuplicates(arr) {
    
//     const uniqueSet = new Set(arr);
    
    
//     const uniqueArray = Array.from(uniqueSet);
    
//     return uniqueArray;
// }


// const result= removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
// console.log(result); 
 


// quaction 32
// function findUnion(arr1, arr2) {
   
//     const combinedArray = arr1.concat(arr2);

    
//     const uniqueSet = new Set(combinedArray);

    
//     return Array.from(uniqueSet);
// }


// const result = findUnion([1, 2, 3], [2, 3, 4]);
// console.log(result);



// // quaction 33
// function findDifference(arr1, arr2) {
    
//     const set2 = new Set(arr2);

   
//     const difference = arr1.filter(element => !set2.has(element));

    
//     return difference;
// }


// const result = findDifference([1, 2, 3], [2, 3, 4]);
// console.log(result); 





// // quaction 34
// function moveZeros(arr) {
//     let nonZeroIndex = 0; 

    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) {
//             arr[nonZeroIndex] = arr[i];
//             nonZeroIndex++;
//         }
//     }

    
//     for (let i = nonZeroIndex; i < arr.length; i++) {
//         arr[i] = 0;
//     }

//     return arr;
// }


// const result = moveZeros([0, 1, 0, 3, 12]);
// console.log(result);



// // quaction 35
// function countFrequency(arr) {
//     const frequency = {};

   
//     for (let i = 0; i < arr.length; i++) {
//         let element = arr[i];
        
       
//         if (frequency[element]) {
//             frequency[element]++;
//         } else {
//             frequency[element] = 1;
//         }
//     }

//     return frequency;
// }


// const result = countFrequency([1, 2, 2, 3, 3, 3]);
// console.log(result);





// // quaction 36
// function longestConsecutive(nums) {
//     if (nums.length === 0) return 0;

//     const numSet = new Set(nums);
//     let longestStreak = 0;

//     for (const num of numSet) {
        
//         if (!numSet.has(num - 1)) {
//             let currentNum = num;
//             let currentStreak = 1;

            
//             while (numSet.has(currentNum + 1)) {
//                 currentNum++;
//                 currentStreak++;
//             }

            
//             longestStreak = Math.max(longestStreak, currentStreak);
//         }
//     }

//     return longestStreak;
// }


// const result = longestConsecutive([100, 4, 200, 1, 3, 2]);
// console.log(result);




// // quaction 37
// function createPerson(name, age, city) {
//     return {
//         name: name,
//         age: age,   
//         city: city   
//     };
// }


// const person = createPerson("John", 25, "New York");
// console.log(person); 


// // quaction 38
// function getProperty(obj, prop) {
//     return obj[prop];
// }


// const obj = { name: 'Alice', age: 30 };
// console.log(getProperty(obj, 'name')); 


// // quaction 39
// function addProperty(obj, prop, value) {
//     obj[prop] = value; 
// }


// const car = { brand: 'Toyota', model: 'Corolla' };
// addProperty(car, 'year', 2020);
// console.log(car); 


// // quaction 40
// function deleteProperty(obj, prop) {
//     delete obj[prop]; 
// }


// const user = { username: 'john_doe', password: '12345' };
// deleteProperty(user, 'password');
// console.log(user);




// // quaction 41
// function hasProperty(obj, prop) {
    
//     return prop in obj;
    
    
// }


// const obj = { name: 'Alice', age: 30 };
// console.log(hasProperty(obj, 'age')); 


// //quaction 42

// function endsWith(str, substr) {
//   return str.endsWith(substr);
// }

// console.log(endsWith("hello world", "world")); 
// console.log(endsWith("hello world", "hello"));




// // quaction 43
// function secondLargest(arr) {
//     if (arr.length < 2) {
//       return null;
//     }
  
//     let max = arr[0];
//     let secondMax = -Infinity;
  
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > max) {
//         secondMax = max;
//         max = arr[i];
//       } else if (arr[i] > secondMax && arr[i] !== max) {
//         secondMax = arr[i];
//       }
//     }
  
//     return secondMax;
//   }
  
//   console.log(secondLargest([1, 2, 3, 4, 5]));



// // quaction 44
// function objectKeysToArray(obj) {
//     return Object.keys(obj);
//   }
  
//   const obj = { name: 'Alice', age: 30, city: 'NYC' };
//   console.log(objectKeysToArray(obj));


// // quaction 45
// function objectValuesToArray(obj) {
//     return Object.values(obj);
//   }
  
//   const obj = { name: 'Alice', age: 30, city: 'NYC' };
//   console.log(objectValuesToArray(obj)); 


// // quaction 46
// function arrayToObject(arr) {
//     return arr.reduce((obj, item) => {
//       obj[item.key] = item.value;
//       return obj;
//     }, {});
//   }
  
//   const arr = [{ key: 'a', value: 1 }, { key: 'b', value: 2 }];
//   console.log(arrayToObject(arr));


// // quaction 47
// function groupBy(arr, prop) {
//     return arr.reduce((acc, current) => {
//       const key = current[prop];
//       if (!acc[key]) {
//         acc[key] = [];
//       }
//       acc[key].push(current);
//       return acc;
//     }, {});
//   }
  
//   const users = [
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 20 },
//     { name: 'Charlie', age: 30 }
//   ];
//   console.log(groupBy(users, 'age'));




// // quaction 48
// function sumProperty(arr, prop) {
//     return arr.reduce((acc, current) => acc + current[prop], 0);
//   }
  
//   const items = [
//     { name: 'item1', price: 10 },
//     { name: 'item2', price: 15 },
//     { name: 'item3', price: 20 }
//   ];
//   console.log(sumProperty(items, 'price'));





// // quaction 49
// function hasProperty(obj, prop) {
//     return obj.hasOwnProperty(prop);
//   }
  
//   const obj = { name: 'Alice', age: 30 };
//   console.log(hasProperty(obj, 'age')); 









// function mostFrequent(arr) {
//     const freqMap = {};
//     let maxFreq = 0;
//     let mostFrequentElement;
  
//     for (let i = 0; i < arr.length; i++) {
//       const element = arr[i];
//       if (!freqMap[element]) {
//         freqMap[element] = 1;
//       } else {
//         freqMap[element]++;
//       }
  
//       if (freqMap[element] > maxFreq) {
//         maxFreq = freqMap[element];
//         mostFrequentElement = element;
//       }
//     }
  
//     return mostFrequentElement;
//   }
  
//   console.log(mostFrequent([1, 2, 2, 3, 3, 3]));







// function minSumPair(arr) {
//     arr.sort((a, b) => a - b);
//     return [arr[0], arr[1]];
//   }
  
//   console.log(minSumPair([1, 2, 3, 4, 5]));








// function findDifference(arr1, arr2) {
//     return arr1.filter(element => !arr2.includes(element));
//   }
  
//   console.log(findDifference([1, 2, 3], [2, 3, 4]));








// function isSorted(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   console.log(isSorted([1, 2, 3, 4, 5])); 





// function reverseArray(arr) {
//     return arr.slice().reverse();
//   }
  
//   console.log(reverseArray([1, 2, 3, 4, 5]));




// function mergeArrays(arr1, arr2) {
//     return arr1.concat(arr2);
//   }
  
//   console.log(mergeArrays([1, 2, 3], [4, 5, 6])); 






// function findIndex(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === target) {
//         return i;
//       }
//     }
//     return -1;
//   }
  
//   console.log(findIndex([1, 2, 3, 4, 5], 3)); 








// function isSorted(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   console.log(isSorted([1, 2, 3, 4, 5]));








// function firstNonRepeatedCharacter(str) {
//     const charCount = {};
//     for (let char of str) {
//       if (charCount[char]) {
//         charCount[char]++;
//       } else {
//         charCount[char] = 1;
//       }
//     }
//     for (let char of str) {
//       if (charCount[char] === 1) {
//         return char;
//       }
//     }
//     return null;
//   }
  
//   console.log(firstNonRepeatedCharacter("swiss")); 







// function countWords(str) {
//     return str.trim().split(/\s+/).length;
//   }
  
//   console.log(countWords("This is a test string"));










// function endsWith(str, suffix) {
//   return str.endsWith(suffix);
// }

// console.log(endsWith("hello world", "world")); 
// console.log(endsWith("hello world", "hello")); 







// function removeSubstring(str, sub) {
//     return str.replace(new RegExp(sub, 'g'), '');
//   }
  
//   console.log(removeSubstring("This is a test. This is only a test.", "test")); 










// function findMax(arr, prop) {
//   return arr.reduce((max, current) => {
//     return current[prop] > max[prop] ? current : max;
//   }, arr[0]);
// }

// const users = [
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 20 },
//   { name: 'Charlie', age: 35 }
// ];

// console.log(findMax(users, 'age'));









// function longestword(str){
//   return str.split(" ").sort((a,b)=> b.length -a.length)[0];

// }
// console.log(longestword("the quick brown fox jumped over the lazy dog"))








//  function gcd(a, b) {
//   if (b === 0) {
//     return a;
//   }
//   return gcd(b, a % b);
// }

// console.log(gcd(12, 18));










// function rotateArray(arr, k) {
//   k = k % arr.length; 
//   return arr.slice(-k).concat(arr.slice(0, -k));
// }

// console.log(rotateArray([1, 2, 3, 4, 5], 2));









// function isBalanced(str) {
//   const stack = [];
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (char === '(') {
//       stack.push(char);
//     } else if (char === ')') {
//       if (stack.length === 0) {
//         return false; 
//       }
//       stack.pop();
//     }
//   }
//   return stack.length === 0; 
// }

// console.log(isBalanced('()'));








// function truncateString(str, length) {
//   if (str.length <= length) {
//     return str; 
//   }
//   return str.substring(0, length - 3) + "...";
// }

// console.log(truncateString("This is a long string 10"))





// function findIntersection(arr1, arr2) {
//   return arr1.filter(element => arr2.includes(element));
// }

// console.log(findIntersection([1, 2, 3], [2, 3, 4]));
















 





































