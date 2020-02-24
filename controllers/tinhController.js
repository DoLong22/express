const Tinh = require('../models/tinhModel')

module.exports = (req, res) => {
    const { tenPhepTinh, soA, soB } = req.params;
    const result = new Tinh(tenPhepTinh, soA, soB);
    res.send(result.getResultString());
}