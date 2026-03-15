import { useState } from 'react';
import { gsap } from 'gsap';
import { isRequired, isValidEmail, isPositiveInteger } from '../utils/validation.js';

const initialForm = {
  nombre: '',
  email: '',
  telefono: '',
  personas: '',
  fechas: '',
  comentarios: '',
};

function Formulario() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const newErrors = {};

    if (!isRequired(form.nombre)) {
      newErrors.nombre = 'Por favor, indica tu nombre y apellidos.';
    }
    if (!isValidEmail(form.email)) {
      newErrors.email = 'Introduce un correo electrónico válido.';
    }
    if (!isRequired(form.telefono)) {
      newErrors.telefono = 'Necesitamos un teléfono de contacto.';
    }
    if (!isPositiveInteger(form.personas)) {
      newErrors.personas = 'Indica un número de personas mayor que cero.';
    }
    if (!isRequired(form.fechas)) {
      newErrors.fechas =
        'Cuéntanos qué fechas te interesan (puede ser el tramo del 18 al 23 o similares).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSuccess(true);
    gsap.fromTo(
      '#success-message',
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out' },
    );
    setForm(initialForm);
  };

  return (
    <div className="bg-gradient-to-b from-porto-cream to-porto-offwhite/60 pt-24 pb-16 sm:pt-28 sm:pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-porto-soft-terracotta">
            Formulario de interés
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-porto-blue sm:text-4xl">
            Cuéntanos cómo te gustaría vivir tu escapada a Oporto.
          </h1>
          <p className="mt-3 text-sm text-slate-700 sm:text-base">
            Este formulario no es una reserva en firme, sino un espacio para
            que nos compartas tu idea de viaje. A partir de aquí te enviaremos
            más información, propuestas de itinerario y opciones adaptadas a tu
            ritmo y tus necesidades.
          </p>
        </div>

        {success && (
          <div
            id="success-message"
            className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
          >
            <p className="font-semibold">¡Gracias por tu interés!</p>
            <p className="mt-1">
              Hemos registrado tu solicitud. En breve recibirás una respuesta
              con más detalles sobre la escapada, sin ningún compromiso.
            </p>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-3xl bg-white p-5 shadow-soft sm:p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="nombre"
                className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-700"
              >
                Nombre y apellidos *
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                value={form.nombre}
                onChange={handleChange}
                className={`mt-2 w-full rounded-2xl border px-3.5 py-2.5 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-porto-blue/60 ${
                  errors.nombre
                    ? 'border-red-300 focus:border-red-300 focus:ring-red-200'
                    : 'border-slate-200 focus:border-porto-blue/40'
                }`}
                placeholder="Cómo te gustaría que te llamemos"
              />
              {errors.nombre && (
                <p className="mt-1 text-xs text-red-500">{errors.nombre}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-700"
              >
                Correo electrónico *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={`mt-2 w-full rounded-2xl border px-3.5 py-2.5 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-porto-blue/60 ${
                  errors.email
                    ? 'border-red-300 focus:border-red-300 focus:ring-red-200'
                    : 'border-slate-200 focus:border-porto-blue/40'
                }`}
                placeholder="nombre@correo.com"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="telefono"
                className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-700"
              >
                Teléfono *
              </label>
              <input
                id="telefono"
                name="telefono"
                type="text"
                value={form.telefono}
                onChange={handleChange}
                className={`mt-2 w-full rounded-2xl border px-3.5 py-2.5 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-porto-blue/60 ${
                  errors.telefono
                    ? 'border-red-300 focus:border-red-300 focus:ring-red-200'
                    : 'border-slate-200 focus:border-porto-blue/40'
                }`}
                placeholder="Incluye prefijo si escribes desde fuera de España"
              />
              {errors.telefono && (
                <p className="mt-1 text-xs text-red-500">{errors.telefono}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="personas"
                className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-700"
              >
                Número de personas *
              </label>
              <input
                id="personas"
                name="personas"
                type="number"
                min="1"
                value={form.personas}
                onChange={handleChange}
                className={`mt-2 w-full rounded-2xl border px-3.5 py-2.5 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-porto-blue/60 ${
                  errors.personas
                    ? 'border-red-300 focus:border-red-300 focus:ring-red-200'
                    : 'border-slate-200 focus:border-porto-blue/40'
                }`}
              />
              {errors.personas && (
                <p className="mt-1 text-xs text-red-500">{errors.personas}</p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="fechas"
                className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-700"
              >
                Fechas de interés *
              </label>
              <input
                id="fechas"
                name="fechas"
                type="text"
                value={form.fechas}
                onChange={handleChange}
                className={`mt-2 w-full rounded-2xl border px-3.5 py-2.5 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-porto-blue/60 ${
                  errors.fechas
                    ? 'border-red-300 focus:border-red-300 focus:ring-red-200'
                    : 'border-slate-200 focus:border-porto-blue/40'
                }`}
                placeholder="Por ejemplo: del 18 al 23 de marzo de 2026, o fechas aproximadas."
              />
              {errors.fechas && (
                <p className="mt-1 text-xs text-red-500">{errors.fechas}</p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="comentarios"
                className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-700"
              >
                Comentarios o preferencias
              </label>
              <textarea
                id="comentarios"
                name="comentarios"
                rows={4}
                value={form.comentarios}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-200 px-3.5 py-2.5 text-sm shadow-sm outline-none transition focus:border-porto-blue/40 focus:ring-2 focus:ring-porto-blue/60"
                placeholder="Cuéntanos si viajas en pareja, en grupo, si prefieres un ritmo muy tranquilo, si hay algo que no puede faltar en tu viaje..."
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] text-slate-500">
              Marcamos con * los campos imprescindibles para poder responderte
              con claridad.
            </p>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-porto-blue px-7 py-2.5 text-sm font-semibold text-porto-offwhite shadow-soft transition hover:bg-porto-blue/90"
            >
              Enviar solicitud
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Formulario;

