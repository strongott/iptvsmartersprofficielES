
export interface Channel {
  id: number;
  name: string;
  category: string;
  country: string;
  flag: string;
}

export const CATEGORIES = [
  "Tout",
  "Sport",
  "Cinéma",
  "Divertissement",
  "Actualités",
  "Musique",
  "Enfants",
  "Documentaires",
  "4K / Ultra HD"
];

// Helper to generate a flag emoji from country code
const getFlag = (countryCode: string) => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

export const CHANNELS: Channel[] = [
  // Sport
  { id: 1, name: "beIN Sports 1 HD", category: "Sport", country: "FR", flag: getFlag("FR") },
  { id: 2, name: "Canal+ Sport 4K", category: "Sport", country: "FR", flag: getFlag("FR") },
  { id: 3, name: "Eurosport 1", category: "Sport", country: "EU", flag: "🇪🇺" },
  { id: 4, name: "Sky Sports Main Event", category: "Sport", country: "UK", flag: getFlag("GB") },
  { id: 5, name: "RMC Sport 1", category: "Sport", country: "FR", flag: getFlag("FR") },
  
  // Cinéma
  { id: 6, name: "Canal+ Cinéma", category: "Cinéma", country: "FR", flag: getFlag("FR") },
  { id: 7, name: "HBO HD", category: "Cinéma", country: "US", flag: getFlag("US") },
  { id: 8, name: "Ciné+ Premier", category: "Cinéma", country: "FR", flag: getFlag("FR") },
  { id: 9, name: "Sky Cinema Action", category: "Cinéma", country: "UK", flag: getFlag("GB") },
  { id: 10, name: "Netflix UHD (Simulcast)", category: "Cinéma", country: "INT", flag: "🌐" },

  // Divertissement
  { id: 11, name: "TF1 4K", category: "Divertissement", country: "FR", flag: getFlag("FR") },
  { id: 12, name: "M6 HD", category: "Divertissement", country: "FR", flag: getFlag("FR") },
  { id: 13, name: "W9", category: "Divertissement", country: "FR", flag: getFlag("FR") },
  { id: 14, name: "BBC One", category: "Divertissement", country: "UK", flag: getFlag("GB") },
  { id: 15, name: "ABC HD", category: "Divertissement", country: "US", flag: getFlag("US") },

  // Actualités
  { id: 16, name: "BFM TV", category: "Actualités", country: "FR", flag: getFlag("FR") },
  { id: 17, name: "CNews", category: "Actualités", country: "FR", flag: getFlag("FR") },
  { id: 18, name: "CNN International", category: "Actualités", country: "US", flag: getFlag("US") },
  { id: 19, name: "BBC World News", category: "Actualités", country: "UK", flag: getFlag("GB") },
  { id: 20, name: "Al Jazeera English", category: "Actualités", country: "QA", flag: getFlag("QA") },

  // Musique
  { id: 21, name: "MTV Hits", category: "Musique", country: "US", flag: getFlag("US") },
  { id: 22, name: "NRJ Hits", category: "Musique", country: "FR", flag: getFlag("FR") },
  { id: 23, name: "Trace Urban", category: "Musique", country: "FR", flag: getFlag("FR") },
  { id: 24, name: "Mezzo Live HD", category: "Musique", country: "FR", flag: getFlag("FR") },
  { id: 25, name: "VH1 Classic", category: "Musique", country: "US", flag: getFlag("US") },

  // Enfants
  { id: 26, name: "Disney Channel", category: "Enfants", country: "FR", flag: getFlag("FR") },
  { id: 27, name: "Nickelodeon", category: "Enfants", country: "US", flag: getFlag("US") },
  { id: 28, name: "Cartoon Network", category: "Enfants", country: "US", flag: getFlag("US") },
  { id: 29, name: "Gulli", category: "Enfants", country: "FR", flag: getFlag("FR") },
  { id: 30, name: "TiJi", category: "Enfants", country: "FR", flag: getFlag("FR") },

  // Documentaires
  { id: 31, name: "National Geographic 4K", category: "Documentaires", country: "US", flag: getFlag("US") },
  { id: 32, name: "Discovery Channel HD", category: "Documentaires", country: "US", flag: getFlag("US") },
  { id: 33, name: "Animal Planet", category: "Documentaires", country: "UK", flag: getFlag("GB") },
  { id: 34, name: "Planète+", category: "Documentaires", country: "FR", flag: getFlag("FR") },
  { id: 35, name: "Ushuaïa TV", category: "Documentaires", country: "FR", flag: getFlag("FR") },

  // Add more to show pagination
  ...Array.from({ length: 150 }, (_, i) => ({
    id: 36 + i,
    name: `Chaîne de Test ${36 + i}`,
    category: CATEGORIES[Math.floor(Math.random() * (CATEGORIES.length - 1)) + 1],
    country: "FR",
    flag: getFlag("FR")
  }))
];
