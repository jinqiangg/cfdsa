const express = require('express')
const app = express()

app.use(express.static(__dirname + "/src/img"));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('app listening on port:'+port);
});