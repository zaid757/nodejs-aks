const express = require("express")

const app = express ();

app.use('*', (req, res, next) => {
    res.send('hello from node app');
});

app.listen(4000, () => {
    console.log('app listening on port 4000')
});