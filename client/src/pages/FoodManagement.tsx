import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { CheckCircle, Shield, Award, Users, ClipboardCheck, Building, GraduationCap, HeartPulse } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { IMAGES, SERVICES } from "@/const";

export default function FoodManagement() {
  const [scrollY, setScrollY] = useState(0);
  const serviceData = SERVICES.find(s => s.id === "food-management")!;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectors = [
    { title: "Schools & Academies", desc: "Healthy, fully compliant lunch menus that align with National School Food Standards and satisfy students." },
    { title: "Universities & Colleges", desc: "Fast-casual, diverse food court concepts, grab-and-go options, and specialty coffee bars for campus life." },
    { title: "Hospitals & Care Homes", desc: "Nutritious, dietary-specific, and allergen-safe meals designed for patient health and rapid recovery." },
    { title: "Corporate Headquarters", desc: "High-end executive dining, employee cafeterias, and smart micro-market self-checkout hubs." }
  ];

  const services = [
    { title: "Menu Audit & Compliance", desc: "Ensuring all food programs meet rigorous local, national, and dietary regulatory requirements." },
    { title: "Supplier Sourcing Logistics", desc: "Direct-to-farm and consolidated trade wholesale logistics to reduce raw food costs by up to 20%." },
    { title: "HACCP Food Safety Setup", desc: "Implementing comprehensive food safety plans, allergen matrices, and staff hygiene logs." },
    { title: "Kitchen Speed Optimization", desc: "Redesigning cooking flows and POS checkouts to reduce queue times during peak lunch hours." },
    { title: "Eco-Friendly Operations", desc: "Introducing food-waste tracking, zero-single-use-plastic, and energy-efficient kitchen systems." },
    { title: "Vetted Staff Placement", desc: "Providing DBS-checked chefs, kitchen assistants, and cashiers for sensitive institutional dining." }
  ];

  const process = [
    { step: "01", title: "Site Audit", desc: "Auditing your current kitchen infrastructure, serving flow, and procurement logs." },
    { step: "02", title: "Compliance Plan", desc: "Drafting dietary, allergen, and HACCP blueprints tailored specifically to your sector." },
    { step: "03", title: "Transition Support", desc: "Upgrading equipment, installing POS systems, and onboarding trained, vetted staff." },
    { step: "04", title: "Daily Management", desc: "Managing daily operations, supply logistics, menu rotation, and periodic hygiene audits." }
  ];

  return (
    <Layout>
      {/* Editorial Header Banner with Scroll Parallax Zoom (No bottom white fade-out) */}
      <section className="relative h-[60vh] lg:h-[75vh] w-full overflow-hidden flex items-center justify-center bg-black">
        <div 
          className="absolute inset-0 w-full h-full scale-110"
          style={{
            transform: `translateY(${scrollY * 0.35}px) scale(${1.05 + scrollY * 0.0004})`,
            backgroundImage: `url(${IMAGES.institutionalCafeteria})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 0.5
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/80 z-10" />
        <div className="container relative z-20 max-w-4xl text-center space-y-4">
          <span className="text-secondary font-semibold tracking-widest text-xs uppercase block mb-2">
            Institutional Catering
          </span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold tracking-tight text-white leading-tight">
            {serviceData.title}
          </h1>
          <p className="text-sm md:text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed font-light mt-4">
            {serviceData.description}
          </p>
        </div>
      </section>

      {/* Sectors We Serve Grid */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Floating 3D Mint Background Asset */}
        <div 
          className="absolute left-[-80px] top-[20%] w-[250px] h-[250px] pointer-events-none opacity-20"
          style={{ transform: `translateY(${scrollY * -0.05}px) rotate(${scrollY * 0.02}deg)` }}
        >
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663727793216/hoJDaexXMyXhzy43GoDvy2/isolated_mint_leaves-D8BZ7f9VYSnSM6ZD2EqqUs.webp" alt="Mint Leaf" className="w-full h-full object-contain" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-secondary font-semibold tracking-widest text-xs uppercase block">
              Sectors We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Institutional & Workplace Food Service
            </h2>
            <p className="text-xs text-muted-foreground max-w-xl mx-auto">
              We design and manage professional, hygienic, and highly cost-effective dining programs across a wide range of public and private sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, index) => {
              let icon = <Building className="w-6 h-6 text-secondary" />;
              if (sector.title.includes("Schools")) icon = <GraduationCap className="w-6 h-6 text-secondary" />;
              if (sector.title.includes("Hospitals")) icon = <HeartPulse className="w-6 h-6 text-secondary" />;

              return (
                <div 
                  key={index} 
                  className="p-8 rounded-2xl border border-border/40 bg-card hover:bg-muted/10 hover:border-secondary/30 transition-all duration-300 space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    {icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground">{sector.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{sector.desc}</p>
                </div>
              );
            })}
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
              Comprehensive Food Service Systems
            </h2>
            <p className="text-xs text-muted-foreground max-w-xl mx-auto">
              We manage everything from procurement logistics and recipe auditing to HACCP compliance, cost controls, and line speed optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="p-8 rounded-2xl border border-border/40 bg-card hover:bg-muted/10 hover:border-secondary/30 transition-all duration-300 space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <ClipboardCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">{service.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{service.desc}</p>
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
              Our Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Transition & Management Blueprint
            </h2>
            <p className="text-xs text-muted-foreground max-w-xl mx-auto">
              A structured, step-by-step methodology to transition and optimize your kitchen operations smoothly.
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
          src={IMAGES.hospitalityTeam}
          alt="Kitchen team background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="container relative z-20 text-center space-y-6 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Optimize Your Kitchen Operations Today
          </h2>
          <p className="text-sm md:text-md text-primary-foreground/80 leading-relaxed font-light">
            Contact our food management division today. Let's schedule an initial service review to audit your current kitchen, menu, supply chain, and compliance.
          </p>
          <div className="pt-4 flex justify-center gap-4 flex-wrap">
            <Link href="/contact">
              <Button className="bg-secondary text-secondary-foreground hover:bg-white hover:text-black font-medium px-8 py-6 rounded-full text-md transition-all duration-300">
                Request a Kitchen Audit
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
