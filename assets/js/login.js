function login_proses() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    if ((username.value == 'Siswa') && (password.value == 'siswa')) {
        alert('Berhasil Masuk');
        window.location.href = ('beranda.html')
    } else if ((username.value == 'Siswa') && (password.value != 'siswa')) {
        sweetAlert("Oops...", "Password anda salah !!", "error")
    } else {
        sweetAlert("Oops...", "Username dan Password anda salah !!", "error")
    }
}

function proses_guru() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    if ((username.value == 'Guru') && (password.value == 'guru')) {
        alert('Berhasil Masuk');
        window.location.href = ('guru/nilai.html')
    } else if ((username.value == 'Guru') && (password.value != 'guru')) {
        sweetAlert("Oops...", "Password anda salah !!", "error")
    } else {
        sweetAlert("Oops...", "Username dan Password anda salah !!", "error")
    }
}