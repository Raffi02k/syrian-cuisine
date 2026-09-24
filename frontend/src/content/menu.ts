export interface MenuItem {
  id: string;
  name: string;
  arabicName?: string;
  description: string;
  price: string;
  category: 'meze' | 'grill' | 'varmratter' | 'dessert' | 'drycker';
  tags?: string[];
  isPopular?: boolean;
  image?: string;
}

export const menuCategories = [
  { id: 'alla', name: 'Hela Menyn' },
  { id: 'meze', name: 'Kalla & Varma Meze' },
  { id: 'grill', name: 'Kolgrillat (Mashawi)' },
  { id: 'varmratter', name: 'Traditionella Varmrätter' },
  { id: 'dessert', name: 'Desserter & Bakverk' },
  { id: 'drycker', name: 'Drycker & Kaffe' },
];

export const menuItems: MenuItem[] = [
  // Meze
  {
    id: 'hummus-beiruti',
    name: 'Hummus med Rostat Pinjenötter',
    arabicName: 'حمص بالصنوبر',
    description: 'Krämig kikärtsröra med tahini, färskpressad citron, vitlök, olivolja och rostade pinjenötter.',
    price: '79 kr',
    category: 'meze',
    tags: ['Vegansk', 'Nötter'],
    isPopular: true,
  },
  {
    id: 'moutabal',
    name: 'Moutabal / Baba Ganoush',
    arabicName: 'متبل باذنجان',
    description: 'Kolgrillad auberginieröra smaksatt med tahini, granatäppelsirap, vitlök och kallpressad olivolja.',
    price: '85 kr',
    category: 'meze',
    tags: ['Vegetarisk'],
    isPopular: true,
  },
  {
    id: 'tabbouleh',
    name: 'Klassisk Tabbouleh',
    arabicName: 'تبولة سورية',
    description: 'Finhackad bladpersilja, solmogna tomater, färsk mynta, fin bulgur, citronjuice och jungfruolivolja.',
    price: '89 kr',
    category: 'meze',
    tags: ['Vegansk', 'Fräsch'],
    isPopular: true,
  },
  {
    id: 'fattoush',
    name: 'Fattoush med Sumak & Granatäpple',
    arabicName: 'فتوش مقرمش',
    description: 'Krispig trädgårdssallad med friterat libanesiskt tunnbröd, rädisor, gurka, sumak och granatäppelkärnor.',
    price: '89 kr',
    category: 'meze',
    tags: ['Vegansk', 'Krispig'],
  },
  {
    id: 'kibbeh-kras',
    name: 'Kibbeh Kras (3 st)',
    arabicName: 'كبة مقلية',
    description: 'Friterade bulgurskal fyllda med saftig kryddad nötfärs, lök och rostade pinjenötter.',
    price: '95 kr',
    category: 'meze',
    tags: ['Favorit', 'Nötkött'],
    isPopular: true,
  },
  {
    id: 'sambousek-ost',
    name: 'Sambousek Jibneh (4 st)',
    arabicName: 'سمبوسك جبنة',
    description: 'Frasiga filodegspiroger fyllda med kryddad halloumi, akkawi-ost och färsk mynta.',
    price: '85 kr',
    category: 'meze',
    tags: ['Vegetarisk'],
  },
  {
    id: 'falafel-platter',
    name: 'Syrisk Falafel (5 st)',
    arabicName: 'فلافل شامية',
    description: 'Nystekta krispiga kikärtsbollar serverade med tahinisås, inlagda rovor och färska örter.',
    price: '79 kr',
    category: 'meze',
    tags: ['Vegansk', 'Glutenfri bas'],
  },
  {
    id: 'warak-enab',
    name: 'Warak Enab (Vinbladsdolmar)',
    arabicName: 'ورق عنب بالزيت',
    description: 'Handrullade vinblad fyllda med ris, tomater, mynta och syrlig citron-olivoljedressing.',
    price: '85 kr',
    category: 'meze',
    tags: ['Vegansk'],
  },

  // Kolgrillat
  {
    id: 'mix-grill-royal',
    name: 'Syrian Mix Grill Royal',
    arabicName: 'مشاوي مشكلة ملكية',
    description: 'Kombination av Shish Taouk, Shish Kebab och lammkotlett. Serveras med grillad tomat, lök, biwaz-bröd och saffransris eller pommes.',
    price: '259 kr',
    category: 'grill',
    tags: ['Kockens Rekommendation', 'Grillat'],
    isPopular: true,
  },
  {
    id: 'shish-taouk',
    name: 'Shish Taouk (Kycklingspett)',
    arabicName: 'شيش طاووق',
    description: 'Kycklingbröst marinerat i vitlök, citron, libanesisk yoghurt och orientaliska kryddor. Serveras med toum (vitlökskräm).',
    price: '195 kr',
    category: 'grill',
    tags: ['Populär', 'Kolgrill'],
    isPopular: true,
  },
  {
    id: 'shish-kebab-halabi',
    name: 'Shish Kebab Halabi',
    arabicName: 'كباب حلبي مشوي',
    description: 'Kolgrillade spett på nött- och lammfärs med Aleppo-kryddor, persilja och grillad chili.',
    price: '210 kr',
    category: 'grill',
    tags: ['Traditionell', 'Kolgrill'],
  },
  {
    id: 'lammkotletter',
    name: 'Örtmarinerade Lammkotletter',
    arabicName: 'ريش غنم متبلة',
    description: 'Möra lammracks marinerade i rosmarin, spiskummin och vitlök. Grillade över het glöd.',
    price: '265 kr',
    category: 'grill',
    tags: ['Premium'],
  },

  // Varmrätter
  {
    id: 'shawarma-arabia',
    name: 'Shawarma Arabia Platter',
    arabicName: 'وجبة شاورما عربي',
    description: 'Skivad kryddad kyckling- eller oxshawarma rullad i saj-bröd med vitlökskräm och inlagd gurka. Skuren i munsbitar med krispiga pommes.',
    price: '179 kr',
    category: 'varmratter',
    tags: ['Bästsäljare'],
    isPopular: true,
  },
  {
    id: 'damascene-fatteh',
    name: 'Fatteh Bil-Laban',
    arabicName: 'فتة حمص باللبن',
    description: 'Traditionell syrisk comfort food med krispigt bröd, varma kikärtor, tahini-yoghurtkräm, brynt smör och mandelspån.',
    price: '165 kr',
    category: 'varmratter',
    tags: ['Vegetarisk', 'Klassiker'],
  },
  {
    id: 'mansaf-lahmeh',
    name: 'Mansaf med Långkokt Lamm',
    arabicName: 'منسف باللحم البلدي',
    description: 'Långbakad lammlägg på en bädd av doftande gult ris, toppad med rostade nötter och serverad med silkeslen jameed-sås.',
    price: '249 kr',
    category: 'varmratter',
    tags: ['Festmåltid'],
  },

  // Desserter
  {
    id: 'knafeh-nabulsieh',
    name: 'Knafeh med Varm Ost & Pistage',
    arabicName: 'كنافة نابلسية بالجبن',
    description: 'Krispig kataifi-deg fylld med varm smält ost, dränkt i apelsinblomsockerlag och rikligt toppad med nymalda pistagenötter.',
    price: '95 kr',
    category: 'dessert',
    tags: ['Husets Specialitet'],
    isPopular: true,
  },
  {
    id: 'baklava-assortment',
    name: 'Lyxig Baklavatallrik (4 st)',
    arabicName: 'تشكيلة بقلاوة شامية',
    description: 'Flortunna filodegslager fyllda med pistasch, cashewnötter och kardemummasirap.',
    price: '79 kr',
    category: 'dessert',
    tags: ['Nötter', 'Sött'],
  },
  {
    id: 'halawet-el-jibn',
    name: 'Halawet el Jibn (3 st)',
    arabicName: 'حلاوة الجبن الحمصية',
    description: 'Söta ostrullar fyllda med ashta (gräddkräm), droppar av rosenvatten och pistage.',
    price: '89 kr',
    category: 'dessert',
    tags: ['Krämig', 'Delikatess'],
  },

  // Drycker
  {
    id: 'arabiskt-kaffe',
    name: 'Arabiskt Kaffe med Kardemumma',
    arabicName: 'قهوة عربية بالهيل',
    description: 'Traditionellt bryggt i kopparkanna (Rakweh) med krossad grön kardemumma.',
    price: '42 kr',
    category: 'drycker',
  },
  {
    id: 'myntate',
    name: 'Färskt Myntate i Kanna',
    arabicName: 'شاي بالنعناع الطازج',
    description: 'Svart te infuserat med färska myntablad.',
    price: '49 kr',
    category: 'drycker',
  },
  {
    id: 'ayran',
    name: 'Hemlagad Ayran',
    arabicName: 'عيران منعش',
    description: 'Klassisk svalkande yoghurtdryck med en gnutta havssalt och torkad mynta.',
    price: '38 kr',
    category: 'drycker',
  },
];
