// 編號：CANDY-002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元

const chars1 = ["a", "b", "c", "d", "f", "g"];
const chars2 = ["O", "Q", "R", "S"];

function missingChar(chars) {
  for (let i = 0; i < chars.length; i++) {
    const formernum = chars[i].charCodeAt(0);
    const laternum = chars[i + 1].charCodeAt(0);
    if (laternum - formernum > 1) {
      return String.fromCharCode(formernum + 1);
    }
  }
}

console.log(missingChar(chars1)); // 印出 e
console.log(missingChar(chars2)); // 印出 P

// 利用charCodeAt()可以將字元轉為UTF-16碼，因為陣列中的英文字符為連續的，故編碼為連續的數值，接著在for迴圈中依序將陣列中的字元轉換為編碼，當後面的編碼減前面的編碼大於1時代表中間有字元缺少，接再利用String.fromCharCode將編碼轉回字元

//Candy!!!!!
