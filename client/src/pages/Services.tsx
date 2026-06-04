import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Sparkles, ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { IMAGES, SERVICES } from "@/const";

export default function Services() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      {/* Services Editorial Header Banner with Scroll Parallax (No bottom white fade-out) */}
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
            RTH Foods Portfolio
          </span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold tracking-tight text-white leading-tight">
            Our Hospitality &<br />Catering Divisions
          </h1>
          <p className="text-sm md:text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed font-light mt-4">
            From intimate cafe settings to grand wedding halls and professional food service operations, RTH Foods brings culinary excellence, structure, and reliability to every occasion.
          </p>
        </div>
      </section>

      {/* Services Alternating Blocks (Editorial Layout) */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Floating Background Star Anise */}
        <div 
          className="absolute left-[-80px] top-[15%] w-[280px] h-[280px] pointer-events-none opacity-20"
          style={{ transform: `translateY(${scrollY * -0.08}px) rotate(${scrollY * 0.02}deg)` }}
        >
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663727793216/hoJDaexXMyXhzy43GoDvy2/isolated_cinnamon_star_anise-QvoAHg96HbmCptnNPgC5GB.webp" alt="Spices" className="w-full h-full object-contain" />
        </div>

        <div className="container space-y-32 relative z-10">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Block */}
                <div className={`lg:col-span-6 ${isEven ? "" : "lg:order-2"}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group border border-border/30">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors duration-300" />
                  </div>
                </div>

                {/* Content Block */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? "" : "lg:order-1"}`}>
                  <span className="text-secondary font-semibold tracking-widest text-xs uppercase block">
                    Division 0{index + 1}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground tracking-tight">
                    {service.title}
                  </h2>
                  <h3 className="text-lg font-serif italic text-muted-foreground font-medium leading-relaxed">
                    "{service.subtitle}"
                  </h3>
                  <div className="h-[1px] w-20 bg-secondary" />
                  <p className="text-sm text-foreground/80 leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* Key Benefits / Services List */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {service.features?.slice(0, 4).map((feature, subIdx) => (
                      <div key={subIdx} className="flex gap-3 items-start">
                        <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-xs text-foreground/80 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-6 flex gap-4">
                    <Link href={`/services/${service.id}`}>
                      <Button className="bg-primary hover:bg-secondary hover:text-primary-foreground font-medium rounded-full text-sm px-6 py-2 transition-all duration-300">
                        View Full Details
                        <ArrowUpRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" className="border-border hover:bg-muted font-medium rounded-full text-sm px-6 py-2">
                        Enquire Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Global Supply Chain banner */}
      <section className="py-24 bg-muted/30 border-t border-border/40">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-secondary font-semibold tracking-widest text-xs uppercase block">
              Our Standards
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Exacting Standards. Premium Logistics.
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
              RTH Foods ensures that every branch of our operation—from coffee equipment supply to large-scale hospital and care home food management—is backed by strict hygiene, certified Halal compliance, comprehensive staff vetting, and rapid nationwide logistics.
            </p>
            <div className="pt-4">
              <Link href="/contact">
                <Button className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground rounded-full font-medium text-sm px-8 py-3">
                  Open a Trade Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
