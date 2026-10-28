// ===== JavaScript Eksternal untuk QUIS =====

// Ambil elemen-elemen dari HTML berdasarkan id
var inputSearch  = document.getElementById("inputSearch");
var tombolSearch = document.getElementById("tombolSearch");
var tampilInput  = document.getElementById("tampilInput");
var formSearch   = document.getElementById("formSearch");

// 1. EVENT INPUT: setiap kali user mengetik di kolom Search,
//    teksnya langsung ditampilkan di atas Slider
inputSearch.addEventListener("input", function () {
    tampilInput.textContent = inputSearch.value;

    // Kotak hanya muncul kalau ada isinya
    if (inputSearch.value === "") {
        tampilInput.style.display = "none";
    } else {
        tampilInput.style.display = "block";
    }
});

// 2. EVENT CLICK: saat tombol Search diklik, tampilkan pesan
tombolSearch.addEventListener("click", function () {
    alert("Selamat Mengerjakan");
});

// Cegah halaman ter-reload kalau user menekan Enter di kolom Search
formSearch.addEventListener("submit", function (event) {
    event.preventDefault();
});
