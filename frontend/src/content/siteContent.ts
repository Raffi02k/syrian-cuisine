export interface SiteContent {
  companyName: string;
  tagline: string;
  description: string;
  city: string;
  serviceArea: string;
  address: string;
  postalCode: string;
  country: string;
  phone: string;
  phoneRaw: string;
  email: string;
  openingHours: {
    weekdays: string;
    weekends: string;
    kitchenCloses: string;
  };
  navigation: Array<{ name: string; path: string }>;
  socialLinks: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };
  mapUrl: string;
  mapEmbedUrl: string;
  landmarkText: string;
}

export const siteContent: SiteContent = {
  companyName: 'Syrian Cuisine Catering',
  tagline: 'Autentisk Syrisk Festmat & Catering i Trollhättan',
  description:
    'Exklusiv syrisk catering och festbufféer för bröllop, födelsedagar, dop och företagsevent i Trollhättan och Trestad. Handrullad meze, saftig shawarma och paradrätter lagade från grunden.',
  city: 'Trollhättan',
  serviceArea: 'Trollhättan, Vänersborg, Uddevalla & hela Trestad',
  address: 'Trollhättan',
  postalCode: '461 30 Trollhättan',
  country: 'Sverige',
  phone: '0520-123 45',
  phoneRaw: '+4652012345',
  email: 'catering@syrian-cuisine.se',
  openingHours: {
    weekdays: 'Telefontid: Mån – Fre: 09:00 – 19:00',
    weekends: 'Lör – Sön: 10:00 – 18:00 (Catering levereras alla dagar)',
    kitchenCloses: 'Beställningar tas emot med minst 2 dagars framförhållning',
  },
  navigation: [
    { name: 'Startsida', path: '/' },
    { name: 'Cateringpaket', path: '/meny' },
    { name: 'Om Kocken & Oss', path: '/om-oss' },
    { name: 'Galleri', path: '/galleri' },
  ],
  socialLinks: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    tiktok: 'https://tiktok.com',
  },
  mapUrl: 'https://maps.google.com/?q=Trollh%C3%A4ttan',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Trollh%C3%A4ttan&t=m&z=13&ie=UTF8&iwloc=&output=embed',
  landmarkText:
    'Baserade i Trollhättan med snabb leverans och varmhållning till Trollhättan, Vänersborg, Uddevalla och närliggande orter.',
};
