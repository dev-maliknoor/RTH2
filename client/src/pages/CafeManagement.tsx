import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { CheckCircle, Coffee, Shield, Award, Users, ArrowRight, Play, Cpu, Sparkles, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { IMAGES, SERVICES } from "@/const";

export default function CafeManagement() {
  const serviceData = SERVICES.find(s => s.id === "cafe-management")!;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { title: "Turnkey Setup & Layout", desc: "Espresso bar layout planning, ergonomic bar designs, and complete commercial kitchen blueprints." },
    { title: "Specialty Coffee Sourcing", desc: "Supplying exclusive custom-roasted Arabica beans and premium ingredients." },
    { title: "SCA Barista Training", desc: "Training staff on extraction theory, sensory standards, latte art, and high-speed service." },
    { title: "Equipment Procurement", desc: "Sourcing and maintaining industry-standard machinery (La Marzocco, Victoria Arduino, Mahlkönig)." },
    { title: "Daily Operational Audits", desc: "On-site management support, cost-control logs, and quality control systems setup." },
    { title: "Licensing & Health Compliance", desc: "Managing local authority health licenses, allergen compliance, and HACCP certifications." }
  ];

  const process = [
    { step: "01", title: "Concept Design", desc: "Coordinating your brand's unique design language, menu style, and target audience." },
    { step: "02", title: "Bar Engineering", desc: "Designing high-speed espresso bar layouts and procuring premium commercial machines." },
    { step: "03", title: "Staff Onboarding", desc: "Hiring, vetting, and training your baristas on sensory standards and service speeds." },
    { step: "04", title: "Grand Opening", desc: "Providing hands-on on-site coordination and audits during your launch week." }
  ];

  // At least 8 high-quality images mixed up into alternating storytelling sections + interactive blocks
  const sections = [
    {
      title: "Espresso Bar Design & Engineering",
      subtitle: "Sleek, ergonomic layouts designed for high volume",
      desc: "Our bar design specialists create stunning espresso bars that prioritize barista workflow, speed of service, and guest visibility. We design custom drop-in trays, cup rinsers, and configure dual water filtration lines to ensure peak performance during busy morning rushes.",
      image1: IMAGES.cafeCounter,
      image1Alt: "Premium Chrome Espresso Bar Setup",
      image2: IMAGES.latteArt,
      image2Alt: "Perfect Microfoam Latte Art Detail",
      isEven: true
    },
    {
      title: "Elite Barista Onboarding & Training",
      subtitle: "SCA-certified sensory and milk-texturing standards",
      desc: "We hire, vet, and train your café personnel using our SCA-aligned training syllabus. Our on-site training consultants cover extraction science, sensory calibration, milk texturing, custom drink preparation, and quick customer interaction strategies.",
      image1: IMAGES.cafeTeam,
      image1Alt: "Our Elite Barista Team",
      image2: IMAGES.cafeCustomers,
      image2Alt: "Vibrant Café Guest Ambiance",
      isEven: false
    },
    {
      title: "Specialty Sourcing & Consolidated Supply",
      subtitle: "Exclusive custom-roasted coffee bean trade accounts",
      desc: "RTH Foods operates a dedicated wholesale roasting network. We supply café owners with consistent, high-grade custom roasts alongside a consolidated supply of branded paper cups, compostable lids, tea syrups, and specialty milk alternatives.",
      image1: IMAGES.wholesaleSupply,
      image1Alt: "Wholesale Delivery Logistics",
      image2: IMAGES.wholesaleWarehouse,
      image2Alt: "Trade Bean Stock & Logistics",
      isEven: true
    },
    {
      title: "Operational Vetting & Management",
      subtitle: "Maintaining 5-star health ratings and healthy margins",
      desc: "Our support doesn't end after your launch week. We conduct regular operational audits, implement strict HACCP food safety checklists, review POS transaction logs, and optimize food-cost margins to ensure your café stays profitable.",
      image1: IMAGES.hospitalityTeam,
      image1Alt: "On-Site Café Consultants",
      image2: IMAGES.teaMocktails,
      image2Alt: "Cold Brew & Mocktail Specialty Drinks",
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
            backgroundImage: `url(${IMAGES.cafeCounter})`,
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

      {/* Services List Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-secondary font-semibold tracking-widest text-xs uppercase block">
              Our Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              End-to-End Cafe Operations
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              We cover every operational dimension, transforming independent cafe visions into highly profitable, standardized realities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="p-8 rounded-2xl border border-border/40 bg-card hover:bg-muted/10 hover:border-secondary/30 transition-all duration-300 space-y-4 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300">
                  <Coffee className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Process Timeline */}
      <section className="py-24 bg-muted/30 border-y border-border/40">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-secondary font-semibold tracking-widest text-xs uppercase block">
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Our Cafe Launch Process
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              A structured, step-by-step methodology to ensure your cafe opens smoothly, operates perfectly, and maintains brand standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {process.map((step, index) => (
              <div key={index} className="space-y-4 relative z-10 bg-card p-6 rounded-xl border border-border/40 shadow-sm">
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
      <section className="py-24 bg-background">
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
                  Operations Division 0{idx + 1}
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
          src={IMAGES.cafeCounter}
          alt="Cafe background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="container relative z-20 text-center space-y-6 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Ready to Launch Your Premium Cafe?
          </h2>
          <p className="text-sm md:text-md text-primary-foreground/80 leading-relaxed font-light">
            Contact our cafe management division today. Let's schedule an initial consultation to discuss your concept, layout ideas, equipment needs, and training options.
          </p>
          <div className="pt-4 flex justify-center gap-4 flex-wrap">
            <Link href="/contact">
              <Button className="bg-secondary text-secondary-foreground hover:bg-white hover:text-black font-medium px-8 py-6 rounded-full text-md transition-all duration-300">
                Schedule a Consultation
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
