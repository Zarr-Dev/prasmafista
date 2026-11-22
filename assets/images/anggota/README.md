# Foto anggota Prasmafista

Slot foto pada struktur Al-Fatih dan Rasuna Said memakai gambar sementara `assets/images/member-placeholder.svg`. Bingkai foto sekarang berbentuk potret vertikal dengan sudut membulat, bukan lingkaran kecil, agar wajah dan bagian badan atas anggota dapat terlihat.

## Cara memasang foto

1. Simpan foto anggota di folder ini (`assets/images/anggota/`) dalam format WebP atau JPG.
2. Gunakan nama file yang sama persis dengan nilai `data-photo-key` pada elemen foto di `index.html`.
3. Ganti nilai `src` dari `assets/images/member-placeholder.svg` menjadi `assets/images/anggota/NAMA-FILE.webp`.
4. Pilih foto potret vertikal dengan komposisi kepala hingga dada atau pinggang. Sisakan sedikit ruang di atas kepala dan jangan memotong bahu.
5. CSS menggunakan rasio bingkai 4:5 dan `object-fit: cover`; bagian foto akan dipotong secara konsisten tanpa mengubah file sumber.

## Nama file

Contoh: `data-photo-key="al-fatih-pradana"` menjadi `assets/images/anggota/al-fatih-pradana.webp`.

Setiap anggota mempunyai `data-photo-key` unik, termasuk posisi dengan nama yang belum dilengkapi. Pastikan foto hanya dipasangkan dengan nama yang benar.
