import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { PHONE_LINK, PHONE_DISPLAY } from "../config";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo Section */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Sazón Cali
            </h3>
            <p className="text-gray-400 mb-4">
              Lo mejor de la cocina caleña en cada plato.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#menu"
                  className="text-gray-400 hover:text-orange-500 transition"
                >
                  Menú
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-orange-500 transition"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-400 hover:text-orange-500 transition"
                >
                  Galería
                </a>
              </li>
              <li>
                <a
                  href="#reserva"
                  className="text-gray-400 hover:text-orange-500 transition"
                >
                  Reservas
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex gap-2 items-start">
                <MapPin size={20} className="flex-shrink-0 mt-0.5" />
                <span>Calle 5 # 34-12, Cali</span>
              </div>
              <div className="flex gap-2 items-center">
                <Phone size={20} className="flex-shrink-0" />
                <a
                  href={PHONE_LINK}
                  className="hover:text-orange-500 transition"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <Mail size={20} className="flex-shrink-0" />
                <a
                  href="mailto:hola@sazoncali.com"
                  className="hover:text-orange-500 transition"
                >
                  hola@sazoncali.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold text-lg mb-4">Horarios</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <div>
                <span className="font-semibold">L-J:</span> 12:00 PM - 10:00 PM
              </div>
              <div>
                <span className="font-semibold">V-S:</span> 12:00 PM - 12:00 AM
              </div>
              <div>
                <span className="font-semibold">D:</span> 12:00 PM - 6:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              © 2026 Sazón Cali. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-center md:text-right mt-4 md:mt-0">
              Hecho con ❤️ en Cali, Colombia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
