import Person from "./Person.js";

export default class Customer extends Person {
    constructor (_id, _name, _address, _email,_loai,_congTy,_hoaDon,_danhGia){
        super (_id, _name, _address, _email);
        this.loai = _loai;
        this.congTy = _congTy;
        this.hoaDon = _hoaDon;
        this.danhGia = _danhGia;
      
    }

    
}