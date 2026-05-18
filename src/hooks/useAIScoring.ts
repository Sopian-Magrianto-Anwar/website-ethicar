import { useMemo } from 'react';

interface AIScoreResult {
  grade: string;
  rank: string;
  feedback: string;
  color: string;
}

export const useAIScoring = (points: number): AIScoreResult => {
  return useMemo(() => {
    if (points > 200) {
      return {
        grade: 'A+',
        rank: 'Legenda',
        feedback: '"Anda menunjukkan kedewasaan luar biasa dalam berkendara. Terus pertahankan empati tinggi Anda terhadap pejalan kaki dan kendaraan darurat."',
        color: 'var(--accent-cyan)'
      };
    } else if (points > 100) {
      return {
        grade: 'A',
        rank: 'Emas',
        feedback: '"Performa sangat stabil. AI mendeteksi konsistensi dalam mematuhi rambu-rambu. Anda hampir menjadi pengendara teladan."',
        color: 'var(--accent-yellow)'
      };
    } else if (points > 50) {
      return {
        grade: 'B',
        rank: 'Perak',
        feedback: '"Anda memiliki dasar yang baik, namun AI mendeteksi adanya sedikit ketidaksabaran saat jam sibuk. Fokus pada jarak aman akan meningkatkan skor Anda."',
        color: 'var(--accent-orange)'
      };
    } else if (points > 0) {
      return {
        grade: 'C',
        rank: 'Perunggu',
        feedback: '"Anda mulai memahami etika jalan raya. Perbanyak latihan di skenario darurat untuk meningkatkan kewaspadaan refleks Anda."',
        color: 'var(--accent-red)'
      };
    } else {
      return {
        grade: 'N/A',
        rank: 'Pemula',
        feedback: '"Selesaikan Quiz atau Game AI untuk mendapatkan analisis perilaku berkendara Anda dari sistem AI ETHICAR."',
        color: '#64748b'
      };
    }
  }, [points]);
};
