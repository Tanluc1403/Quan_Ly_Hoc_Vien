import Person from "./Person.js";

export default class Employee extends Person {
    constructor (_id, _name, _address, _email,_loai,_ngayLam,_tienTheoNgay,_tienLuong){
        super (_id, _name, _address, _email);
        this.loai = _loai;
        this.ngayLam = _ngayLam;
        this.tienTheoNgay = _tienTheoNgay;
        this.tienLuong = 0 ;
    }

    TinhTienLuong () {
        this.tienLuong = (Number(this.ngayLam) * Number(this.tienTheoNgay))
    }
}