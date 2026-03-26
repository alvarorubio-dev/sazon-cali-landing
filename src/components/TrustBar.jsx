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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8 rounded-xl hover:bg-orange-50 transition-all duration-300"
              >
                <div className="p-4 bg-orange-100 rounded-full mb-4">
                  <IconComponent size={40} className="text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
