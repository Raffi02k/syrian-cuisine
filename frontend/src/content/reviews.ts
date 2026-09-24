export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  date: string;
  text: string;
  source: 'Google' | 'TripAdvisor' | 'Demo';
  dishMentioned?: string;
}

export const reviewsData: {
  averageRating: number;
  totalReviews: number;
  reviews: ReviewItem[];
} = {
  averageRating: 4.9,
  totalReviews: 148,
  reviews: [
    {
      id: 'rev-1',
      name: 'Samir Al-Mansoor',
      rating: 5,
      date: 'För 2 veckor sedan',
      text: 'Bästa syriska maten i stan utan tvekan! Hummusen är silkeslen och deras Shish Taouk är så saftig att den smälter i munnen. Fantastisk service och underbar orientalisk atmosfär.',
      source: 'Google',
      dishMentioned: 'Shish Taouk & Hummus',
    },
    {
      id: 'rev-2',
      name: 'Elin Lindqvist',
      rating: 5,
      date: 'För en månad sedan',
      text: 'Vi tog en stor meze-bricka för 4 personer och allt var helt magiskt gott. Fräsch tabbouleh och den varma knafehn till efterrätt var en tiopoängare!',
      source: 'Google',
      dishMentioned: 'Meze & Knafeh',
    },
    {
      id: 'rev-3',
      name: 'Marcus Bergström',
      rating: 5,
      date: 'För 3 veckor sedan',
      text: 'Äkta kolgrillad smak. Man känner verkligen skillnaden när köttet grillas över riktig glöd. Mycket prisvärt och otroligt trevlig personal.',
      source: 'Google',
      dishMentioned: 'Mix Grill Royal',
    },
    {
      id: 'rev-4',
      name: 'Layla K.',
      rating: 5,
      date: 'För 2 månader sedan',
      text: 'Påminner mig om maten hemma i Damaskus. Kryddorna, den hembakta brödet och det arabiska kaffet i slutet gjorde hela kvällen perfekt.',
      source: 'Google',
      dishMentioned: 'Damascene Fatteh',
    },
    {
      id: 'rev-5',
      name: 'Johan & Sara',
      rating: 5,
      date: 'För en månad sedan',
      text: 'Vi firade vår bröllopsdag här. Personalen uppmärksammade det och gav oss en fantastisk upplevelse. Rekommenderar starkt att boka bord i förväg!',
      source: 'Google',
      dishMentioned: 'Bordsbokning',
    },
  ],
};
