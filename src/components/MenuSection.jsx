import { MessageCircle } from "lucide-react";

export default function MenuSection() {
  const dishes = [
    {
      name: "Lomo al Trapiche",
      description:
        "Lomo de res bañado en salsa de panela con toque de café, acompañado de plátano maduro y yuca.",
      price: "$45.000",
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=600",
      whatsapp: "Hola, me gustaría ordenar Lomo al Trapiche",
    },
    {
      name: "Cazuela de Mariscos",
      description:
        "Mix de camarones, calamares y pescado en crema de coco con arroz con coco.",
      price: "$52.000",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=600",
      whatsapp: "Hola, me gustaría ordenar Cazuela de Mariscos",
    },
    {
      name: "Tamal Valluno",
      description:
        "Tamal auténtico con masa de maíz, carne de cerdo, pollo, arveja, zanahoria y huevo.",
      price: "$28.000",
      image:
        "https://images.unsplash.com/photo-1626119286440-69b1faf8aabc?auto=format&fit=crop&q=80&w=600",
      whatsapp: "Hola, me gustaría ordenar Tamal Valluno",
    },
  ];

  const openWhatsApp = (message) => {
    window.open(
      `https://wa.me/573123456789?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <section id="menu" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Nuestros Platos Estrella</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubre los sabores más auténticos de la cocina caleña, preparados
            con pasión y los mejores ingredientes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full font-bold">
                  {dish.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {dish.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {dish.description}
                </p>
                <button
                  onClick={() => openWhatsApp(dish.whatsapp)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  <MessageCircle size={20} />
                  Ordenar por WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
