export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/50 h-96 md:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1516937941344-00f4ee33cb69?auto=format&fit=crop&q=80&w=800"
                alt="Equipo de Sazón Cali"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Sobre <span className="gradient-text">Nosotros</span>
              </h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
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
              <div className="mt-8 flex gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold">15+</div>
                  <div className="text-gray-400 text-sm">Años de experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold">50K+</div>
                  <div className="text-gray-400 text-sm">Clientes felices</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold">100%</div>
                  <div className="text-gray-400 text-sm">Ingredientes locales</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}