import { WHATSAPP_NUMBER, RESTAURANT_NAME } from "../config";

export default function Hero() {
  const scrollToReservation = () => {
    document.getElementById("reserva")?.scrollIntoView({ behavior: "smooth" });
  };

  const openMenu = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=Hola, me gustaría conocer el menú de ${RESTAURANT_NAME}`,
      "_blank",
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=2000')`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Decorative elements in dark theme */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-red-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Glassmorphism Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 md:p-12 text-center shadow-2xl">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold backdrop-blur-sm">
              🔥 Lo mejor de la cocina caleña
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Sabores que{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              encienden el alma
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            En Sazón Cali fusionamos tradición y modernidad. Disfruta de los
            auténticos platos de la región con un toque contemporáneo. Abiertos
            todos los días para ti.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToReservation}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
            >
              Reservar Ahora
            </button>
            <button
              onClick={openMenu}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Ver Menú
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
