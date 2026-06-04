import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Shield, Award, Users, Grid, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/const";

export default function Gallery() {
  const [scrollY, setScrollY] = useState(0);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = ["All", "Catering & Events", "Café & Restaurants", "Wholesale & Team"];

  const galleryItems = [
    {
      img: IMAGES.southAsianFeast,
      title: "Authentic South Asian Feast",
      desc: "Vibrant layered biryanis, slow-simmered curries, and traditional sides prepared for a premium event.",
      category: "Catering & Events"
    },
    {
      img: IMAGES.weddingHallBuffet,
      title: "Luxury Wedding Hall Buffet",
      desc: "Double-sided buffet lines set with premium gold chafing dishes and elegant floral decorations.",
      category: "Catering & Events"
    },
    {
      img: IMAGES.weddingStage,
      title: "Bespoke Stage Design",
      desc: "A beautifully styled wedding stage with floral backdrops, crystal chandeliers, and luxury seating.",
      category: "Catering & Events"
    },
    {
      img: IMAGES.corporateCatering,
      title: "Premium Corporate Catering",
      desc: "Beautifully arranged healthy salads, gourmet wraps, and light bites for an executive boardroom lunch.",
      category: "Catering & Events"
    },
    {
      img: IMAGES.cafeCounter,
      title: "Specialty Café Counter Setup",
      desc: "Sleek commercial espresso machines, precision grinders, and freshly baked pastries styled perfectly.",
      category: "Café & Restaurants"
    },
    {
      img: IMAGES.restaurantKitchen,
      title: "Professional Restaurant Kitchen",
      desc: "Highly organized stainless steel cooking lines and preparation stations designed for maximum flow.",
      category: "Café & Restaurants"
    },
    {
      img: IMAGES.wholesaleSupply,
      title: "Consolidated Wholesale Logistics",
      desc: "Eco-friendly takeaway packaging, coffee machines, canned goods, and essential supplies.",
      category: "Wholesale & Team"
    },
    {
      img: IMAGES.hospitalityTeam,
      title: "RTH Foods Professional Team",
      desc: "Our highly trained chefs, baristas, banquet managers, and hospitality support staff.",
      category: "Wholesale & Team"
    }
  ];

  const filteredItems = filter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <Layout>
      {/* Editorial Header Banner with Scroll Parallax Zoom (No bottom white fade-out) */}
      <section className="relative h-[60vh] lg:h-[75vh] w-full overflow-hidden flex items-center justify-center bg-black">
        <div 
          className="absolute inset-0 w-full h-full scale-110"
          style={{
            transform: `translateY(${scrollY * 0.35}px) scale(${1.05 + scrollY * 0.0004})`,
            backgroundImage: `url(${IMAGES.southAsianFeast})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 0.5
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/80 z-10" />
        <div className="container relative z-20 max-w-4xl text-center space-y-4">
          <span className="text-secondary font-semibold tracking-widest text-xs uppercase block mb-2">
            Gallery Portfolio
          </span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold tracking-tight text-white leading-tight">
            Visual Sights of Culinary Craft
          </h1>
          <p className="text-sm md:text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed font-light mt-4">
            Browse through high-quality visual showcases of our wedding stage decor, buffet presentation lines, café setup projects, professional kitchens, and trade inventory.
          </p>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Floating 3D Spices Background Asset */}
        <div 
          className="absolute right-[-100px] top-[15%] w-[280px] h-[280px] pointer-events-none opacity-20"
          style={{ transform: `translateY(${scrollY * -0.08}px) rotate(${scrollY * 0.02}deg)` }}
        >
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663727793216/hoJDaexXMyXhzy43GoDvy2/isolated_cinnamon_star_anise-QvoAHg96HbmCptnNPgC5GB.webp" alt="Spices" className="w-full h-full object-contain" />
        </div>

        <div className="container relative z-10">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2 justify-center mb-16">
            {categories.map((cat) => (
              <Button
                key={cat}
                onClick={() => setFilter(cat)}
                variant={filter === cat ? "default" : "outline"}
                className={`rounded-full text-xs font-semibold tracking-wider uppercase px-6 py-2 transition-all duration-300 ${
                  filter === cat 
                    ? "bg-secondary text-secondary-foreground hover:bg-secondary/90" 
                    : "border-border text-foreground hover:bg-muted"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Masonry-Style Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
              >
                {/* Image Container with Zoom Hover */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Subtle color overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors duration-300" />
                  <span className="absolute top-4 right-4 text-[10px] bg-secondary text-secondary-foreground font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {item.category}
                  </span>
                </div>

                {/* Content Block */}
                <div className="p-6 space-y-2 flex-grow">
                  <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-secondary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
        <img
          src={IMAGES.weddingStage}
          alt="Bespoke banquet"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="container relative z-20 text-center space-y-6 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Ready to Plan Your Next Event Setup?
          </h2>
          <p className="text-sm md:text-md text-primary-foreground/80 leading-relaxed font-light">
            Whether you are looking to replicate our luxury wedding setups, setup a specialty café, or secure a reliable wholesale supplier, we are here to support your objectives.
          </p>
          <div className="pt-4 flex justify-center gap-4 flex-wrap">
            <Link href="/contact">
              <Button className="bg-secondary text-secondary-foreground hover:bg-white hover:text-black font-medium px-8 py-6 rounded-full text-md transition-all duration-300">
                Contact Our Team
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black font-medium px-8 py-6 rounded-full text-md transition-all duration-300">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
