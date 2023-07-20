"use strict";

const submissions = [
  {
    name: "Jane",
    score: 95,
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    passed: true,
  },
];

const addSubmission = (array, newName, newScore) => {
  array.push({ name: newName, score: newScore, passed: newScore >= 60 });
};

// addSubmission(submissions, "James", 100);

const deleteSubmissionsByIndex = (array, index) => {
  array.splice(index, 1);
};

// deleteSubmissionsByIndex(submissions, 2);

const deleteSubmissionsByName = (array, name) => {
  const index = array.findIndex((item) => item.name === name);
  array.splice(index, 1);
};

// deleteSubmissionsByName(submissions, "Joe");

const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};

const findSubmissionsByName = (array, name) => {
  return array.find((item) => item.name === name);
};
// pv = array[0] cv = array[1] if none defined
// loop through array, if cv.score is less than pv.score, return cv, if not, return pv
const findLowestScore = (array) => {
  return array.reduce((ac, cv) => (cv.score < ac.score ? cv : ac));
  // or you can do
  // return array.reduce((ac, cv) => {
  // if (cv.score < ac.score) {
  //     return cv;
  //   } else {
  //     return ac;
  //   }
  // });

  //   let currentLowest = array[0];
  //   array.forEach((item) => {
  //     if (item.score < currentLowest.score) {
  //       currentLowest = item;
  //     }
  //   });
  //   return currentLowest;
};
// console.log(findLowestScore(submissions));

// const findAverageScore = (array) => array.reduce((ac, cv)=> ac + cv.score, 0) / array.length
const findAverageScore = (array) => {
  let sum = 0;
  array.forEach((item) => (sum += item.score));
  return sum / array.length;
};

const filterPassing = (array) => {
  return array.filter((item) => item.passed);
};

const filter90AndAbove = (array) => {
  return array.filter((item) => item.score >= 90);
};

const createRange = (start, end) => {
  const rangeArray = [];
  for (let i = start; i <= end; i++) {
    rangeArray.push(i);
  }
  return rangeArray;
};

// console.log(createRange(2, 5));

// countElements(['a', 'b', 'a', 'c', 'a', 'b']) returns { a: 3, b: 2, c: 1 }
const countElements = (array) => {
  const newObject = {};
  array.forEach((item) => {
    if (newObject[item]) {
      newObject[item]++;
    } else {
      newObject[item] = 1;
    }
  });
  return newObject;
};

console.log(countElements(["a", "b", "a", "c", "a", "b"]));
