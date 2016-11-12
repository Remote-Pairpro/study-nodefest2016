const http = require('http');

// 引数処理。
const url = process.argv[2];

http.get(url, function (response) {
    response.on('data', function (date) {
        var html = data.toString();
        for (var i = 0 ; i < html.length ; i++ ) {
            console.log(html.charAt(i));
        }
    });
});