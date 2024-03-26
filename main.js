
import Validation from "./validatiton.js";
import Student from "./Student.js";
import Customer from "./Customer.js";
import Employee from "./Employee.js";
import DSNS from "./ListPerson.js";

const getELE = (id) => document.getElementById(id);



getELE("khSV").addEventListener("change", function () {
    const value = getELE("khSV").value;
    if (value == "Sinh Viên") {
        getELE("SNLV").style.display = "none";
        getELE("TLN").style.display = "none";
        getELE("TCT").style.display = "none";
        getELE("TGHD").style.display = "none";
        getELE("DG").style.display = "none";
        getELE("DIEMT").style.display = "block";
        getELE("DIEML").style.display = "block";
        getELE("DIEMH").style.display = "block";
    } else if (value == "Khách Hàng") {
        getELE("SNLV").style.display = "none";
        getELE("TLN").style.display = "none";
        getELE("TCT").style.display = "block";
        getELE("TGHD").style.display = "block";
        getELE("DG").style.display = "block";
        getELE("DIEMT").style.display = "none";
        getELE("DIEML").style.display = "none";
        getELE("DIEMH").style.display = "none";
    } else if (value == "Nhân Viên") {
        getELE("DIEMT").style.display = "none";
        getELE("DIEML").style.display = "none";
        getELE("DIEMH").style.display = "none";
        getELE("TCT").style.display = "none";
        getELE("TGHD").style.display = "none";
        getELE("DG").style.display = "none";
        getELE("SNLV").style.display = "block";
        getELE("TLN").style.display = "block";
    }
})

const dsns = new DSNS();
const validation = new Validation();

/**
 * add person
**/
getELE("btnThem").onclick = () => {
    const _loai = getELE("khSV").value;
    const _name = getELE("txtTenSV").value;
    const _id = getELE("txtMaSV").value;
    const _address = getELE("txtPass").value;
    const _email = getELE("txtEmail").value;
    const _diemToan = getELE("txtDiemToan").value;
    const _diemHoa = getELE("txtDiemHoa").value;
    const _diemLy = getELE("txtDiemLy").value;
    const _congTy = getELE("txtCongTy").value;
    const _hoaDon = getELE("txtTien").value;
    const _danhGia = getELE("txtDanhGia").value;
    const _ngayLam = getELE("txtNgaySinh").value;
    const _tienTheoNgay = getELE("txtLuong").value;

    //validation:
    //Tên:
    let isValid = true;

    if(_loai === "All"){
        getELE("spanKhoaHoc").innerHTML = "(*) Vui lòng chọn chức vụ"
    }else(
        getELE("spanKhoaHoc").innerHTML = ""
    )

    if (_loai == "Sinh Viên") {
        //Tên:
        isValid &=
            validation.kiemTraRong(_name, "spanTenSV", "(*) Tên không được để trống") &&
            validation.kiemTraChuoiKiTu(_name, "spanTenSV", "(*) Tên không chứa ký tự đặc biệt");

        //Email:
        isValid &= //dấu &= <=> let final = isValid && isValid  (vừa gán vừa so sánh, ko cần tạo biến mới)
            validation.kiemTraRong(_email, "spanEmailSV", "(*) Email k dc rong") &&
            validation.kiemTraEmail(
                _email,
                "spanEmailSV",
                "(*) Vui lòng nhập email đúng định dạng"
            );
        //Mã số:
        isValid &=
            validation.kiemTraRong(_id, "spanMaSV", "(*) Mã số không được để trống") &&
            validation.kiemTraMaTonTai(_id, "spanMaSV", "(*) MaSV đã tồn tại!", dsns.arr);

        //Địa chỉ:
        isValid &=
            validation.kiemTraRong(_address, "spanMatKhau", "(*) Địa chỉ không được rỗng");
        //Điểm Toán:
        isValid &=
            validation.kiemTraRong(_diemToan, "spanToan", "(*) Vui lòng nhập điểm");
        //Điểm Lý:
        isValid &=
            validation.kiemTraRong(_diemLy, "spanLy", "(*) Vui lòng nhập điểm");

        //Điểm Hoá:
        isValid &=
            validation.kiemTraRong(_diemHoa, "spanHoa", "(*) Vui lòng nhập điểm");
        if (!isValid) return null; //isValid = fall (rỗng) => null (ko có dữ liệu) cho dừng
        const sv = new Student(_id, _name, _address, _email, _loai, _diemToan, _diemLy, _diemHoa,);

        sv.TinhdiemTB();

        dsns.themNS(sv);

    } else if (_loai == "Khách Hàng") {
        //Tên:
        isValid &=
            validation.kiemTraRong(_name, "spanTenSV", "(*) Tên không được để trống") &&
            validation.kiemTraChuoiKiTu(_name, "spanTenSV", "(*) Tên không chứa ký tự đặc biệt");

        //Email:
        isValid &= //dấu &= <=> let final = isValid && isValid  (vừa gán vừa so sánh, ko cần tạo biến mới)
            validation.kiemTraRong(_email, "spanEmailSV", "(*) Email k dc rong") &&
            validation.kiemTraEmail(
                _email,
                "spanEmailSV",
                "(*) Vui lòng nhập email đúng định dạng"
            );
        //Mã số:
        isValid &=
            validation.kiemTraRong(_id, "spanMaSV", "(*) Mã số không được để trống") &&
            validation.kiemTraMaTonTai(_id, "spanMaSV", "(*) MaSV đã tồn tại!", dsns.arr);

        //Địa chỉ:
        isValid &=
            validation.kiemTraRong(_address, "spanMatKhau", "(*) Địa chỉ không được rỗng");

        //Trị Giá Hoá Đơn:
        isValid &=
            validation.kiemTraRong(_hoaDon, "spanTien", "(*) Trị giá hoá đơn không được để trống");

        //Đánh giá:
        isValid &=
            validation.kiemTraRong(_danhGia, "spanDanhGia", "(*) Vui lòng điền đánh giá");

        //Công ty:
        isValid &=
            validation.kiemTraRong(_congTy, "spanCongTy", "(*) Vui lòng điền tên công ty");
        if (!isValid) return null; //isValid = fall (rỗng) => null (ko có dữ liệu) cho dừng

        const kh = new Customer(_id, _name, _address, _email, _loai, _congTy, _hoaDon, _danhGia);

        dsns.themNS(kh);
    } else if (_loai == "Nhân Viên") {
        //Tên:
        isValid &=
            validation.kiemTraRong(_name, "spanTenSV", "(*) Tên không được để trống") &&
            validation.kiemTraChuoiKiTu(_name, "spanTenSV", "(*) Tên không chứa ký tự đặc biệt");

        //Email:
        isValid &= //dấu &= <=> let final = isValid && isValid  (vừa gán vừa so sánh, ko cần tạo biến mới)
            validation.kiemTraRong(_email, "spanEmailSV", "(*) Email k dc rong") &&
            validation.kiemTraEmail(
                _email,
                "spanEmailSV",
                "(*) Vui lòng nhập email đúng định dạng"
            );
        //Mã số:
        isValid &=
            validation.kiemTraRong(_id, "spanMaSV", "(*) Mã số không được để trống") &&
            validation.kiemTraMaTonTai(_id, "spanMaSV", "(*) MaSV đã tồn tại!", dsns.arr);

        //Địa chỉ:
        isValid &=
            validation.kiemTraRong(_address, "spanMatKhau", "(*) Địa chỉ không được rỗng");
        //Số ngày làm:
        isValid &=
            validation.kiemTraRong(_ngayLam, "spanNgaySinh", "(*) Số ngày làm việc không được để trống");

        //Tiền lương/ ngày:
        isValid &=
            validation.kiemTraRong(_tienTheoNgay, "spanLuong", "(*) Tiền lương/ ngày không được để trống");

        if (!isValid) return null; //isValid = fall (rỗng) => null (ko có dữ liệu) cho dừng

        const nv = new Employee(_id, _name, _address, _email, _loai, _ngayLam, _tienTheoNgay);
        nv.TinhTienLuong();
        dsns.themNS(nv);
    }
    
    console.log(dsns.arr);
    
    Render(dsns.arr);
    setLocalStorage();

}



/**
 * Lưu localStorage
 */
function setLocalStorage() {
    // Chuyển mảng sinh viên thành chuỗi
    const arrString = JSON.stringify(dsns.arr); // (đối tương.danhsachmuonchuyenthanhchuoi)
    // Lưu xuống localStorage
    localStorage.setItem("DSNS", arrString); // ("key(gì cũng đc)", value( dữ liệu cần lưu))
}
/**
 * lấy mảng NS từ  localStorage
 */
function getLocalStorage() {
    if (!localStorage.getItem("DSNS")) return;  //nếu localStorage ko có dữ liệu thì ngưng

    // Lấy mảng sinh viên từ localStorage
    const arrString = localStorage.getItem("DSNS");  //lưu tên gì thì lấy lên theo key đó
    // Chuyển mảng sinh viên từ chuỗi => JSON
    const arrJSON = JSON.parse(arrString);
    // Phục hồi data cho dssv.arr
    dsns.arr = arrJSON;
    // Hiển thị danh sách sinh viên
    Render(dsns.arr);
}


/**
 * Render
 */
const Render = (data) => {
    let content = "";
    data.forEach(NV => {
        content += `
        <tr>
            <td>${NV.id}</td>
            <td>${NV.name}</td>
            <td>${NV.address}</td>
            <td>${NV.email}</td>
            <td>${NV.loai}</td>
            <td>${NV.tienLuong == undefined ? " - " : NV.tienLuong}</td>
            <td>${NV.diemTB == undefined ? " - " : NV.diemTB}</td>
            <td>${NV.congTy == undefined ? " - " : NV.congTy}</td>
            <td>${NV.hoaDon == undefined ? " - " : NV.hoaDon}</td>
            <td>${NV.danhGia == undefined ? " - " : NV.danhGia}</td>
            
            <td>
                    <button onclick="editById(${NV.id})" class="btn btn-info" ">Edit</button>
                    <button onclick="deleteById(${NV.id})" class="btn btn-danger" >Delete</button>
            </td>
        </tr>
        `
    });
    getELE("tbodySinhVien").innerHTML = content;
};


/**
 * Delete
 */

window.deleteById = (id) => {
    dsns.xoaNS(id);
    Render(dsns.arr);
    setLocalStorage()
};


getLocalStorage();



/**
 * Edit
 */
window.editById = (id) => {
    const ns = dsns.layThongTinNS(id);
    if (ns) {
        getELE("btnThem").style.display = "none";
        getELE("btnCapNhat").style.display = "inline-block";
    };
    if (ns.loai == "Sinh Viên") {

        getELE("SNLV").style.display = "none";
        getELE("TLN").style.display = "none";
        getELE("TCT").style.display = "none";
        getELE("TGHD").style.display = "none";
        getELE("DG").style.display = "none";
        getELE("DIEMT").style.display = "block";
        getELE("DIEML").style.display = "block";
        getELE("DIEMH").style.display = "block";

        getELE("khSV").value = ns.loai;
        getELE("txtTenSV").value = ns.name;
        getELE("txtMaSV").value = ns.id;
        getELE("txtMaSV").disabled = true;
        getELE("txtPass").value = ns.address;
        getELE("txtEmail").value = ns.email;
        getELE("txtDiemToan").value = ns.diemToan;
        getELE("txtDiemLy").value = ns.diemLy;
        getELE("txtDiemHoa").value = ns.diemHoa;

    } else if (ns.loai == "Khách Hàng") {
        getELE("SNLV").style.display = "none";
        getELE("TLN").style.display = "none";
        getELE("TCT").style.display = "block";
        getELE("TGHD").style.display = "block";
        getELE("DG").style.display = "block";
        getELE("DIEMT").style.display = "none";
        getELE("DIEML").style.display = "none";
        getELE("DIEMH").style.display = "none";

        getELE("khSV").value = ns.loai;
        getELE("txtTenSV").value = ns.name;
        getELE("txtMaSV").value = ns.id;
        getELE("txtMaSV").disabled = true;
        getELE("txtPass").value = ns.address;
        getELE("txtEmail").value = ns.email;
        getELE("txtTien").value = ns.hoaDon;
        getELE("txtDanhGia").value = ns.danhGia;
        getELE("txtCongTy").value = ns.congTy;

    } else if (ns.loai == "Nhân Viên") {
        getELE("DIEMT").style.display = "none";
        getELE("DIEML").style.display = "none";
        getELE("DIEMH").style.display = "none";
        getELE("TCT").style.display = "none";
        getELE("TGHD").style.display = "none";
        getELE("DG").style.display = "none";
        getELE("SNLV").style.display = "block";
        getELE("TLN").style.display = "block";

        getELE("khSV").value = ns.loai;
        getELE("txtTenSV").value = ns.name;
        getELE("txtMaSV").value = ns.id;
        getELE("txtMaSV").disabled = true;
        getELE("txtPass").value = ns.address;
        getELE("txtEmail").value = ns.email;
        getELE("txtLuong").value = ns.tienTheoNgay;
        getELE("txtNgaySinh").value = ns.ngayLam;
    }

}

/**
 * update
 */
getELE("btnCapNhat").onclick = function () {

    const loai = getELE("khSV").value;
    const name = getELE("txtTenSV").value;
    const id = getELE("txtMaSV").value;
    const address = getELE("txtPass").value;
    const email = getELE("txtEmail").value;
    const diemToan = getELE("txtDiemToan").value;
    const diemHoa = getELE("txtDiemHoa").value;
    const diemLy = getELE("txtDiemLy").value;
    const congTy = getELE("txtCongTy").value;
    const hoaDon = getELE("txtTien").value;
    const danhGia = getELE("txtDanhGia").value;
    const ngayLam = getELE("txtNgaySinh").value;
    const tienTheoNgay = getELE("txtLuong").value;
    const diemTB = (Number(diemHoa) + Number(diemLy) + Number(diemToan)) / 3;
    const tienLuong = ngayLam * tienTheoNgay;

    if (loai == "Sinh Viên") {
        const sv = { id, name, address, email, loai, diemToan, diemLy, diemHoa, diemTB };
        dsns.capNhatNS(sv);
        Render(dsns.arr);
        setLocalStorage();

    } else if (loai == "Khách Hàng") {
        const kh = { id, name, address, email, loai, congTy, hoaDon, danhGia };
        dsns.capNhatNS(kh);
        Render(dsns.arr);
        setLocalStorage();
    } else if (loai == "Nhân Viên") {
        const nv = { id, name, address, email, loai, ngayLam, tienTheoNgay, tienLuong };
        dsns.capNhatNS(nv);
        Render(dsns.arr);
        setLocalStorage();
    }
};


/**
 * Reset
 */
getELE("btnReset").onclick = function () {
    getELE("btnThem").style.display = " inline-block";
    getELE("btnCapNhat").style.display = "none";

    getELE("txtTenSV").value = "";
    getELE("txtMaSV").value = "";
    getELE("txtMaSV").disabled = false;
    getELE("txtPass").value = "";
    getELE("txtEmail").value = "";
    getELE("txtDiemToan").value = "";
    getELE("txtDiemHoa").value = "";
    getELE("txtDiemLy").value = "";
    getELE("txtCongTy").value = "";
    getELE("txtTien").value = "";
    getELE("txtDanhGia").value = "";
    getELE("txtNgaySinh").value = "";
    getELE("txtLuong").value = "";
}

/**
 * Phân loại
 */
getELE("locDS").addEventListener("change", () => {
    let listLocSV = [];
    let listLocKH = [];
    let listLocNV = [];
    let value = getELE("locDS").value;

    if (value == "All") {
        Render(dsns.arr)
    } else if (value == "Khách Hàng") {
        dsns.arr.forEach((eleKH) => {
            if (eleKH.loai == "Khách Hàng") {
                listLocKH.push(eleKH)
            }
        });
        Render(listLocKH);

    } else if (value == "Sinh Viên") {

        dsns.arr.forEach((eleSV) => {
            if (eleSV.loai == "Sinh Viên") {
                listLocSV.push(eleSV)
            }
        });
        Render(listLocSV);




    } else if (value == "Nhân Viên") {


        dsns.arr.forEach((eleNV) => {
            if (eleNV.loai == "Nhân Viên") {
                listLocNV.push(eleNV)
            }
        });
        Render(listLocNV);

    }
})





