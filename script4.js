document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
    if(e.keyCode == 123) {
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}


function authenticate() {
    let passwordAttempts = 3; // Menetapkan jumlah percobaan maksimum
    const delayTime = 3000; // Waktu penundaan dalam milidetik (di sini, 5000 milidetik = 5 detik)

    while (passwordAttempts > 0) { // Loop selama masih ada percobaan tersisa
        const password = prompt("Masukkan kata sandi:");

        // Ganti 'password123' dengan kata sandi yang diinginkan
        if (password === "bernasX.3.1") {
            // Jika kata sandi benar, lanjutkan ke situs web
            unlockWebsite();
            return; // Keluar dari fungsi setelah kata sandi benar
        } else {
            // Jika kata sandi salah, kurangi jumlah percobaan
            passwordAttempts--;

            // Tampilkan pesan kesalahan
            alert("Kata sandi salah. Sisa percobaan: " + passwordAttempts);

            // Jika tidak ada percobaan tersisa, beri waktu penundaan sebelum mencoba lagi
            if (passwordAttempts === 0) {
                alert("Anda telah mencapai jumlah maksimum percobaan. Silakan coba lagi dalam beberapa detik.");
                setTimeout(authenticate, delayTime); // Menunggu beberapa detik sebelum memanggil kembali fungsi authenticate()
                return;
            }
        }
    }
}

function unlockWebsite() {
    // Tambahkan kode untuk menghilangkan penguncian situs web
    // Contoh:
    document.body.classList.remove("locked");
}

// Panggil fungsi autentikasi saat dokumen dimuat
document.addEventListener("DOMContentLoaded", function() {
    authenticate();
});
