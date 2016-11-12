const fs = require('fs');

const filterDir = (dirPath, ext, callback) => {
    // 検索対象の拡張子を整える
    const fixExt = "." + ext;
    // 指定されたPathのディレクトリ内のオブジェクトを回す。
    fs.readdir(dirPath, function (err, list) {
        if (err) {
            return callback(err);
        }
        let i = 0;
        const result = [];
        list.forEach(name => {
            // 文字の末尾が拡張子と一致すれば。
            if (name.endsWith(fixExt)) result[i++] = name;
        });
        callback(null, result);
    });
}

module.exports = filterDir;