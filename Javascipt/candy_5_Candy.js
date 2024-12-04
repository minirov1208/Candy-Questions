// 編號：CANDY-005
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起

// function squareDigits(num) {
//   let nums = String(num).split("");

//   const result = [];

//   nums.forEach((n) => {
//     result.push(n * n);
//   });

//   return result.join("");
// }

// function squareDigits(num) {
//   let nums = String(num).split("");
//   const aa = nums.map((n) => {
//     return n * n;
//   });

//   return aa.join("");
// }

//精簡寫法
// function squareDigits(num) {
//   return String(num)
//     .split("")
//     .map((n) => {
//       return n * n;
//     })
//     .join("");
// }

// console.log(squareDigits(3212)); // 印出 9414
// console.log(squareDigits(2112)); // 印出 4114
// console.log(squareDigits(387)); // 印出 96449

//先將num轉為字串，再以split()將一個字串中的字元分割儲存於陣列中，接著用map()對陣列中每一個數字做平方，再用join()將陣列合併為字串

//Candy!!!!!
