import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { CheckCircle, Sparkles, Heart, Calendar, Gift, ChevronRight, Award, Flame, Star } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { IMAGES, SERVICES } from "@/const";

export default function WeddingCatering() {
  const serviceData = SERVICES.find(s => s.id === "wedding-catering")!;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { title: "Bespoke Stage Design", desc: "Grand, customized stages with luxury floral backdrops, crystal chandeliers, and premium seating arrangements." },
    { title: "Silver-Service Table Setup", desc: "Fine-dining cutlery, custom gold charger plates, elegant linens, and dedicated waitstaff for every table." },
    { title: "Live Cooking Stations", desc: "Action-packed live tandoori and charcoal BBQ stations serving sizzling, fresh meats straight to guests." },
    { title: "Traditional South Asian Feast", desc: "Exquisite, multi-course menus prepared by culinary heritage chefs using slow-cooking methods." },
    { title: "Mocktail & Beverage Bars", desc: "Interactive mocktail stations serving signature fruit fizzes alongside traditional Kashmiri pink chai." },
    { title: "Grand Dessert Buffets", desc: "Decadent dessert spreads featuring rich Shahi Kheer, hot Gajar Halwa, and premium ice creams." },
    { title: "Baraat Grand Entry Planning", desc: "Traditional dhol players, custom entry carpet setups, and coordinated lighting effects for the groom's party." },
    { title: "Nikah Ceremony Ambiance", desc: "Intimate, beautifully screened partitions, custom cushions, and floral decor for the sacred vows." }
  ];

  const menuHighlights = [
    { title: "Royal Chicken Biryani", desc: "Saffron-infused premium Basmati rice layered with tender marinated chicken, fresh mint, and traditional spices." },
    { title: "Lahori Karahi", desc: "Succulent lamb or chicken slow-cooked in a traditional wok with fresh tomatoes, ginger, and green chilies." },
    { title: "Flame-Grilled Kebabs", desc: "Skewered minced meats seasoned with coriander and garam masala, flame-grilled to smokey perfection." },
    { title: "Kashmiri Pink Chai", desc: "Slow-brewed green tea leaves with cardamom and milk, garnished with crushed pistachios and almonds." },
    { title: "Sizzling Lamb Chops", desc: "Tender chops marinated in raw papaya, ginger, garlic, and special spices, grilled over hot charcoals." },
    { title: "Shahi Tukray & Kheer", desc: "Royal bread pudding with cardamom milk alongside slow-reduced rice pudding served in traditional clay pots." }
  ];

  // Exactly 10 premium images mixed up into alternating storytelling sections + interactive blocks
  const sections = [
    {
      title: "Royal Stage & Ambience Design",
      subtitle: "Breathtaking backdrops and floral masteristry",
      desc: "Our event designers craft completely custom stages that serve as the focal point of your grand celebration. Incorporating hand-selected fresh florals, custom crystal chandeliers, and warm luxury uplighting, we ensure your wedding backdrop looks spectacular both in person and on camera.",
      image1: IMAGES.weddingStage,
      image1Alt: "Royal Staging & Florals",
      image2: IMAGES.weddingSeating,
      image2Alt: "Elegant Table Setup & Chair Details",
      isEven: true
    },
    {
      title: "Interactive Live-Cooking Stations",
      subtitle: "The sizzle, aroma, and theater of live gastronomy",
      desc: "Nothing delights wedding guests like the sight and aroma of fresh food being prepared live. Our signature tandoori ovens and hot-charcoal BBQ stations bring a theatrical element to your banquet, serving sizzling lamb chops, chicken tikka, and hot garlic naans directly to your guests.",
      image1: IMAGES.liveCooking,
      image1Alt: "Tandoor & BBQ Sizzler",
      image2: IMAGES.tandooriBbq,
      image2Alt: "Traditional Skewers & Seekh Kebabs",
      isEven: false
    },
    {
      title: "Authentic Main Course Banqueting",
      subtitle: "South Asian culinary heritage served with perfection",
      desc: "Our culinary heritage chefs prepare authentic, slow-cooked South Asian dishes that pay homage to traditional family recipes. From saffron-infused Royal Chicken Biryani to wok-tossed Lahori Lamb Karahi, each dish is balanced perfectly and presented in custom copper chafing sets.",
      image1: IMAGES.biryaniCloseup,
      image1Alt: "Saffron Royal Biryani",
      image2: IMAGES.karahiCloseup,
      image2Alt: "Sizzling Lamb Karahi",
      isEven: true
    },
    {
      title: "Gourmet Dessert & Chai Lounges",
      subtitle: "A sweet conclusion with traditional pink tea and desserts",
      desc: "Conclude your banqueting experience with an exquisite dessert display and live beverage station. Guests can enjoy slow-reduced Shahi Kheer served in clay pots, alongside hot Gajar Halwa and custom-brewed Kashmiri Pink Chai garnished with almonds and pistachios.",
      image1: IMAGES.dessertKheer,
      image1Alt: "Clay-pot Shahi Kheer",
      image2: IMAGES.teaMocktails,
      image2Alt: "Kashmiri Pink Tea & Mocktails",
      isEven: false
    }
  ];

  // Remaining 2 images used for the large grand gallery section
  const extraImages = [
    { src: IMAGES.weddingHallBuffet, alt: "Luxury Buffet Layout & Guest Flow" },
    { src: IMAGES.chaatStation, alt: "Interactive Street Food Chaat Station" }
  ];

  return (
    <Layout>
      {/* Editorial Header Banner with Scroll Parallax Zoom (No bottom white fade-out) */}
      <section className="relative h-[65vh] lg:h-[80vh] w-full overflow-hidden flex items-center justify-center bg-black">
        <div 
          className="absolute inset-0 w-full h-full scale-110"
          style={{
            transform: `translateY(${scrollY * 0.35}px) scale(${1.05 + scrollY * 0.0004})`,
            backgroundImage: `url(${IMAGES.weddingStage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 0.6
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/80 z-10" />
        <div className="container relative z-20 max-w-4xl text-center space-y-4">
          <span className="text-secondary font-semibold tracking-widest text-xs uppercase block mb-2 animate-fade-in">
            Royal Events & Catering
          </span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold tracking-tight text-white leading-tight animate-fade-in-up">
            {serviceData.title}
          </h1>
          <p className="text-sm md:text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed font-light mt-4 animate-fade-in-up delay-200">
            {serviceData.description}
          </p>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="py-24 bg-background relative">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-secondary font-semibold tracking-widest text-xs uppercase block">
              Event Management
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Bespoke Wedding & Banqueting Services
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              We coordinate and execute every detail of your banquet, from elegant double-sided hot buffets to live charcoal BBQ stations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="p-6 rounded-2xl border border-border/40 bg-card hover:bg-muted/10 hover:border-secondary/30 transition-all duration-300 flex flex-col gap-4 shadow-sm group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-bold text-foreground">{service.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mixed Storytelling Sections with Images Intertwined with Layout */}
      <section className="py-12 bg-background border-t border-border/40">
        <div className="container space-y-32">
          {sections.map((section, idx) => (
            <div 
              key={idx}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                section.isEven ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Images Block (Side-by-side or Overlapping Editorial Grid) */}
              <div className={`lg:col-span-6 grid grid-cols-2 gap-4 ${section.isEven ? "" : "lg:order-2"}`}>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group">
                  <img
                    src={section.image1}
                    alt={section.image1Alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-xs font-bold font-serif">{section.image1Alt}</p>
                  </div>
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group translate-y-6 lg:translate-y-12">
                  <img
                    src={section.image2}
                    alt={section.image2Alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-xs font-bold font-serif">{section.image2Alt}</p>
                  </div>
                </div>
              </div>

              {/* Text Block */}
              <div className={`lg:col-span-6 space-y-6 ${section.isEven ? "" : "lg:order-1"}`}>
                <span className="text-secondary font-semibold tracking-widest text-xs uppercase block">
                  Banqueting Division 0{idx + 1}
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground tracking-tight">
                  {section.title}
                </h2>
                <h3 className="text-lg font-serif italic text-muted-foreground font-medium leading-relaxed">
                  "{section.subtitle}"
                </h3>
                <div className="h-[1px] w-20 bg-secondary" />
                <p className="text-sm text-foreground/80 leading-relaxed font-light">
                  {section.desc}
                </p>
                <div className="pt-2 flex items-center gap-2 text-secondary text-xs font-semibold uppercase tracking-wider group cursor-pointer">
                  <span>Explore setups</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Royal Menu Highlights Grid */}
      <section className="py-24 bg-muted/30 border-y border-border/40 mt-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-secondary font-semibold tracking-widest text-xs uppercase block">
              Culinary Art
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Royal Menu Highlights
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              We prepare authentic South Asian delicacies using slow-cooking heritage methods, presented beautifully for large banquets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuHighlights.map((menu, index) => (
              <div 
                key={index} 
                className="p-8 rounded-xl border border-border/40 bg-card hover:bg-muted/10 hover:border-secondary/30 transition-all duration-300 space-y-3 shadow-sm hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">{menu.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{menu.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grand Banquet Logistics & Buffets (Remaining 2 Images) */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-secondary font-semibold tracking-widest text-xs uppercase block">
              Visual Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Sights of Grand Celebration
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Explore our curated photographic showcase of large-scale buffet arrangements and live street-food chaat stations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {extraImages.map((img, index) => (
              <div 
                key={index} 
                className="group relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-border/30 hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/35 transition-colors duration-300" />
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="px-3 py-1 rounded-full bg-secondary/90 text-secondary-foreground text-[10px] uppercase font-bold tracking-widest block w-fit mb-2">
                    Gallery 0{index + 9}
                  </span>
                  <h4 className="text-white font-serif text-lg font-bold">{img.alt}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
        <img
          src={IMAGES.weddingHallBuffet}
          alt="Wedding banquet"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="container relative z-20 text-center space-y-6 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Design Your Dream Wedding Feast
          </h2>
          <p className="text-sm md:text-md text-primary-foreground/80 leading-relaxed font-light">
            Contact our dedicated event coordinators to discuss custom staging, table configurations, live-cooking menus, and dates availability.
          </p>
          <div className="pt-4 flex justify-center gap-4 flex-wrap">
            <Link href="/contact">
              <Button className="bg-secondary text-secondary-foreground hover:bg-white hover:text-black font-medium px-8 py-6 rounded-full text-md transition-all duration-300">
                Check Dates Availability
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black font-medium px-8 py-6 rounded-full text-md transition-all duration-300">
                Download Menu Brochure
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
