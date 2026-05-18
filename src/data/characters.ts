export interface Character {
  id: string;
  name: string;
  role: string;
  vehicle: string;
  trait: string;
  icon: string;
}

export const characters: Character[] = [
  { 
    id: "andi",
    name: "Andi", 
    role: "Pelajar SMA", 
    vehicle: "Skuter", 
    trait: "Optimis namun impulsif", 
    icon: "🎒" 
  },
  { 
    id: "sita",
    name: "Sita", 
    role: "Mahasiswa", 
    vehicle: "Mobil Listrik", 
    trait: "Melek teknologi & ramah lingkungan", 
    icon: "💻" 
  },
  { 
    id: "budi",
    name: "Budi", 
    role: "Driver Online", 
    vehicle: "Sepeda Motor", 
    trait: "Efisien & terbiasa tekanan", 
    icon: "🛵" 
  },
  { 
    id: "maya",
    name: "Maya", 
    role: "Pengemudi Profesional", 
    vehicle: "SUV", 
    trait: "Tenang & defensif", 
    icon: "👔" 
  }
];
