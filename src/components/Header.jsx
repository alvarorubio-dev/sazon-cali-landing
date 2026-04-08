import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 glass border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl md:text-3xl font-bold gradient-text cursor-pointer">
              Sazón Cali
            </span>
            <div className="ml-2 h-1 w-12 bg-gradient-to-r from-gold to-gold-light rounded-full"></div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("menu")}
              className="text-gray-300 hover:text-gold font-medium transition"
            >
              Menú
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-gold font-medium transition"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-300 hover:text-gold font-medium transition"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-gold font-medium transition"
            >
              Contacto
            </button>
            <button
              onClick={() => scrollToSection("reserva")}
              className="btn-primary"
            >
              Reservar Mesa
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 glass rounded-xl p-4 mt-4">
            <button
              onClick={() => scrollToSection("menu")}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-gold hover:bg-white/5 rounded transition"
            >
              Menú
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-gold hover:bg-white/5 rounded transition"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-gold hover:bg-white/5 rounded transition"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-gold hover:bg-white/5 rounded transition"
            >
              Contacto
            </button>
            <button
              onClick={() => scrollToSection("reserva")}
              className="btn-primary w-full text-center"
            >
              Reservar Mesa
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}