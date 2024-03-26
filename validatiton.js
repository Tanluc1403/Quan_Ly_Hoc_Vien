
export default class Validation {
    kiemTraRong(value, spanId, message) {
        if (value === "") {
            document.getElementById(spanId).innerHTML = message;  //spanId ko nằm trong nháy kép vì và id động
            return false;
        }

        document.getElementById(spanId).innerHTML = "";
        return true;
    }


    kiemTraChuoiKiTu = function (value, spanId, message) {
        const letter =
            "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
            "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
            "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if (value.match(letter)) {
            // hợp lệ
            document.getElementById(spanId).innerHTML = "";
            return true;
        }
        //ko hợp lệ
        document.getElementById(spanId).innerHTML = message;
        return false;
    }


    kiemTraEmail = function (value, spanId, mess) {
        const letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (value.match(letter)) {
            // hợp lệ
            document.getElementById(spanId).innerHTML = "";
            return true;
        }

        // k hợp lệ
        document.getElementById(spanId).innerHTML = mess;
        return false;
    };


    kiemTraMaTonTai (value, spanId, mess, dataList) {
        let exist = false;   // gán ko tồn tại trước

    for (let i = 0; i < dataList.length; i++) {
      const sv = dataList[i];
      if (sv.id === value) {
        exist = true;   //có tồn tại
        break; //mảng có nhiều phần tử, đã tìm được rồi thì ko cần chạy hết mảng
      }
    }

    if (exist) {   // tồn tại
      // k hợp lệ
      document.getElementById(spanId).innerHTML = mess;
      return false;
    }

    // hợp lệ
    document.getElementById(spanId).innerHTML = "";
    return true;
  };
}






