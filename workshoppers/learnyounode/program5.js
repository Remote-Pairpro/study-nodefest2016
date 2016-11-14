const fs = require('fs');

// 引数処理。
const dirPath = process.argv[2];
const ext = process.argv[3];

// 検索対象の拡張子を整える
const fixExt = "." + ext;

// 指定されたPathのディレクトリ内のオブジェクトを回す。
fs.readdir(dirPath, function (err, list) {
    list.forEach(name => {
        // 文字の末尾が拡張子と一致すれば。
        if (name.endsWith(fixExt)) console.log(name); 
    });
});