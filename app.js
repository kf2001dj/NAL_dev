function countVietnameseCharacters(inputString) {
  const vietnamesePattern = /(aw|aa|dd|ee|oo|ow|w)/g;
  const matches = inputString.toLowerCase().match(vietnamesePattern) || [];
  console.log(`${matches.length} (${matches.join(", ")})`);
  return matches.length;
}
// Nhập chuỗi chữ cái Latin từ bàn phím
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Nhập chuỗi chữ cái Latin: ", (inputString) => {
  // Đếm số lượng chữ cái Tiếng Việt trong chuỗi
  countVietnameseCharacters(inputString);

  rl.close();
});
