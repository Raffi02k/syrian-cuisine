export interface CateringPackage {
  id: string;
  name: string;
  nameAr: string;
  subtitle: string;
  pricePerPerson: number;
  minGuests: number;
  popular?: boolean;
  image: string;
  description: string;
  includedItems: string[];
  dishHighlight: string;
}

export interface CateringAddon {
  id: string;
  name: string;
  nameAr: string;
  pricePerPerson: number;
  description: string;
  popular?: boolean;
}

export const cateringPackages: CateringPackage[] = [
  {
    id: 'shawarma-buffet',
    name: 'Klassisk Shawarma-Festbuffé',
    nameAr: 'بوفيه الشاورما السورية الملكي',
    subtitle: 'Vår mest populära buffé för fester och födelsedagar',
    pricePerPerson: 175,
    minGuests: 15,
    popular: true,
    image: '/images/dish-shawarma.webp',
    description:
      'En fulländad shawarmabuffé där gästerna njuter av nygrillad saftig kycklingshawarma med alla klassiska tillbehör, hembakat syriskt tunnbröd och krämiga såser.',
    includedItems: [
      'Marinerad kycklingshawarma (24h ört- och kryddmarinad)',
      'Nybakat tunt syriskt tunnbröd',
      'Hemgjord äkta Toum (krämig vitlökskräm)',
      'Krispiga syrliga inlagda gurkor (pickles)',
      'Kryddade ugnsrostade klyftpotatisar eller vermicelliris',
      'Färsk levantinsk coleslaw & picklade rödbetor',
      'Röd orientalisk chilisås (mild/stark efter önskemål)',
    ],
    dishHighlight: 'Baserad på vår berömda shawarma-anatomi – garanterat saftigt och smakrikt.',
  },
  {
    id: 'basha-buffet',
    name: 'Kungliga Festbuffén (Basha W Asakro)',
    nameAr: 'بوفيه الملوك الشامي (باشا وعساكره)',
    subtitle: 'Exklusiva damaskenska paradrätter för fest & bröllop',
    pricePerPerson: 225,
    minGuests: 20,
    popular: true,
    image: '/images/dish-basha-w-asakro.webp',
    description:
      'En kunglig festmåltid för tillfällen då endast det bästa duger. Varma grytor och fyllda specialiteter sjudna i sammetslen sås, serverade med rika mezetillbehör.',
    includedItems: [
      'Basha W Asakro: Kousa (fylld späd zucchini med nötfärs) och Shish Barak-dumplings i varm sjuden yoghurtsås',
      'Toppas med gyllene rostade pinjenötter i brynt smör',
      'Doftande Vermicelliris (Ruz bi Sharieh)',
      'Fat med handrullade Yalanji-vinblad',
      'Krämig Tahinihummus med olivolja',
      'Fräsch Fattoush-sallad med krispigt sumakbröd och granatäppeldressing',
      'Nybakat bröd och inlagda grönsaker',
    ],
    dishHighlight: 'Vår mest eftertraktade traditionella varmrättsbuffé för högtider.',
  },
  {
    id: 'grand-celebration',
    name: 'Stora Högtids- & Bröllopsbuffén',
    nameAr: 'بوفيه الأعراس والمناسبات الكبرى',
    subtitle: 'Den ultimata festupplevelsen med både varmrätter & desserter',
    pricePerPerson: 265,
    minGuests: 25,
    image: '/images/dish-halawet-el-jibn.webp',
    description:
      'En storslagen helhetslösning för bröllop, förlovningar och stora jubileum. Inkluderar både grill, paradrätter, komplett mezetallrik och ett sagolikt dessertbord.',
    includedItems: [
      'Mix Grill: Saftiga Shish Taouk-spett och grillad kycklingshawarma',
      'Fylld zucchini och shish barak i vitlöksdoftande yoghurtsås',
      'Rik mezetallrik (Hummus, Yalanji, Tabbouleh, Mutabbal, Piroger)',
      'Gyllenrostat saffrans- och vermicelliris med mandel och pinjenötter',
      'Hemlagade såser: Toum, tahini och stark orientalisk salsa',
      'Dessertbuffé: Färsk Halawet El Jibn med ashta & pistage samt frasig Baklava',
      'Fruktfat med färska granatäpplen, vindruvor och mynta',
    ],
    dishHighlight: 'Komplett festcatering med varmhållning, uppläggning och dessertbord.',
  },
];

export const cateringAddons: CateringAddon[] = [
  {
    id: 'halawet-dessert',
    name: 'Dessertfat: Halawet El Jibn',
    nameAr: 'صحن حلاوة الجبن الحمصية بالقشطة',
    pricePerPerson: 35,
    description: 'Traditionella ost- och ashtarullar toppade med Aleppo-pistage och apelsinblomssirap.',
    popular: true,
  },
  {
    id: 'arabic-coffee-tea',
    name: 'Kardemummakaffe & Myntate',
    nameAr: 'قهوة عربية بالهيل وشاي بالنعناع',
    pricePerPerson: 20,
    description: 'Serveras i traditionella termosar/kannor med kardemumma och färsk mynta.',
  },
  {
    id: 'extra-grill',
    name: 'Extra Kolgrillade spett (Kebab & Shish)',
    nameAr: 'أسياخ كباب وشيش طاووق إضافية',
    pricePerPerson: 45,
    description: 'Extra grillat kött till buffén för extra hungriga sällskap.',
  },
];
