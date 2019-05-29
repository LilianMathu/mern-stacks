const express = require ('express');

const app = express();

app.use(express.static('static'));

app.listen(2006, function () {
    console.log('listening to port 5001')
});