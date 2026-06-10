// lib/data/testimonials.ts

export interface Testimonial {
  id: string | number;
  name: string;
  location?: string;
  rating: number;
  text: string;
  product?: string;
  profile: string;
  date?: string;
  purchased?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mercy W. – Nakuru",
    location: "Nakuru",
    rating: 5,
    text: "The wetlook school shoes are perfect. They look very smart, the material is easy to wipe clean, and the velcro strap makes it easy for my kid in the morning.",
    product: "Unisex Wetlook School Shoes",
    profile: "https://picsum.photos/seed/mercy/150/150",
  },
  {
    id: 2,
    name: "Faith K. – Kampi ya Moto",
    location: "Kampi ya Moto",
    rating: 5,
    text: "I love the shimmering Zion slides! They look incredibly elegant in person and fit perfectly. Collecting them from Lams Business Mall was super fast and easy.",
    product: "Zion Shimmering Rhinestone Slides",
    profile: "https://picsum.photos/seed/faith/150/150",
  },
  {
    id: 3,
    name: "Antony K. – Rongai",
    location: "Rongai",
    rating: 5,
    text: "Got the black BEN★BU canvas sneakers. The thick platform sole feels heavy duty and durable for walking around town. Absolute value for money.",
    product: "BEN★BU Platform Canvas Sneakers",
    profile: "https://picsum.photos/seed/antony/150/150",
  },
];

export const productReviews: Testimonial[] = [
  {
    id: 1,
    name: "Grace J.",
    location: "Nakuru",
    rating: 5,
    date: "3 days ago",
    text: "Bought the pink bunny sneakers for my daughter and she absolutely loves them. The cartoon rabbit graphic is very cute and the ankle support is solid.",
    purchased: true,
    profile: "https://picsum.photos/seed/grace/150/150",
  },
  {
    id: 2,
    name: "Brian O.",
    location: "Njoro",
    rating: 5,
    date: "1 week ago",
    text: "The wetlook uniform shoes are great quality for KSh 1,800. Size 28 fit my boy perfectly, and the rugged sole looks like it will survive the term easily.",
    purchased: true,
    profile: "https://picsum.photos/seed/brian/150/150",
  },
];

export const reviewAvatars = [
  "https://picsum.photos/seed/user1/100/100",
  "https://picsum.photos/seed/user2/100/100",
  "https://picsum.photos/seed/user3/100/100"
];

export const reviewStats = {
  averageRating: "4.8/5 Average Rating",
  totalCustomers: "2,500+ Happy Customers"
};