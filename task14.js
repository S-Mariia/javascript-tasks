//count the quantity of vovels in a string
const vowels = ["a", "o", "u", "e", "i"];

const findVowels = (str) => {
  return str
    .split("")
    .reduce(
      (acc, letter) => (vowels.includes(letter.toLowerCase()) ? acc + 1 : acc),
      0
    );
};

console.log(findVowels("hello"));
