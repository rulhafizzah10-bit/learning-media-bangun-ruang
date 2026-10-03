# Media Pembelajaran Bangun Ruang Sisi Lengkung

Proyek ini dibuat sebagai media pembelajaran interaktif untuk siswa kelas 9 pada materi bangun ruang sisi lengkung. Fokus utama proyek ini adalah membantu siswa memahami:

- apa bentuk bangun ruangnya
- bagian-bagian pentingnya
- dari mana rumus muncul
- mengapa rumus itu benar
- bagaimana rumus digunakan dalam soal
- bagaimana latihan soal dibuat dengan level yang berbeda

## Tujuan media
Media ini dirancang agar siswa tidak hanya membaca rumus, tetapi melihat proses berpikir matematis yang membangun rumus tersebut.

Saat siswa menyorot atau zoom ke bagian tertentu dari bangun ruang, mereka akan melihat:

1. konsep bagian bangun yang dipilih
2. penjelasan visual dan geometris
3. langkah derivasi rumus
4. contoh numerik
5. soal latihan sesuai tingkat kesulitan

## Bangun ruang yang dibahas
### 1. Kerucut
- alas berbentuk lingkaran
- tinggi tegak lurus ke pusat alas
- garis pelukis disebut s
- hubungan: s² = r² + t²
- luas alas = πr²
- luas selimut = πrs
- volume = 1/3 πr²t

#### Derivasi inti
- volume kerucut berasal dari hubungan bahwa volume kerucut adalah 1/3 volume tabung dengan jari-jari dan tinggi yang sama.
- luas selimut kerucut berasal dari luas juring lingkaran, karena selimut kerucut jika dibuka akan membentuk juring.
- garis pelukis diperoleh dengan teorema Pythagoras pada segitiga siku-siku yang dibentuk oleh tinggi, jari-jari, dan sisi miring.

### 2. Tabung
- alas dan tutup berbentuk lingkaran
- tinggi menghubungkan kedua lingkaran
- luas alas = πr²
- luas selimut = 2πrt
- luas permukaan = 2πr(r + t)
- volume = πr²t

#### Derivasi inti
- luas selimut tabung sama dengan keliling alas dikalikan tinggi.
- karena keliling lingkaran = 2πr, maka luas selimut = 2πrt.
- volume tabung = luas alas × tinggi = πr²t.

### 3. Bola
- bangun ruang dengan semua titik berjarak sama dari pusat
- jari-jari = r
- luas permukaan = 4πr²
- volume = 4/3 πr³

#### Derivasi inti
- luas permukaan bola dapat dikaitkan dengan luas area yang dibuka pada permukaan bola.
- volume bola diperoleh dari pendekatan integral atau visual geometri klasik yang menunjukkan bahwa volume bola sama dengan 4/3 πr³.

## Level soal
### Level 1: Dasar
soal yang menilai pemahaman konsep dan istilah dasar.

### Level 2: Penerapan
soal menghitung langsung dengan rumus yang sudah dipahami.

### Level 3: Kritis
soal analisis seperti membandingkan volume atau mencari elemen yang tidak diketahui.

### Level 4: Cerita
soal kontekstual dalam kehidupan sehari-hari, seperti tenda, es krim, kaleng minuman, dan bentuk bangun sekitar.

## Catatan pengembangan
Proyek ini masih bersifat prototipe awal. Di masa depan, fitur yang dapat ditambahkan adalah:
- backend untuk soal dinamis per sesi
- database bank soal
- login siswa / progress belajar
- QR lebih kompleks dengan tracking hasil per scan
- animasi 3D yang lebih realistis melalui Three.js
- simulasi zoom interaktif bagian demi bagian
- penjelasan audio / narasi guru

## Cara menjalankan
Buka project di browser dengan cara sederhana:

```bash
python3 -m http.server 8000
```

lalu akses:

```text
http://localhost:8000
```

## GitHub repository
- https://github.com/rulhafizzah10-bit/learning-media-bangun-ruang

