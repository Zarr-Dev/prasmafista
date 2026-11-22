# Foto anggota Prasmafista

Slot foto pada struktur Al-Fatih dan Rasuna Said sudah disiapkan memakai gambar sementara `assets/images/member-placeholder.svg`.

Untuk memasang foto:
1. Simpan foto anggota di folder ini (`assets/images/anggota/`) dalam format WebP atau JPG.
2. Gunakan nama file yang sama persis dengan nilai `data-photo-key` pada elemen foto di `index.html`.
3. Ganti nilai `src` dari `assets/images/member-placeholder.svg` menjadi `assets/images/anggota/NAMA-FILE.webp`.
4. Gunakan foto potret yang jelas; CSS akan memotongnya otomatis menjadi lingkaran tanpa mengubah rasio sumber.

Contoh: `data-photo-key="al-fatih-pradana"` menjadi `assets/images/anggota/al-fatih-pradana.webp`.

Setiap anggota mempunyai `data-photo-key` unik, termasuk anggota dengan nama yang belum dilengkapi. Pastikan foto hanya dipasangkan dengan nama yang benar.
