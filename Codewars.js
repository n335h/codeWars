// Code Wars JS file 

// INSTRUCTIONS
// Task
// Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.

// Examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
// Notes
// "flick" will always be given in lowercase.
// A list may contain multiple flicks.
// Switch the boolean value on the same element as the flick itself.

// SOLUTIONS


var arr = ['edabit', 'flick', 'eda', 'bit'];
var newArr;

function flickSwitch(arr) {
  let bool = true;
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
      
if (arr[i] !== 'flick') {
      newArr.push(bool);
    } else {
    bool = !bool;
    newArr.push(bool);
   }
   
 }
return newArr
}
 
 flickSwitch(arr)
console.log(newArr)


// INSTRUCTIONS
// Task
// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral, and are shown as the number 0.
// Worked Example
// ("+-+", "+--") ➞ "+-0"
// # Compare the first characters of each string, then the next in turn.
// # "+" against a "+" returns another "+".
// # "-" against a "-" returns another "-".
// # "+" against a "-" returns "0".
// # Return the string of characters.

// SOLUTIONS

function neutralise(s1, s2) {
    let arr = [];
    for (let i = 0; i < s1.length; i++) { // loop through the first string 
        if (s1[i] === s2[i]) { // if the first string is equal to the second string 
            arr.push(s1[i]); // push the first string into the array
        } else { // otherwise
            arr.push(0); // push 0 into the array
        }
    }
    return arr.join('');
}


// Task:
// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

// Examples:
// twoArePositive(2, 4, -3) == true
// twoArePositive(-4, 6, 8) == true
// twoArePositive(4, -6, 9) == true
// twoArePositive(-4, 6, 0) == false
// twoArePositive(4, 6, 10) == false
// twoArePositive(-14, -3, -4) == false

//Solutions
function twoArePositive(a, b, c) {
    let count = 0;
    if (a > 0) {
        count++;
    }
    if (b > 0) {
        count++;
    }
    if (c > 0) {
        count++;
    }
    return count === 2;
}

// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

// For example n = 3 result in:

// "I\n I\n  I"
// or printed:

// I
//  I
//   I
// Another example, a 7-step stairs should be drawn like this:

// I
//  I
//   I
//    I
//     I
//      I
//       I

//Solutions
 function drawStairs(n) {
    let str = '';
    for (let i = 0; i < n; i++) {
      str += ' '.repeat(i) + 'I\n';
    }
    return str.slice(0, -1);
     }


// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

//Solutions
     function sumTwoSmallestNumbers(numbers) {  
  numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
 };

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

//Solutions
function getMiddle(s) {
  if (s.length % 2 == 1) return s.charAt(s.length / 2);
  else return s.charAt(s.length / 2 - 1) + s.charAt(s.length / 2);
}



// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

//Solutions
function isPalindrome(x) {
let lower = x.toLowerCase()
console.log(lower)
let reversed = lower.split("").reverse().join("");
  if ( lower === reversed){
    return true;
  }
  return false 
}


// Write a PostgreSQL query that selects film_id, the title and special_features columns from the film table in the DVD rental database, and returns films that have either "Deleted Scenes" or "Behind the Scenes" as a special feature, but not both - meaning that if there are "Deleted Scenes", there should not be "Behind the Scenes" and vice versa. The query should also exclude films that have "Commentaries" as a special feature.

// Notes:
// for the sample tests, static dump of DVD Rental Sample Database is used, for the final solution - random tests.
// The result should be order by title alphabetically, if title is the same - then by film_id in asc order.
// special_features is the text[] type. It represents a one-dimensional array of values, where each value is of the text data type.
// Schema:
// film table:
// Column            | Type      | Modifiers
// ------------------+-----------+-----------
// film_id           | integer   | not null
// title             | varchar   | not null
// description       | text      | not null
// release_year      | integer   | not null
// language_id       | integer   | not null 
// rental_duration   | integer   | not null
// rental_rate       | numeric   | not null
// length            | integer   | not null
// replacement_cost  | numeric   | not null
// rating            | varchar   | not null
// last_update       | timestamp | not null
// special_features  | text[]    | not null
// Desired Output
// The desired output should look like this:

// film_id | title                             | special_features                       |
// --------+-----------------------------------+----------------------------------------|
//    32   | A Shawshank Redemption            | {Trailers, Deleted Scenes}             | 
//    14   | Monty Python and the Holy Grail   | {Trailers, Deleted Scenes}             |
// ...

//Solutions
// SELECT film_id, title, special_features
// FROM film
// WHERE (
//   (ARRAY_TO_STRING(special_features, ',') LIKE '%Deleted Scenes%' AND ARRAY_TO_STRING(special_features, ',') NOT LIKE '%Behind the Scenes%')
//   OR (ARRAY_TO_STRING(special_features, ',') LIKE '%Behind the Scenes%' AND ARRAY_TO_STRING(special_features, ',') NOT LIKE '%Deleted Scenes%')
// )
// AND NOT ARRAY_TO_STRING(special_features, ',') LIKE '%Commentaries%'
// ORDER BY title, film_id ASC;




// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

//Solutions
function greet(name){
   return `Hello, ${name} how are you doing today?`;
}

// Write a function that always returns 5

// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

//Solutions
function unusualFive() {
  return "hahah".length;
}

function unusualFive() {
let five = "five!";
  return five.length
}

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

//Solutions
function findOdd(A) {
 let outcome;
 const count = {};
  
 A.forEach((num) => {
   if (count[num]){
       count[num]++;
       } else {
         count[num] = 1;
       }
 });
  console.log(count);
  
   for (let num in count) {
     if (count[num] % 2 === 1) {
       outcome = num;
     }
   }
  return Number(outcome);
  }

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
//Solution 1
function XO(str) {
    
 const newStr = str.toLowerCase().split('')
  let oScore = 0
  let xScore = 0
  for (i = 0; i < newStr.length; i++){
    if( newStr[i] === 'o'){
      oScore = oScore + 1
    }
    console.log(oScore)
    if( newStr[i] === 'x'){
      xScore = xScore + 1
    }}
  
    if(xScore === oScore){
      return true
    }
    else{
      return false
    }
}

// Find the last element of the given argument(s).

// Examples
// last([1, 2, 3, 4] ) // =>  4
// last("xyz")         // => "z"
// last(1, 2, 3, 4)    // =>  4
// In javascript and CoffeeScript a list will be an array, a string or the list of arguments.

//Solutions
function last(list){
  var iffy = arguments[arguments.length - 1];
  return iffy[iffy.length - 1] || iffy;
}

function last(){
  var listy = arguments[arguments.length-1];
  if (typeof listy === "string"  || Array.isArray(listy)){
    return listy[listy.length-1];}
  else { 
  return listy 

  }   

}

function last(list){
  var last = arguments[arguments.length - 1];
  return last[last.length - 1] || last;
}

// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"
// Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.

//Solutions

function removeConsecutiveDuplicates(string) {
 let singles = []
    let arr = string.split(' ')
    console.log (arr)
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i+1]){
            singles.push(arr[i])
        }
    }
    return singles.join(' ')
}


// Write a function last that accepts a list and returns the last element in the list.

// If the list is empty:

// In languages that have a built-in option or result type (like OCaml or Haskell), return an empty option

// In languages that do not have an empty option, just return null

const last = xs => xs.length ? xs[xs.length - 1] : null;



// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str){ //
    let arr = str.toLowerCase().split('');
    let obj = {}; 
  
    for (let i = 0; i < arr.length; i++) { 
        if (obj[arr[i]]) { 
        return false; 
        } else {
        obj[arr[i]] = true; 
        }
    }
    return true;
    }

//     Enjoying your holiday, you head out on a scuba diving trip!

// Disaster!! The boat has caught fire!!

// You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

// Go to work!

function fireFight(s) {
  let string = s.split(" ");
  string = string.map(word => word.replace("Fire", "~~"));
  return string.join(" ");
}


// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

function booleanToString(b){
  let mybool
  //your code here
  if (b === true) {
    mybool = "true"
  }
  else {
    mybool = "false"
  }
  return mybool
}


// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  return result;
}

// Inspired by the development team at Vooza, write the function that

// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// Note: your function should have a default parameter.

// For example(Input --> Output):

// "anyone else" --> 0
// "Zach" --> 18

function howManyLightsabersDoYouOwn(name) {
  if (name === "Zach") {
    return 18
  }
  else {
    return 0
  }
}

//Sometimes, I want to quickly be able to convert miles per imperial gallon (mpg) into kilometers per liter (kpl).

// Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

// Make sure to round off the result to two decimal points.

// Some useful associations relevant to this kata:

// 1 Imperial Gallon = 4.54609188 litres
// 1 Mile = 1.609344 kilometres

function converter (mpg) {
 let onempg = 4.54609188 
let kpl = 1.609344
 let convert = onempg/kpl

return Math.round((mpg /convert) * 100) / 100
}

//All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
  let beast1 = beast.charAt(0);
  let beast2 = beast.charAt(beast.length -1);
  let dish1 = dish.charAt(0);
  let dish2 = dish.charAt(dish.length -1); 

  if (beast1 === dish1 && beast2 === dish2) { // 
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}


//Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

function sumStr(a, b) {
  let sum = Number(a) + Number(b);
  return sum.toString();
}

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x) {
  let product = 1;
  for (let i = 0; i < x.length; i++) {
    product *= x[i];
  }
  return product;
}
    
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
function removeExclamationMarks(s) {
  return s.replace(/!/g,"");
}


//Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// Example output:

// Hello, Mr. Spock

function sayHello(name) {
return ("Hello, " + name );
  }

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
// For example, if this array were passed as an argument:
// ["Telescopes", "Glasses", "Eyes", "Monocles"]
// Your function would return the following array:
// ["Eyes", "Glasses", "Monocles", "Telescopes"]
// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
  
  function sortByLength (array) {
let sorted = array.sort((a,b) => a.length - b.length);
  return sorted
};

// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
// The geese are any strings in the following array, which is pre-populated in your solution:
//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:
//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(function(bird) {
    return geese.indexOf(bird) === -1;
  });
}


// This function should return an object, but it's not doing what's intended. What's wrong?

function mystery() {
  var results =
    {sanity: 'Hello'};
  return results
  }

// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.
// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
  function isDivisible(n, x, y) {
return n % x === 0 && n % y === 0;
  }
  

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here
 
function century(year) {
let century = Math.floor((year+99) / 100);
return century;
}


//  Given an array of numbers, return the difference between the largest and smallest values.
// For example:
// [23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).
// [1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).
// The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.

function betweenExtremes(numbers) {
let min = numbers [0]
let max = numbers [0]

 for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max - min;

}



// Making Six Toast.

function sixToast(num) {
  return Math.abs(num - 6)
}


function greet(){
return ("hello world!")
  }

// Be Concise IV 


function find(a, e){
    return a.indexOf(e) > -1 ? a.indexOf(e): "Not found";
    }



// String repeat

function repeatStr (n, s) {
  return (s.repeat(n));
}

// Find numbers which are divisible by given number

function divisibleBy(numbers, divisor){
    return numbers.filter(num => num % divisor === 0)
    }
    

// Find the stray number

function stray(numbers) {

  const counts = {};

  for (let i = 0; i < numbers.length; i++) {
    if (counts[numbers[i]]) {
      counts[numbers[i]]++;
    } 
        else {
      counts[numbers[i]] = 1;
    }
  }
  for (const number in counts) {
    if (counts[number] === 1) {
      return Number(number); 
    }
  }
}

// Remove First and Last Character

function removeChar(str){
let newStr = str.slice(1, -1)
return newStr
};




// Kata Example Twist

var websites = []
for (var i = 0; i < 1000; i++) {
  websites.push("codewars")
}

// Grasshopper - Messi goals function

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {

  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark

function remove (string) {
  const words = string.split(' ');
  const filteredWords = words.filter(word => {
    const exclamationCount = (word.match(/!/g) || []).length;
    return exclamationCount !== 1;
  });
  return filteredWords.join(' ');
}

// Gravity Flip

const flip=(d, a)=>{ 
    if (d === 'R') {
        return a.sort((a, b) => a - b); //sorts the array in ascending order
    } else {
        return a.sort((a, b) => b - a); //sorts the array in descending order
    }
    }

// Extract the domain name from a URL

function domainName(url){
  let domain = url.replace('http://', '').replace('https://', '').replace('www.', '').split('.')[0];
  return domain;
}


// Quarter of the year

const quarterOf = (month) => {

    if (month <= 3) {
        return 1;
    } else if (month <= 6) {
        return 2;
    } else if (month <= 9) {
        return 3;
    } else {
        return 4;
    }
}

// Remove String Spaces

function noSpace(x){
let cut = x.replace(/\s+/g, '');
  return cut
}

// You Can't Code Under Pressure #1

function doubleInteger(i) {
  return i*2;
}


// Fix My Phone Numbers!


function isItANum(str) {

let result = str.replace(/\D/g, '')
if (result.charAt(0) === '0' && result.length === 11) { //
return result;
} else {
return "Not a phone number"
}
}

// Thinkful - Logic Drills: Traffic light
JavaScript:
function updateLight(current) {
    if (current === "green"){
        return "yellow"
    }
    else if (current === "yellow"){
        return "red"
    }
    else if (current === "red"){
        return "green"
    }
}

// My head is at the wrong end!
function fixTheMeerkat(arr) {
return arr.reverse()
}

// Cat years, Dog years
var humanYearsCatYearsDogYears = function(humanYears) 
{
  let catYears, dogYears;

  if (humanYears == 1) {
    catYears = 15;
    dogYears = 15;
  } else if (humanYears == 2) {
    catYears = 24;
    dogYears = 24;
  } else {
    catYears = 24 + (humanYears - 2) * 4;
    dogYears = 24 + (humanYears - 2) * 5;
  }

  return [humanYears, catYears, dogYears];
}
 
// If you can't sleep, just count sheep!!
function countSheep(num) {
  let str = '';
  for (let i = 1; i <= num; i++) {
    str += i + ' sheep...';
  }
  return str;
}

// Dot Calculator
function dotCalculator(equation) {
  let [a, op, b] = equation.split(' ');
  let result = 0;
  switch (op) {
    case '+':
      result = a.length + b.length;
      break;
    case '-':
      result = Math.max(a.length - b.length, 0);
      break;
    case '*':
      result = a.length * b.length;
      break;
    case '//':
      result = Math.floor(a.length / b.length);
      break;
    default:
      return "";
  }
  return '.'.repeat(result);
}

// Opposites Attract
function lovefunc(flower1, flower2) {
  if ((flower1 % 2 === 0 && flower2 % 2 === 1) || (flower1 % 2 === 1 && flower2 % 2 === 0)) {
    return true;
  } else {
    return false;
  }
}
// You Got Change?
function giveChange(amount) {
  if (amount <= 0) {
    return [0, 0, 0, 0, 0, 0];
  }
  
  let changeArray = [0, 0, 0, 0, 0, 0];
  let billsArray = [100, 50, 20, 10, 5, 1];
  
  let i = 0;
  while (amount > 0) {
    let bill = Math.floor(amount / billsArray[i]);
    changeArray[i] = bill;
    amount = amount % billsArray[i];
    i++;
  }
  
  return changeArray.reverse();
}

function giveChange(amount) {
    const bills = [100, 50, 20, 10, 5, 1];
    let change = [];
    for (let i = 0; i < bills.length; i++) {
        let bill = bills[i];
        let amountOfBills = Math.floor(amount / bill);
        change.push(amountOfBills);
        amount = amount % bill;
  
      
    }
    return change.reverse()
    }


// Stop gninnipS My sdroW!

function spinWords(string) {
  const words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      words[i] = words[i].split("").reverse().join("");
    }
  }
  return words.join(" ");
  }


// Sort by Last Char
function last(x){
  return x.split(' ').sort((a,b) => a.charCodeAt(a.length-1) - b.charCodeAt(b.length-1));
  
} 


// Simple Change Machine
function changeMe(moneyIn){
	switch (moneyIn) {
  	case '£5': return '20p '.repeat(25).trim()
  	case '£2': return '20p '.repeat(10).trim()
  	case '£1': return '20p '.repeat(5).trim()
  	case '50p': return '20p 20p 10p'
  	case '20p': return '10p 10p'
    default: return moneyIn
  }
}


// Sum even numbers
function sumEvenNumbers(input) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 === 0) {
            sum += input[i];
        }
    }
    return sum;
}


// Reversed Strings
function solution(str){
 var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
    }



// Reversed Words
function reverseWords(str){
    return str.split(' ').reverse().join(' ');
    }



// ES6 string addition
function joinStrings(string1, string2){
  return `${string1} ${string2}`
}

// Contamination #1 -String-
 function contamination(text, char){
        if(text.length == 0 || char.length == 0){
            return "";
        }
        var newString = new Array(text.length + 1).join(char);
        return newString;
        }


// Find out whether the shape is a cube
var cubeChecker = function(volume, side){
  if (side <= 0) {
    return false;
  }
  else if (volume === side**3) {
    return true;
  }
  else {
    return false;
  }
};

// Find Maximum and Minimum Values of a List
var min = function(list){
  let ascending = list.sort((a,b)=>a-b)
    return ascending[0];
}

var max = function(list){
  let descending = list.sort((a,b)=>b-a)
    return descending[0];
}

// Chuck Norris VII - True or False? (Beginner)
function ifChuckSaysSo(){
  return !true;

}

// Calculate BMI

function bmi(weight, height) {
  let result = weight/height**2;
  if(result<=18.5) {
    return "Underweight";
  }
  else if(result<=25.0) {
    return "Normal";
  }
  else if(result<=30.0) {
    return "Overweight";
  }
  else if (result>30.0){
     return "Obese";
  }
}

// Add Length

function addLength(str) {
const words = str.split (" ")
return words.map (str => `${str} ${str.length}`);
}

// String Templates - Bug Fixing #5

function buildString(...template){
  return `I like ${template.join(", ")}!`;
}

// Unfinished Loop - Bug Fixing #1

function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }
  
  return newArray;
}   

// Find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
  const min = Math.min(...args)
  return min;  
  }
}


// All Star Code Challenge #18
function strCount(str, letter){  
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

// Is your period late?
function periodIsLate(last, today, cycleLength) {
  const oneDayMs = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
  const daysSinceLastPeriod = Math.round((today.getTime() - last.getTime()) / oneDayMs);
  return daysSinceLastPeriod > cycleLength;
}

// Even or Odd
function evenOrOdd(number) {
    if(number % 2){
    return "Odd"}
    else{
      return "Even"
  }
}

// Simple multiplication
function simpleMultiplication(number) {
    if(number % 2==0){
   return number*8
}
else {
  return number*9
}
}


// Counting sheep...

function countSheeps(arrayOfSheep) {
  let count = 0; // Initialize a count variable to keep track of the number of true values
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) { 
      count++; // Increment the count variable when a true value is found
    }    
  }
  return count; // Return the final count
}


// Is it a number?
function isDigit(s) {
if (s === `` || isNaN (s)) {
  return false;}
  
var num = parseFloat(s);
  return !isNaN(num) && isFinite(num);
}


function isDigit(s) {
if (s === `` || isNaN(s)) {
  return false;}
  
var num = parseFloat(s);
  return !isNaN(num) && isFinite(num);
}


// Multiply
function multiply(a, b){
 return a * b;
}


