const express = require('express');

const app = express();

//link route
app.get('/hello/:name/:age', (req, res) => {
    const name = req.params.name;
    const age = req.params.age; 
    // const {name,age} = req.params;

    res.send(`xin chao toi la ${name}, ${age} tuoi`)
})

app.get('/tinh/:tenPhepTinh/:soA/:soB', (req,res) => {
    // tenPhepTinh CONG TRU NHAN CHIA
    // so tu nhien 
    // instance
    // localhost:3000/tinh/CONG/3/4 -> '3+4=7'
    const {tenPhepTinh,soA,soB} = req.params; 
    const result = new Tinh(tenPhepTinh, soA, soB);
    res.send(result.getResultString());

})
app.listen(3000)

class Tinh{
    constructor(tenPhepTinh, soA, soB){
        this.tenPhepTinh = tenPhepTinh;
        this.soA = soA;
        this.soB = soB;
    }
    getChuoiPhepTinh(){
        const {tenPhepTinh, soA, soB} = this;
        if(tenPhepTinh === "CONG") return `${soA} + ${soB}`;
        if(tenPhepTinh === "TRU") return `${soA} - ${soB}`;
        if(tenPhepTinh === "NHAN") return `${soA} * ${soB}`
        return `${soA} / ${soB}`;
    }
    getResultString(){
        // return '3+4=7';
        const chuoiPhepTinh = this.getChuoiPhepTinh();
        const result = eval(chuoiPhepTinh)
        return `${chuoiPhepTinh} = ${result}`
    }
}
