class SinhVien {
    constructor(soThuTu, maSV, hoTen, ngaySinh, lopHoc, diemGPA) {
        this.soThuTu = soThuTu;
        this.maSV = maSV;
        this.hoTen = hoTen;
        this.ngaySinh = ngaySinh;
        this.lopHoc = lopHoc;
        this.diemGPA = diemGPA;
    }
}

function quanLySinhVien() {
    let soLuongSV = prompt("Nhập số lượng sinh viên: ");
    let danhSachSinhVien = [];

    let tableBody = document.getElementById("danhSachSinhVien").getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ""; // Xóa nội dung cũ của tbody

    for (let i = 0; i < soLuongSV; i++) {
        themDongMoi(tableBody);
    }
}

function themDongMoi(tableBody) {
    let soThuTu = tableBody.rows.length + 1;
    let newRow = tableBody.insertRow(tableBody.rows.length);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
    let cell7 = newRow.insertCell(6);

    cell1.innerHTML = soThuTu;
    cell2.innerHTML = '<input type="text" placeholder="Mã SV">';
    cell3.innerHTML = '<input type="text" placeholder="Họ và Tên">';
    cell4.innerHTML = '<input type="text" placeholder="Ngày Sinh">';
    cell5.innerHTML = '<input type="text" placeholder="Lớp học">';
    cell6.innerHTML = '<input type="text" placeholder="GPA">';
    cell7.innerHTML = '<button onclick="luuThongTin(this)">Lưu</button> <button onclick="xoaDong(this)">Xóa</button>';
}

function luuThongTin(button) {
    let tableRow = button.parentNode.parentNode;
    let soThuTu = tableRow.cells[0].innerHTML;
    let maSV = tableRow.cells[1].querySelector('input').value;
    let hoTen = tableRow.cells[2].querySelector('input').value;
    let ngaySinh = tableRow.cells[3].querySelector('input').value;
    let lopHoc = tableRow.cells[4].querySelector('input').value;
    let diemGPA = tableRow.cells[5].querySelector('input').value;

    let sv = new SinhVien(soThuTu, maSV, hoTen, ngaySinh, lopHoc, diemGPA);
    danhSachSinhVien.push(sv);

    // In thông tin sinh viên ra console
    console.log("Thông tin sinh viên:");
    console.log("Số thứ tự: " + sv.soThuTu);
    console.log("Mã Sinh viên: " + sv.maSV);
    console.log("Họ và Tên: " + sv.hoTen);
    console.log("Ngày Sinh: " + sv.ngaySinh);
    console.log("Lớp học: " + sv.lopHoc);
    console.log("GPA: " + sv.diemGPA);
}

function xoaDong(button) {
    let tableRow = button.parentNode.parentNode;
    tableRow.parentNode.removeChild(tableRow);

    // Cập nhật lại số thứ tự
    capNhatSoThuTu();
}

function capNhatSoThuTu() {
    let tableBody = document.getElementById("danhSachSinhVien").getElementsByTagName('tbody')[0];
    for (let i = 0; i < tableBody.rows.length; i++) {
        tableBody.rows[i].cells[0].innerHTML = i + 1;
    }
}
