import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, Shield, Award, Users, CheckCircle, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/const";
import { toast } from "sonner";

export default function Contact() {
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Trade Enquiry",
    message: ""
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Enquiry submitted successfully! Our team will contact you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "Trade Enquiry",
      message: ""
    });
  };

  return (
    <Layout>
      {/* Editorial Header Banner with Scroll Parallax Zoom (No fade-in, clean movement) */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-background z-10" />
        <div className="container relative z-20 max-w-4xl text-center space-y-4">
          <span className="text-secondary font-semibold tracking-widest text-xs uppercase block mb-2">
            Connect With Us
          </span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold tracking-tight text-white leading-tight">
            Connect With Our<br />Culinary Directors
          </h1>
          <p className="text-sm md:text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed font-light mt-4">
            Whether you require a custom wholesale supply list, a restaurant management audit, or an exquisite wedding catering consultation, our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Details & Form Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Floating 3D Cinnamon/Star Anise Asset */}
        <div 
          className="absolute right-[-100px] top-[30%] w-[300px] h-[300px] pointer-events-none opacity-20"
          style={{ transform: `translateY(${scrollY * -0.1}px) rotate(${scrollY * 0.03}deg)` }}
        >
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663727793216/hoJDaexXMyXhzy43GoDvy2/isolated_cinnamon_star_anise-QvoAHg96HbmCptnNPgC5GB.webp" alt="Cinnamon & Star Anise" className="w-full h-full object-contain" />
        </div>

        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-4">
                <span className="text-secondary font-semibold tracking-widest text-xs uppercase block">
                  Get In Touch
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground leading-tight">
                  Direct Contact Details
                </h2>
                <div className="h-[1px] w-20 bg-secondary" />
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  Reach out directly to our offices. Our corporate and events managers operate from Monday to Sunday, providing dedicated strategic support.
                </p>
              </div>

              {/* Contact Cards List */}
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="block font-serif text-lg font-bold text-foreground">Phone Support</span>
                    <a href="tel:+441210000000" className="block text-sm text-muted-foreground hover:text-secondary transition-colors duration-200">
                      +44 (0) 121 000 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="block font-serif text-lg font-bold text-foreground">Email Enquiry</span>
                    <a href="mailto:info@rthfoodsbb1.shop" className="block text-sm text-muted-foreground hover:text-secondary transition-colors duration-200">
                      info@rthfoodsbb1.shop
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="block font-serif text-lg font-bold text-foreground">Head Office Address</span>
                    <span className="block text-sm text-muted-foreground font-light">
                      RTH Foods BB1 LTD<br />
                      128 High Street, Harborne<br />
                      Birmingham, B17 9NJ
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="block font-serif text-lg font-bold text-foreground">Operational Hours</span>
                    <span className="block text-sm text-muted-foreground font-light leading-relaxed">
                      Mon – Fri: 08:00 – 20:00<br />
                      Saturday: 08:00 – 20:00<br />
                      Sunday: 08:00 – 17:00
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7 bg-card p-8 lg:p-10 rounded-2xl border border-border/40 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-foreground">Your Name *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-secondary text-sm bg-background text-foreground" 
                      placeholder="e.g. John Doe"
                    />
                  </div>
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-foreground">Enquiry Subject</label>
                    <select 
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-secondary text-sm bg-background text-foreground"
                    >
                      <option value="Trade Enquiry">Trade Account Enquiry</option>
                      <option value="Cafe Management">Cafe Setup & Management</option>
                      <option value="Restaurant Management">Restaurant Operations Setup</option>
                      <option value="Wedding Catering">Wedding Hall & Event Catering</option>
                      <option value="Food Management">Institutional Food Management</option>
                      <option value="Corporate Catering">Corporate Catering Program</option>
                      <option value="Wholesale Supply">Wholesale Goods & Supply</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-foreground">Your Message *</label>
                  <textarea 
                    rows={6}
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-secondary text-sm bg-background text-foreground resize-none" 
                    placeholder="Provide detailed specifications of your event, trade needs, weekly volume, or operations questions..."
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-secondary hover:text-primary-foreground font-serif text-md py-6 rounded-lg transition-all duration-300">
                  Submit Enquiry Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
