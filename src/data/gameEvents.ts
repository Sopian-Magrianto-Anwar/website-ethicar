export interface GameEvent {
  id: string;
  type: 'zebra' | 'ambulance' | 'phone' | 'pothole' | 'police' | 'animal' | 'speed_limit' | 'traffic_jam' | 'rain';
  message: string;
  icon: string;
  actions: {
    label: string;
    key: string;
    points: number;
    feedback: string;
  }[];
}

export const gameEvents: GameEvent[] = [
  {
    id: 'e1',
    type: 'zebra',
    icon: '🚶',
    message: 'Ada pejalan kaki di zebra cross!',
    actions: [
      { label: 'Berhenti', key: 'stop', points: 30, feedback: 'Bagus! Etika pejalan kaki diutamakan.' },
      { label: 'Terus Jalan', key: 'go', points: -20, feedback: 'Kurang tepat! AI mendeteksi risiko tabrakan.' }
    ]
  },
  {
    id: 'e2',
    type: 'ambulance',
    icon: '🚑',
    message: 'Ambulans mendekat dari belakang!',
    actions: [
      { label: 'Menepi ke Kiri', key: 'yield', points: 30, feedback: 'Sangat baik! Menghargai kendaraan darurat.' },
      { label: 'Tetap di Jalur', key: 'stay', points: -10, feedback: 'Menghalangi jalan darurat sangat berbahaya.' }
    ]
  },
  {
    id: 'e3',
    type: 'phone',
    icon: '📱',
    message: 'Ada telepon masuk di HP Anda!',
    actions: [
      { label: 'Abaikan', key: 'ignore', points: 30, feedback: 'Fokus terjaga. Keselamatan adalah utama.' },
      { label: 'Angkat Telpon', key: 'answer', points: -30, feedback: 'Fokus berkendara menurun drastis!' }
    ]
  },
  {
    id: 'e4',
    type: 'pothole',
    icon: '🕳️',
    message: 'Ada lubang besar di depan jalan!',
    actions: [
      { label: 'Kurangi Kecepatan', key: 'slow', points: 20, feedback: 'Keputusan cerdas untuk menjaga kondisi kendaraan.' },
      { label: 'Hantam Saja', key: 'hit', points: -15, feedback: 'Beresiko merusak komponen kendaraan.' }
    ]
  },
  {
    id: 'e5',
    type: 'police',
    icon: '👮',
    message: 'Ada razia polisi di depan!',
    actions: [
      { label: 'Siapkan Surat', key: 'prepare', points: 20, feedback: 'Bagus! Kelengkapan surat adalah bukti disiplin.' },
      { label: 'Putar Balik', key: 'run', points: -50, feedback: 'Tindakan mencurigakan dan melanggar hukum!' }
    ]
  },
  {
    id: 'e6',
    type: 'animal',
    icon: '🐕',
    message: 'Ada anjing menyeberang mendadak!',
    actions: [
      { label: 'Rem Perlahan', key: 'brake', points: 25, feedback: 'Sangat baik! Menyayangi makhluk hidup di jalan.' },
      { label: 'Klakson Kencang', key: 'honk', points: -10, feedback: 'Bisa membuat hewan panik dan berbahaya.' }
    ]
  },
  {
    id: 'e7',
    type: 'speed_limit',
    icon: '🛑',
    message: 'Anda memasuki zona sekolah (Batas 20km/jam)!',
    actions: [
      { label: 'Turunkan Gigi', key: 'downshift', points: 25, feedback: 'AI bangga! Anda sangat peduli zona anak-anak.' },
      { label: 'Tetap Kencang', key: 'speed', points: -40, feedback: 'Risiko fatal bagi pejalan kaki cilik!' }
    ]
  },
  {
    id: 'e8',
    type: 'traffic_jam',
    icon: '🚗🚕🚙',
    message: 'Macet total! Seseorang mencoba menyerobot jalur Anda.',
    actions: [
      { label: 'Beri Jalan', key: 'give', points: 20, feedback: 'Sabar adalah kunci etika berkendara tinggi.' },
      { label: 'Tutup Jalur', key: 'block', points: -15, feedback: 'Memicu keributan dan kemacetan lebih parah.' }
    ]
  }
];
