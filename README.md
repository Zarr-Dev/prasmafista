# Prasmafista · Gugus Depan 26.111–26.112

Website satu halaman Gerakan Pramuka SMA Al-Fityan School Tangerang. Dibangun dengan HTML, CSS, dan JavaScript murni tanpa framework atau proses build. Tipografi utama menggunakan Grandstander dari Google Fonts; jika font daring tidak tersedia, browser memakai font sistem sebagai fallback.

## Menjalankan situs

Buka `index.html` langsung di browser, atau jalankan server lokal dari folder proyek:

```bash
python -m http.server 8000
```

Kemudian buka `http://localhost:8000`.

## Isi halaman

- **Beranda:** banner kegiatan, identitas Prasmafista, slogan, dan potret pelantikan Bantara.
- **Profil:** pangkalan, nomor Gudep, pengertian Gerakan Pramuka, Gugus Depan, dan Ambalan beserta tautan rujukan.
- **Nilai:** visi dan misi Dewan Ambalan Al-Fatih (putra) dan Rasuna Said (putri).
- **Struktur:** susunan Dewan Ambalan Al-Fatih dan Rasuna Said. Setiap posisi memiliki slot foto lingkaran sementara; nama yang belum tersedia tetap ditandai secara eksplisit.
- **Dokumentasi:** dua foto dengan lightbox, navigasi foto, dan dukungan keyboard.

## Perilaku interaktif

- Animasi pembuka dapat dilewati dengan klik/ketukan atau tombol `Escape`, `Enter`, dan `Spasi`.
- Navigasi bagian menggunakan scroll halus dan penanda menu aktif sesuai posisi halaman.
- Header berwarna cokelat pada posisi atas, lalu berubah menjadi warna terang ketika halaman digulir.
- Cincin di sekeliling logo menunjukkan progres gulir. Klik logo ketika halaman digulir akan kembali ke atas; klik saat berada di posisi atas membuka Instagram `@prasmafista`.
- Elemen konten muncul bertahap ketika memasuki area layar.
- Foto dokumentasi dapat dibuka, dipindah dengan tombol panah, dan ditutup dengan `Escape`.
- Animasi dan scroll menghormati pengaturan `prefers-reduced-motion`.

## File yang sering diubah

| Kebutuhan | Lokasi |
|---|---|
| Profil, slogan, visi-misi, dan struktur | `index.html` |
| Foto banner | `assets/images/header-banner.jpeg` |
| Potret pelantikan Bantara | `assets/images/pelantikan-bantara.webp` |
| Logo dan favicon | `assets/images/gudepalfit.webp`, `assets/images/gudepalfit.png` |
| Warna, tipografi, dan layout | `css/base.css`, `css/header.css`, `css/sections.css` |
| Animasi pembuka | `js/intro.js` |
| Perilaku header dan logo | `js/header.js` |
| Navigasi dan scroll-spy | `js/navigation.js` |
| Animasi kemunculan konten | `js/reveal.js` |
| Lightbox dokumentasi | `js/lightbox.js` |
| Template foto anggota dan panduan nama file | `assets/images/member-placeholder.svg`, `assets/images/anggota/README.md` |
| Inisialisasi halaman | `js/main.js` |

## Sumber dan batas data

Definisi umum kepramukaan merujuk pada situs Kwartir Nasional Gerakan Pramuka dan dokumen AD/ART/Jukran yang ditautkan pada halaman. Informasi lokal—termasuk slogan, nama ambalan, nomor Gudep, visi-misi, dan susunan pengurus—mengikuti data yang disampaikan pengelola. Bagian yang belum memiliki data ditandai agar tidak menampilkan informasi rekaan.
