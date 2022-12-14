const express = require('express')
const app = express()

app.use(express.static(__dirname + "/src/img"));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function () {
    console.log('app listening on port 3000!');
});