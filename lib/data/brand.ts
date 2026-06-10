// lib/data/brand.ts
import { Truck, MessageCircle, Star, Sparkles, Tag, CheckCircle, ShieldCheck } from 'lucide-react';

export const brand = {
  name: "Nyambu Drip Collection",
  shortName: "Nyambu Drip",
  logo: "/nyambu-drip-logo.jpeg",
  tagline: "Never give up ❤️ GLAM 🌸",
  description:
    "Premium designer footwear collection in Nakuru. Trendy canvas platform sneakers, elegant rhinestone ladies' slides, school shoes, and stylish children's sneakers.",
  location: "Kenyatta Avenue, Opposite Equity Bank, Lams Business Mall, Shop 22 & 25, Nakuru",
  seo: {
    title: "Nyambu Drip Collection | Designer Shoes & Kids Footwear Nakuru",
    description: "Premium designer footwear, ladies' slides, wetlook school shoes, and kids' sneakers. Visit us at Lams Business Mall in Nakuru or order directly via WhatsApp.",
  },

  hero: {
    badge: "110K+ Followers on TikTok ✨",
    headlineTop: "STEP OUT IN",
    headlineHighlight: "GLAMOUR",
    backgroundImage: "/MIBU Wow! Chunky Sneakers.png", // BEN★BU Platform Canvas Sneakers
    ctaPrimary: "Order on WhatsApp",
    ctaSecondary: "Shop Collection",
  },

  sections: {
    featured: {
      title: "Featured Collections",
      subtitle: "Find your perfect pair. Browse through elegant ladies' slides, urban kids' wear, and classic canvas kicks."
    },
    flashDeals: {
      badge: "Live Offers",
      title: "Flash Deals",
      subtitle: "Grab customer favorites like our Wetlook School Shoes at unbeatable prices before stocks run out.",
      cta: "View All Deals"
    },
    newArrivals: {
      badge: "Just Dropped",
      title: "Latest Styles",
      subtitle: "Fresh pairs added weekly directly from our TikTok catalog — be the first to own them.",
      cta: "View All Arrivals",
      trendingBadgePrefix: "Trending in" 
    },
    bestSellers: {
      badge: "Customer Favorites",
      title: "BEST SELLERS",
      subtitle: "Highly reviewed and loved by shoe lovers in Nakuru and across Kenya.",
      cta: "View All Favorites"
    },
    whyUs: {
      badge: "Trust & Reliability",
      titleTop: "WHY SHOP WITH",
      subtitle: "We offer top-tier design curation, reliable sizing guidance, and an easy localized shopping experience."
    },
    reviews: {
      badge: "Real Feedback from TikTok & WhatsApp",
      titleTop: "WHAT OUR",
      titleBottom: "CUSTOMERS SAY"
    },
    whatsappCta: {
      badge: "We Are Active",
      titleTop: "START YOUR",
      titleBottom: "ORDER NOW",
      subtitle: "Chat with Esther directly on WhatsApp to secure your size and confirm store pickup or delivery details."
    }
  },

  whatsappNumber: "254798020646",
  whatsappMessage: {
    general:
      "Hello Nyambu Drip Collection,\n\nI would like to place an order.\n\nShoe Screenshot/Name:\n\nShoe Size:\nPreferred Colour:\n\nDelivery/Pickup Location:\n\nPlease confirm availability. Thank you!",
  },
  socialLinks: {
    instagram: "https://instagram.com/nyambu_drip_collection",
    facebook: "https://facebook.com/nyambu_drip_collection",
    tiktok: "https://tiktok.com/@esthermwangi247422",
  },
  deliveryInfo: {
    standard: "Countrywide delivery via safe courier services",
    nairobi: "Store pickup available at Lams Business Mall, Shop 22 & 25, Kenyatta Avenue, Nakuru",
  },
  trustStatements: [
    "110K+ TikTok Community",
    "Premium Quality Guaranteed",
    "Easy WhatsApp Ordering",
    "Never give up ❤️",
  ],
  features: [
    {
      title: "Designer Footwear",
      description: "Carefully selected pairs that prioritize exquisite detailing, reliable materials, and daily comfort."
    },
    {
      title: "Kids & Adults Styles",
      description: "From durable wetlook uniforms to high-end rhinestone block heels, we have options for the whole family."
    },
    {
      title: "Locally Trusted Store",
      description: "Ditch the online guesswork—visit our physical retail branches directly on Kenyatta Avenue in Nakuru town."
    },
    {
      title: "Instant WhatsApp Support",
      description: "No complex dynamic cart flows—just forward a screenshot of the shoe you spotted on TikTok to lock down your fit."
    }
  ],
  whatsappTrustSignals: [
    "Replies within minutes",
    "Secure payment on confirmation",
    "Fast parcel delivery across Kenya",
    "Verified Nakuru Business Hub"
  ],
  whatsappMockChat: [
    {
      sender: "user",
      text: `Hello Nyambu Drip Collection!

I'd like to order:

• Unisex Wetlook School Shoes
Reference Image: 1000676459.png
Size: 28

Pickup: Lams Business Mall Shop 25

Subtotal: KSh 1,800

Are these still in stock for pickup today?`,
      time: "02:14 PM"
    },
    {
      sender: "brand",
      text: `Hello! Yes, size 28 is fully stocked in Shop 25. 

We can hold them for you. You can pay via cash or M-Pesa at the counter upon arrival. See you soon! 😊`,
      time: "02:16 PM"
    }
  ],
  salesCallout: "Step Out In Glamour 🌸",
  
  featuredImages: [
    "1000676452.png",
    "1000676453.png",
    "1000676455.png",
    "1000676457.png",
    "1000676459.png",
    "1000676478.png",
    "1000676480.png",
    "1000676483.png"
  ]
};

export const announcementMessages = [
  { text: "Visit Us at Lams Business Mall Shop 22 & 25, Nakuru", icon: Star },
  { text: "Order Easily Via WhatsApp (0798020646)", icon: MessageCircle },
  { text: "110K+ Followers on TikTok Portfolio", icon: Sparkles },
  { text: "Wetlook Uniform School Shoes Available", icon: Tag },
  { text: "Reliable Shipping Countrywide", icon: Truck },
];

export const cartTrustFeatures = [
  { text: "Countrywide Shipping / Store Pickup", icon: Truck },
  { text: "Premium Designer Selection", icon: CheckCircle },
  { text: "Secure Direct Checkout Support", icon: ShieldCheck },
  { text: "WhatsApp Store Management", icon: MessageCircle },
];

export const footerQuickShopLinks = [
  { label: "Ladies Shoes (Slides & Mules)", href: "/shop?category=ladies-shoes" },
  { label: "Casual Sneakers", href: "/shop?category=sneakers" },
  { label: "Kids Collection", href: "/shop?category=kids" },
  { label: "School Shoes", href: "/shop?category=school-shoes" },
  { label: "Best Sellers", href: "/shop?category=best-sellers" },
];

export const footerSupportLinks = [
  { label: "How to Order", href: "/how-to-order" },
  { label: "Delivery Info", href: "/delivery" },
  { label: "Size Guide", href: "/size-guide" },
  { label: "Returns & Exchanges", href: "/returns" },
  { label: "FAQ", href: "/faq" },
];