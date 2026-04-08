import { UtensilsCrossed, Clock, Music } from "lucide-react";

export default function TrustBar() {
  const features = [
    {
      icon: UtensilsCrossed,
      title: "Ingredientes Frescos",
      description: "Seleccionados diariamente de proveedores locales",
    },
    {
      icon: Clock,
      title: "Servicio Rápido",
      description: "Tu orden lista en menos de 20 minutos",
    },
    {
      icon: Music,
      title: "Ambiente Único",
      description: "Música en vivo todos los viernes y sábados",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="glass-card flex flex-col items-center text-center p-8 rounded-2xl"
              >
                <div className="p-4 bg-gold/10 backdrop-blur-sm rounded-full mb-4 border border-gold/20">
                  <IconComponent size={40} className="text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}