// 編號：CANDY-003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面

let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];

function moveZerosToEnd(arr) {
  return arr.sort((a, b) => {
    if (a === 0 && b !== 0) {
      return 1;
    } else if (b === 0 && a !== 0) {
      return -1;
    }
  });
}

let result = moveZerosToEnd(list);
console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]

//Candy!!!!!，但仍須解答
