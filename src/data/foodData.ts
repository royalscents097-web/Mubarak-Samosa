import heroSamosasImg from '../assets/images/hero_samosas_1789570051665.jpg';
import chickenSamosaImg from '../assets/images/chicken_samosa_1789570068908.jpg';
import alooSamosaImg from '../assets/images/aloo_samosa_1789570080900.jpg';
import vegSamosaImg from '../assets/images/veg_samosa_1789570184753.jpg';
import pakoraPlatterImg from '../assets/images/pakora_platter_1789570094018.jpg';
import springRollsImg from '../assets/images/spring_rolls_1789570130859.jpg';
import specialChaatImg from '../assets/images/special_chaat_1789570113056.jpg';
import chutneyBowlsImg from '../assets/images/chutney_bowls_1789570171224.jpg';
import chaiSnacksImg from '../assets/images/chai_snacks_1789570143106.jpg';
import shopAtmosphereImg from '../assets/images/shop_atmosphere_1789570157142.jpg';

import { MenuItem, GalleryItem, Review, FAQ } from '../types';

export const BUSINESS_INFO = {
  name: 'Mubarak Samosa',
  tagline: 'Fresh. Crispy. Delicious.',
  subtitle: 'Samosa & Snacks',
  location: 'Gomal Bazar, District Tank',
  primaryPhone: '03111111111',
  altPhone: '03111111111',
  cuisine: 'Authentic Pakistani Samosas & Snacks',
  year: 2026,
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'chicken-samosa',
    name: 'Chicken Samosa',
    urduName: 'چکن سموسہ',
    category: 'samosas',
    description: 'Crispy golden pastry filled with flavorful chicken and aromatic spices.',
    price: 80,
    badge: 'Popular Favorite',
    image: chickenSamosaImg,
    altText: 'Fresh golden chicken samosas served with aromatic spices and chutney',
    spiceLevel: 'Medium',
  },
  {
    id: 'aloo-samosa',
    name: 'Aloo Samosa',
    urduName: 'آلو سموسہ',
    category: 'samosas',
    description: 'Classic potato samosa with a perfectly crisp shell and flavorful filling.',
    price: 40,
    badge: 'Classic Favorite',
    image: alooSamosaImg,
    altText: 'Crispy Pakistani aloo samosa with perfectly flaky golden crust and tamarind chutney',
    spiceLevel: 'Medium',
  },
  {
    id: 'vegetable-samosa',
    name: 'Vegetable Samosa',
    urduName: 'سبزی سموسہ',
    category: 'samosas',
    description: 'A delicious combination of vegetables and traditional spices.',
    price: 50,
    badge: 'Fresh Daily',
    image: vegSamosaImg,
    altText: 'Golden vegetable samosa filled with spiced potatoes and seasonal herbs',
    spiceLevel: 'Mild',
  },
  {
    id: 'pakora',
    name: 'Pakora',
    urduName: 'پکوڑے',
    category: 'snacks',
    description: 'Crispy, flavorful Pakistani-style fritters served hot.',
    price: 120,
    badge: 'Hot & Crunchy',
    image: pakoraPlatterImg,
    altText: 'Freshly prepared crispy Pakistani pakoras served with dipping sauce',
    spiceLevel: 'Medium',
  },
  {
    id: 'spring-roll',
    name: 'Spring Roll',
    urduName: 'اسپرنگ رول',
    category: 'snacks',
    description: 'Crispy rolls with a savory filling, perfect with chutney.',
    price: 70,
    badge: 'Crispy Roll',
    image: springRollsImg,
    altText: 'Crispy savory fried spring rolls served with homemade sweet chili chutney',
    spiceLevel: 'Mild',
  },
  {
    id: 'chaat',
    name: 'Special Samosa Chaat',
    urduName: 'سموسہ چاٹ',
    category: 'chaat',
    description: 'Fresh, spicy, tangy, and packed with classic Pakistani flavors.',
    price: 130,
    badge: 'House Specialty',
    image: specialChaatImg,
    altText: 'Pakistani samosa chaat with spiced chickpeas, yogurt, and tamarind chutney',
    spiceLevel: 'Zesty',
  },
  {
    id: 'special-chutneys',
    name: 'Duo Chutney Plate',
    urduName: 'چٹنی پلیٹ',
    category: 'snacks',
    description: 'Fresh mint coriander green chutney & sweet tangy imli tamarind dip.',
    price: 30,
    badge: 'Side Dip',
    image: chutneyBowlsImg,
    altText: 'Homemade fresh mint cilantro and sweet tamarind chutneys in traditional bowls',
    spiceLevel: 'Zesty',
  },
  {
    id: 'karak-chai',
    name: 'Karak Doodh Patti Chai',
    urduName: 'کڑک چائے',
    category: 'drinks',
    description: 'Rich, slow-brewed cardamom tea, the ideal companion to hot samosas.',
    price: 60,
    badge: 'Perfect Pair',
    image: chaiSnacksImg,
    altText: 'Traditional Pakistani Karak Doodh Patti chai in glass cup with hot snacks',
    spiceLevel: 'Mild',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Golden Samosas on Plate',
    category: 'Samosas',
    image: heroSamosasImg,
    altText: 'Fresh golden samosas served on a traditional plate with fresh chutneys',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 'gal-2',
    title: 'Crisp Aloo Samosa',
    category: 'Specialties',
    image: alooSamosaImg,
    altText: 'Close-up crispy samosa with golden-brown flaky crust',
  },
  {
    id: 'gal-3',
    title: 'Fresh Dipping Chutneys',
    category: 'Chutneys',
    image: chutneyBowlsImg,
    altText: 'Fresh green mint chutney and tangy sweet tamarind chutney',
  },
  {
    id: 'gal-4',
    title: 'Hot Vegetable Pakoras',
    category: 'Snacks',
    image: pakoraPlatterImg,
    altText: 'Crispy piping hot vegetable pakoras straight from the kadai',
  },
  {
    id: 'gal-5',
    title: 'Crispy Golden Spring Rolls',
    category: 'Snacks',
    image: springRollsImg,
    altText: 'Crunchy savory vegetable spring rolls with dipping sauce',
  },
  {
    id: 'gal-6',
    title: 'Tangy Samosa Chaat Platter',
    category: 'Chaat',
    image: specialChaatImg,
    altText: 'Loaded samosa chaat with chickpeas, yogurt, and zesty spices',
    span: 'md:col-span-2',
  },
  {
    id: 'gal-7',
    title: 'Karak Chai & Hot Snacks',
    category: 'Pairings',
    image: chaiSnacksImg,
    altText: 'Steaming hot Karak Chai paired with crunchy evening snacks',
  },
  {
    id: 'gal-8',
    title: 'Gomal Bazar Shop Atmosphere',
    category: 'Atmosphere',
    image: shopAtmosphereImg,
    altText: 'Warm welcoming local Pakistani snack shop counter at Gomal Bazar',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    quote: 'Crispy, hot, and full of flavor. Exactly what you want when you’re craving a good samosa.',
    author: 'Customer Review',
    rating: 5,
    highlight: 'Unbeatable Crispiness',
  },
  {
    id: 'rev-2',
    quote: 'The perfect evening snack with chutney. Fresh and delicious.',
    author: 'Customer Review',
    rating: 5,
    highlight: 'Authentic Flavor & Fresh Chutney',
  },
  {
    id: 'rev-3',
    quote: 'Great taste and a satisfying crunch. Definitely worth trying.',
    author: 'Customer Review',
    rating: 5,
    highlight: 'Generous Flavor & Crunch',
  },
];

export const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    question: 'What types of samosas do you offer?',
    answer: 'We freshly prepare our classic Aloo Samosa (potato filling with traditional spices), Chicken Samosa (savory minced chicken with herbs), and Vegetable Samosa (spiced potato, peas, and vegetable medley), all wrapped in our signature crispy, golden pastry crust.',
  },
  {
    id: 'faq-2',
    question: 'Are the snacks prepared fresh?',
    answer: 'Yes! Everything is fried fresh daily in batches to ensure maximum crispiness, authentic aroma, and piping hot quality for every order.',
  },
  {
    id: 'faq-3',
    question: 'Can I order by phone?',
    answer: 'Yes, phone ordering is our primary and fastest service. Simply call us directly at 03111111111 to place your order for quick pickup or fresh preparation.',
  },
  {
    id: 'faq-4',
    question: 'Where is Mubarak Samosa located?',
    answer: 'Mubarak Samosa is centrally located in Gomal Bazar, District Tank, easily accessible to all local snack lovers and visitors.',
  },
  {
    id: 'faq-5',
    question: 'Do you offer larger orders for gatherings?',
    answer: 'Yes! We regularly prepare larger batches of samosas, pakoras, and chaat for family gatherings, office teas, community functions, and evening events. Please call ahead so we can fry them hot and ready on time.',
  },
  {
    id: 'faq-6',
    question: 'How can I contact Mubarak Samosa?',
    answer: 'You can reach us directly by calling 03111111111, or visit us in person at Gomal Bazar, District Tank. You can also submit the order inquiry form right on this website.',
  },
];

export const IMAGES = {
  hero: heroSamosasImg,
  chicken: chickenSamosaImg,
  aloo: alooSamosaImg,
  veg: vegSamosaImg,
  pakora: pakoraPlatterImg,
  springRolls: springRollsImg,
  chaat: specialChaatImg,
  chutney: chutneyBowlsImg,
  chai: chaiSnacksImg,
  shop: shopAtmosphereImg,
};
