// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// first way
const strStr = function (haystack, needle) {
  if (!haystack.includes(needle)) return -1;

  let currentIndex = 0;
  let foundIndex = null;
  do {
    const clippedHaystack = haystack.slice(
      currentIndex,
      currentIndex + needle.length
    );
    if (clippedHaystack === needle) {
      foundIndex = currentIndex;
    }

    currentIndex += 1;
  } while (foundIndex === null);

  return foundIndex;
};

console.log(strStr("sadbutsad", "sad"));

//second way
const strStr2 = function (haystack, needle) {
  return haystack.indexOf(needle);
};

console.log(strStr2("sadbutsad", "db"));

//third way
const strStr3 = function (haystack, needle) {
  if (!haystack.includes(needle)) return -1;
  let foundIndex = null;

  for (let i = 0; i <= haystack.length - needle.length; i += 1) {
    if (haystack.substring(i, i + needle.length) === needle) {
      foundIndex = i;
      break;
    }
  }
  return foundIndex;
};

console.log(strStr3("ansms", "sms"));

//fourth way
var strStr4 = function (haystack, needle) {
  const regex = new RegExp(needle);
  return haystack.search(regex);
};

console.log(strStr4("sadbutsad", "db"));
