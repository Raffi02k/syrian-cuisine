export interface IngredientLayer {
  id: string;
  nameAr: string;
  nameSv: string;
  nameEn: string;
  descAr: string;
  descSv: string;
  role: string;
  icon?: string;
}

export interface DishAnatomy {
  id: string;
  slug: string;
  titleAr: string;
  titleSv: string;
  subtitleAr: string;
  subtitleSv: string;
  category: string;
  price: string;
  image: string;
  descriptionSv: string;
  descriptionAr: string;
  highlights: string[];
  tasteProfile: {
    savory: number;    // Fyllighet / Salt
    tangy: number;     // Syra
    spicy: number;     // Kryddighet / Djup
    sweet: number;     // Sötma
    crisp: number;     // Krispighet
  };
  ingredients: IngredientLayer[];
  allergens: string[];
  prepTime: string;
  servingSuggestion: string;
}

export const dishesAnatomyList: DishAnatomy[] = [
  {
    id: 'shawarma',
    slug: 'syrian-shawarma',
    titleAr: 'تشريح الشاورما السوري',
    titleSv: 'Syrisk Kycklingshawarma',
    subtitleAr: 'تفكيك أكلة شعبية بطعم سوري أصيل',
    subtitleSv: 'Anatomi av Syriens mest ikoniska street food',
    category: 'Varmrätter & Street Food',
    price: '139 kr',
    image: '/images/dish-shawarma.webp',
    descriptionSv:
      'Den äkta syriska shawarma-upplevelsen handlar om balansen mellan det tunna, grillpressade brödet, saftiga marinerade kycklingskivor, syrliga pickles och den oersättliga krämiga vitlökskrämen (toum).',
    descriptionAr:
      'الشاورما السورية الأصيلة هي توازن مثالي بين الخبز السوري الرقيق المحمص، وشرائح الدجاج المتبلة المشوية بنكهة الشواء، والمخلل المقرمش وكريم الثوم الفاخر.',
    highlights: [
      'Marinerad i 24 timmar med levantinska kryddor',
      'Pressgrillas för frasig yta och varm saftig kärna',
      'Hemgjord sammetslen Toum (vitlökskräm)',
    ],
    tasteProfile: {
      savory: 95,
      tangy: 75,
      spicy: 65,
      sweet: 10,
      crisp: 85,
    },
    ingredients: [
      {
        id: 'bread',
        nameAr: 'الخبز السوري الأبيض',
        nameSv: 'Vitt Syriskt Tunnbröd',
        nameEn: 'White Syrian Bread',
        descAr: 'الأساس الذي يلف المكونات ويحافظ على تماسك الشاورما ويمنحها طابعها السوري الفريد.',
        descSv: 'Det tunna, elastiska signaturbrödet som omsluter fyllningen, suger åt sig smakerna och blir krispigt vid grillning.',
        role: 'Bas & Krisp',
      },
      {
        id: 'chicken',
        nameAr: 'شرائح الدجاج المتبلة المشوية',
        nameSv: 'Grillade Marinerade Kycklingskivor',
        nameEn: 'Grilled Marinated Chicken Slices',
        descAr: 'قلب النكهة: دجاج متبل ومشوي يمنح الشاورما رائحة الشواء والعمق الاستثنائي.',
        descSv: 'Fint skivad kyckling marinerad i kardemumma, kryddpeppar, vitlök och citron, grillad över hög värme för rökig arom.',
        role: 'Smakhjärta & Protein',
      },
      {
        id: 'toum',
        nameAr: 'كريم الثوم (التومية)',
        nameSv: 'Krämig Vitlökskräm (Toum)',
        nameEn: 'Garlic Cream',
        descAr: 'اللمسة الكريمية التي ترفع النكهة وتربط المكونات بقوة وطعم لا يُقاوم.',
        descSv: 'Emulgerad traditionell vitlökssås som tillför intensiv krämighet, frisk skärpa och binder samman varje tugga.',
        role: 'Signatursås',
      },
      {
        id: 'pickles',
        nameAr: 'المخلل السوري المقرمش',
        nameSv: 'Syrliga Inlagda Gurkor',
        nameEn: 'Crispy Pickles',
        descAr: 'توازن الحموضة والقرمشة الذي يعطي الشاورما انتعاشها ولمعتها المميزة.',
        descSv: 'Små krispiga gurkor inlagda i saltlake och syra som balanserar kycklingens och vitlökens rikedom.',
        role: 'Syra & Balans',
      },
    ],
    allergens: ['Gluten (vitt bröd)', 'Ägg (i vissa såser)'],
    prepTime: 'Nytillagad på 5–8 minuter',
    servingSuggestion: 'Serveras rykande het med extra vitlökskräm och krispiga pommes frites.',
  },
  {
    id: 'waraq-enab',
    slug: 'syrian-waraq-enab',
    titleAr: 'تشريح ورق العنب السوري (يلنجي)',
    titleSv: 'Handrullade Vinbladsdolmar (Yalanji)',
    subtitleAr: 'تفكيك أسرار أشهر مقبلات سورية حامضة',
    subtitleSv: 'Anatomi av Levantens mest älskade syrliga meze',
    category: 'Meze & Förrätter',
    price: '119 kr',
    image: '/images/dish-waraq-enab.webp',
    descriptionSv:
      'Yalanji är det syriska kökets mästerverk bland vegetariska mezerätter. Mjälla vinblad fyllda med kortkornigt ris, örter och saftiga tomater, sakta sjudna i en generös lag av granatäppelsirap, citron och olivolja.',
    descriptionAr:
      'اليلنجي السوري الفاخر: حبات ورق العنب الغضة المحشوة بأطيب خلطة أرز وخضار طازجة والمطبوخة بهدوء في زيت الزيتون ودبس الرمان وعصير الليمون المنعش.',
    highlights: [
      '100% handrullade med kärlek och tålamod',
      'Generöst med genuin syrisk granatäppelmelass',
      'Serveras kylda eller rumstempererade',
    ],
    tasteProfile: {
      savory: 80,
      tangy: 95,
      spicy: 40,
      sweet: 50,
      crisp: 20,
    },
    ingredients: [
      {
        id: 'leaves',
        nameAr: 'ورقة العنب المسلوقة',
        nameSv: 'Mjälla Kokta Vinblad',
        nameEn: 'Boiled Grape Leaf',
        descAr: 'الغلاف الحامض والمرن الذي يحتضن الحشوة ويعطي الطبق هويته المميزة.',
        descSv: 'Tunt och spänstigt blad som varsamt kokats för att bli mjukt och behålla sin naturligt syrliga karaktär.',
        role: 'Omslutande Hölje',
      },
      {
        id: 'molasses-oil',
        nameAr: 'دبس الرمان وزيت الزيتون',
        nameSv: 'Granatäppelsirap & Extra Virgin Olivolja',
        nameEn: 'Pomegranate Molasses & Olive Oil',
        descAr: 'اللمسة السائلة الغنية التي تمنح الطبق لمعاناً وحموضة عميقة مميزة.',
        descSv: 'Kombinationen av tjock, syrlig granatäppelmelass och fruktig olivolja som ger dolmarna sin glans och djup.',
        role: 'Glans & Djup Syra',
      },
      {
        id: 'filling',
        nameAr: 'حشوة الأرز والخضروات (اليلنجي)',
        nameSv: 'Yalanji Ört- & Risfyllning',
        nameEn: 'Rice and Vegetable Filling',
        descAr: 'قلب النكهة: مزيج متجانس من الأرز القصير، الطماطم، البقدونس والنعناع.',
        descSv: 'Rundkornigt ris blandat med färsk persilja, torkad mynta, söta tomater, lök och en touch av levantinska kryddor.',
        role: 'Kärna & Textur',
      },
      {
        id: 'lemon',
        nameAr: 'شرائح الليمون الطازجة',
        nameSv: 'Färska Citronskivor',
        nameEn: 'Fresh Lemon Slices',
        descAr: 'تعزيز الانتعاش والحموضة الطازجة التي توازن النكهات الغنية والمطبوخة.',
        descSv: 'Citroner kokade tillsammans med dolmarna och garnerade på toppen för en krispig fräschör.',
        role: 'Friskhet & Arom',
      },
    ],
    allergens: ['Inga vanliga allergener (Vegansk, naturligt glutenfri)'],
    prepTime: 'Långkokad & långsamt kyld i 12 timmar',
    servingSuggestion: 'Serveras kyld garnerad med färska granatäppelkärnor och citronklyftor.',
  },
  {
    id: 'basha-w-asakro',
    slug: 'basha-w-asakro',
    titleAr: 'تشريح أكلة باشا وعساكره السورية',
    titleSv: 'Basha W Asakro (Pashans Festmåltid)',
    subtitleAr: 'تفكيك أكلة الملوك الشامية الأصلية',
    subtitleSv: 'Fylld zucchini & dumplings i varm kryddad yoghurtsås',
    category: 'Klassiska Varmrätter',
    price: '189 kr',
    image: '/images/dish-basha-w-asakro.webp',
    descriptionSv:
      'En kunglig damaskensk paradrätt. Späda zucchinis urgröpta och fyllda med finaste kryddad nötfärs, sjudna tillsammans med små shish barak-knyten i en varm, sammetslen yoghurtsås toppad med brynt smör och krispiga pinjenötter.',
    descriptionAr:
      'من أرقى وأعرق أكلات المطبخ الدمشقي: كوسا محشية باللحمة الصنوبرية مع الشيش برك في لبن مطبوخ كريمي غني بالثوم والنعناع ولمسة السمنة العربية الفواحة.',
    highlights: [
      'Kokt yoghurt med äkta mynta- och vitlöksbryning',
      'Späda handskalade och handurgröpta zucchinis',
      'Toppas med gyllene pinjenötter i skirat smör',
    ],
    tasteProfile: {
      savory: 95,
      tangy: 70,
      spicy: 50,
      sweet: 15,
      crisp: 60,
    },
    ingredients: [
      {
        id: 'zucchini',
        nameAr: 'الكوسا المحشية الفاخرة',
        nameSv: 'Fylld Späd Zucchini (Kousa)',
        nameEn: 'Stuffed Zucchini',
        descAr: 'الكوسا المحفورة والمحشية باللحم تشكل أساس الأكلة وروحها.',
        descSv: 'Små handurgröpta zucchinis fyllda med saftig färs som tillagas varsamt så de behåller sin form och mjuka sötma.',
        role: 'Bas & Kropp',
      },
      {
        id: 'yogurt-sauce',
        nameAr: 'اللبن المطبوخ الكثيف',
        nameSv: 'Varm Kokt Yoghurtsås',
        nameEn: 'Rich Cooked Yogurt Sauce',
        descAr: 'كمية وفيرة من اللبن المطبوخ الكثيف الذي يغمر الطبق ويغطي الكوسا بالكامل.',
        descSv: 'Krämig, silkeslen matlagningsyoghurt som varsamt värms med majsstärkelse och vitlök till perfekt såskonsistens.',
        role: 'Krämig Omfamning',
      },
      {
        id: 'meat',
        nameAr: 'اللحم المفروم المتبل',
        nameSv: 'Kryddad Nötfärs med Sju Kryddor',
        nameEn: 'Seasoned Minced Meat',
        descAr: 'حشوة غنية بالنكهة مطهوة مع بهارات شامية أصيلة.',
        descSv: 'Högkvalitativ nötfärs stekt med lök, kryddpeppar, kanel och muskot för djup värme.',
        role: 'Fyllning & Smakstyrka',
      },
      {
        id: 'nuts-butter',
        nameAr: 'المكسرات والسمنة البلدية',
        nameSv: 'Gyllene Pinjenötter & Skirat Smör',
        nameEn: 'Nuts and Butter',
        descAr: 'اللمسة النهائية من الصنوبر والسمنة العربية فوق اللبن لإضافة قرمشة لا مثيل لها.',
        descSv: 'Den avslutande touchen: brynt aromatiskt smör och gyllenrostade pinjenötter som hälls heta över tallriken.',
        role: 'Kronan på Verket',
      },
    ],
    allergens: ['Mjölk/Laktos (yoghurt, smör)', 'Nötter (pinjenötter)'],
    prepTime: 'Tillagas på traditionellt vis, ca 25 minuter',
    servingSuggestion: 'Serveras varm tillsammans med doftande vermicelliris (Ruz bi Sharieh).',
  },
  {
    id: 'halawet-el-jibn',
    slug: 'halawet-el-jibn',
    titleAr: 'تشريح حلاوة الجبن الحمصية',
    titleSv: 'Halawet El Jibn (Syrisk Ost- & Ashta-rulle)',
    subtitleAr: 'تفكيك حلوى حمصية محشية قشطة بالطريقة الأصلية',
    subtitleSv: 'Anatomi av Syriens mest eleganta sötsak',
    category: 'Desserter & Bakverk',
    price: '95 kr',
    image: '/images/dish-halawet-el-jibn.webp',
    descriptionSv:
      'En himmelsk efterrätt från den syriska staden Homs. Mjuk, elastisk deg av färskost och mannagryn rullas runt fyllig hemmagjord ashta (orientalisk gräddkräm), dränks i aromatisk sockerlag och kröns med pistaschnötter.',
    descriptionAr:
      'حلاوة الجبن الحمصية الفاخرة: رقائق عجينة الجبن والسميد الطرية المحشوة بالقشطة البلدية الطازجة والموشحة بقطر ماء الزهر والفستق الحلبي الأخضر.',
    highlights: [
      'Äkta recept från Homs med traditionell ostteknik',
      'Färsk handvispad Ashta med doft av mastik och apelsinblomma',
      'Generöst toppad med handplockade Aleppo-pistascher',
    ],
    tasteProfile: {
      savory: 20,
      tangy: 10,
      spicy: 0,
      sweet: 90,
      crisp: 50,
    },
    ingredients: [
      {
        id: 'cheese-dough',
        nameAr: 'عجينة الجبن البيضاء',
        nameSv: 'Mjuk Vit Ost- & Mannagrynsdeg',
        nameEn: 'White Cheese Dough',
        descAr: 'الطبقة الخارجية الناعمة المصنوعة من الجبن والسميد والتي تُلف على شكل رول متناسق.',
        descSv: 'En unik elastisk deg skapad av smält syrisk ost och fin mannagryn med en touch av sockerlag och rosenvatten.',
        role: 'Yttre Hölje',
      },
      {
        id: 'ashta',
        nameAr: 'القشطة البلدية المحشية',
        nameSv: 'Fyllig Hemlagad Ashta (Kräm)',
        nameEn: 'Cream Filling (Ashta)',
        descAr: 'الحشوة الكريمية الموجودة داخل الرول كما في الطريقة الحمصية الأصيلة.',
        descSv: 'Traditionell tjock orientalisk gräddkräm med len textur och subtil sötma som smälter i munnen.',
        role: 'Hjärtat i Desserten',
      },
      {
        id: 'pistachio',
        nameAr: 'الفستق الحلبي الأخضر',
        nameSv: 'Nymalda Aleppo-pistascher',
        nameEn: 'Aleppo Pistachios',
        descAr: 'رشة فستق حلبي مطحون ناعم للتزيين وللنكهة النهائية الفاخرة.',
        descSv: 'Färska knapriga pistaschnötter från norra Levanten som tillför nötig arom och en vacker smaragdgrön kontrast.',
        role: 'Garnering & Nötighet',
      },
      {
        id: 'syrup',
        nameAr: 'قطر السكر المعطر (الشيرة)',
        nameSv: 'Doftande Sockerlag (Qater)',
        nameEn: 'Aromatic Sugar Syrup',
        descAr: 'القطر الخفيف الذي يُسكب فوق الحلاوة لإبراز الطعم واللمعان الرائع.',
        descSv: 'Lätt sirap smaksatt med apelsinblomsvatten (Ma Zahr) som ringlas över vid servering för glans och sötma.',
        role: 'Glans & Sötma',
      },
    ],
    allergens: ['Mjölk/Laktos (ost, ashta)', 'Gluten (mannagryn)', 'Nötter (pistasch)'],
    prepTime: 'Serveras dagsfärsk och kyld',
    servingSuggestion: 'Njut tillsammans med en kopp starkt arabiskt kardemummakaffe.',
  },
];

export interface ChefProfile {
  name: string;
  nameAr: string;
  roleSv: string;
  roleAr: string;
  portrait: string;
  experience: string;
  storySv: string;
  storyAr: string;
  quoteSv: string;
  quoteAr: string;
  pillars: {
    titleSv: string;
    titleAr: string;
    descSv: string;
    descAr: string;
  }[];
}

export const chefProfile: ChefProfile = {
  name: 'Kock Nana',
  nameAr: 'الشيف نانا',
  roleSv: 'Grundare & Kulinarisk Mästare',
  roleAr: 'المؤسسة والماستر شيف وراء النكهات الأصيلة',
  portrait: '/images/chef-portrait.webp',
  experience: 'Över 20 års hantverk och passion för hemlagad syrisk matkonst',
  storySv:
    'Med hjärtat rotat i den levantinska mattraditionen skapar hon varje måltid från grunden med kärlek, precision och de allra finaste råvarorna. För henne är mat mer än bara näring – det är en bro mellan generationer, en kärleksförklaring till kulturen och en varm famn för varje gäst som sätter sig till bords.',
  storyAr:
    'بشغف متأصل في التراث المطبخي الشامي العريق، تقدم الشيف كل طبق بروح المحبة والدقة المتناهية وأفضل المكونات الطبيعية. الطعام بالنسبة لها ليس مجرد وجبة، بل هو جسر بين الأجيال ورسالة كرم وأصالة تجمع العائلة والأصدقاء.',
  quoteSv:
    '”När jag lagar mat vill jag att varje tugga ska väcka minnen av doftande gator i Damaskus och den oändliga värmen vid familjens middagsbord.”',
  quoteAr:
    '«عندما أطبخ، أسعى لأن تنقل كل لقمة ضيوفي إلى سحر حارات دمشق وعراقة بيوتها ودفء موائدها العائلية.»',
  pillars: [
    {
      titleSv: 'Äkta Råvaror',
      titleAr: 'مكونات أصيلة وطازجة',
      descSv: 'Handplockade levantinska kryddor, ren kallpressad olivolja och alltid färska örter.',
      descAr: 'بهارات شامية منتقاة بعناية، زيت زيتون بكر ممتاز وأعشاب طازجة يومياً.',
    },
    {
      titleSv: 'Handrullat & Hemlagat',
      titleAr: 'شغل يدوي وحب منزلي',
      descSv: 'Varje dolme, varje ostknyte och varje sås tillagas långsamt från grunden utan genvägar.',
      descAr: 'كل حبة ورق عنب وكل رول حلاوة جبن يُصنع يدوياً بالكامل بحرفية عالية.',
    },
    {
      titleSv: 'Catering & Festligheter',
      titleAr: 'تلبية المناسبات والعزائم',
      descSv: 'Specialbeställningar för bröllop, födelsedagar, dop och företagsevent med rika bufféer.',
      descAr: 'بوفيهات فاخرة تناسب كافة الحفلات والمناسبات بأعلى معايير التقديم والنظافة.',
    },
  ],
};
