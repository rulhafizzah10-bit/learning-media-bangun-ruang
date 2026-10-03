# Media Pembelajaran Bangun Ruang Sisi Lengkung

Prototipe web interaktif untuk pembelajaran bangun ruang sisi lengkung (kerucut, tabung, bola) untuk kelas 9.

## Fitur utama
- model 3D interaktif berbentuk kerucut (ready for pengembangan ke tabung/bola)
- focus area saat zoom atau klik pada bagian: alas, tinggi, selimut, volume, dan garis pelukis
- penjelasan konsep dan derivasi rumus dari dasar geometri
- soal latihan dengan level: dasar, penerapan, kritis, dan cerita
- QR code unik per sesi, sehingga setiap scan menghasilkan pengalaman belajar yang berbeda
- hasil jawaban dan pembahasan sesuai level

## Cara menjalankan
1. Buka terminal di folder project
2. Jalankan:

```bash
python3 -m http.server 8000
```

3. Buka di browser:

```text
http://localhost:8000
```

## Struktur project
- `index.html` : layout utama aplikasi
- `style.css` : desain UI edukasi dan 3D styling
- `app.js` : logika konsep, QR, dan latihan soal

## Catatan
Project ini adalah prototipe MVP (minimum viable product) yang menekankan konsep pembelajaran interaktif dan alur belajar. Anda dapat memperluasnya ke tabung dan bola, menambahkan backend, serta menautkannya ke database soal yang lebih besar.
