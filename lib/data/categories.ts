// lib/data/categories.ts

export interface Category {
  name: string;
  slug: string;
  label?: string;
  image: string;
  span?: string;
}

export const categories: Category[] = [
  {
    name: "LADIES SHOES",
    slug: "ladies-shoes",
    label: "Trending Now",
    image: "/Rhinestone Wave Slides.png", // Zion Shimmering Slides
    span: "md:col-span-2",
  },
  {
    name: "CASUAL SNEAKERS",
    slug: "sneakers",
    label: "Best Sellers",
    image: "/BEN★BU Canvas Sneakers black.png", // BEN★BU Canvas Sneakers
    span: "md:col-span-2",
  },
  {
    name: "KIDS COLLECTION",
    slug: "kids",
    label: "New Arrivals",
    image: "/MIBU Wow! Chunky Sneakers.png", // MIBU Wow Chunky Kids Sneakers
    span: "md:col-span-2",
  },
  {
    name: "SCHOOL SHOES",
    slug: "school-shoes",
    label: "Back to School",
    image: "/Unisex Wetlook School Shoes.png", // Unisex Wetlook School Shoes
    span: "md:col-span-2",
  },
];

export const heroCategories = categories.slice(0, 5);

export const discoveryChips = [
  { id: 'trending', label: '🔥 Trending', context: 'Trending Styles' },
  { id: 'best-sellers', label: '⭐ Best Sellers', context: 'Best Sellers' },
  { id: 'just-dropped', label: '🆕 Just Dropped', context: 'New Arrivals' },
  { id: 'sneakers', label: '👟 Sneakers', context: 'Canvas & Chunky' },
  { id: 'kids', label: '🧸 Kids', context: 'Children\'s Footwear' },
  { id: 'ladies-shoes', label: '👡 Ladies Shoes', context: 'Mules & Slides' },
  { id: 'school-shoes', label: '🎒 School Shoes', context: 'Uniform Shoes' },
];

export const filterCategories = ['All', 'Sneakers', 'Kids', 'School Shoes', 'Ladies Shoes'];

export const searchSuggestions = ['BEN★BU Canvas', 'Wetlook School Shoes', 'Zion Rhinestone Slides', 'Ogly Chunky', 'Pofala Mules', 'Bunny High-Tops'];

export const navSearchSuggestions = ['Sneakers', 'Kids', 'School Shoes', 'Ladies Shoes'];

export const navLinksData = [
  { label: "Shop All", href: "/shop", baseTextClass: "text-white", hoverTextClass: "hover:text-[#C6FF00]", underlineClass: "bg-[#C6FF00]", isLive: false },
  { label: "New Drops", href: "/shop?category=new-arrivals", baseTextClass: "text-gray-400", hoverTextClass: "hover:text-white", underlineClass: "bg-white", isLive: false },
  { label: "Trending", href: "/shop?category=trending", baseTextClass: "text-gray-400", hoverTextClass: "hover:text-white", underlineClass: "bg-white", isLive: false },
  { label: "Offers", href: "/shop?category=offers", baseTextClass: "text-gray-400", hoverTextClass: "hover:text-[#FF0000]", underlineClass: "bg-[#FF0000]", isLive: true },
];

export const priceRanges = ['Under 1800', '1800 - 2200', 'Over 2200'];

export const filterSizes = ['22', '25', '28', '30', '32', '36', '37', '38', '39', '40', '41'];