import Navigation from "./components/sections/Navigation";
import Hero from "./components/sections/Hero";
import TrustBar from "./components/sections/TrustBar";
import FeaturedExperiences from "./components/sections/FeaturedExperiences";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import SignatureExperiences from "./components/sections/SignatureExperiences";
import Testimonials from "./components/sections/Testimonials";
import HowItWorks from "./components/sections/HowItWorks";
import DestinationsGrid from "./components/sections/DestinationsGrid";
import StudentPackages from "./components/sections/StudentPackages";
import Hotels from "./components/sections/Hotels";
import ShoppingTour from "./components/sections/ShoppingTour";
import FAQ from "./components/sections/FAQ";
import ConsultationCTA from "./components/sections/ConsultationCTA";
import ContactForm from "./components/sections/ContactForm";
import Footer from "./components/sections/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text-primary font-sans">
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <FeaturedExperiences />
        <WhyChooseUs />
        <SignatureExperiences />
        <DestinationsGrid />
        <StudentPackages />
        <Hotels />
        <ShoppingTour />
        <Testimonials />
        <HowItWorks />
        <FAQ />
        <ConsultationCTA />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
