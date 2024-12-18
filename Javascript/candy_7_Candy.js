// 編號：CANDY-007
// 程式語言：JavaScript
// 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

function findSomeDifferent(numbers) {
  const evennum = numbers.filter((n) => {
    return n % 2 === 0;
  });

  const oddnum = numbers.filter((n) => {
    return n % 2 !== 0;
  });
  if (evennum.length === 1) {
    return evennum[0];
  } else {
    return oddnum[0];
  }
}

console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])); // 印出 11
console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])); // 印出 160

// 先用filter()篩選陣列中的偶數或奇數，最後用條件式判斷如果偶數陣列的長度為 1，則代表這個陣列唯一的數字就是我們要找的，反之則回傳奇數陣列的數字
// Candy!!!!!
