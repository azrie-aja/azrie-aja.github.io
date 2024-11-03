// Mengubah warna latar belakang navbar saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    navbar.style.backgroundColor = "#4A90E2"; // Warna biru untuk navbar

    // Mengubah warna tombol Kirim saat di-hover
    const kirimButton = document.querySelector(".btn-primary");
    kirimButton.addEventListener("mouseover", function () {
        kirimButton.style.backgroundColor = "#db1514"; // Warna pink untuk hover
    });
    kirimButton.addEventListener("mouseout", function () {
        kirimButton.style.backgroundColor = "#007bff"; // Warna asli bootstrap biru
    });

    // Array simulasi gambar barang yang sudah dilaporkan
    const reportedItems = [
        { imgSrc: "images/item1.jpg", altText: "Barang Ditemukan 1" },
        { imgSrc: "images/item2.jpg", altText: "Barang Ditemukan 2" },
        { imgSrc: "images/item3.jpg", altText: "Barang Ditemukan 3" }
    ];

    // Fungsi untuk menambahkan gambar ke dalam carousel
    function loadGallery() {
        const carouselImages = document.getElementById("carouselImages");

        reportedItems.forEach((item, index) => {
            const carouselItem = document.createElement("div");
            carouselItem.classList.add("carousel-item");
            if (index === 0) carouselItem.classList.add("active"); // Set gambar pertama sebagai aktif

            const img = document.createElement("img");
            img.src = item.imgSrc;
            img.alt = item.altText;
            img.classList.add("d-block", "w-100");

            carouselItem.appendChild(img);
            carouselImages.appendChild(carouselItem);
        });
    }

    // Panggil fungsi untuk memuat galeri ketika halaman selesai dimuat
    loadGallery();

    // Mengambil referensi untuk form dan galeri gambar
    const form = document.getElementById('reportForm');
    const carouselImages = document.getElementById('carouselImages');

    // Menangani pengunggahan gambar
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Mencegah pengiriman form secara default

        const fileInput = document.getElementById('formFile');
        const file = fileInput.files[0]; // Ambil file yang diunggah

        // Buat URL untuk gambar yang diunggah
        const imageUrl = URL.createObjectURL(file);

        // Tambahkan gambar ke galeri
        addImageToCarousel(imageUrl);
        form.reset(); // Reset form setelah pengunggahan
    });

    // Fungsi untuk menambahkan gambar baru ke carousel
    function addImageToCarousel(imageUrl) {
        const newItem = document.createElement('div');
        newItem.classList.add('carousel-item');

        const img = document.createElement('img');
        img.src = imageUrl;
        img.classList.add('d-block', 'w-100');
        img.alt = 'Barang Ditemukan';

        newItem.appendChild(img);
        
        // Jika ini adalah gambar pertama, tambahkan kelas 'active'
        if (carouselImages.children.length === 0) {
            newItem.classList.add('active');
        }

        carouselImages.appendChild(newItem); // Tambahkan gambar baru ke galeri
    }
});
