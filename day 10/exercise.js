//Create a function to convert Excel sheet column title to its corresponding column number.

function titleToNumber(title) {
  let result = 0;

  for (let char of title) {
    result = result * 26 + (char.charCodeAt(0) - 64);
  }
  return result;
}

console.log("A -> " + titleToNumber("A"));
console.log("B -> " + titleToNumber("B"));
console.log("C -> " + titleToNumber("C"));
console.log("Z -> " + titleToNumber("Z"));
console.log("AA -> " + titleToNumber("AA"));
console.log("AB -> " + titleToNumber("AB"));

//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
function UniqIntegers(arr) {
  const singleNum = {};

  for (let num of arr) {
    if (singleNum[num]) {
      singleNum[num]++;
    } else {
      singleNum[num] = 1;
    }
  }
  for (let i in singleNum) {
    if (singleNum[i] === 1) {
      return i;
    }
  }
}

console.log(UniqIntegers([2, 2, 1]));

//Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// ● An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

function anagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sRes = {};
  const tRes = {};

  for (const char of s) {
    sRes[char] = (sRes[char] || 0) + 1;
  }

  for (const char of t) {
    tRes[char] = (tRes[char] || 0) + 1;
  }

  for (const char in sRes) {
    if (sRes[char] !== tRes[char]) {
      return false;
    }
  }
  return true;
}

console.log(
  `input: s = anagram, t = nagaram, output = ${anagram("anagram", "nagaram")}`
);

function climbStairs(x) {
  if (x <= 2) {
    return x;
  }
  return climbStairs(x - 1) + climbStairs(x - 2);
}

console.log(climbStairs(4));
