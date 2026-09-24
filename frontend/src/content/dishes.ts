import { menuItems, type MenuItem } from './menu';
import { dishesAnatomyList } from './dishesAnatomy';

interface DishNotes {
  story: string;
  ingredients: string[];
  serving: string;
}

export interface Dish extends DishNotes {
  slug: string;
  name: string;
  arabicName?: string;
  category: MenuItem['category'];
  description: string;
  image?: string;
  highlights: string[];
}

const notes: Record<string, DishNotes> = {
  'hummus-beiruti': {
    story: 'Len kikärtsröra möter tahinins nötighet och citronens friska syra. De rostade pinjenötterna bryter av med en varm, knaprig ton mot den krämiga basen.',
    ingredients: ['Kikärtor', 'Tahini', 'Citron & vitlök', 'Olivolja', 'Rostade pinjenötter'],
    serving: 'Dela som meze med varmt tunnbröd, tabbouleh och inlagda grönsaker.',
  },
  moutabal: {
    story: 'Den kolgrillade auberginen är rättens hjärta. Dess mjuka, rökiga karaktär rundas av med tahini, medan granatäppelsirapen ger ett syrligt djup.',
    ingredients: ['Kolgrillad aubergine', 'Tahini', 'Granatäppelsirap', 'Vitlök', 'Olivolja'],
    serving: 'Passar på mezebordet med tunnbröd och friska grönsaker, eller som tillbehör till grillat.',
  },
  tabbouleh: {
    story: 'Här får örterna ta mest plats. Finhackad persilja och mynta gör salladen lätt och aromatisk, med bulgur som ger lite tuggmotstånd och citron som lyfter tomaternas sötma.',
    ingredients: ['Bladpersilja', 'Tomat', 'Färsk mynta', 'Fin bulgur', 'Citron & olivolja'],
    serving: 'Ett friskt inslag bredvid hummus, falafel eller kolgrillade spett.',
  },
  fattoush: {
    story: 'Fattoush bygger på kontraster: saftiga grönsaker, syrlig sumak och frasiga bitar av tunnbröd. Granatäppelkärnorna ger små friska inslag i varje tugga.',
    ingredients: ['Salladsgrönsaker', 'Rädisor & gurka', 'Friterat tunnbröd', 'Sumak', 'Granatäppelkärnor'],
    serving: 'Njut gärna direkt när brödet fortfarande är krispigt. Passar till både meze och grillrätter.',
  },
  'kibbeh-kras': {
    story: 'Ett tunt skal av bulgur omsluter en fyllning av nötfärs och lök. Friteringen ger en krispig yta, medan pinjenötterna tillför textur till den saftiga kärnan.',
    ingredients: ['Bulgur', 'Kryddad nötfärs', 'Lök', 'Rostade pinjenötter'],
    serving: 'Servera varm som en del av mezen, gärna med en frisk sallad vid sidan.',
  },
  'sambousek-ost': {
    story: 'Tunna lager filodeg blir gyllene och frasiga runt den salta ostfyllningen. Myntan ger en frisk ton som balanserar halloumi och akkawi.',
    ingredients: ['Filodeg', 'Halloumi', 'Akkawi-ost', 'Färsk mynta'],
    serving: 'Godast varm när skalet är frasigt och osten mjuk. Dela som en liten förrätt eller varm meze.',
  },
  'falafel-platter': {
    story: 'Kikärtsbollar med krispig utsida och mjuk kärna. Den nötiga tahinisåsen och syrliga inläggningarna gör falafeln till en generös och balanserad mezerätt.',
    ingredients: ['Kikärtor', 'Färska örter', 'Tahinisås', 'Inlagda rovor'],
    serving: 'Kombinera med tabbouleh och hummus, eller njut i tunnbröd med inlagda grönsaker.',
  },
  'warak-enab': {
    story: 'Mjälla vinblad rullas kring en fyllning av ris, tomat och örter. Citron och olivolja ger rätten dess friska karaktär och låter de milda råvarorna komma fram.',
    ingredients: ['Vinblad', 'Ris', 'Tomat', 'Mynta', 'Citron & olivolja'],
    serving: 'Servera kylda eller rumstempererade med citron, som en del av ett generöst mezebord.',
  },
  'mix-grill-royal': {
    story: 'En samling av grillens olika uttryck: marinerad kyckling, kryddiga färsspett och lammkotlett. Grillade grönsaker och bröd fångar upp köttets safter och rökiga toner.',
    ingredients: ['Shish Taouk', 'Shish Kebab', 'Lammkotlett', 'Grillad tomat & lök', 'Biwaz-bröd'],
    serving: 'Serveras med saffransris eller pommes. Komplettera gärna med en frisk sallad och meze att dela.',
  },
  'shish-taouk': {
    story: 'Yoghurt, citron och vitlök ger kycklingen en frisk och fyllig smak. Grillens värme skapar en rostad yta som möter den krämiga, intensiva vitlökskrämen toum.',
    ingredients: ['Kycklingbröst', 'Yoghurt', 'Citron', 'Vitlök & kryddor', 'Toum'],
    serving: 'Njut med toum, tabbouleh och bröd för en balans mellan grillat, friskt och krämigt.',
  },
  'shish-kebab-halabi': {
    story: 'Nöt- och lammfärs formas till spett med persilja och Aleppo-kryddor. Över kolglöden får köttet en tydlig rostad karaktär, med grillad chili som ett smakrikt tillbehör.',
    ingredients: ['Nötfärs', 'Lammfärs', 'Aleppo-kryddor', 'Persilja', 'Grillad chili'],
    serving: 'Passar tillsammans med hummus, färsk sallad och bröd som fångar upp grillsmakerna.',
  },
  lammkotletter: {
    story: 'Lammets fylliga smak får sällskap av rosmarin, spiskummin och vitlök. Den heta glöden ger kotletterna en rostad yta och en aromatisk avslutning.',
    ingredients: ['Lammracks', 'Rosmarin', 'Spiskummin', 'Vitlök'],
    serving: 'Kombinera med tabbouleh eller fattoush för att balansera lammets rikedom med fräsch syra.',
  },
  'shawarma-arabia': {
    story: 'Shawarma Arabia serveras i munsbitar, med kryddat kött omslutet av saj-bröd. Vitlökskrämen binder samman smakerna och den inlagda gurkan tillför frisk syra.',
    ingredients: ['Kyckling- eller oxshawarma', 'Saj-bröd', 'Vitlökskräm', 'Inlagd gurka', 'Pommes'],
    serving: 'Serveras varm med krispiga pommes. Ett lättdelat alternativ till en avslappnad middag eller buffé.',
  },
  'damascene-fatteh': {
    story: 'Fatteh är en rätt i lager. Varma kikärtor och krispigt bröd täcks av en len tahini- och yoghurtkräm, med brynt smör och mandel som ger nötiga, rostade toner.',
    ingredients: ['Krispigt bröd', 'Kikärtor', 'Tahini & yoghurt', 'Brynt smör', 'Mandelspån'],
    serving: 'Njut varm medan brödet fortfarande har krispighet kvar under den krämiga såsen.',
  },
  'mansaf-lahmeh': {
    story: 'Långbakad lammlägg möter doftande ris och en fyllig jameed-sås. Rostade nötter tillför ett knaprigt inslag i en rätt som gärna får stå i centrum på festbordet.',
    ingredients: ['Lammlägg', 'Gult ris', 'Rostade nötter', 'Jameed-sås'],
    serving: 'Servera varm på ett generöst fat, med såsen bredvid eller ringlad över riset.',
  },
  'knafeh-nabulsieh': {
    story: 'Knafeh förenar ett krispigt lager kataifi med varm, smält ost. Apelsinblomssockerlagen ger en blommig sötma och pistagenötterna en nötig avslutning.',
    ingredients: ['Kataifi-deg', 'Ost', 'Apelsinblomssockerlag', 'Pistagenötter'],
    serving: 'Njut varm, gärna tillsammans med en liten kopp arabiskt kaffe.',
  },
  'baklava-assortment': {
    story: 'Flortunna filodegslager varvas med nötter och sirap. Varje bit kombinerar frasighet med pistaschens och cashewnötternas fylliga smak, avrundad med kardemumma.',
    ingredients: ['Filodeg', 'Pistaschnötter', 'Cashewnötter', 'Kardemummasirap'],
    serving: 'Dela efter maten med arabiskt kaffe eller ett glas färskt myntate.',
  },
  'halawet-el-jibn': {
    story: 'Mjuk ostdeg omsluter en len ashta-kräm. Rosenvatten och pistage ger de små rullarna en blommig, nötig ton utan att ta över den milda fyllningen.',
    ingredients: ['Ostdeg', 'Ashta', 'Rosenvatten', 'Pistage'],
    serving: 'Serveras kyld, gärna med arabiskt kardemummakaffe som kontrast till sötman.',
  },
  'arabiskt-kaffe': {
    story: 'Kaffet bryggs i en liten kopparkanna, en rakweh. Den gröna kardemumman ger en varm och aromatisk doft som gör kaffestunden till en fin avslutning på måltiden.',
    ingredients: ['Kaffe', 'Grön kardemumma'],
    serving: 'Njut i en liten kopp tillsammans med baklava eller halawet el jibn.',
  },
  myntate: {
    story: 'Färska myntablad får dra i svart te och ger en frisk doft. En enkel, varm dryck att samlas kring efter maten eller tillsammans med något sött.',
    ingredients: ['Svart te', 'Färska myntablad'],
    serving: 'Serveras varmt i kanna, gärna till en tallrik baklava att dela.',
  },
  ayran: {
    story: 'Yoghurtens milda syra möter en lätt sälta och torkad mynta. Resultatet är en svalkande dryck som passar särskilt väl till grillade och kryddiga smaker.',
    ingredients: ['Yoghurt', 'Havssalt', 'Torkad mynta'],
    serving: 'Serveras kall till shawarma, kebab eller en varm mezetallrik.',
  },
};

const anatomyIds: Record<string, string> = {
  'warak-enab': 'waraq-enab',
  'halawet-el-jibn': 'halawet-el-jibn',
};

export const dishes: Dish[] = menuItems.map((item) => {
  const anatomy = dishesAnatomyList.find((dish) => dish.id === anatomyIds[item.id]);
  return {
    slug: item.id,
    name: item.name,
    arabicName: item.arabicName,
    category: item.category,
    description: item.description,
    ...notes[item.id],
    image: anatomy?.image ?? item.image ?? (item.id === 'damascene-fatteh' ? '/media/Fattah-scroll3-poster.jpg' : undefined),
    highlights: anatomy?.highlights ?? item.tags ?? [],
  };
});

// These two signature dishes have their own recipes, distinct from the menu platter.
for (const id of ['shawarma', 'basha-w-asakro']) {
  const dish = dishesAnatomyList.find((item) => item.id === id)!;
  dishes.push({
    slug: dish.slug,
    name: dish.titleSv,
    arabicName: id === 'shawarma' ? 'شاورما دجاج' : 'باشا وعساكره',
    category: 'varmratter',
    description: dish.descriptionSv,
    story: id === 'shawarma'
      ? 'Kycklingen marineras i 24 timmar och möter tunnbröd som pressgrillas till en frasig yta. Hemgjord toum ger djup vitlökssmak, medan de inlagda gurkorna balanserar med frisk syra.'
      : 'Späda zucchinis gröps ur för hand och fylls med kryddad nötfärs. Tillsammans med shish barak-knyten sjuder de i yoghurt med vitlök och mynta, innan pinjenötter och brynt smör ger den sista rostade tonen.',
    ingredients: dish.ingredients.map((ingredient) => ingredient.nameSv),
    serving: dish.servingSuggestion,
    image: dish.image,
    highlights: dish.highlights,
  });
}

export const dishCategories = [
  { id: 'alla', name: 'Alla smaker' },
  { id: 'meze', name: 'Meze' },
  { id: 'grill', name: 'Från grillen' },
  { id: 'varmratter', name: 'Varmrätter' },
  { id: 'dessert', name: 'Något sött' },
  { id: 'drycker', name: 'I koppen & glaset' },
];

export const dishCategoryName = (category: Dish['category']) => dishCategories.find((item) => item.id === category)!.name;
