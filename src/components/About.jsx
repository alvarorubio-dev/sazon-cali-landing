export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-gradient-to-br from-orange-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl h-96 md:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1516937941344-00f4ee33cb69?auto=format&fit=crop&q=80&w=800"
              alt="Equipo de Sazón Cali"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre Nosotros
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Sazón Cali nació de la pasión por la gastronomía caleña. Desde
                hace 15 años, nuestra familia ha dedicado su vida a preservar
                las tradiciones culinarias del Valle del Cauca, fusionándolas
                con técnicas modernas y presentación contemporánea.
              </p>
              <p>
                Cada plato que sale de nuestra cocina es el resultado de años de
                experiencia, ingredientes cuidadosamente seleccionados de
                productores locales y el amor por hacer felices a nuestros
                comensales.
              </p>
              <p>
                No somos solo un restaurante, somos un espacio de encuentro
                donde la familia y los amigos comparten momentos inolvidables
                alrededor de la mejor comida caleña.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600">15+</div>
                <div className="text-gray-600">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600">50K+</div>
                <div className="text-gray-600">Clientes felices</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600">100%</div>
                <div className="text-gray-600">Ingredientes locales</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
