const http = require('http');

// 引数処理。
const url = process.argv[2];
    
http.get(url, function (res) {
    res.on('data', function (data) {
        // XXX わりかし雑いので、あとで治す。
        var html = data.toString();
        html.split("\n").forEach(line => {
            console.log(line);
        });
    });
});