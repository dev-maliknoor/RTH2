import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Shield, Award, Users, Filter, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { IMAGES, PROJECTS } from "@/const";

export default function Projects() {
  const [scrollY, setScrollY] = useState(0);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = ["All", "Cafe Management", "Restaurant Management", "Weddings", "Corporate", "Food Management", "Wholesale"];

  const filteredProjects = filter === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter || (filter === "Weddings" && p.category === "wedding-catering") || (filter === "Corporate" && p.category === "corporate-catering") || (filter === "Wholesale" && p.category === "wholesale-supply"));

  return (
    <Layout>
      {/* Editorial Header Banner with Scroll Parallax (No fade-in, clean movement) */}
      <section className="relative h-[60vh] lg:h-[75vh] w-full overflow-hidden flex items-center justify-center bg-black">
        <div 
          className="absolute inset-0 w-full h-full scale-110"
          style={{
            transform: `translateY(${scrollY * 0.35}px) scale(${1.05 + scrollY * 0.0004})`,
            backgroundImage: `url(${IMAGES.weddingHallBuffet})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 0.5
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-background z-10" />
        <div className="container relative z-20 max-w-4xl text-center space-y-4">
          <span className="text-secondary font-semibold tracking-widest text-xs uppercase block mb-2">
            Case Studies
          </span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold tracking-tight text-white leading-tight">
            Our Operational Success Stories
          </h1>
          <p className="text-sm md:text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed font-light mt-4">
            Read through our verified projects detailing how RTH Foods supports cafes, restaurants, wedding planners, care facilities, and corporate partners with operations and supply chains.
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Floating 3D Cinnamon Background Asset */}
        <div 
          className="absolute left-[-100px] top-[15%] w-[250px] h-[250px] pointer-events-none opacity-20"
          style={{ transform: `translateY(${scrollY * -0.05}px) rotate(${scrollY * -0.02}deg)` }}
        >
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663727793216/hoJDaexXMyXhzy43GoDvy2/isolated_cinnamon_star_anise-QvoAHg96HbmCptnNPgC5GB.webp" alt="Spices" className="w-full h-full object-contain" />
        </div>

        <div className="container relative z-10">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2 justify-center mb-16">
            {categories.map((cat) => (
              <Button
                key={cat}
                onClick={() => setFilter(cat)}
                variant={filter === cat ? "default" : "outline"}
                className={`rounded-full text-xs font-semibold tracking-wider uppercase px-6 py-2 transition-all duration-300 ${
                  filter === cat 
                    ? "bg-secondary text-secondary-foreground hover:bg-secondary/90" 
                    : "border-border text-foreground hover:bg-muted"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Projects Editorial Grid */}
          <div className="space-y-24">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={project.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Image Block */}
                  <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-2"}`}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content Block */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? "" : "lg:order-1"}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-secondary font-semibold tracking-widest text-xs uppercase">
                        Case Study 0{index + 1}
                      </span>
                      <span className="text-[10px] bg-secondary/10 text-secondary font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-foreground tracking-tight">
                      {project.title}
                    </h2>
                    <div className="h-[1px] w-20 bg-secondary" />

                    {/* Challenge, Solution, Result breakdown */}
                    <div className="space-y-4 text-xs">
                      <div className="space-y-1">
                        <span className="block font-bold text-foreground uppercase tracking-wider text-xs">The Challenge:</span>
                        <p className="text-muted-foreground font-light leading-relaxed">{project.challenge}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="block font-bold text-foreground uppercase tracking-wider text-xs">Our Solution:</span>
                        <p className="text-muted-foreground font-light leading-relaxed">{project.solution}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="block font-bold text-secondary uppercase tracking-wider text-xs flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4" />
                          The Result:
                        </span>
                        <p className="text-foreground font-medium leading-relaxed">{project.result}</p>
                      </div>
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
          src={IMAGES.hospitalityTeam}
          alt="Hospitality background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="container relative z-20 text-center space-y-6 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Let's Build Your Success Story
          </h2>
          <p className="text-sm md:text-md text-primary-foreground/80 leading-relaxed font-light">
            Contact RTH Foods today. Let's outline your operational objectives, audit your current setups, and craft a bespoke management or supply chain blueprint for your business.
          </p>
          <div className="pt-4 flex justify-center gap-4 flex-wrap">
            <Link href="/contact">
              <Button className="bg-secondary text-secondary-foreground hover:bg-white hover:text-black font-medium px-8 py-6 rounded-full text-md transition-all duration-300">
                Partner With Us
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
