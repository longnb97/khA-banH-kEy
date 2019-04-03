const express = require('express');
const path = require('path');

let app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
    if (!err) console.log(`server listening at ${PORT}`);
})

app.use(express.static('public'));

app.get('/', (req, res) => { 
    res.sendFile(path.resolve(__dirname, './public/index.html')); 
})