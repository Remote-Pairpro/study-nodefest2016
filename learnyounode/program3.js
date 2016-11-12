const fs = require('fs');

// 引数処理。
const path = process.argv[2];

// ファイルの中身をBufferで受ける。
const buf = fs.readFileSync(path);
const text = buf.toString();

// デリミタに改行指定して分割
const count =  text.split("\n").length - 1;
console.log(count);