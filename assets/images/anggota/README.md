# Foto anggota Prasmafista

Slot foto pada struktur Al-Fatih dan Rasuna Said hanya disediakan untuk anggota yang namanya sudah tercantum. Posisi yang belum mempunyai nama resmi tidak ditampilkan sampai datanya tersedia.

Bingkai foto berbentuk potret vertikal 4:5 dengan sudut membulat, agar wajah dan badan bagian atas anggota dapat terlihat.

## Cara memasang foto

1. Simpan foto anggota di folder ini (`assets/images/anggota/`) dalam format WebP atau JPG.
2. Gunakan nama file yang sama persis dengan nilai `data-photo-key` pada elemen foto di `index.html`.
3. Ganti nilai `src` dari `assets/images/member-placeholder.svg` menjadi `assets/images/anggota/NAMA-FILE.webp`.
4. Pilih foto potret vertikal dengan komposisi kepala hingga dada atau pinggang. Sisakan sedikit ruang di atas kepala dan jangan memotong bahu.
5. CSS menggunakan rasio bingkai 4:5 dan `object-fit: cover`; foto dipotong secara konsisten tanpa mengubah file sumber.

## Contoh

`data-photo-key="al-fatih-pradana"` dipasangkan dengan `assets/images/anggota/al-fatih-pradana.webp`.

Setiap posisi anggota yang ditampilkan mempunyai `data-photo-key` unik. Pastikan foto hanya dipasangkan dengan nama yang benar dan sudah mendapat izin untuk dipublikasikan.
