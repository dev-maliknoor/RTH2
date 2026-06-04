import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Shield, Award, Users, ChevronDown, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { IMAGES, FAQS } from "@/const";

export default function FAQ() {
  const [scrollY, setScrollY] = useState(0);
  const [openIndex, setOpenOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout>
      {/* Editorial Header Banner with Scroll Parallax (No fade-in, clean movement) */}
      <section className="relative h-[60vh] lg:h-[75vh] w-full overflow-hidden flex items-center justify-center bg-black">
        <div 
          className="absolute inset-0 w-full h-full scale-110"
          style={{
            transform: `translateY(${scrollY * 0.35}px) scale(${1.05 + scrollY * 0.0004})`,
            backgroundImage: `url(${IMAGES.hospitalityTeam})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 0.5
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-background z-10" />
        <div className="container relative z-20 max-w-4xl text-center space-y-4">
          <span className="text-secondary font-semibold tracking-widest text-xs uppercase block mb-2">
            Common Enquiries
          </span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold tracking-tight text-white leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm md:text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed font-light mt-4">
            Find answers to common questions regarding trade account setup, wholesale pricing brackets, minimum order requirements, event booking timetables, and certified Halal culinary standards.
          </p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Floating 3D Mint Background Asset */}
        <div 
          className="absolute right-[-100px] top-[20%] w-[250px] h-[250px] pointer-events-none opacity-20"
          style={{ transform: `translateY(${scrollY * -0.05}px) rotate(${scrollY * 0.02}deg)` }}
        >
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663727793216/hoJDaexXMyXhzy43GoDvy2/isolated_mint_leaves-D8BZ7f9VYSnSM6ZD2EqqUs.webp" alt="Mint Leaf" className="w-full h-full object-contain" />
        </div>

        <div className="container max-w-4xl relative z-10">
          <div className="space-y-6">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className="border border-border/50 rounded-2xl bg-card shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 font-serif text-lg md:text-xl font-bold text-foreground hover:text-secondary transition-colors duration-300"
                  >
                    {faq.question}
                    <ChevronDown className={`w-5 h-5 text-secondary shrink-0 transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  
                  {/* Smooth Collapsible Content */}
                  <div className={`transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[300px] border-t border-border/30 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                  }`}>
                    <div className="px-8 py-6 text-xs text-muted-foreground leading-relaxed font-light">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
        <img
          src={IMAGES.wholesaleSupply}
          alt="Wholesale background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="container relative z-20 text-center space-y-6 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Still Have Questions?
          </h2>
          <p className="text-sm md:text-md text-primary-foreground/80 leading-relaxed font-light">
            Our trade and events division managers are always here to support your enquiries. Contact us directly by phone, email, or through our online contact form.
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
