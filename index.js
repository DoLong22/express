const express = require('express');

const app = express();

//link route
app.get('/hello/:name/:age', (req, res) => {
    const name = req.params.name;
    const age = req.params.age; 
    // const {name,age} = req.params;

    res.send(`xin chao toi la ${name}, ${age} tuoi`)
})

app.get('/tinh/:tenPhepTinh/:soA/:soB', require('./controllers/tinhController')
)
app.listen(3000)
