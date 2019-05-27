const express = require ('express');

const app = express();

app.use(express.static('static'));

app.listen(2003, function () {
    console.log('listening to port 5001')
});