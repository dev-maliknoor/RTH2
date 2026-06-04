import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Shield, Award, Users, Heart, Target, Sparkles, ChevronRight, Milestone, Compass, Leaf } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/const";

export default function About() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const timeline = [
    {
      year: "2010",
      title: "The Culinary Seed",
      desc: "Founded as a boutique event catering outfit in Birmingham, specializing in authentic, high-quality South Asian wedding feasts.",
      image: IMAGES.southAsianFeast,
      side: "left"
    },
    {
      year: "2014",
      title: "Commercial Kitchen Expansion",
      desc: "Invested in our first state-of-the-art commercial central production unit, expanding operations into premium corporate dining.",
      image: IMAGES.restaurantKitchen,
      side: "right"
    },
    {
      year: "2018",
      title: "Cafe & Restaurant Management",
      desc: "Established our specialized consultancy division, helping independent entrepreneurs engineer, build, and run successful cafe operations.",
      image: IMAGES.cafeCounter,
      side: "left"
    },
    {
      year: "2022",
      title: "Consolidated Wholesale Supply",
      desc: "Launched our dedicated logistics network, delivering consolidated trade supplies, custom coffee roasts, and equipment across the UK.",
      image: IMAGES.wholesaleSupply,
      side: "right"
    },
    {
      year: "2026",
      title: "The Future of Food Service",
      desc: "Consolidating all divisions under RTH Foods BB1 LTD, offering fully integrated food service solutions, bespoke wedding planning, and national trade supply.",
      image: IMAGES.hospitalityTeam,
      side: "left"
    }
  ];

  const philosophies = [
    {
      icon: <Leaf className="w-6 h-6 text-secondary" />,
      title: "Sourcing Integrity",
      desc: "We prioritize direct relationships with local growers and certified Halal meat producers, ensuring 100% traceabilty, freshness, and quality across all ingredients."
    },
    {
      icon: <Compass className="w-6 h-6 text-secondary" />,
      title: "Bespoke Solutions",
      desc: "We reject one-size-fits-all templates. Every cafe concept, wedding menu, and corporate catering contract is engineered from scratch to match your specific vision."
    },
    {
      icon: <Shield className="w-6 h-6 text-secondary" />,
      title: "Absolute Reliability",
      desc: "With temperature-controlled delivery fleets and real-time logistics tracking, we promise consistent, on-time delivery across every trade contract."
    }
  ];

  return (
    <Layout>
      {/* Editorial Header Banner with Parallax Scroll (No bottom white fade-out) */}
      <section className="relative h-[60vh] lg:h-[75vh] w-full overflow-hidden flex items-center justify-center bg-black">
        <div 
          className="absolute inset-0 w-full h-full scale-110"
          style={{
            transform: `translateY(${scrollY * 0.35}px) scale(${1.05 + scrollY * 0.0004})`,
            backgroundImage: `url(${IMAGES.hospitalityTeam})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 0.55
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/80 z-10" />
        <div className="container relative z-20 max-w-4xl text-center space-y-4">
          <span className="text-secondary font-semibold tracking-widest text-xs uppercase block mb-2">
            RTH Foods BB1 LTD
          </span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold tracking-tight text-white leading-tight">
            Rooted in Tradition,<br />Refined for Today
          </h1>
          <p className="text-sm md:text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed font-light mt-4">
            A trusted leader in UK food service, cafe setup, restaurant operations, wedding banqueting, corporate dining, and national wholesale supply.
          </p>
        </div>
      </section>

      {/* Clean Intro Grid */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Decorative Floating 3D Mint Asset */}
        <div 
          className="absolute right-[-100px] top-[10%] w-[300px] h-[300px] pointer-events-none opacity-20"
          style={{ transform: `translateY(${scrollY * 0.15}px) rotate(${scrollY * 0.05}deg)` }}
        >
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663727793216/hoJDaexXMyXhzy43GoDvy2/isolated_mint_leaves-D8BZ7f9VYSnSM6ZD2EqqUs.webp" alt="Mint Leaf" className="w-full h-full object-contain" />
        </div>

        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-secondary font-semibold tracking-widest text-xs uppercase block">
                Our Heritage
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground tracking-tight leading-tight">
                Over a Decade of Culinary & Operational Leadership
              </h2>
              <div className="h-[1px] w-20 bg-secondary" />
              <p className="text-sm text-foreground/80 leading-relaxed font-light">
                Founded on the simple belief that exceptional gastronomy and flawless operations should go hand-in-hand, RTH Foods BB1 LTD has grown from a specialized event caterer into a multi-divisional hospitality operator and wholesale supply partner. 
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                With deep expertise in culinary management, equipment supply, and barista training, we coordinate complex dining systems for independent cafes, high-volume restaurants, corporate boardrooms, and grand wedding halls across the UK. Our unshakeable reputation is built on consistency, culinary precision, and a relentless focus on client success.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-border/40">
                <div className="space-y-1">
                  <span className="text-3xl md:text-4xl font-serif font-bold text-secondary">12+</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground block">Years Excellence</span>
                </div>
                <div className="space-y-1">
                  <span className="text-3xl md:text-4xl font-serif font-bold text-secondary">100%</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground block">Halal Certified</span>
                </div>
                <div className="space-y-1">
                  <span className="text-3xl md:text-4xl font-serif font-bold text-secondary">24/7</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground block">Trade Logistics</span>
                </div>
              </div>
            </div>

            {/* Story Visual */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-border/30 relative group">
                <img
                  src={IMAGES.southAsianFeast}
                  alt="Traditional South Asian Feast"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Philosophies Section */}
      <section className="py-24 bg-muted/30 border-y border-border/40">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-secondary font-semibold tracking-widest text-xs uppercase block">
              Our Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              The Values That Fuel Our Excellence
            </h2>
            <p className="text-xs text-muted-foreground max-w-xl mx-auto">
              Our business operations, supply chains, and customer interactions are driven by a commitment to absolute consistency, hygiene, and hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophies.map((value, index) => (
              <div 
                key={index} 
                className="p-8 rounded-2xl border border-border/40 bg-card shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-6"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  {value.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-foreground">{value.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Decorative Floating 3D Coffee Beans Asset */}
        <div 
          className="absolute left-[-50px] top-[40%] w-[250px] h-[250px] pointer-events-none opacity-20"
          style={{ transform: `translateY(${scrollY * -0.1}px) rotate(${scrollY * -0.03}deg)` }}
        >
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663727793216/hoJDaexXMyXhzy43GoDvy2/isolated_coffee_beans-FkQPRPM5jB82crgYdvwn8g.webp" alt="Coffee Beans" className="w-full h-full object-contain" />
        </div>

        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
            <span className="text-secondary font-semibold tracking-widest text-xs uppercase block">
              Our Milestones
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
              Evolution of RTH Foods
            </h2>
            <p className="text-xs text-muted-foreground max-w-xl mx-auto">
              A photographic and historical chronicle of how we expanded our footprint, supply logistics, and operational divisions over the past decade.
            </p>
          </div>

          {/* Central Line Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Center Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[1px] bg-border/80 hidden lg:block" />

            <div className="space-y-20 lg:space-y-32">
              {timeline.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 relative ${
                    item.side === "right" ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot (Desktop only) */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background z-10 hidden lg:block" />

                  {/* Left Side: Content Card */}
                  <div className="w-full lg:w-[45%] space-y-4 bg-card p-8 rounded-2xl border border-border/40 shadow-sm hover:shadow-md transition-all duration-300">
                    <span className="text-secondary font-serif text-3xl font-bold block">{item.year}</span>
                    <h3 className="font-serif text-xl font-bold text-foreground tracking-tight">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-light">{item.desc}</p>
                  </div>

                  {/* Right Side: Visual Asset */}
                  <div className="w-full lg:w-[45%]">
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-border/30 shadow-md group">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
