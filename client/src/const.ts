// Shared constants for RTH Foods BB1 LTD

export const IMAGES = {
  // Primary Core Assets
  weddingHallBuffet: "/assets/wedding_hall_buffet.png",
  weddingStage: "/assets/wedding_stage.png",
  corporateCatering: "/assets/corporate_catering.png",
  cafeCounter: "/assets/cafe_counter.png",
  restaurantKitchen: "/assets/restaurant_kitchen.png",
  southAsianFeast: "/assets/south_asian_feast.png",
  wholesaleSupply: "/assets/wholesale_supply.png",
  hospitalityTeam: "/assets/hospitality_team.png",

  // Batch 3 South Asian Delicacies
  biryaniCloseup: "/assets/biryani_closeup.png",
  karahiCloseup: "/assets/karahi_closeup.png",
  tandooriBbq: "/assets/tandoori_bbq.png",
  chaatStation: "/assets/chaat_station.png",
  dessertKheer: "/assets/dessert_kheer.png",

  // Batch 4 Cafe & Events
  teaMocktails: "/assets/tea_mocktails.png",
  cafeTeam: "/assets/cafe_team.png",
  latteArt: "/assets/latte_art.png",
  cafeCustomers: "/assets/cafe_customers.png",
  weddingSeating: "/assets/wedding_seating.png",

  // Batch 5 Institutional & Corporate
  liveCooking: "/assets/live_cooking.png",
  institutionalCafeteria: "/assets/institutional_cafeteria.png",
  corporateBoardroom: "/assets/corporate_boardroom.png",
  wholesaleWarehouse: "/assets/wholesale_warehouse.png",
  schoolDining: "/assets/school_dining.png"
};

export const SERVICES = [
  {
    id: "cafe-management",
    title: "Café Management",
    subtitle: "Turnkey coffee shop setups and operations",
    description: "From concept creation, espresso bar design, and menu development to complete daily operations, staff training, and specialty coffee beans supply.",
    icon: "Coffee",
    image: IMAGES.cafeCounter,
    gallery: [
      IMAGES.cafeCounter,
      IMAGES.cafeTeam,
      IMAGES.latteArt,
      IMAGES.cafeCustomers,
      IMAGES.wholesaleSupply,
      IMAGES.hospitalityTeam,
      IMAGES.teaMocktails,
      IMAGES.wholesaleWarehouse
    ],
    features: [
      "Bespoke Menu Design & Ingredient Sourcing",
      "SCA-Certified Barista Training Programs",
      "La Marzocco & Victoria Arduino Machine Sourcing",
      "Daily Operational Audits & Brand Management",
      "Specialty Grade Coffee Bean Wholesale Sourcing"
    ]
  },
  {
    id: "restaurant-management",
    title: "Restaurant Management",
    subtitle: "Operational excellence and culinary support",
    description: "Specialized culinary systems development, staff placement, kitchen workflow design, and halal supply chain sourcing for South Asian and modern cuisines.",
    icon: "UtensilsCrossed",
    image: IMAGES.restaurantKitchen,
    gallery: [
      IMAGES.restaurantKitchen,
      IMAGES.southAsianFeast,
      IMAGES.biryaniCloseup,
      IMAGES.karahiCloseup,
      IMAGES.tandooriBbq,
      IMAGES.liveCooking,
      IMAGES.hospitalityTeam,
      IMAGES.wholesaleSupply
    ],
    features: [
      "HACCP & Food Safety System Implementations",
      "Menu Engineering & Food Cost Optimization",
      "Premium Halal Meat Sourcing Networks",
      "Front of House Hospitality Standards Training",
      "Kitchen Flow Optimization & Equipment Layout"
    ]
  },
  {
    id: "wedding-catering",
    title: "Wedding Halls & Event Catering",
    subtitle: "Bespoke South Asian luxury banqueting",
    description: "Full-service luxury event design, breathtaking stage decoration, table seating plans, live food stations, and traditional South Asian culinary banquets.",
    icon: "Sparkles",
    image: IMAGES.weddingHallBuffet,
    gallery: [
      IMAGES.weddingHallBuffet,
      IMAGES.weddingStage,
      IMAGES.weddingSeating,
      IMAGES.teaMocktails,
      IMAGES.liveCooking,
      IMAGES.southAsianFeast,
      IMAGES.biryaniCloseup,
      IMAGES.karahiCloseup,
      IMAGES.tandooriBbq,
      IMAGES.chaatStation,
      IMAGES.dessertKheer
    ],
    features: [
      "Stunning Stage Design & Premium Floral Decor",
      "Silver-Service Table Planning & Guest Flow Management",
      "Traditional Live Tandoori & BBQ Cooking Stations",
      "Bespoke Mocktail Bars & Kashmiri Pink Tea Service",
      "Custom Dessert Buffets featuring Gourmet Kheer & Halwas"
    ]
  },
  {
    id: "food-management",
    title: "Food Service Management",
    subtitle: "Institutional and contract catering operations",
    description: "Reliable and nutritious food services for schools, universities, hospitals, and corporate dining halls. Fully compliant with UK standards.",
    icon: "ShieldCheck",
    image: IMAGES.institutionalCafeteria,
    gallery: [
      IMAGES.institutionalCafeteria,
      IMAGES.schoolDining,
      IMAGES.corporateBoardroom,
      IMAGES.hospitalityTeam,
      IMAGES.restaurantKitchen,
      IMAGES.wholesaleSupply,
      IMAGES.wholesaleWarehouse,
      IMAGES.corporateCatering
    ],
    features: [
      "Healthy, Nutritious, and Fully Compliant Menus",
      "National School Food Standards Alignment",
      "Allergen Management & Detailed Ingredient Tracking",
      "Efficient Serving Lines & Point-of-Sale Systems",
      "Eco-Friendly and Zero-Waste Cafeteria Operations"
    ]
  },
  {
    id: "corporate-catering",
    title: "Corporate Catering",
    subtitle: "Premium office dining and business events",
    description: "Professional catering solutions for boardroom lunches, conferences, client presentations, and company-wide gala events.",
    icon: "Briefcase",
    image: IMAGES.corporateCatering,
    gallery: [
      IMAGES.corporateCatering,
      IMAGES.corporateBoardroom,
      IMAGES.institutionalCafeteria,
      IMAGES.teaMocktails,
      IMAGES.cafeCounter,
      IMAGES.latteArt,
      IMAGES.hospitalityTeam,
      IMAGES.wholesaleSupply
    ],
    features: [
      "Premium Bento Box Lunches with South Asian Accents",
      "Conference Coffee & Fresh Pastry Platters",
      "Hot Buffet Packages with Professional Chafing Sets",
      "Polished Front-of-House Serving Staff",
      "Flexible Ordering Portals with Priority Trade Accounts"
    ]
  },
  {
    id: "wholesale-supply",
    title: "Wholesale Supply",
    subtitle: "Consolidated trade ingredients and coffee",
    description: "Reliable distribution of premium coffee beans, professional espresso machinery, custom-branded packaging, tin cans, and ambient food supplies.",
    icon: "Truck",
    image: IMAGES.wholesaleSupply,
    gallery: [
      IMAGES.wholesaleSupply,
      IMAGES.wholesaleWarehouse,
      IMAGES.cafeCounter,
      IMAGES.latteArt,
      IMAGES.restaurantKitchen,
      IMAGES.teaMocktails,
      IMAGES.hospitalityTeam,
      IMAGES.cafeTeam
    ],
    features: [
      "Exclusive Custom-Roasted Coffee Bean Profiles",
      "Espresso Machine Sourcing & Maintenance Packages",
      "Branded Paper Cups, Disposables, and Tin Cans",
      "Consolidated Next-Day Delivery across the UK",
      "Flexible Credit Terms for Verified Trade Partners"
    ]
  }
];

export const PROJECTS = [
  {
    id: "the-grand-pavilion",
    title: "The Grand Pavilion",
    category: "wedding-catering",
    location: "Birmingham",
    description: "A luxury South Asian banqueting hall catering to over 800 guests, featuring exquisite staging and a custom multi-course live-station menu.",
    challenge: "Managing food quality and fast service for 800 guests simultaneously while maintaining traditional live-cooking aesthetics.",
    solution: "We deployed 4 live tandoori/BBQ stations and 2 dessert bars alongside silver-service table staff, utilizing a custom pre-prep kitchen pipeline.",
    result: "All guests served within 25 minutes of seating. The event achieved a 98% client satisfaction rating and secured 12 subsequent hall bookings.",
    images: [
      IMAGES.weddingHallBuffet,
      IMAGES.weddingStage,
      IMAGES.weddingSeating,
      IMAGES.liveCooking,
      IMAGES.teaMocktails,
      IMAGES.biryaniCloseup
    ]
  },
  {
    id: "artisan-brew-co",
    title: "Artisan Brew Co.",
    category: "cafe-management",
    location: "Newcastle upon Tyne",
    description: "Redesigned and fully operated a flagship city-center cafe, boosting daily transactions and building a strong local brand identity.",
    challenge: "The cafe had outdated equipment, slow service times, and inconsistent espresso quality, leading to a drop in repeat customers.",
    solution: "We installed custom-branded La Marzocco machinery, introduced our custom wholesale roast, and retrained the entire staff on milk-texturing and speed.",
    result: "Daily sales increased by 45% within 3 months. Average service time dropped from 4.2 minutes to 90 seconds, making it the top-rated local cafe.",
    images: [
      IMAGES.cafeCounter,
      IMAGES.cafeTeam,
      IMAGES.latteArt,
      IMAGES.cafeCustomers,
      IMAGES.wholesaleSupply,
      IMAGES.wholesaleWarehouse
    ]
  },
  {
    id: "tech-hub-dining",
    title: "TechHub Corporate Dining",
    category: "corporate-catering",
    location: "Manchester",
    description: "Daily food service management for a leading technology campus with over 1,200 employees, focusing on healthy, diverse, and fast-casual dining.",
    challenge: "Providing a rotating menu that caters to diverse dietary needs (vegan, halal, gluten-free) while avoiding long queue lines at lunch.",
    solution: "We designed a multi-concept food court featuring a fresh salad bar, a hot Asian wok station, and an automated self-checkout POS network.",
    result: "Reduced average lunch queue times to under 3 minutes. Achieved a daily employee participation rate of 82%, far exceeding the target of 60%.",
    images: [
      IMAGES.institutionalCafeteria,
      IMAGES.corporateBoardroom,
      IMAGES.schoolDining,
      IMAGES.hospitalityTeam,
      IMAGES.restaurantKitchen,
      IMAGES.wholesaleSupply
    ]
  }
];

export const FAQS = [
  {
    question: "Is all the food provided by RTH Foods fully Halal certified?",
    answer: "Yes, 100%. All of our ingredients, meats, and poultry are sourced from trusted, certified Halal suppliers. We maintain strict segregation and food safety protocols in our kitchens to guarantee complete compliance."
  },
  {
    question: "Do you offer custom coffee roasting for wholesale supply clients?",
    answer: "Absolutely. For our Café Management and Wholesale partners, we can develop custom espresso blend profiles tailored to your brand's taste. We also assist in sourcing, installing, and maintaining premium espresso machines."
  },
  {
    question: "What areas of the UK do you cover for wedding and event catering?",
    answer: "While our core operations are based in Newcastle upon Tyne and Birmingham, we provide premium catering and event management services nationwide across England, Scotland, and Wales for larger events."
  },
  {
    question: "Can you assist with the licensing and regulatory setup for a new café?",
    answer: "Yes, that is a core part of our Café Management service. We handle local authority licensing, health and safety compliance, HACCP system setup, and structural layout approvals so you can open stress-free."
  },
  {
    question: "How do we apply for a wholesale trade credit account?",
    answer: "You can apply directly through our Contact page by selecting 'Wholesale Trade Account' in the enquiry form. Our finance team will review your business details and set up your credit limit within 48 hours."
  }
];

export const TESTIMONIALS = [
  {
    quote: "RTH Foods transformed our wedding into an absolute masterpiece. The live tandoori stations were a massive hit, and the Kashmiri tea mocktail bar was stunning.",
    author: "Zainab & Bilal Ahmed",
    role: "Wedding Clients",
    location: "Birmingham"
  },
  {
    quote: "Partnering with RTH Foods for our corporate cafeteria was the best decision we made. The food is consistently exceptional, healthy, and served incredibly fast.",
    author: "Sarah Jenkins",
    role: "HR Director, TechHub UK",
    location: "Manchester"
  },
  {
    quote: "Their wholesale coffee bean supply and machine maintenance package saved our cafe. Our customers constantly praise the rich crema and deep flavor profile.",
    author: "Marcus Vance",
    role: "Owner, Artisan Brew Co.",
    location: "Newcastle upon Tyne"
  }
];
