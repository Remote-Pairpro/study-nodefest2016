const filterDir = require('./module6');

// 引数処理。
const dirPath = process.argv[2];
const ext = process.argv[3];

filterDir(dirPath, ext, (err, list) => {
    list.forEach(name => console.log(name));
});
