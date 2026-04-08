export default function Gallery() {
  // ─────────────────────────────────────────────────────────────
  // CONFIGURACIÓN DE IMÁGENES
  // Para usar imágenes locales, reemplaza las URLs de Unsplash por:
  // "/assets/nombre-archivo.jpg" (deben estar en public/assets/)
  // ─────────────────────────────────────────────────────────────
  const images = [
    {
      src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=600",
      title: "Plato Estrella",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600",
      title: "Ambiente Cálido",
    },
    {
      src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=600",
      title: "Detalles Gourmet",
    },
    {
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=600",
      title: "Mariscos Frescos",
    },
    {
      src: "https://images.unsplash.com/photo-1504674900967-ca7ee47702ff?auto=format&fit=crop&q=80&w=600",
      title: "Preparación",
    },
    {
      src: "https://images.unsplash.com/photo-1516937941344-00f4ee33cb69?auto=format&fit=crop&q=80&w=600",
      title: "Experiencia",
    },
    // ═════════════════════════════════════════════════════════════
    // NUEVAS TARJETAS - Colombian Food / Grilled Meat
    // Reemplazar URLs por "/assets/archivo.jpg" cuando tengas imágenes locales
    // ═════════════════════════════════════════════════════════════
    {
      src: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&q=80&w=600",
      title: "Carne Asada",
    },
    {
      src: "https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&q=80&w=600",
      title: "Bandeja Paisa",
    },
    {
      src: "https://images.unsplash.com/photo-1596207859294-8133d1ad8d3f?auto=format&fit=crop&q=80&w=600",
      title: "Arepas Artesanales",
    },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">El sabor también se ve</h2>
          <p className="section-subtitle">
            Cada momento en Sazón Cali es una experiencia visual incomparable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 cursor-pointer group glass-card ${image.span || ""}`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <h3 className="text-white text-xl font-bold text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}