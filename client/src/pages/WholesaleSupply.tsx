import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { CheckCircle, Truck, Shield, Award, Users, Mail, Phone, ArrowRight, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { IMAGES, SERVICES } from "@/const";
import { toast } from "sonner";

export default function WholesaleSupply() {
  const [scrollY, setScrollY] = useState(0);
  const serviceData = SERVICES.find(s => s.id === "wholesale-supply")!;
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    categories: [] as string[],
    message: ""
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCheckboxChange = (category: string) => {
    setFormData(prev => {
      const isSelected = prev.categories.includes(category);
      const updated = isSelected 
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category];
      return { ...prev, categories: updated };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.businessName || !formData.contactName || !formData.email) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Trade enquiry submitted successfully! Our team will contact you within 24 hours.");
    setFormData({
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      categories: [],
      message: ""
    });
  };

  const categories = [
    { title: "Specialty Coffee Beans", desc: "Exclusive, custom-roasted Arabica and Robusta beans packaged to seal in maximum aroma and flavor." },
    { title: "Espresso Machinery", desc: "Sourcing, installation, and maintenance of premium espresso machines, grinders, and brewers." },
    { title: "Branded Packaging", desc: "Custom-printed paper cups, takeaway boxes, and premium tin cans that highlight your brand identity." },
    { title: "Ambient Goods", desc: "A robust inventory of high-quality baking supplies, syrups, and long-shelf-life ingredients." },
    { title: "Catering Disposables", desc: "Eco-friendly, biodegradable, and heavy-duty disposables for fast-casual food services." },
    { title: "Kitchen Essentials", desc: "Heavy commercial cookware, chef knives, storage solutions, and HACCP-compliant tools." }
  ];

  const benefits = [
    { title: "Custom Pricing Brackets", desc: "Unlock deep volume-based discounts tailored specifically to your business size and order frequency." },
    { title: "Consolidated Shipping", desc: "Reduce logistics costs with single-delivery shipping across our entire range of ingredients and goods." },
    { title: "Priority Next-Day Delivery", desc: "Receive fast, reliable, and trackable next-day shipping throughout the UK for urgent restocks." },
    { title: "Flexible Credit Terms", desc: "Verified trade account partners can apply for flexible payment and credit options up to 30 days." },
    { title: "Dedicated Account Manager", desc: "Get direct, one-on-one support from a logistics expert who understands your menu and operations." },
    { title: "Regulatory Compliance", desc: "Rest assured knowing all wholesale products are fully compliant with UK food safety and allergen standards." }
  ];

  return (
    <Layout>
      {/* Editorial Header Banner with Scroll Parallax Zoom (No bottom white fade-out) */}
      <section className="relative h-[60vh] lg:h-[75vh] w-full overflow-hidden flex items-center justify-center bg-black">
        <div 
          className="absolute inset-0 w-full h-full scale-110"
          style={{
            transform: `translateY(${scrollY * 0.35}px) scale(${1.05 + scrollY * 0.0004})`,
            backgroundImage: `url(${IMAGES.wholesaleWarehouse})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 0.5
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/80 z-10" />
        <div className="container relative z-20 max-w-4xl text-center space-y-4">
          <span className="text-secondary font-semibold tracking-widest text-xs uppercase block mb-2">
            Wholesale & Supply
          </span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold tracking-tight text-white leading-tight">
            {serviceData.title}
          </h1>
          <p className="text-sm md:text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed font-light mt-4">
            {serviceData.description}
          </p>
        </div>
      </section>

      {/* Wholesale Categories Grid */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Floating 3D Coffee Beans Background Asset */}
        <div 
          className="absolute left-[-80px] top-[15%] w-[250px] h-[250px] pointer-events-none opacity-20"
          style={{ transform: `translateY(${scrollY * -0.05}px) rotate(${scrollY * 0.02}deg)` }}
        >
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663727793216/hoJDaexXMyXhzy43GoDvy2/isolated_coffee_beans-FkQPRPM5jB82crgYdvwn8g.webp" alt="Coffee Bean" className="w-full h-full object-contain" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-secondary font-semibold tracking-widest text-xs uppercase block">
              Our Inventory
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Wholesale Product Categories
            </h2>
            <p className="text-xs text-muted-foreground max-w-xl mx-auto">
              We supply cafes, restaurants, and catering operations with the premium ingredients, equipment, and packaging they trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, index) => (
              <div 
                key={index} 
                className="p-8 rounded-2xl border border-border/40 bg-card hover:bg-muted/10 hover:border-secondary/30 transition-all duration-300 space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">{cat.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Account Benefits Grid */}
      <section className="py-24 bg-muted/30 border-y border-border/40">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-secondary font-semibold tracking-widest text-xs uppercase block">
              Partner Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Exclusive Trade Account Benefits
            </h2>
            <p className="text-xs text-muted-foreground max-w-xl mx-auto">
              Open an enquiry-based trade account with RTH Foods to streamline your logistics and reduce operational costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="p-8 rounded-2xl border border-border/40 bg-card hover:bg-muted/10 hover:border-secondary/30 transition-all duration-300 space-y-3"
              >
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-2">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">{benefit.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Enquiry Form Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Form Info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-secondary font-semibold tracking-widest text-xs uppercase block">
                Trade Enquiry
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground leading-tight">
                Request a Wholesale Price List
              </h2>
              <div className="h-[1px] w-20 bg-secondary" />
              <p className="text-xs text-muted-foreground leading-relaxed font-light">
                Fill out our brief trade enquiry form. Select the categories of interest, and our wholesale account managers will contact you with custom trade pricing brackets, catalogs, and credit application terms.
              </p>
              <div className="space-y-4 pt-2 text-xs text-foreground/80">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-secondary" />
                  <a href="tel:+441210000000" className="hover:text-secondary">+44 (0) 121 000 0000</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-secondary" />
                  <a href="mailto:info@rthfoodsbb1.shop" className="hover:text-secondary">info@rthfoodsbb1.shop</a>
                </div>
              </div>
            </div>

            {/* Form Block */}
            <div className="lg:col-span-7 bg-card p-8 lg:p-10 rounded-2xl border border-border/40 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-foreground">Business Name *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.businessName}
                      onChange={e => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-secondary text-sm bg-background text-foreground" 
                      placeholder="e.g. The Grand Café"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-foreground">Contact Name *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.contactName}
                      onChange={e => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-secondary text-sm bg-background text-foreground" 
                      placeholder="e.g. John Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-foreground">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-secondary text-sm bg-background text-foreground" 
                      placeholder="e.g. john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-foreground">Phone Number</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-secondary text-sm bg-background text-foreground" 
                      placeholder="e.g. +44 7123 456789"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-semibold uppercase tracking-wider text-foreground block">Categories of Interest</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Coffee & Equipment",
                      "Ambient & Canned Goods",
                      "Kitchen & Cookware Essentials",
                      "Soft Drinks & Beverages",
                      "Packaging & Takeaway Disposables",
                      "Heavy Commercial Kitchen Equipment"
                    ].map((cat, idx) => (
                      <label key={idx} className="flex items-center gap-3 text-xs text-foreground/80 cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={formData.categories.includes(cat)}
                          onChange={() => handleCheckboxChange(cat)}
                          className="w-4 h-4 rounded border-border text-secondary focus:ring-secondary cursor-pointer"
                        />
                        {cat}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-foreground">Enquiry Message</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-secondary text-sm bg-background text-foreground resize-none" 
                    placeholder="Describe your weekly volume, delivery needs, or custom packaging requirements..."
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground py-4 rounded-lg font-semibold text-sm transition-all duration-300">
                    Submit Trade Enquiry
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
