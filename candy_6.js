// 編號：CANDY-006
// 程式語言：JavaScript
// 題目：找出在數字陣列裡跟其它元素不一樣的值

//排序想法
// function findDifferent(numbers) {
//   let result = numbers.sort(function (a, b) {
//     if (a > b) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
//   if (result[0] !== result[1]) {
//     return result[1];
//   } else {
//     return result[result.length - 1];
//   }
// }

// console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])); // 印出 3
// console.log(findDifferent([2, 2, 2, 4, 2, 2])); // 印出 4
// console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])); // 印出 8

// function findDifferent(numbers) {
//   // 使用一个对象来记录每个数字的出现次数
//   const counts = {};

//   // 遍历数组，记录每个数字的出现次数
//   for (let num of numbers) {
//     counts[num] = (counts[num] || 0) + 1;
//   }

//   // 找到出现次数为 1 的数字
//   for (let num in counts) {
//     if (counts[num] === 1) {
//       return Number(num); // 返回该数字
//     }
//   }

//   return null; // 如果没有找到，返回 null
// }

// console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])); // 输出: 3
// console.log(findDifferent([2, 2, 2, 4, 2, 2])); // 输出: 4
// console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])); // 输出: 8
