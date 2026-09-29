# Nitip Dong Mas

Nitip Dong Mas adalah katalog sederhana untuk membantu orang memilih makanan di sekitar gedung. Saat ini katalog memuat enam pilihan menu dengan deskripsi dan kisaran harga.

## Fitur

- Menampilkan enam kartu menu makanan.
- Membuka detail menu dengan klik, Enter, atau Spasi.
- Menampilkan nama, deskripsi, dan harga pada dialog detail.
- Menutup dialog dengan tombol tutup, klik area di luar dialog, atau Escape.
- Mengembalikan fokus ke kartu menu setelah dialog ditutup.
- Menggulir ke katalog melalui tombol **Lihat Rekomendasi**.
- Mendukung preferensi reduced motion untuk animasi gulir.

## Menjalankan proyek

Proyek ini menggunakan HTML, CSS, dan JavaScript biasa tanpa proses build atau dependency tambahan.

1. Clone atau unduh repository.
2. Buka `index.html` langsung di browser, atau jalankan dengan ekstensi seperti Live Server di VS Code.

## Struktur berkas

```text
.
|-- index.html
|-- README.md
|-- script/
|   `-- scripted.js
`-- styles/
    `-- styles.css
```

## Status

Proyek masih dikembangkan. Gambar pada kartu saat ini menggunakan placeholder; ganti dengan foto yang sesuai sebelum digunakan sebagai katalog final. Informasi harga dan deskripsi mengikuti data yang tercantum pada kartu.

## Publikasi dengan GitHub Pages

1. Push berkas proyek ke repository GitHub.
2. Buka **Settings** repository, lalu pilih **Pages**.
3. Pada bagian build and deployment, pilih **Deploy from a branch**.
4. Pilih branch yang digunakan (misalnya `main`) dan folder `/ (root)`, lalu simpan.

GitHub Pages akan menerbitkan situs statis dari `index.html`.