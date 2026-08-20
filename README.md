🎂 A Digital Birthday Letter - Website Surat Ulang Tahun Interaktif
Sebuah website ulang tahun interaktif yang dibuat dengan React, GSAP, dan Lenis. Website ini dirancang dengan estetika elegan, romantis, dan penuh dengan animasi micro-interaction untuk memberikan pengalaman yang tak terlupakan bagi penerima.

✨ Fitur Utama
Sistem Kunci Akses 🔒: Halaman awal yang terlindungi. Hanya orang yang memiliki kata kunci rahasia yang bisa mengakses konten web.
Opening Envelope ✉️: Animasi pembukaan amplop 3D yang mulus sebelum masuk ke halaman utama.
Smooth Scrolling 🌊: Integrasi Lenis untuk efek scroll yang sangat halus dan premium.
Scroll Progress Bar 📊: Bar indikator di bagian atas layar yang mengisi sesuai progres scroll.
Interactive Timeline (Our Story) 🛤️: Garis perjalanan yang mengisi warna (gold-pink) otomatis saat di-scroll, lengkap dengan titik/node yang menyala saat dilewati.
Message in a Bottle 🍾: Botol pesan interaktif. Saat diklik, tutupnya terbuka dan kertas surat bergulir keluar dengan animasi GSAP.
Lightbox Gallery 📸: Grid foto polaroid dengan efek spotlight cursor. Klik foto untuk memperbesar tampilan ke layar penuh.
CSS 3D Cake & Candles 🎉: Animasi kue ulang tahun yang dibuat murni dengan CSS. Lilin bisa diklik untuk ditiup satu per satu.
Spotify Embed 🎵: Pemutar lagu tema dari Spotify yang terintegrasi langsung di halaman (tanpa khawatir masalah hak cipta MP3).
Decorative Particles 🌸: Efek bunga sakura yang berjatuhan dengan ukuran yang lebih besar dan jelas.
🛠️ Tech Stack
Frontend: React (Vite)
Animasi: GSAP (ScrollTrigger & Timeline)
Smooth Scroll: Lenis (@studio-freight/lenis)
Styling: CSS Murni (Global CSS), CSS Variables, React Inline Styles
UI/UX Inspiration: ReactBits (Spotlight Card, Animated Gradient Text)
📁 Struktur Folder
src/├── App.jsx                     # File utama yang merangkum semua section├── styles/│   └── GlobalStyles.css        # Kumpulan CSS global, animasi keyframes, dan class helper├── constants/│   └── theme.js                # Variabel warna (Tokens) yang digunakan di seluruh app├── hooks/│   └── useSmoothScroll.js      # Custom hook untuk inisialisasi GSAP & Lenis└── components/    ├── Envelope.jsx            # Animasi amplop pembuka    ├── MessageBottle.jsx       # Botol pesan dengan animasi kertas bergulir    ├── Timeline.jsx            # Garis perjalanan cerita (Our Story)    ├── Gallery.jsx             # Grid foto dengan fitur Lightbox    ├── Cake.jsx                # Kue ulang tahun & lilin interaktif    ├── Petals.jsx              # Partikel bunga jatuh    ├── SectionHeader.jsx       # Header judul untuk masing-masing section    ├── SpotlightCard.jsx       # Komponen kartu dengan efek glow mengikuti kursor    └── ScrollProgress.jsx      # Bar progress di atas layar
(Catatan: Komponen yang menangani autentikasi dan keamanan sengaja tidak ditampilkan pada struktur publik dokumentasi ini).

🚀 Cara Menjalankan Project
Clone repository atau download source code.
Buka terminal di folder project.
Install dependencies:
bash

npm install
Jalankan server lokal:
bash

npm run dev
Buka http://localhost:5173 di browser.
🛠️ Panduan Kustomisasi
Anda dapat mengubah isi pesan dan aset website dengan sangat mudah:

Mengubah Isi Surat (Botol Pesan)
Buka src/components/MessageBottle.jsx.
Cari variabel const fullText = \...`` dan ganti teks di dalamnya.
Mengganti Foto Galeri
Siapkan 5 buah foto.
Masukkan foto tersebut ke dalam folder public/images/.
Pastikan nama filenya berurutan: photo-1.jpg, photo-2.jpg, photo-3.jpg, photo-4.jpg, photo-5.jpg.
(Opsional) Anda bisa mengubah judul caption di src/components/Gallery.jsx.
Mengganti Lagu Tema (Spotify)
Buka src/App.jsx.
Cari section LAGU TEMA (SPOTIFY).
Ganti URL src="https://open.spotify.com/embed/..." dengan link embed lagu Spotify Anda sendiri.
Mengubah Warna Tema
Buka src/constants/theme.js.
Ubah kode warna HEX sesuai dengan selera Anda (misalnya mengubah gold atau pink).