const fs = require('fs');

// 引数処理。
const path = process.argv[2];

// UTFあり版は、Textが返るから、簡単すぎるやろってことで殺す。

// fs.readFile(path, 'utf8', function (err, text) {
//     // 改行でぶったぎって、切れた要素数を数える - 1 する。
//     const count = text.split("\n").length - 1;
//     // デリミタに改行指定して分割
//     console.log(count);
// });


// 文字コード未指定版…は、functionの第二引数は、Bufferオブジェクトとなる。
fs.readFile(path, function (err, buf) {
    // Bufferオブジェクトは、即刻文字列化。
    const text = buf.toString();
    // 改行でぶったぎって、切れた要素数を数える - 1 する。
    const count = text.split("\n").length - 1;
    // デリミタに改行指定して分割
    console.log(count);
});