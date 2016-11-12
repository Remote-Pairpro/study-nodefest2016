const fs = require('fs');

// 引数処理。
const path = process.argv[2];

fs.readFile(path, 'utf8', function (err, text) {
    // 改行でぶったぎって、切れた要素数を数える - 1 する。
    const count = text.split("\n").length - 1;
    // デリミタに改行指定して分割
    console.log(count);
});
