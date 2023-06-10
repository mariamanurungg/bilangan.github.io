function proses_login() {
    let username = document.getElementById('val-username').value;
    let password = document.getElementById('val-password').value;

    if ((username == 'siswa') && (password == 'siswa')) {
        localStorage.setItem['username'] = username;
        window.location = 'materi/index.html';
    } else {
        sweetAlert("Oops...", "Username atau password yang anda masukkan salah !!", "error")
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

let kubusb = document.getElementById('kubusb');
let balokb = document.getElementById('balokb');
let prismab = document.getElementById('prismab');
let tabungb = document.getElementById('tabungb');
let limasb = document.getElementById('limasb');
let kerucutb = document.getElementById('kerucutb');
let bolab = document.getElementById('bolab');

function pendahuluandrag() {
    if ((kubusb.children[0] == undefined) || (balokb.children[0] == undefined) || (prismab.children[0] == undefined) || (tabungb.children[0] == undefined) || (limasb.children[0] == undefined) || (kerucutb.children[0] == undefined) || (bolab.children[0] == undefined)) {
        sweetAlert("Oops", "Kamu belum melengkapi tabel yang kosong !!", "error")
    } else if ((kubusb.children[0].title == 'Dadu') && (balokb.children[0].title == 'Kardus') && (prismab.children[0].title == 'Tenda Pramuka') && (tabungb.children[0].title == 'Celengan') && (limasb.children[0].title == 'Lampu Led') && (kerucutb.children[0].title == 'Topi Ulang Tahun') && (bolab.children[0].title == 'Bola Basket')) {
        swal("Hey, Good job !!", "Jawaban kamu benar !!", "success")
    } else {
        sweetAlert("Oops...", "jawaban anda salah, silahkan coba lagi !!", "error")
    }
}

function page12() {
    document.getElementById("btnkembali").classList.add('disabled');
    document.getElementById("btnlanjut").classList.remove('disabled');
    document.getElementById("page1").hidden = false;
    document.getElementById("page2").hidden = true;
    document.getElementById("lanjut").setAttribute("onClick", "javascript: page22();");
}

function page22() {
    document.getElementById("btnkembali").classList.remove('disabled');
    document.getElementById("btnlanjut").classList.add('disabled');
    document.getElementById("page1").hidden = true;
    document.getElementById("page2").hidden = false;
    document.getElementById("kembali").setAttribute("onClick", "javascript: page12();");
    document.getElementById("btnmaterilanjut").hidden = false;
}

function page1() {
    document.getElementById("btnkembali").classList.add('disabled');
    document.getElementById("btnlanjut").classList.remove('disabled');
    document.getElementById("page1").hidden = false;
    document.getElementById("page2").hidden = true;
    document.getElementById("page3").hidden = true;
    document.getElementById("lanjut").setAttribute("onClick", "javascript: page2();");
}

function page2() {
    document.getElementById("btnkembali").classList.remove('disabled');
    document.getElementById("btnlanjut").classList.remove('disabled');
    document.getElementById("page1").hidden = true;
    document.getElementById("page2").hidden = false;
    document.getElementById("page3").hidden = true;
    document.getElementById("kembali").setAttribute("onClick", "javascript: page1();");
    document.getElementById("lanjut").setAttribute("onClick", "javascript: page3();");
}

function page3() {
    document.getElementById("btnkembali").classList.remove('disabled');
    document.getElementById("btnlanjut").classList.add('disabled');
    document.getElementById("page1").hidden = true;
    document.getElementById("page2").hidden = true;
    document.getElementById("page3").hidden = false;
    document.getElementById("kembali").setAttribute("onClick", "javascript: page2();");
    document.getElementById("btnmaterilanjut").hidden = false;
}

// Mathjax
window.MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)'], ['#', '#']]
    },
    svg: {
        fontCache: 'global'
    }
};

(function () {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
    script.async = true;
    document.head.appendChild(script);
})();