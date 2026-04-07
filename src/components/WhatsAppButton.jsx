import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK, RESTAURANT_NAME } from "../config";

export default function WhatsAppButton() {
  const openWhatsApp = () => {
    window.open(
      `${WHATSAPP_LINK}?text=Hola ${RESTAURANT_NAME}, me gustaría hacer una reserva`,
      "_blank",
    );
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse"
      title="Contactar por WhatsApp"
    >
      <MessageCircle size={32} fill="currentColor" />
    </button>
  );
}
