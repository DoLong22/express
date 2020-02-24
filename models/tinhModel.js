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

module.exports = Tinh;
