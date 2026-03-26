export default function Gallery() {
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
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">El sabor también se ve</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Cada momento en Sazón Cali es una experiencia visual incomparable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group ${image.span || ""}`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {/* Overlay */}
              <div className="overlay-text">
                <h3 className="text-white text-xl font-bold text-center">
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
