// вивести об'єкт, в якому ключем є літера, а значенням - кількість її входжень в рядок.

const createObject = function (string) {
  return string
    .split("")
    .reduce(
      (acc, letter) => ({
        ...acc,
        [letter]: acc[letter] ? acc[letter] + 1 : 1,
      }),
      {}
    );
};

const str = "sdhbbvjhsdgvsvnbjkvhkbndbv";
console.log(createObject(str));
