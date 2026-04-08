import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import MenuSection from "./components/MenuSection";
import Gallery from "./components/Gallery";
import About from "./components/About";
import ReservationForm from "./components/ReservationForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-dark-gradient">
      <Header />
      <Hero />
      <TrustBar />
      <MenuSection />
      <Gallery />
      <About />
      <ReservationForm />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
