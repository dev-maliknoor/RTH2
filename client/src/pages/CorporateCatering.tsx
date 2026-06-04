import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { CheckCircle, Briefcase, Shield, Award, Users, FileText, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { IMAGES, SERVICES } from "@/const";

export default function CorporateCatering() {
  const [scrollY, setScrollY] = useState(0);
  const serviceData = SERVICES.find(s => s.id === "corporate-catering")!;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { title: "Boardroom Lunches", desc: "Punctual, beautifully presented bento boxes or platters tailored for executive meetings." },
    { title: "Conference Refreshments", desc: "Premium coffee stations, herbal teas, and freshly baked morning pastries for attendees." },
    { title: "Company Gala Events", desc: "Full-scale hot buffet setups with professional serving staff for corporate milestones." },
    { title: "Client Presentations", desc: "Impressive, fine-dining options designed to delight and engage key business clients." }
  ];

  const packages = [
    { title: "Express Working Lunch", desc: "Assorted gourmet sandwiches, wraps, seasonal fruit platters, and soft drinks." },
    { title: "Hot Executive Buffet", desc: "A selection of 2 main courses (including authentic Halal options), sides, and gourmet desserts." },
    { title: "Networking Canapés", desc: "Elegant, bite-sized hot and cold delicacies served alongside premium mocktails." }
  ];

  const process = [
    { step: "01", title: "Submit Brief", desc: "Share your date, guest count, location, and culinary preferences with our team." },
    { step: "02", title: "Custom Proposal", desc: "Receive a tailored menu design, service outline, and itemized transparent quote." },
    { step: "03", title: "On-Site Delivery", desc: "Our staff delivers, sets up, and styles the catering stations before your guests arrive." },
    { step: "04", title: "Flawless Service", desc: "Enjoy professional service during the event, followed by efficient, clean pack-down." }
  ];

  return (
    <Layout>
      {/* Editorial Header Banner with Scroll Parallax Zoom (No bottom white fade-out) */}
      <section className="relative h-[60vh] lg:h-[75vh] w-full overflow-hidden flex items-center justify-center bg-black">
        <div 
          className="absolute inset-0 w-full h-full scale-110"
          style={{
            transform: `translateY(${scrollY * 0.35}px) scale(${1.05 + scrollY * 0.0004})`,
            backgroundImage: `url(${IMAGES.corporateCatering})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 0.5
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/80 z-10" />
        <div className="container relative z-20 max-w-4xl text-center space-y-4">
          <span className="text-secondary font-semibold tracking-widest text-xs uppercase block mb-2">
            Business Dining
          </span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold tracking-tight text-white leading-tight">
            {serviceData.title}
          </h1>
          <p className="text-sm md:text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed font-light mt-4">
            {serviceData.description}
          </p>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Floating 3D Mint Background Asset */}
        <div 
          className="absolute right-[-100px] top-[20%] w-[250px] h-[250px] pointer-events-none opacity-20"
          style={{ transform: `translateY(${scrollY * -0.05}px) rotate(${scrollY * 0.02}deg)` }}
        >
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663727793216/hoJDaexXMyXhzy43GoDvy2/isolated_mint_leaves-D8BZ7f9VYSnSM6ZD2EqqUs.webp" alt="Mint Leaf" className="w-full h-full object-contain" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-secondary font-semibold tracking-widest text-xs uppercase block">
              Business Dining
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Professional Corporate Services
            </h2>
            <p className="text-xs text-muted-foreground max-w-xl mx-auto">
              We deliver punctual, beautifully styled, and delicious culinary options tailored specifically for executive settings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="p-8 rounded-2xl border border-border/40 bg-card hover:bg-muted/10 hover:border-secondary/30 transition-all duration-300 flex gap-6"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Packages Grid */}
      <section className="py-24 bg-muted/30 border-y border-border/40">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-secondary font-semibold tracking-widest text-xs uppercase block">
              Our Packages
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Executive Catering Packages
            </h2>
            <p className="text-xs text-muted-foreground max-w-xl mx-auto">
              Select from our curated business packages or coordinate with our culinary director to design a bespoke custom menu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className="p-8 rounded-2xl border border-border/40 bg-card hover:bg-muted/10 hover:border-secondary/30 transition-all duration-300 space-y-3"
              >
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-2">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">{pkg.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{pkg.desc}</p>
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
              Event Planning
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Our Seamless Booking Process
            </h2>
            <p className="text-xs text-muted-foreground max-w-xl mx-auto">
              A structured, step-by-step methodology to ensure your corporate lunch or client meeting is catered flawlessly.
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

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
        <img
          src={IMAGES.corporateCatering}
          alt="Corporate background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="container relative z-20 text-center space-y-6 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Elevate Your Next Corporate Gathering
          </h2>
          <p className="text-sm md:text-md text-primary-foreground/80 leading-relaxed font-light">
            Contact our corporate catering division today. Let's discuss your upcoming event, guest count, dietary restrictions, and menu selection.
          </p>
          <div className="pt-4 flex justify-center gap-4 flex-wrap">
            <Link href="/contact">
              <Button className="bg-secondary text-secondary-foreground hover:bg-white hover:text-black font-medium px-8 py-6 rounded-full text-md transition-all duration-300">
                Submit an Event Brief
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black font-medium px-8 py-6 rounded-full text-md transition-all duration-300">
                Other Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
