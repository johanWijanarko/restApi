// deskripsi modul yg di pakai 
const bodyParser = require('body-parser');
const express = require('express');


// panggil expers kedalam variable app 
const app = express();

// deskripsikan modul kedalam jason 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log(`server runging on port`)
})


