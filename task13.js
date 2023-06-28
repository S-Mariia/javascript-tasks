//перевірити, чи рядки є анаграмою одне одного

const isAnagrama = (str1, str2) => {
  const str1Anagrama = str1.split("").reverse().join("");
  return str1Anagrama.toLowerCase() === str2.toLowerCase();
};

console.log(isAnagrama("aDa12", "1a2ad"));
console.log(isAnagrama("naon", "Noan"));
