import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Phone, Mail, ArrowUp, Sparkles, Instagram, Facebook, Sun, Moon } from "lucide-react";import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import CustomCursor from "./CustomCursor";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();

  // ALL pages have dark hero header images, so navbar starts over dark backgrounds
  const hasDarkHero = true;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
      
      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top when path changes
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" as any });
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    { name: "Café Management", path: "/services/cafe-management" },
    { name: "Restaurant Management", path: "/services/restaurant-management" },
    { name: "Wedding Halls & Event Catering", path: "/services/wedding-catering" },
    { name: "Food Service Management", path: "/services/food-management" },
    { name: "Corporate Catering", path: "/services/corporate-catering" },
    { name: "Wholesale Supply", path: "/services/wholesale-supply" }
  ];

  // Dynamic text color classes for the navbar items
  const getNavTextColor = () => {
    if (scrolled) {
      return "text-foreground hover:text-secondary";
    }
    return "text-white/90 hover:text-secondary";
  };

  const getLogoTextColor = () => {
    if (scrolled) {
      return "text-foreground";
    }
    return "text-white";
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-secondary selection:text-secondary-foreground relative overflow-x-hidden">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-[4px] bg-secondary z-[100] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Dynamic Sticky Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-border/40 py-4 shadow-lg shadow-black/5"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container max-w-7xl flex items-center justify-between">
          {/* Logo */}
          {/* Logo */}
<Link href="/">
  <div
    className={`group flex items-center gap-3 cursor-pointer rounded-full border px-4 py-2 transition-all duration-500 ${
      scrolled
        ? "bg-background/70 border-border/60 shadow-lg shadow-black/5 backdrop-blur-xl"
        : "bg-black/20 border-white/15 backdrop-blur-md hover:bg-black/30"
    }`}
  >
    <div className="h-10 w-[3px] rounded-full bg-secondary shadow-[0_0_18px_rgba(212,175,55,0.55)] group-hover:h-12 transition-all duration-300" />

    <div className="leading-none">
      <div className="flex items-baseline gap-2">
        <span
          className={`font-serif text-xl md:text-2xl font-bold tracking-[0.04em] transition-colors duration-300 ${getLogoTextColor()}`}
        >
          RTH
        </span>

        <span className="font-serif text-lg md:text-xl font-semibold tracking-[0.08em] text-secondary transition-colors duration-300">
          FOODS
        </span>
      </div>

      <div className="mt-1 flex items-center gap-2">
        <span
          className={`h-px w-8 transition-colors duration-300 ${
            scrolled ? "bg-foreground/25" : "bg-white/35"
          }`}
        />

        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.35em] text-secondary font-semibold">
          BB1 LTD
        </span>
      </div>
    </div>
  </div>
</Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/">
              <span className={`text-xs font-semibold tracking-wider uppercase cursor-pointer transition-colors duration-300 ${getNavTextColor()} ${location === "/" ? "text-secondary font-bold" : ""}`}>
                Home
              </span>
            </Link>
            <Link href="/about">
              <span className={`text-xs font-semibold tracking-wider uppercase cursor-pointer transition-colors duration-300 ${getNavTextColor()} ${location === "/about" ? "text-secondary font-bold" : ""}`}>
                About
              </span>
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className={`flex items-center gap-1 text-xs font-semibold tracking-wider uppercase cursor-pointer transition-colors duration-300 py-2 ${getNavTextColor()}`}>
                Services
                <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border/40 rounded-xl shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 p-2 z-50">
                {services.map((service) => (
                  <Link key={service.path} href={service.path}>
                    <div className="px-4 py-3 rounded-lg hover:bg-muted/10 text-xs font-medium text-foreground/80 hover:text-secondary cursor-pointer transition-colors duration-200">
                      {service.name}
                    </div>
                  </Link>
                ))}
                <div className="border-t border-border/40 my-2 pt-2">
                  <Link href="/services">
                    <div className="px-4 py-2 rounded-lg hover:bg-muted/10 text-xs font-bold text-secondary cursor-pointer transition-colors duration-200 flex items-center justify-between">
                      View All Services
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/projects">
              <span className={`text-xs font-semibold tracking-wider uppercase cursor-pointer transition-colors duration-300 ${getNavTextColor()} ${location === "/projects" ? "text-secondary font-bold" : ""}`}>
                Projects
              </span>
            </Link>
            <Link href="/gallery">
              <span className={`text-xs font-semibold tracking-wider uppercase cursor-pointer transition-colors duration-300 ${getNavTextColor()} ${location === "/gallery" ? "text-secondary font-bold" : ""}`}>
                Gallery
              </span>
            </Link>
            <Link href="/faq">
              <span className={`text-xs font-semibold tracking-wider uppercase cursor-pointer transition-colors duration-300 ${getNavTextColor()} ${location === "/faq" ? "text-secondary font-bold" : ""}`}>
                FAQ
              </span>
            </Link>
            <Link href="/contact">
              <span className={`text-xs font-semibold tracking-wider uppercase cursor-pointer transition-colors duration-300 ${getNavTextColor()} ${location === "/contact" ? "text-secondary font-bold" : ""}`}>
                Contact
              </span>
            </Link>
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={`rounded-full ${scrolled ? "text-foreground/80 hover:text-secondary" : "text-white/90 hover:text-secondary"}`}
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button> */}
            <Link href="/contact">
              <Button className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground font-semibold px-6 py-5 rounded-full text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg">
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={`rounded-full ${scrolled ? "text-foreground/80 hover:text-secondary" : "text-white/90 hover:text-secondary"}`}
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button> */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors duration-200 ${scrolled ? "text-foreground/80 hover:text-secondary" : "text-white/90 hover:text-secondary"}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Navigation */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl lg:hidden transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full justify-between p-8 pt-24">
          <div className="space-y-6">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <span className="block font-serif text-3xl font-bold text-foreground hover:text-secondary transition-colors duration-200">
                Home
              </span>
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              <span className="block font-serif text-3xl font-bold text-foreground hover:text-secondary transition-colors duration-200">
                About
              </span>
            </Link>

            {/* Services sublist */}
            <div className="space-y-3">
              <span className="block text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                Services
              </span>
              <div className="grid grid-cols-1 gap-2 pl-4">
                {services.map((service) => (
                  <Link key={service.path} href={service.path} onClick={() => setIsOpen(false)}>
                    <span className="block text-sm text-foreground/80 hover:text-secondary transition-colors duration-200">
                      {service.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/projects" onClick={() => setIsOpen(false)}>
              <span className="block font-serif text-3xl font-bold text-foreground hover:text-secondary transition-colors duration-200">
                Projects
              </span>
            </Link>
            <Link href="/gallery" onClick={() => setIsOpen(false)}>
              <span className="block font-serif text-3xl font-bold text-foreground hover:text-secondary transition-colors duration-200">
                Gallery
              </span>
            </Link>
            <Link href="/faq" onClick={() => setIsOpen(false)}>
              <span className="block font-serif text-3xl font-bold text-foreground hover:text-secondary transition-colors duration-200">
                FAQ
              </span>
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <span className="block font-serif text-3xl font-bold text-foreground hover:text-secondary transition-colors duration-200">
                Contact
              </span>
            </Link>
          </div>

          {/* Contact Details at bottom of Mobile Nav */}
          <div className="space-y-4 pt-6 border-t border-border/40">
            <a href="tel:+441210000000" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-secondary">
              <Phone className="w-4 h-4" />
              +44 (0) 121 000 0000
            </a>
            <a href="mailto:info@rthfoodsbb1.shop" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-secondary">
              <Mail className="w-4 h-4" />
              info@rthfoodsbb1.shop
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow pt-0">{children}</main>

      {/* Luxury Editorial Footer */}
      <footer className="bg-primary text-primary-foreground border-t border-border/10 py-16">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Branding Column */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-2">
                {/* <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-serif font-bold text-lg">
                  R
                </div> */}
                <div>
                  <span className="block font-serif text-lg font-bold tracking-tight text-white">
                    RTH FOODS
                  </span>
                  <span className="block text-[9px] uppercase tracking-widest text-secondary font-semibold">
                    BB1 LTD
                  </span>
                </div>
              </div>
              <p className="text-xs text-primary-foreground/70 leading-relaxed font-light">
                UK-wide culinary operators specializing in cafe management, restaurant setups, premium wedding catering, corporate dining, food service management, and consolidated wholesale trade supply.
              </p>
              <div className="flex items-center gap-4 pt-2">
  <a
    href="https://www.instagram.com/rthfoods/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="RTH Foods Instagram"
    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
  >
    <Instagram className="w-4 h-4" />
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=61589139753802"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="RTH Foods Facebook"
    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
  >
    <Facebook className="w-4 h-4" />
  </a>
</div>
            </div>

            {/* Quick Links Column */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="font-serif text-sm font-bold tracking-wider uppercase text-white">Navigation</h4>
              <ul className="space-y-2.5 text-xs text-primary-foreground/70 font-light">
                <li><Link href="/" className="hover:text-secondary transition-colors duration-200">Home</Link></li>
                <li><Link href="/about" className="hover:text-secondary transition-colors duration-200">About Us</Link></li>
                <li><Link href="/services" className="hover:text-secondary transition-colors duration-200">Our Services</Link></li>
                <li><Link href="/projects" className="hover:text-secondary transition-colors duration-200">Case Studies</Link></li>
                <li><Link href="/gallery" className="hover:text-secondary transition-colors duration-200">Gallery Portfolio</Link></li>
              </ul>
            </div>

            {/* Services Column */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-serif text-sm font-bold tracking-wider uppercase text-white">Our Specialties</h4>
              <ul className="space-y-2.5 text-xs text-primary-foreground/70 font-light">
                <li><Link href="/services/cafe-management" className="hover:text-secondary transition-colors duration-200">Café Management</Link></li>
                <li><Link href="/services/restaurant-management" className="hover:text-secondary transition-colors duration-200">Restaurant Operations</Link></li>
                <li><Link href="/services/wedding-catering" className="hover:text-secondary transition-colors duration-200">Wedding & Event Catering</Link></li>
                <li><Link href="/services/food-management" className="hover:text-secondary transition-colors duration-200">Contract Food Services</Link></li>
                <li><Link href="/services/wholesale-supply" className="hover:text-secondary transition-colors duration-200">Wholesale Trade Supply</Link></li>
              </ul>
            </div>

            {/* Head Office Column */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-serif text-sm font-bold tracking-wider uppercase text-white">Head Office</h4>
              <ul className="space-y-3 text-xs text-primary-foreground/70 font-light">
                <li className="leading-relaxed">
                  Newcastle upon Tyne,<br />England, UK
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-secondary shrink-0" />
                  <a href="tel:+441210000000" className="hover:text-secondary transition-colors duration-200">+44 (0) 121 000 0000</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-secondary shrink-0" />
                  <a href="mailto:info@rthfoodsbb1.shop" className="hover:text-secondary transition-colors duration-200">info@rthfoodsbb1.shop</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-primary-foreground/40 font-light">
            <p>© {new Date().getFullYear()} RTH Foods BB1 LTD. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-secondary transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-secondary transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40 p-3 rounded-full bg-secondary text-secondary-foreground shadow-xl transition-all duration-500 hover:scale-110 active:scale-95 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}
