import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, Star, Award, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/const";

export default function ParallaxHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { value: "12+", label: "Years Excellence", icon: <Award className="w-4 h-4 text-secondary" /> },
    { value: "UK-Wide", label: "Delivery Network", icon: <Users className="w-4 h-4 text-secondary" /> },
    { value: "100%", label: "Halal Certified", icon: <Shield className="w-4 h-4 text-secondary" /> },
    { value: "Trade", label: "Priority Accounts", icon: <Star className="w-4 h-4 text-secondary" /> }
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background Image with Parallax zoom & pan */}
      <div 
        className="absolute inset-0 w-full h-full scale-110"
        style={{
          transform: `translateY(${scrollY * 0.4}px) scale(${1.1 + scrollY * 0.0005})`,
          backgroundImage: `url(${IMAGES.southAsianFeast})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: 0.65
        }}
      />

      {/* Modern gradient mask overlay - completely dark, no light fade at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/90 z-10" />

      {/* Floating abstract character light effect */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[120px] pointer-events-none"
        style={{
          top: `${30 + scrollY * 0.1}%`,
          left: `${20 + scrollY * 0.05}%`,
        }}
      />

      {/* Hero Content */}
      <div className="container relative z-20 max-w-5xl text-center px-4 space-y-8 select-none">
        {/* Animated tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/30 bg-black/60 backdrop-blur-md animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span className="text-secondary font-semibold tracking-widest text-[10px] uppercase">
            UK Hospitality & Supply Specialists
          </span>
        </div>

        {/* Text Reveal Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-white leading-[1.1] animate-fade-in-up">
          Premium Food.<br />
          <span className="text-secondary bg-clip-text text-transparent bg-gradient-to-r from-secondary via-secondary/90 to-white">
            National Logistics.
          </span>
        </h1>

        {/* Descriptive subheadline */}
        <p className="text-md md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light font-sans animate-fade-in-up delay-200">
          RTH Foods BB1 LTD delivers cafe management, restaurant operations, wedding hall catering, corporate dining, food service management, and wholesale supply across the UK.
        </p>

        {/* CTAs with magnetic container feel */}
        <div className="pt-6 flex justify-center gap-6 flex-wrap animate-fade-in-up delay-300">
          <Link href="/services">
            <Button className="bg-secondary text-secondary-foreground hover:bg-white hover:text-black font-semibold px-8 py-7 rounded-full text-md transition-all duration-300 transform hover:scale-105 shadow-lg shadow-secondary/20">
              Explore Our Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black font-semibold px-8 py-7 rounded-full text-md transition-all duration-300 transform hover:scale-105">
              Request a Consultation
            </Button>
          </Link>
        </div>

        {/* Stats Grid at bottom of Hero */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-16 animate-fade-in-up delay-400">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-black/60 border border-border/10 rounded-2xl p-4 backdrop-blur-md hover:border-secondary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-2 justify-center mb-1">
                {stat.icon}
                <span className="text-lg md:text-xl font-bold text-white font-serif">{stat.value}</span>
              </div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
