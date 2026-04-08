import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK, PHONE_LINK, PHONE_DISPLAY } from "../config";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Horarios y Contacto</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Horarios */}
          <div className="glass-light rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-white mb-8">
              📅 Horarios
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="font-semibold text-gray-300">
                  Lunes a Jueves
                </span>
                <span className="text-gold font-bold">
                  12:00 PM - 10:00 PM
                </span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="font-semibold text-gray-300">
                  Viernes y Sábado
                </span>
                <span className="text-gold font-bold">
                  12:00 PM - 12:00 AM
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-300">Domingo</span>
                <span className="text-gold font-bold">
                  12:00 PM - 6:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Contacto */}
          <div className="glass-light rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-white mb-8">
              📍 Contacto
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="text-gold" size={28} />
                </div>
                <div>
                  <p className="font-semibold text-white">Dirección</p>
                  <p className="text-gray-400">
                    Calle 5 # 34-12, Barrio Granada, Cali
                  </p>
                  <a
                    href="https://maps.google.com/?q=Calle+5+34-12+Granada+Cali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-light font-semibold mt-2 inline-flex items-center gap-2 transition"
                  >
                    Abrir en Google Maps →
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Phone className="text-gold" size={28} />
                </div>
                <div>
                  <p className="font-semibold text-white">Teléfono</p>
                  <a
                    href={PHONE_LINK}
                    className="text-gray-400 hover:text-gold transition"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Mail className="text-gold" size={28} />
                </div>
                <div>
                  <p className="font-semibold text-white">Correo</p>
                  <a
                    href="mailto:hola@sazoncali.com"
                    className="text-gray-400 hover:text-gold transition"
                  >
                    hola@sazoncali.com
                  </a>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8 pt-6 border-t border-white/10">
              <button
                onClick={() => window.open(WHATSAPP_LINK, "_blank")}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-500/80 hover:bg-green-600 text-white font-semibold rounded-lg transition-all backdrop-blur-sm border border-green-400/30"
              >
                <MessageCircle size={20} />
                WhatsApp
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://maps.google.com/?q=Calle+5+34-12+Granada+Cali",
                    "_blank",
                  )
                }
                className="flex-1 px-4 py-3 bg-blue-500/80 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all backdrop-blur-sm border border-blue-400/30"
              >
                Ubicación
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}