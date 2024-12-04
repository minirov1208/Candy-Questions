//OOOOOOOOOKKKKKKKKKKKKKK!!!!!!!!!!!!
//OOOOOOOOOKKKKKKKKKKKKKK!!!!!!!!!!!!
//Candy!!!!!

// function sumOfSmallestValues(arr) {
//   return arr[1] + arr[3];
// }

// const list1 = [19, 5, 42, 2, 77];
// const list2 = [23, 15, 59, 4, 17];

// console.log(sumOfSmallestValues(list1)); // 印出 7
// console.log(sumOfSmallestValues(list2)); // 印出 19

function sumOfSmallestValues(arr) {
  let result = arr.sort((a, b) => {
    return a - b;
  });
  let sum = result[0] + result[1];
  return sum;
}

const list1 = [19, 5, 42, 2, 77];
const list2 = [23, 15, 59, 4, 17];

console.log(sumOfSmallestValues(list1)); // 印出 7
console.log(sumOfSmallestValues(list2)); // 印出 19
// sort(function (a,b) {

//     if (a > b) {
//         return 1;
//     } else {
//         return -1;
//     }
// })

// return為正時，後面數值會放到前面位置
// 反之return為負時，前面數值依然放在前面位置
