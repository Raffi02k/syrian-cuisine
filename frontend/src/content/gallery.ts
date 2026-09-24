export interface GalleryItem {
  id: string;
  title: string;
  category: 'Mat' | 'Kolgrill' | 'Atmosfär' | 'Desserter' | 'Mat-Anatomi';
  description: string;
  imageUrl: string;
  dishSlug?: string;
  ratio?: 'square' | 'portrait' | 'landscape';
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-anatomy-1',
    dishSlug: 'syrian-shawarma',
    title: 'تشريح الشاورما السوري – Shawarma Anatomi',
    category: 'Mat-Anatomi',
    description: 'Tunt bröd, grillad kyckling, hemmagjord toum och krispig inlagd gurka.',
    imageUrl: '/images/dish-shawarma.webp',
    ratio: 'portrait',
  },
  {
    id: 'gal-anatomy-2',
    dishSlug: 'warak-enab',
    title: 'تشريح ورق العنب السوري – Waraq Enab (Yalanji)',
    category: 'Mat-Anatomi',
    description: 'Syrliga vinblad, granatäppelsirap, olivolja och fyllning av ris & örter.',
    imageUrl: '/images/dish-waraq-enab.webp',
    ratio: 'portrait',
  },
  {
    id: 'gal-anatomy-3',
    dishSlug: 'basha-w-asakro',
    title: 'تشريح أكلة باشا وعساكره – Basha W Asakro',
    category: 'Mat-Anatomi',
    description: 'Fylld zucchini och shish barak i varm, sammetslen yoghurtsås med pinjenötter.',
    imageUrl: '/images/dish-basha-w-asakro.webp',
    ratio: 'portrait',
  },
  {
    id: 'gal-anatomy-4',
    dishSlug: 'halawet-el-jibn',
    title: 'تشريح حلاوة الجبن الحمصية – Halawet El Jibn',
    category: 'Desserter',
    description: 'Mjuk söt ostdeg rullad med färsk ashta, pistaschnötter och apelsinblomsirap.',
    imageUrl: '/images/dish-halawet-el-jibn.webp',
    ratio: 'portrait',
  },
  {
    id: 'gal-1',
    dishSlug: 'mix-grill-royal',
    title: 'Autentisk Mix Grill över öppen glöd',
    category: 'Kolgrill',
    description: 'Våra marinader och kryddor skapar den karakteristiska röksmaken.',
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    ratio: 'landscape',
  },
  {
    id: 'gal-2',
    dishSlug: 'hummus-beiruti',
    title: 'Klassisk Meze & Krämig Hummus',
    category: 'Mat',
    description: 'Handplockade kikärtor, tahini och jungfruolivolja garnerad med mynta.',
    imageUrl: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=800&q=80',
    ratio: 'square',
  },
  {
    id: 'gal-3',
    dishSlug: 'knafeh-nabulsieh',
    title: 'Varm Knafeh med Smält Ost & Pistasch',
    category: 'Desserter',
    description: 'Doftande apelsinblomssirap och krispig kataifibotten.',
    imageUrl: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80',
    ratio: 'portrait',
  },
  {
    id: 'gal-6',
    dishSlug: 'arabiskt-kaffe',
    title: 'Arabiskt Kaffe bryggt i traditionell Rakweh',
    category: 'Atmosfär',
    description: 'Kardemummadoftande kaffe serverat med tradition.',
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    ratio: 'portrait',
  },
];
