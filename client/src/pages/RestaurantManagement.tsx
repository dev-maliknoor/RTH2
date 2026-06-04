import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { CheckCircle, ChefHat, Shield, Award, Users, Flame, UtensilsCrossed, Sparkles, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { IMAGES, SERVICES } from "@/const";

export default function RestaurantManagement() {
  const serviceData = SERVICES.find(s => s.id === "restaurant-management")!;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cuisineExpertise = [
    { title: "Pakistani Biryani & Karahi", desc: "Authentic slow-cooked saffron rice and wok-cooked chicken or lamb infused with ginger and chili." },
    { title: "Tandoori & Charcoal Grill", desc: "Heritage marinades and skewered meats flame-grilled in high-heat tandoor clay ovens." },
    { title: "Mughlai Desserts", desc: "Gourmet Shahi Kheer, traditional Halwas, and sweet delicacies crafted by culinary experts." }
  ];

  const services = [
    { title: "Kitchen Systems Design", desc: "Workflow blueprinting, equipment layout, and commercial food-prep stations setup." },
    { title: "Menu Development & Costing", desc: "Recipe engineering, ingredient sourcing, and precise food cost margin optimization." },
    { title: "Chef Recruitment & Placement", desc: "Placing and training highly skilled head chefs, sous chefs, and prep cooks." },
    { title: "Halal Supplier Integration", desc: "Establishing secure, 100% Halal meat and fresh produce trade supply chains." },
    { title: "HACCP & Hygiene Audits", desc: "Drafting food safety systems, allergen logs, and training staff for 5-star ratings." },
    { title: "Front-of-House Standards", desc: "Silver-service, table flow, POS operations, and premium guest hospitality training." }
  ];

  const process = [
    { step: "01", title: "Consultation", desc: "Reviewing your location, cuisine direction, and operational bottlenecks." },
    { step: "02", title: "Menu Blueprint", desc: "Developing recipe logs, ingredient supply lists, and precise costing sheets." },
    { step: "03", title: "Staff Placement", desc: "Recruiting, vetting, and training kitchen and front-of-house personnel." },
    { step: "04", title: "Launch Support", desc: "Providing hands-on on-site coordination and audits during your launch week." }
  ];

  // At least 8 high-quality images mixed up into alternating storytelling sections + interactive blocks
  const sections = [
    {
      title: "Commercial Kitchen Architecture",
      subtitle: "Ergonomic stainless steel prep and cooking lines",
      desc: "Our restaurant operations consultants design state-of-the-art commercial kitchens that comply fully with UK HACCP and food safety laws. We configure efficient workflow zones (receiving, cold storage, prep, cooking, plating, and wash-up) to maximize culinary output.",
      image1: IMAGES.restaurantKitchen,
      image1Alt: "Professional Stainless Steel Kitchen Setup",
      image2: IMAGES.hospitalityTeam,
      image2Alt: "Vetted Head Chefs & Kitchen Staff",
      isEven: true
    },
    {
      title: "Authentic South Asian Culinary Heritage",
      subtitle: "Traditional slow-cooking techniques and spices",
      desc: "We help restaurant owners perfect their South Asian menu items. Our specialist head chefs help calibrate recipes for authentic Pakistani and Indian biryanis, wok-tossed karahis, and charcoal-grilled tandoori BBQ to ensure consistent premium taste across all shifts.",
      image1: IMAGES.southAsianFeast,
      image1Alt: "Lavish South Asian Feast Showcase",
      image2: IMAGES.biryaniCloseup,
      image2Alt: "Royal Saffron Chicken Biryani Detail",
      isEven: false
    },
    {
      title: "Flame-Grilled Charcoal Theater",
      subtitle: "Sizzling tandoori and BBQ cooking stations",
      desc: "Incorporate theatrical elements into your restaurant concept with custom clay tandoors and open-flame charcoal grills. We assist in sourcing high-heat tandoor ovens and designing ventilation systems that capture the authentic smoky BBQ aroma.",
      image1: IMAGES.liveCooking,
      image1Alt: "Live Charcoal BBQ Cooking",
      image2: IMAGES.tandooriBbq,
      image2Alt: "Flame-Grilled Seekh Kebabs & Tikka",
      isEven: true
    },
    {
      title: "Consolidated Supplier Sourcing",
      subtitle: "100% certified Halal meat and ingredient networks",
      desc: "RTH Foods leverages its wholesale supply network to integrate premium, fully-vetted, and certified Halal suppliers into your kitchen. We consolidate your trade orders, helping you secure wholesale pricing on meat, spices, and packaging.",
      image1: IMAGES.wholesaleSupply,
      image1Alt: "Consolidated Trade Delivery Logistics",
      image2: IMAGES.karahiCloseup,
      image2Alt: "Sizzling Lahori Lamb Karahi",
      isEven: false
    }
  ];

  return (
    <Layout>
      {/* Editorial Header Banner with Scroll Parallax Zoom (No bottom white fade-out) */}
      <section className="relative h-[65vh] lg:h-[80vh] w-full overflow-hidden flex items-center justify-center bg-black">
        <div 
          className="absolute inset-0 w-full h-full scale-110"
          style={{
            transform: `translateY(${scrollY * 0.35}px) scale(${1.05 + scrollY * 0.0004})`,
            backgroundImage: `url(${IMAGES.restaurantKitchen})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 0.5
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/80 z-10" />
        <div className="container relative z-20 max-w-4xl text-center space-y-4">
          <span className="text-secondary font-semibold tracking-widest text-xs uppercase block mb-2 animate-fade-in">
            Our Specialties
          </span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold tracking-tight text-white leading-tight animate-fade-in-up">
            {serviceData.title}
          </h1>
          <p className="text-sm md:text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed font-light mt-4 animate-fade-in-up delay-200">
            {serviceData.description}
          </p>
        </div>
      </section>

      {/* Cuisine Expertise Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-secondary font-semibold tracking-widest text-xs uppercase block">
              Culinary Heritage
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              South Asian Cuisine Expertise
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              We specialize in authentic Pakistani and Indian recipes, ensuring traditional cooking techniques are integrated with modern kitchen efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cuisineExpertise.map((cuisine, index) => (
              <div 
                key={index} 
                className="p-8 rounded-2xl border border-border/40 bg-card hover:bg-muted/10 hover:border-secondary/30 transition-all duration-300 space-y-3 shadow-sm hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-2">
                  <Flame className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">{cuisine.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cuisine.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="py-24 bg-muted/30 border-y border-border/40">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-secondary font-semibold tracking-widest text-xs uppercase block">
              Our Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              End-to-End Restaurant Management
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              We cover every operational dimension, from menu pricing blueprints to chef recruitment and cost control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="p-8 rounded-2xl border border-border/40 bg-card hover:bg-muted/10 hover:border-secondary/30 transition-all duration-300 space-y-4 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300">
                  <ChefHat className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Process Timeline */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-secondary font-semibold tracking-widest text-xs uppercase block">
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Our Operations Blueprint
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              A structured, step-by-step methodology to ensure your restaurant setup or improvement project is completed perfectly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="space-y-4 bg-card p-6 rounded-xl border border-border/40 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground font-serif text-lg font-bold flex items-center justify-center shadow-md">
                  {step.step}
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mixed Storytelling Sections with Images Intertwined with Layout */}
      <section className="py-24 bg-muted/30 border-y border-border/40">
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
                  Management Division 0{idx + 1}
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

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden mt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
        <img
          src={IMAGES.restaurantKitchen}
          alt="Restaurant background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="container relative z-20 text-center space-y-6 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Elevate Your Restaurant Operations
          </h2>
          <p className="text-sm md:text-md text-primary-foreground/80 leading-relaxed font-light">
            Whether you are opening a new high-end South Asian restaurant or optimizing an existing kitchen's profit margins, our specialist restaurant operations team is here to assist.
          </p>
          <div className="pt-4 flex justify-center gap-4 flex-wrap">
            <Link href="/contact">
              <Button className="bg-secondary text-secondary-foreground hover:bg-white hover:text-black font-medium px-8 py-6 rounded-full text-md transition-all duration-300">
                Book Kitchen Audit
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black font-medium px-8 py-6 rounded-full text-md transition-all duration-300">
                Our Other Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
