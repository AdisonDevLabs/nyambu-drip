// lib/data/products.ts

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  rating: number;
  reviews: number;
  sizes: string[];
  colors: string[];
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  isFlashDeal?: boolean;
  description: string;
}

export const products: Product[] = [
  {
    "id": "p1",
    "name": "BEN★BU Platform Canvas Sneakers",
    "price": 1500,
    "originalPrice": 2000,
    "image": "/BEN★BU Canvas Sneakers black.png",
    "images": ["/BEN★BU Canvas Sneakers black.png", "/BEN★BU Canvas Sneakers light blue.png", "/BEN★BU Canvas Sneakers red.png"],
    "category": "Sneakers",
    "rating": 4.8,
    "reviews": 34,
    "sizes": ["36", "37", "38", "39", "40", "41"],
    "colors": ["Red", "Black", "Denim Blue"],
    "isNewArrival": true,
    "isBestSeller": true,
    "isFlashDeal": false,
    "description": "Stylish low-top platform canvas sneakers by BEN★BU. Features a clean, thick white vulcanized sole for everyday comfort and modern streetwear flair. Available in Nakuru."
  },
  {
    "id": "p2",
    "name": "Kids High-Top Bunny Sneakers",
    "price": 1600,
    "originalPrice": 2100,
    "image": "/Kids' Bunny High-Top Sneakers.png",
    "images": ["/Kids' Bunny High-Top Sneakers.png", "/Kids' Bunny High-Top Sneakers1.png"],
    "category": "Kids",
    "rating": 4.7,
    "reviews": 19,
    "sizes": ["22", "23", "24", "25", "26"],
    "colors": ["White", "Pink"],
    "isNewArrival": true,
    "isBestSeller": false,
    "isFlashDeal": false,
    "description": "Adorable high-top fashion sneakers for kids. Designed with soft pink trim, custom pink laces, a secure ankle velcro strap, and a playful cartoon rabbit character graphic. Available in Nakuru."
  },
  {
    "id": "p3",
    "name": "Toddler Girl Glossy Ribbon Boots",
    "price": 1750,
    "originalPrice": 2200,
    "image": "/Toddler Girl Glossy Boots.png",
    "images": ["/Toddler Girl Glossy Boots.png", "/Toddler Girl Glossy Boots1.png"],
    "category": "Kids",
    "rating": 4.9,
    "reviews": 22,
    "sizes": ["21", "22", "23", "24", "25"],
    "colors": ["White", "Purple", "Pink"],
    "isNewArrival": true,
    "isBestSeller": true,
    "isFlashDeal": false,
    "description": "Charming patent-leather glossy boots tailored for a 2-year-old baby girl. Outfitted with heavy-duty pastel purple rugged soles, decorative 'Spring' lace charms, and satin ribbon laces."
  },
  {
    "id": "p4",
    "name": "Unisex Wetlook School Shoes",
    "price": 1800,
    "originalPrice": 2400,
    "image": "/Unisex Wetlook School Shoes.png",
    "images": ["/Unisex Wetlook School Shoes.png", "/Unisex Wetlook School Shoes1.png"],
    "category": "School Shoes",
    "rating": 4.9,
    "reviews": 88,
    "sizes": ["25", "26", "27", "28", "29", "30"],
    "colors": ["Black"],
    "isNewArrival": false,
    "isBestSeller": true,
    "isFlashDeal": true,
    "description": "Premium unisex high-gloss wetlook uniform school shoes. Built with a durable chunky tread, heavy-duty stitching, and an easy-fasten velcro top strap for hassle-free adjustments."
  },
  {
    "id": "p5",
    "name": "Ogly Chunky Kids Sneakers",
    "price": 1850,
    "originalPrice": 2300,
    "image": "/Ogly Chunky Kids' Sneakers.png",
    "images": ["/Ogly Chunky Kids' Sneakers.png"],
    "category": "Kids",
    "rating": 4.6,
    "reviews": 15,
    "sizes": ["25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"],
    "colors": ["Black", "White"],
    "isNewArrival": true,
    "isBestSeller": false,
    "isFlashDeal": false,
    "description": "Bold, contemporary kid's urban streetwear sneakers from Ogly. Combines a high-contrast monochrome design with statement thick rope laces and abstract geometric side details. Available in Nakuru."
  },
  {
    "id": "p6",
    "name": "Pofala Gold-Beaded Black Mules",
    "price": 2200,
    "originalPrice": 2800,
    "image": "/Gold-Beaded Black Mules.png",
    "images": ["/Gold-Beaded Black Mules.png"],
    "category": "Ladies Shoes",
    "rating": 4.8,
    "reviews": 41,
    "sizes": ["37", "38", "39", "40", "41"],
    "colors": ["Black", "Gold"],
    "isNewArrival": true,
    "isBestSeller": true,
    "isFlashDeal": false,
    "description": "Elegant low-chic slip-on mules by Pofala. Showcases intricate circular gold and bronze beadwork paneling across a rich black upper, completed with a beautifully embellished low block heel."
  },
  {
    "id": "p7",
    "name": "Zion Shimmering Rhinestone Slides",
    "price": 2400,
    "originalPrice": 3000,
    "image": "/Zion Shimmering Silver Slides.png",
    "images": ["/Zion Shimmering Silver Slides.png"],
    "category": "Ladies Shoes",
    "rating": 4.7,
    "reviews": 29,
    "sizes": ["36", "37", "38", "39", "40"],
    "colors": ["Silver"],
    "isNewArrival": true,
    "isBestSeller": true,
    "isFlashDeal": false,
    "description": "Glitz and glam low wedge open-toe slides from Zion Collection. Features a breathable mesh v-cut upper fully encrusted with shimmering crystal rhinestones in a chevron motif. Stocked at Lams Business Mall, Shop 22, Nakuru."
  },
  {
    "id": "p8",
    "name": "MIBU Wow Chunky Kids Sneakers",
    "price": 1900,
    "originalPrice": 2500,
    "image": "/MIBU Wow! Chunky Sneakers.png",
    "images": ["/MIBU Wow! Chunky Sneakers.png"],
    "category": "Kids",
    "rating": 4.8,
    "reviews": 12,
    "sizes": ["26", "27", "28", "29", "30", "31", "32"],
    "colors": ["White", "Black"],
    "isNewArrival": true,
    "isBestSeller": false,
    "isFlashDeal": false,
    "description": "High-style chunky streetwear shoes for children from MIBU. Highlights contrast stitch paneling, chunky dual-tone rope laces, top ankle velcro wrap, cute side bear stamp, and modern 'Wow!' decorative lace charms. Located in Nakuru."
  },
  {
    "id": "p9",
    "name": "Pofala Rhinestone Wave Block Heels",
    "price": 2300,
    "originalPrice": 2900,
    "image": "/Rhinestone Wave Slides.png",
    "images": ["/Rhinestone Wave Slides.png"],
    "category": "Ladies Shoes",
    "rating": 4.9,
    "reviews": 33,
    "sizes": ["37", "38", "39", "40"],
    "colors": ["Black", "Silver", "Gold"],
    "isNewArrival": false,
    "isBestSeller": true,
    "isFlashDeal": false,
    "description": "Chic slip-on ladies sandals featuring a structured wave-patterned strap heavily lined with brilliant micro-rhinestones. Accented with a square statement heel studded with polished gold tiles. Available in Nakuru."
  },
  {
    "id": "p10",
    "name": "Smiley Panda Classic Low-Tops",
    "price": 1650,
    "originalPrice": 2100,
    "image": "/Smiley Panda Low-Tops.png",
    "images": ["/Smiley Panda Low-Tops.png"],
    "category": "Kids",
    "rating": 4.5,
    "reviews": 16,
    "sizes": ["28", "29", "30", "31", "32", "33", "34", "35", "36"],
    "colors": ["Black", "White"],
    "isNewArrival": false,
    "isBestSeller": false,
    "isFlashDeal": true,
    "description": "Timeless low-top court sneakers for juniors sporting a clean black-and-white panel layout, elastic mock laces, secure hook-and-loop strap, and a friendly removable smiley face charm."
  }
];

export const getBestSellers = () => products.filter((p) => p.isBestSeller);
export const getNewArrivals = () => products.filter((p) => p.isNewArrival);
export const getFlashDeals = () => products.filter((p) => p.isFlashDeal);
export const getProductById = (id: string) => products.find((p) => p.id === id);

export const colorMap: Record<string, string> = {
  'Black': '#000000',
  'White': '#ffffff',
  'Red': '#ff0000',
  'Pink': '#ff1493',
  'Purple': '#800080',
  'Denim Blue': '#4682b4',
  'Gold': '#ffd700',
  'Silver': '#c0c0c0'
};

export const sizeGuideData = [
  // Kids Sizes
  {eu: 21, uk: 4.5, us: 5.5, cm: 13.0},
  {eu: 25, uk: 7.5, us: 8.5, cm: 15.5},
  {eu: 26, uk: 8.5, us: 9.5, cm: 16.0},
  {eu: 30, uk: 11.5, us: 12.5, cm: 18.5},
  {eu: 32, uk: 13, us: 1, cm: 20.0},
  {eu: 36, uk: 3.5, us: 4.5, cm: 22.5},
  // Adult Sizes
  {eu: 37, uk: 4, us: 5, cm: 23.0},
  {eu: 38, uk: 5, us: 6, cm: 24.0},
  {eu: 39, uk: 5.5, us: 6.5, cm: 24.5},
  {eu: 40, uk: 6, us: 7, cm: 25.0},
  {eu: 41, uk: 7, us: 8, cm: 26.0}
];