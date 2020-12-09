/**
 * Author: phamcongdanh
 * Date: 07/12/2020
 * Release: 07/12/2020
 * Desc:Tính Quản lý tuyển sinh
 */

document.querySelector("#btnTinhKQ").addEventListener("click", function() {
    var diemMon1 = parseFloat(document.querySelector("#inputMon1").value);
    var diemMon2 = parseFloat(document.querySelector("#inputMon2").value);
    var diemMon3 = parseFloat(document.querySelector("#inputMon3").value);
    var diemChuan = parseFloat(document.querySelector("#inputDC").value);
    var khuVuc = document.querySelector("#selectKV").value;
    var doiTuong = document.querySelector("#selectDT").value;
    console.log(diemChuan);

    var diemKV = 0;
    var diemDT = 0;
    var diemTong = 0;


    //Kiểm tra khu vực
    if(khuVuc == "A"){
        diemkhuVuc = 2;
    }else if(khuVuc == "B"){
        diemkhuVuc = 1;
    }else if(khuVuc == "C"){
        diemkhuVuc = 0.5;
    }else if(khuVuc == "X"){
        diemkhuVuc = 0;
    }

    //Kiểm tra đối tượng
    if(doiTuong == 0){
        diemdoiTuong = 0;
    }else if(doiTuong == 1){
        diemdoiTuong = 2.5;
    }else if(doiTuong == 2){
        diemdoiTuong = 1.5;
    }else if(doiTuong == 3){
        diemdoiTuong = 1;
    }

    //Tính điểm 3 môn
    if(diemMon1 > 0 && diemMon1 > 0 && diemMon3 > 0){
        if(diemMon1 <= 10 && diemMon2 <= 10 && diemMon3 <= 10){
            diemTong =  diemMon1 + diemMon2 + diemMon3 + diemKV + diemDT;
            if(diemTong >= diemChuan){
                console.log("Chúc mừng bạn đã đậu điểm chuẩn");
                thongBaoKQ.innerHTML = "Chúc mừng bạn đã đậu điểm chuẩn với số điểm là: " + diemTong;
            }else {
                console.log("Bạn rớt");
                thongBaoKQ.innerHTML = "Bạn chưa đạt điểm chuẩn. Điểm của bạn: " + diemTong;
            }
        }else {
            console.log("Điểm không hợp lệ yêu cầu nhập lại")
        }
    }else if(diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0){
        console.log("Bạn rớt");
        thongBaoKQ.innerHTML = "Bạn rớt";
    }else {
        console.log("Điểm không hợp lệ yêu cầu nhập lại");
    }
    //Thông báo
});




/**
 * Author: phamcongdanh
 * Date: 07/12/2020
 * Release: 07/12/2020
 * Desc:Tính tiền điện
 */
//Các biến chứa giá trị
const soKw_50dau = 500;
const soKw_50ke = 650;
const soKw_100ke = 850;
const soKw_150ke = 1100;
const soKw_conlai = 1300;

document.querySelector("#btnTinhkW").addEventListener("click", function(){
    var tenKH = document.querySelector("#inputTen").value;
    var soKw = parseFloat(document.querySelector("#inputkW").value);
    var thongBao= document.getElementById("thongBaoTD");
    console.log(tenKH);

    var tongTien = 0;

    //Tính tiền điện
    if(soKw > 0){
        //Tính tiền điện
        tongTien = tinhTongTienDien(soKw);

        thongBao.innerHTML = "Số tiền bạn phải trả cho " + soKw + "Kw là: " + tongTien + "vnd";
     }else 
        thongBao.innerHTML = "Số Kw không hợp lệ. Vui lòng nhập lại";
});

// Hàm tính tổng tiền điện
function tinhTongTienDien(soLuongKw){
    var tongTien = 0;

    if(soLuongKw <= 50)
        tongTien = soLuongKw * soKw_50dau;
    else if (soLuongKw <= 100)
        tongTien = (soKw_50dau*50) + (soLuongKw-50)*soKw_50ke;
    else if (soLuongKw <= 200)
        tongTien = (soKw_50dau*50) + (soKw_50ke*50) + (soLuongKw-100)*soKw_100ke;
    else if (soLuongKw <= 350)
        tongTien = (soKw_50dau*50) + (soKw_50ke*50) + (soKw_100ke*100) + (soKw-200)*soKw_150ke;
    else if (soLuongKw > 350)
        tongTien = (soKw_50dau*50) + (soKw_50ke*50) + (soKw_100ke*100) + (soKw_150ke*150) + (soKw-350)*soKw_conlai;
    else 
        thongBao.innerHTML = "Không thể tính được lượng điện tiêu thụ";
    return tongTien; 
}










