import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK, PHONE_LINK, PHONE_DISPLAY } from "../config";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Horarios y Contacto</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Horarios */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              📅 Horarios
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b-2 border-orange-200">
                <span className="font-semibold text-gray-700">
                  Lunes a Jueves
                </span>
                <span className="text-orange-600 font-bold">
                  12:00 PM - 10:00 PM
                </span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b-2 border-orange-200">
                <span className="font-semibold text-gray-700">
                  Viernes y Sábado
                </span>
                <span className="text-orange-600 font-bold">
                  12:00 PM - 12:00 AM
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-700">Domingo</span>
                <span className="text-orange-600 font-bold">
                  12:00 PM - 6:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Contacto */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              📍 Contacto
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="text-orange-600" size={28} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Dirección</p>
                  <p className="text-gray-600">
                    Calle 5 # 34-12, Barrio Granada, Cali
                  </p>
                  <a
                    href="https://maps.google.com/?q=Calle+5+34-12+Granada+Cali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 font-semibold mt-2 inline-flex items-center gap-2"
                  >
                    Abrir en Google Maps →
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Phone className="text-orange-600" size={28} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Teléfono</p>
                  <a
                    href={PHONE_LINK}
                    className="text-gray-600 hover:text-orange-600 transition"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Mail className="text-orange-600" size={28} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Correo</p>
                  <a
                    href="mailto:hola@sazoncali.com"
                    className="text-gray-600 hover:text-orange-600 transition"
                  >
                    hola@sazoncali.com
                  </a>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8 pt-6 border-t-2 border-gray-300">
              <button
                onClick={() => window.open(WHATSAPP_LINK, "_blank")}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all"
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
                className="flex-1 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all"
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
