import Person from "./Person.js";

export default class Student extends Person {
    constructor (_id, _name, _address, _email,_loai ,_diemToan, _diemLy,_diemHoa,_diemTb){
        super (_id, _name, _address, _email);
        this.loai = _loai;
        this.diemToan = _diemToan;
        this.diemHoa = _diemHoa;
        this.diemLy = _diemLy;
        this.diemTB = 0 ;
    }

    TinhdiemTB () {
        this.diemTB = (Number(this.diemToan) + Number(this.diemHoa) + Number(this.diemLy))/3
    }
}