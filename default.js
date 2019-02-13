function startTime() {
    today = new Date();
    dn = new Array("Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy");
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
    w = today.getDay();
    d = today.getDate();
    M = today.getMonth();
    y = today.getFullYear();
    MM = M + 1;
    MM = checkTime(MM);
    s = checkTime(s);
    m = checkTime(m);
    h = checkTime(h);
    document.getElementById('ngay').innerHTML = "Hôm nay là: " + dn[w] + ", Ngày " + d + "/" + MM + "/" + y;
    document.getElementById('gio').innerHTML = "Bây giờ là: " +
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("toTop").style.display = "block";
    } else {
        document.getElementById("toTop").style.display = "none";
    }
}

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
