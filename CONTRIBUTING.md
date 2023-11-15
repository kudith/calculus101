# Panduan Kontribusi Proyek Kalkulus Grafik Fungsi

Terima kasih telah berminat untuk berkontribusi pada Proyek Kalkulus Grafik Fungsi! Kami sangat menghargai partisipasi Anda dalam membuat proyek ini menjadi lebih baik. Sebelum Anda mulai berkontribusi, mohon luangkan waktu sejenak untuk membaca panduan ini.

## Tentang Proyek

Proyek Kalkulus Grafik Fungsi bertujuan untuk menyediakan alat visualisasi grafik fungsi matematika kalkulus, sambil memberikan konten edukatif tentang materi kalkulus terkait. Proyek ini dibangun menggunakan React.js dan Tailwind CSS.

## Alur Kontribusi

1. **Ajukan _Issue_:** Jika Anda menemui bug, memiliki ide perbaikan, atau ingin menambah fitur baru, buat _issue_ terlebih dahulu untuk mendiskusikannya.

2. **Fork Repositori:** Fork repositori ini ke akun GitHub Anda.

3. **Buat Cabang:** Setiap perubahan harus dibuat di cabang terpisah. Gunakan nama cabang yang deskriptif.

   ```bash
   git checkout -b nama-cabang-anda
   ```

4. **Instal Dependensi:** Jalankan `npm install` untuk menginstal semua dependensi yang diperlukan.

5. **Jalankan Aplikasi:** Jalankan `npm start` untuk menjalankan aplikasi dalam mode pengembangan dan memastikan perubahan Anda berfungsi seperti yang diharapkan.

6. **Kode dengan Pedoman Kode:** Pastikan untuk mengikuti pedoman kode yang telah ditetapkan dalam [Pedoman Kode](./CODE_OF_CONDUCT.md).

7. **Uji Perubahan:** Sebelum mengirim _pull request_, pastikan untuk menjalankan semua tes unit dan memastikan bahwa proyek berjalan dengan baik.

8. **Dokumentasi:** Pastikan setiap fitur atau perubahan besar disertai dengan dokumentasi yang jelas. Perbarui dokumentasi yang ada jika diperlukan.

9. **Kirim _Pull Request_:** Setelah memastikan bahwa semua perubahan berfungsi dengan baik dan sesuai dengan pedoman kontribusi, kirim _pull request_ ke repositori ini untuk ditinjau.

## Pedoman Kode

- Gunakan indentasi 2 spasi.
- Ikuti konvensi penamaan JavaScript.
- Pastikan setiap fungsi atau fitur baru disertai dengan dokumentasi yang jelas.

## Struktur Proyek

```plaintext
kalkulus-grafik-fungsi/
|-- public/
|-- src/
|   |-- components/
|   |-- utils/
|   |-- App.js
|   |-- index.js
|-- .gitignore
|-- package.json
|-- README.md
|-- CONTRIBUTING.md
|-- LICENSE
```
