# Prasmafista · Gugus Depan 26.111–26.112

Website satu halaman untuk Gerakan Pramuka SMA Al-Fityan School Tangerang. Dibangun menggunakan HTML, CSS, dan JavaScript murni, tanpa framework, dependensi eksternal, atau proses build. Dirancang agar tetap ringan untuk perangkat lama.

## Menjalankan situs

Buka `index.html` langsung di browser, atau jalankan server lokal dari folder proyek:

```bash
python -m http.server 8000
```

Kemudian buka `http://localhost:8000`.

## Isi halaman

- **Beranda:** foto banner kegiatan, identitas Prasmafista, slogan, dan foto pelantikan Bantara dalam bingkai emas.
- **Profil:** pangkalan, nomor Gudep, pengertian Gerakan Pramuka, Gugus Depan, dan Ambalan dengan tautan sumber.
- **Nilai:** rumusan visi dan misi editorial untuk pengenalan; sesuaikan dengan dokumen resmi bila tersedia.
- **Struktur:** dua format terpisah untuk Ambalan Al-Fatih (putra / Gudep 26.111) dan Rasuna Said (putri / Gudep 26.112). Foto dan nama pengurus masih berupa slot karena daftar resminya belum diberikan.
- **Dokumentasi:** dua foto yang dikirim pengelola, dengan lightbox dan navigasi keyboard.

## Perilaku interaktif

- Animasi pembuka dapat dilewati dengan klik/ketukan di area animasi atau tombol `Escape`, `Enter`, dan `Spasi`. Tidak ada tombol lewati khusus.
- Header menampilkan foto saat berada di bagian atas lalu beralih ke warna hijau solid ketika halaman digulir.
- Cincin pada logo menampilkan progres gulir. Klik logo saat halaman sedang digulir akan kembali ke atas; klik ketika berada di bagian atas akan membuka Instagram `@prasmafista`.
- Foto dokumentasi bisa dibuka, dipindah, dan ditutup dengan keyboard.
- Animasi menghormati pengaturan `prefers-reduced-motion`.

## File yang sering diubah

| Kebutuhan | Lokasi |
|---|---|
| Profil, slogan, isi informasi | `index.html` |
| Nama, jabatan, dan foto pengurus kedua ambalan | `index.html`, bagian `id="struktur"` |
| Foto utama | `assets/images/pelantikan-bantara.webp` |
| Banner atas | `assets/images/header-banner.jpeg` |
| Warna, layout, dan responsivitas | `css/base.css`, `css/header.css`, `css/sections.css` |
| Perilaku logo dan header | `js/header.js` |
| Animasi pembuka | `js/intro.js` |
| Lightbox foto | `js/lightbox.js` |

## Sumber dan batas data

Definisi umum kepramukaan merujuk pada situs Kwartir Nasional Gerakan Pramuka dan dokumen AD/ART/Jukran yang ditautkan pada halaman. Informasi lokal seperti slogan, nama ambalan, nomor Gudep, serta akun Instagram mengikuti data yang diberikan pengelola. Situs Instagram tidak menyediakan kontennya untuk diverifikasi secara lengkap saat proyek disusun, sehingga tidak ada nama pengurus atau prestasi yang dibuat-buat.


### Tipografi dan header (pembaruan)
Font global menggunakan Grandstander melalui Google Fonts; diperlukan koneksi internet agar font termuat. Header memakai warna hijau solid yang senada dengan panel Profil, wordmark dan logo lebih besar di bagian atas, lalu mengecil saat halaman digulir. Caption foto utama: **Pelantikan Bantara 2026**.
