import { useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  Phone,
  User,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    personas: "",
    fecha: "",
    hora: "",
    observaciones: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es requerido";
    if (!formData.telefono.trim())
      newErrors.telefono = "El teléfono es requerido";
    if (!formData.personas)
      newErrors.personas = "Selecciona cantidad de personas";
    if (!formData.fecha) newErrors.fecha = "La fecha es requerida";
    if (!formData.hora) newErrors.hora = "La hora es requerida";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
    setFormData({
      nombre: "",
      telefono: "",
      personas: "",
      fecha: "",
      hora: "",
      observaciones: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);

    console.log("Reserva enviada:", formData);
  };

  return (
    <section id="reserva" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left side - Content */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Reserva tu mesa
              </h2>
              <p className="text-orange-100 text-lg mb-8 leading-relaxed">
                Déjanos tus datos y te confirmamos tu reserva en menos de 30
                minutos.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Calendar className="flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold">Disponibilidad</h3>
                    <p className="text-orange-100">
                      Todos los días de la semana
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold">Horario</h3>
                    <p className="text-orange-100">12:00 PM - 12:00 AM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="p-8 md:p-12">
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-lg flex gap-3 animate-pulse">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="font-bold text-green-700">
                      ¡Reserva confirmada!
                    </h3>
                    <p className="text-green-600 text-sm">
                      Nos contactaremos pronto para confirmar los detalles.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nombre */}
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <User size={18} />
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition ${
                      errors.nombre
                        ? "border-red-500"
                        : "border-gray-300 focus:border-orange-500"
                    }`}
                    placeholder="Tu nombre"
                  />
                  {errors.nombre && (
                    <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
                  )}
                </div>

                {/* Teléfono */}
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <Phone size={18} />
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition ${
                      errors.telefono
                        ? "border-red-500"
                        : "border-gray-300 focus:border-orange-500"
                    }`}
                    placeholder="+57 3XX XXX XXXX"
                  />
                  {errors.telefono && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.telefono}
                    </p>
                  )}
                </div>

                {/* Personas */}
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <Users size={18} />
                    Cantidad de personas
                  </label>
                  <select
                    name="personas"
                    value={formData.personas}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition ${
                      errors.personas
                        ? "border-red-500"
                        : "border-gray-300 focus:border-orange-500"
                    }`}
                  >
                    <option value="">Selecciona cantidad</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "persona" : "personas"}
                      </option>
                    ))}
                    <option value="8+">8 o más</option>
                  </select>
                  {errors.personas && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.personas}
                    </p>
                  )}
                </div>

                {/* Fecha */}
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <Calendar size={18} />
                    Fecha
                  </label>
                  <input
                    type="date"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition ${
                      errors.fecha
                        ? "border-red-500"
                        : "border-gray-300 focus:border-orange-500"
                    }`}
                  />
                  {errors.fecha && (
                    <p className="text-red-500 text-sm mt-1">{errors.fecha}</p>
                  )}
                </div>

                {/* Hora */}
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <Clock size={18} />
                    Hora
                  </label>
                  <input
                    type="time"
                    name="hora"
                    value={formData.hora}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition ${
                      errors.hora
                        ? "border-red-500"
                        : "border-gray-300 focus:border-orange-500"
                    }`}
                  />
                  {errors.hora && (
                    <p className="text-red-500 text-sm mt-1">{errors.hora}</p>
                  )}
                </div>

                {/* Observaciones */}
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <MessageSquare size={18} />
                    Observaciones (opcional)
                  </label>
                  <textarea
                    name="observaciones"
                    value={formData.observaciones}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition resize-none"
                    rows="3"
                    placeholder="Alergias, preferencias especiales, etc..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn-primary w-full text-center font-bold py-4 text-lg"
                >
                  Confirmar Reserva
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
