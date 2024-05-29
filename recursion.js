/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if (i === nums.length) return 1;
  return nums[i] * product(nums, i+1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, maxLength=0) {
  if(i === words.length) return maxLength;
  maxLength = Math.max(words[i].length, maxLength)
  return longest(words, i+1, maxLength)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0, newStr='') {
  if (i >= str.length) return newStr;
  newStr += str[i]
  return everyOther(str, i+2, newStr)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=0) {
  let lefti = i;
  let righti = str.length-1-i
  if(lefti >= righti) return true;
  if(str[lefti] !== str[righti]) return false;
  return isPalindrome(str, i+1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if(i === arr.length) return -1;
  if (arr[i] === val) return i;
  return findIndex(arr, val, i+1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=str.length-1, newStr='') {
  if (newStr.length === str.length) return newStr;
  newStr += str[i]
  return revString(str, i-1, newStr)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, strArr=[]) {
  for (let key in obj){
    if (typeof obj[key] === 'object'){
      gatherStrings(obj[key], strArr);
    }
    if(typeof obj[key] === 'string'){
      strArr.push(obj[key]);
    }
  }
  return strArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, lowI=0, highI=arr.length-1) {
  if (lowI > highI) return -1

  let midI = Math.floor((lowI + highI)/2)
  if (arr[midI] === val) return midI

  if (arr[midI] > val) return binarySearch(arr, val, lowI, highI=midI-1)
  if (arr[midI] < val) return binarySearch(arr, val, lowI = midI+1, highI)
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
