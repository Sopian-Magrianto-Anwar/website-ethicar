export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  demoMessage: string;
}

export const features: Feature[] = [
  {
    id: "behavior-analysis",
    title: "Analisis Perilaku AI",
    description: "AI kami memantau gaya berkendara Anda secara real-time, mengidentifikasi apakah Anda agresif, disiplin, atau emosional.",
    icon: "🧠",
    color: "var(--primary-blue)",
    demoMessage: "AI Mendeteksi: Disiplin"
  },
  {
    id: "voice-assistant",
    title: "Asisten Suara AI",
    description: "Dapatkan panduan real-time dan peringatan keselamatan dari asisten virtual pribadi Anda.",
    icon: "🎙️",
    color: "var(--accent-cyan)",
    demoMessage: "Perhatian: Anda mendekati zona sekolah, harap kurangi kecepatan hingga 20km/jam."
  },
  {
    id: "adaptive-scenarios",
    title: "Skenario Adaptif",
    description: "Kota bereaksi terhadap tingkat keahlian Anda. Rasakan hujan realistis, kemacetan, dan situasi darurat.",
    icon: "🏙️",
    color: "var(--accent-yellow)",
    demoMessage: "" // Special handling for weather toggle
  }
];
