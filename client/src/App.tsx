import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Import all pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import CafeManagement from "./pages/CafeManagement";
import RestaurantManagement from "./pages/RestaurantManagement";
import WeddingCatering from "./pages/WeddingCatering";
import FoodManagement from "./pages/FoodManagement";
import CorporateCatering from "./pages/CorporateCatering";
import WholesaleSupply from "./pages/WholesaleSupply";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/cafe-management" component={CafeManagement} />
      <Route path="/services/restaurant-management" component={RestaurantManagement} />
      <Route path="/services/wedding-catering" component={WeddingCatering} />
      <Route path="/services/food-management" component={FoodManagement} />
      <Route path="/services/corporate-catering" component={CorporateCatering} />
      <Route path="/services/wholesale-supply" component={WholesaleSupply} />
      <Route path="/projects" component={Projects} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/faq" component={FAQ} />
      <Route path="/contact" component={Contact} />
      
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster position="top-right" />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
