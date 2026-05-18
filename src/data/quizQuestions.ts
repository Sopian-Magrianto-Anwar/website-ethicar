export interface QuizQuestion {
  id: string;
  category: 'Rambu' | 'Prioritas' | 'Etika' | 'Keamanan' | 'Hukum';
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  // --- PRIORITAS & RAMBU ---
  {
    id: "q1",
    category: "Prioritas",
    question: "Apa fungsi utama lampu lalu lintas warna kuning menurut etika berkendara aman?",
    options: ["Ngebut agar tidak tertahan lampu merah", "Bersiap untuk berhenti jika memungkinkan", "Berhenti mendadak di tengah jalan", "Klakson kendaraan di depan"],
    answer: 1,
    explanation: "Lampu kuning adalah peringatan untuk mulai melambat dan bersiap berhenti."
  },
  {
    id: "q2",
    category: "Prioritas",
    question: "Anda melihat ambulans dengan sirine menyala di belakang Anda. Apa tindakan yang paling tepat?",
    options: ["Tetap di jalur dan tidak peduli", "Ngebut agar ambulans bisa lewat", "Segera menepi ke kiri dan memberi jalan", "Mengerem mendadak"],
    answer: 2,
    explanation: "Memberi jalan pada kendaraan darurat adalah kewajiban hukum dan etika prioritas."
  },
  {
    id: "q3",
    category: "Prioritas",
    question: "Siapa yang memiliki hak jalan utama di persimpangan tanpa lampu lalu lintas?",
    options: ["Kendaraan paling besar", "Kendaraan yang datang dari arah kiri", "Kendaraan yang datang dari jalan utama/lurus", "Kendaraan yang paling cepat"],
    answer: 2,
    explanation: "Secara umum, kendaraan di jalan utama atau yang bergerak lurus memiliki prioritas."
  },
  {
    id: "q4",
    category: "Rambu",
    question: "Apa arti rambu lingkaran merah dengan garis putih horizontal di tengah?",
    options: ["Dilarang Berhenti", "Dilarang Masuk", "Dilarang Parkir", "Satu Arah"],
    answer: 1,
    explanation: "Rambu ini berarti 'Verboden' atau dilarang masuk bagi semua kendaraan."
  },
  {
    id: "q5",
    category: "Rambu",
    question: "Rambu segitiga kuning dengan gambar orang berjalan artinya?",
    options: ["Area balap lari", "Waspada penyeberang jalan", "Hanya untuk pejalan kaki", "Dilarang menyeberang"],
    answer: 1,
    explanation: "Rambu peringatan bahwa di depan ada area penyeberangan pejalan kaki."
  },
  
  // --- ETIKA & SOSIAL ---
  {
    id: "q6",
    category: "Etika",
    question: "Anda tidak sengaja menyenggol spion kendaraan lain saat macet. Apa tindakan etisnya?",
    options: ["Langsung kabur karena hanya lecet kecil", "Berhenti, meminta maaf, dan bertanggung jawab", "Menyalahkan kendaraan tersebut karena menghalangi", "Pura-pura tidak tahu"],
    answer: 1,
    explanation: "Etika berkendara melibatkan integritas dan tanggung jawab atas kesalahan sendiri."
  },
  {
    id: "q7",
    category: "Etika",
    question: "Menggunakan klakson secara berlebihan saat macet total merupakan tindakan?",
    options: ["Efektif agar jalan cepat lancar", "Membantu polisi mengatur jalan", "Tidak sopan dan mengganggu kenyamanan publik", "Kewajiban pengendara"],
    answer: 2,
    explanation: "Klakson hanya untuk peringatan darurat, bukan untuk meluapkan emosi saat macet."
  },
  {
    id: "q8",
    category: "Etika",
    question: "Bagaimana cara menyalip kendaraan lain yang benar dan sopan?",
    options: ["Dari arah kiri secara mendadak", "Memberi lampu sein, pastikan aman, dan salip dari kanan", "Terus menempel di belakang sampai mereka menepi", "Gunakan lampu jauh berkali-kali"],
    answer: 1,
    explanation: "Menyalip harus dari kanan dengan sinyal yang jelas dan memastikan jarak aman."
  },

  // --- KEAMANAN & TEKNIS ---
  {
    id: "q9",
    category: "Keamanan",
    question: "Kapan Anda diperbolehkan menggunakan handphone saat berkendara?",
    options: ["Saat jalanan sepi", "Saat berhenti di lampu merah", "Hanya jika menggunakan hands-free untuk darurat", "Tidak diperbolehkan sama sekali"],
    answer: 3,
    explanation: "Fokus adalah kunci keselamatan. Penggunaan HP dapat mengurangi kesadaran situasi."
  },
  {
    id: "q10",
    category: "Keamanan",
    question: "Berapa jarak aman (detik) yang disarankan antar kendaraan di jalan raya?",
    options: ["0.5 detik", "1 detik", "3 detik", "10 detik"],
    answer: 2,
    explanation: "Aturan 3 detik memberikan waktu reaksi yang cukup jika kendaraan di depan mengerem mendadak."
  },
  {
    id: "q11",
    category: "Keamanan",
    question: "Lampu hazard (lampu darurat) digunakan saat?",
    options: ["Berkendara saat hujan deras", "Berjalan lurus di persimpangan", "Kendaraan dalam kondisi darurat/berhenti di bahu jalan", "Konvoi rombongan"],
    answer: 2,
    explanation: "Hazard hanya untuk kondisi darurat saat berhenti, bukan saat kendaraan bergerak."
  },

  // --- HUKUM & PERATURAN ---
  {
    id: "q12",
    category: "Hukum",
    question: "Apa sanksi jika mengendarai kendaraan bermotor tanpa memiliki SIM?",
    options: ["Hanya teguran lisan", "Denda administratif atau kurungan sesuai UU LLAJ", "Kendaraan disita selamanya", "Dilarang makan di restoran"],
    answer: 1,
    explanation: "Kepemilikan SIM adalah bukti kompetensi legal berkendara yang diatur undang-undang."
  },
  {
    id: "q13",
    category: "Hukum",
    question: "Batas kecepatan maksimal di area pemukiman biasanya adalah?",
    options: ["30 km/jam", "60 km/jam", "80 km/jam", "100 km/jam"],
    answer: 0,
    explanation: "Area pemukiman menuntut kecepatan rendah karena banyaknya aktivitas warga dan anak-anak."
  },
  {
    id: "q14",
    category: "Hukum",
    question: "Surat Tanda Nomor Kendaraan (STNK) harus diperpanjang masa berlakunya setiap?",
    options: ["Setiap bulan", "1 tahun sekali (pajak) dan 5 tahun sekali (ganti plat)", "Hanya saat kendaraan dijual", "10 tahun sekali"],
    answer: 1,
    explanation: "STNK memiliki kewajiban pengesahan tahunan dan perpanjangan 5 tahunan."
  },

  // --- TAMBAHAN SKENARIO ---
  {
    id: "q15",
    category: "Etika",
    question: "Menemukan barang jatuh dari kendaraan di depan Anda, apa yang Anda lakukan?",
    options: ["Mengambilnya untuk diri sendiri", "Mengabaikannya", "Memberi isyarat pada pengendara tersebut jika aman", "Sengaja menabraknya"],
    answer: 2,
    explanation: "Sikap peduli antar pengguna jalan membantu mencegah kecelakaan bagi orang lain."
  },
  {
    id: "q16",
    category: "Keamanan",
    question: "Saat hujan sangat lebat dan jarak pandang terbatas, tindakan terbaik adalah?",
    options: ["Ngebut agar cepat sampai", "Menyalakan lampu hazard sambil tetap kencang", "Menepi di tempat aman jika terlalu berisiko", "Matikan lampu agar tidak silau"],
    answer: 2,
    explanation: "Keselamatan nyawa lebih utama daripada ketepatan waktu saat cuaca ekstrem."
  }
  // Data dapat terus ditambah hingga 100+ di sini...
];
