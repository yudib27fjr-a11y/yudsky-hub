/*
  PENGATURAN YUDSKY HUB
  ---------------------
  File ini hanya diisi sekali. Saat memperbarui aplikasi, cukup ganti index.html.
  File ini tidak perlu diganti.

  1. ownerEmail: email Google pemilik. Hanya pemilik yang bisa memberi dan
     mencabut akses. Email yang sama harus ditulis di firestore.rules.
  2. firebase: tempel isi "firebaseConfig" dari Firebase Console
     (Project settings > General > Your apps > Web app). Lihat PANDUAN.md.

  Selama apiKey masih "GANTI...", aplikasi berjalan dalam mode lokal
  (data hanya tersimpan di perangkat, tanpa login).
*/
window.YUDSKY_CONFIG = {
  ownerEmail: "yudi.b27fjr@gmail.com",
  firebase: {
    apiKey: "GANTI_DENGAN_API_KEY",
    authDomain: "GANTI.firebaseapp.com",
    projectId: "GANTI",
    storageBucket: "GANTI.appspot.com",
    messagingSenderId: "GANTI",
    appId: "GANTI"
  }
};
