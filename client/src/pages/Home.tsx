import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, Star, CheckCircle, Shield, Award, Users, Calendar, Award as Trophy, ArrowUpRight, Coffee, ChefHat, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IMAGES, SERVICES, TESTIMONIALS, FAQS } from "@/const";

export default function Home() {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [stats, setStats] = useState({ years: 0, cities: 0, events: 0, rating: 0 });

  const heroSlides = [
    {
      image: IMAGES.southAsianFeast,
      tag: "UK Food Service Specialists",
      title: "Premium Food. National Logistics.",
      subtitle: "RTH Foods BB1 LTD delivers cafe management, restaurant operations, wedding hall catering, corporate dining, food service management, and wholesale supply across UK."
    },
    {
      image: IMAGES.weddingHallBuffet,
      tag: "Luxury Event Banqueting",
      title: "Grand Wedding & Banquet Catering",
      subtitle: "Luxurious setups, authentic traditional Pakistani and Indian cuisine, and flawless silver service for your most celebrated occasions."
    },
    {
      image: IMAGES.cafeCounter,
      tag: "Turnkey Café Operations",
      title: " Cafe & Restaurant Operations",
      subtitle: "From layout planning and commercial equipment sourcing to barista standards, menu creation, and daily management."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Rotate hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Animate stats counters on mount
  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setStats({
        years: Math.min(Math.round((12 / steps) * step), 12),
        cities: Math.min(Math.round((50 / steps) * step), 50),
        events: Math.min(Math.round((1200 / steps) * step), 1200),
        rating: parseFloat(Math.min((4.9 / steps) * step, 4.9).toFixed(1))
      });

      if (step >= steps) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* 1. CLEAN BREATHTAKING HERO BANNER WITH SCROLL PARALLAX ZOOM (No fade-in on sections) */}
      <section className="relative h-screen w-full overflow-hidden bg-black text-white flex items-center">
        {/* Background Slide (Smooth Parallax Zoom based on scroll) */}
        <div 
          className="absolute inset-0 w-full h-full scale-110"
          style={{
            transform: `translateY(${scrollY * 0.35}px) scale(${1.05 + scrollY * 0.0004})`,
            backgroundImage: `url(${heroSlides[activeHeroSlide].image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 0.6
          }}
        />
        
        {/* Elegant clean gradient mask overlay */}

<div className="absolute inset-0 bg-black/45 z-10" />
        {/* Hero Content */}
        <div className="container relative h-full flex flex-col justify-center z-20">
          <div className="max-w-4xl space-y-6">
            <span className="text-secondary font-semibold tracking-[0.25em] text-xs lg:text-sm uppercase block">
              {heroSlides[activeHeroSlide].tag}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold leading-[1.1] tracking-tight text-white">
              {heroSlides[activeHeroSlide].title.split(". ").map((text, idx) => (
                <React.Fragment key={idx}>
                  {text}
                  {idx === 0 && <br />}
                </React.Fragment>
              ))}
            </h1>
            <p className="text-sm md:text-lg text-white/80 leading-relaxed font-light max-w-2xl font-sans">
              {heroSlides[activeHeroSlide].subtitle}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/services">
                <Button className="bg-secondary text-secondary-foreground hover:bg-white hover:text-black font-medium px-8 py-6 rounded-full text-md transition-all duration-300 shadow-lg hover:shadow-secondary/20">
                  Explore Our Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black font-medium px-8 py-6 rounded-full text-md transition-all duration-300">
                  Request a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveHeroSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeHeroSlide ? "w-8 bg-secondary" : "w-2 bg-white/40 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. CLEAN BREADFOOD-STYLE INTRO GRID WITH FLOATING 3D ASSET */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Floating 3D Mint Leaves Background Asset */}
        <div 
          className="absolute right-[-100px] top-[15%] w-[350px] h-[350px] pointer-events-none opacity-25 z-0"
          style={{
            transform: `translateY(${scrollY * 0.15}px) rotate(${scrollY * 0.05}deg)`
          }}
        >
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663727793216/hoJDaexXMyXhzy43GoDvy2/isolated_mint_leaves-D8BZ7f9VYSnSM6ZD2EqqUs.webp" 
            alt="Floating Mint Leaves" 
            className="w-full h-full object-contain"
          />
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-secondary font-semibold tracking-widest text-xs uppercase block">
                Our Story & Heritage
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-foreground leading-tight">
                Rooted in Tradition,<br />Refined for Today
              </h2>
              <div className="h-[1px] w-20 bg-secondary" />
              <p className="text-sm text-foreground/80 leading-relaxed font-light">
                RTH Foods BB1 LTD was founded on the belief that exceptional food can transform any occasion. From our deep-rooted catering management history to becoming a trusted hospitality and wholesale supply partner across the UK, RTH Foods has built its reputation on quality, reliability, presentation, and professional service.
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                As a professional food service management specialist since 2010, we possess over 12 years of experience. We serve restaurants, cafes, wedding planners, corporate clients, food service operators, institutions, and independent traders with the same dedication across every engagement, providing reliable support and quality-driven supply.
              </p>
              <div className="pt-4">
                <Link href="/about">
                  <Button variant="ghost" className="text-secondary hover:text-foreground font-semibold p-0 group">
                    Read Our Full Story
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Story Visual Grid */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-border/30 group relative">
                <img
                  src={IMAGES.hospitalityTeam}
                  alt="RTH Foods Professional Team"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              {/* Overlapping Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl max-w-[240px] border border-border/10">
                <Trophy className="w-8 h-8 text-secondary mb-3 animate-bounce" />
                <span className="text-3xl font-serif font-bold block text-secondary">{stats.years}+ Years</span>
                <span className="text-[10px] text-primary-foreground/70 block uppercase tracking-wider font-semibold mt-1">
                  Of trusted hospitality management
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLEAN SERVICE OVERVIEW SECTION (Bidfood Clean Interface) */}
      <section className="py-24 bg-muted/30 border-y border-border/40 relative overflow-hidden">
        {/* Floating 3D Coffee Beans Background Asset */}
        <div 
          className="absolute left-[-80px] top-[40%] w-[300px] h-[300px] pointer-events-none opacity-20 z-0"
          style={{
            transform: `translateY(${scrollY * -0.1}px) rotate(${scrollY * -0.03}deg)`
          }}
        >
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663727793216/hoJDaexXMyXhzy43GoDvy2/isolated_coffee_beans-FkQPRPM5jB82crgYdvwn8g.webp" 
            alt="Floating Coffee Beans" 
            className="w-full h-full object-contain"
          />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-secondary font-semibold tracking-widest text-xs uppercase block">
              What We Do
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-foreground">
              Complete Food & Hospitality Solutions
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              From managing boutique cafes to orchestrating grand wedding banquets and supplying wholesale partners nationwide.
            </p>
          </div>

          {/* Interactive Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Card 
                key={service.id} 
                className="group overflow-hidden border-border/50 hover:border-secondary/50 bg-card shadow-sm hover:shadow-xl transition-all duration-500 rounded-2xl flex flex-col h-full"
              >
                {/* Card Image with zoom hover */}
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Subtle color overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                <CardContent className="p-8 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold group-hover:text-secondary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                    <Link href={`/services/${service.id}`}>
                      <span className="text-xs font-semibold uppercase tracking-wider text-foreground group-hover:text-secondary flex items-center gap-1 cursor-pointer">
                        Discover More
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY RTH FOODS SECTION (Aesthetic Standards-Driven) */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Floating 3D Spices Background Asset */}
        <div 
          className="absolute right-[-100px] bottom-[10%] w-[320px] h-[300px] pointer-events-none opacity-20 z-0"
          style={{
            transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * -0.05}deg)`
          }}
        >
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663727793216/hoJDaexXMyXhzy43GoDvy2/isolated_cinnamon_star_anise-QvoAHg96HbmCptnNPgC5GB.webp" 
            alt="Floating Spices" 
            className="w-full h-full object-contain"
          />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-secondary font-semibold tracking-widest text-xs uppercase block">
              Why Partner With Us
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-foreground">
              A Standards-Driven Enterprise
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              We combine deep culinary heritage with robust, modern corporate systems to deliver flawless food service nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Award-Winning Quality", desc: "Our chefs and baristas hold elite industry standards, preparing food with unparalleled passion and presentation." },
              { title: "Trade Account Benefits", desc: "Unlock priority ordering, customized pricing brackets, credit facilities, and dedicated account support." },
              { title: "Reliable UK Delivery", desc: "A robust supply chain logistics network ensuring your fresh, ambient, or equipment orders arrive on time, every time." },
              { title: "Expert Knowledge", desc: "Over 12 years of hands-on operations experience in setup, menu design, compliance, and staff training." },
              { title: "Halal & Dietary Expertise", desc: "We are UK specialists in certified Halal culinary operations, alongside vegan, vegetarian, and allergen-aware programs." },
              { title: "End-to-End Hospitality Support", desc: "From concept planning and layout blueprints to launch marketing and daily operations audits." }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="p-8 rounded-2xl border border-border/40 bg-card hover:bg-muted/10 hover:border-secondary/30 transition-all duration-300 space-y-3 shadow-sm hover:-translate-y-1 group"
              >
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">{benefit.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS & CASE STUDIES */}
      <section className="py-24 bg-muted/30 border-t border-border/40">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-secondary font-semibold tracking-widest text-xs uppercase block">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-foreground">
              What Our Partners Say
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Read real feedback from café owners, corporate clients, and wedding couples who trust RTH Foods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {TESTIMONIALS.slice(0, 2).map((item, index) => (
              <div 
                key={index} 
                className="p-8 rounded-2xl border border-border/40 bg-card shadow-sm hover:shadow-md transition-all duration-300 space-y-4 relative"
              >
                <div className="flex items-center gap-1 text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed italic font-light">
                  "{item.quote}"
                </p>
                <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                  <div>
                    <span className="block font-serif text-md font-bold text-foreground">{item.author}</span>
                    <span className="block text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">{item.role}</span>
                  </div>
                  <span className="text-xs bg-secondary/10 text-secondary font-semibold px-3 py-1 rounded-full">
                    {item.location}
                  </span>
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
          src={IMAGES.wholesaleSupply}
          alt="Wholesale supply"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="container relative z-20 text-center space-y-6 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Partner With a Trusted Food Service Leader
          </h2>
          <p className="text-sm md:text-md text-primary-foreground/80 leading-relaxed font-light">
            Whether you require cafe setup assistance, full-scale restaurant operations management, reliable trade supply lines, or elegant wedding catering, we have the experience and resources to deliver.
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
