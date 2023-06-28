//!!!! wrong  (doesnt work correctly)
// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
// The testcases will be generated such that the answer is unique.

const minWindow = function (s, t) {
  if (s.length < t.length) return "";
  if (s === t) return t;
  if (t.length === 1) {
    return s.includes(t) ? t : "";
  }
  const sArr = s.split("");
  const tArr = t.split("");

  const arrayOfAcceptableLetters = sArr.reduce((acc, letter, idx) => {
    if (tArr.includes(letter)) {
      return [...acc, { letter, idx }];
    }
    return acc;
  }, []);

  if (arrayOfAcceptableLetters.length < t.length) return "";

  const subArraysRepresentivesIdx = [];

  arrayOfAcceptableLetters.forEach(({ letter, idx: letterIdx }, idx, array) => {
    const tArrWithoutLetter = [...tArr];
    tArrWithoutLetter.splice(tArr.indexOf(letter), 1);

    const arrayRest = array.slice(idx);

    if (idx < array.length - tArr.length + 1) {
      const closestLetters = tArrWithoutLetter.map((character) => {
        const closestLetter = arrayRest.find(
          ({ letter }) => letter === character
        );
        arrayRest.splice(arrayRest.indexOf(closestLetter), 1);
        // видалити closestLetter з масиву arrayRest
        return closestLetter;
      });

      const maxIdx = closestLetters.sort(
        (firstLetter, secondLetter) => firstLetter.idx - secondLetter.idx
      )[closestLetters.length - 1].idx;

      subArraysRepresentivesIdx.push({
        minIdx: letterIdx,
        maxIdx,
        length: maxIdx - letterIdx,
      });
    }
  });

  const minSubArrayIdx = subArraysRepresentivesIdx.sort(
    (a, b) => a.length - b.length
  )[0];

  return sArr.slice(minSubArrayIdx.minIdx, minSubArrayIdx.maxIdx + 1).join("");
};

const s = "acbaca";
const t = "ca";

console.log(minWindow(s, t));
