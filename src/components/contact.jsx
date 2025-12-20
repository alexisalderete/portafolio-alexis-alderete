import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-foreground mb-12">Contacto</h2>
        <div className="p-8 rounded-xl border border-border bg-card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Tu Nombre"
              className="w-full p-3 rounded-md bg-secondary border border-border focus:outline-primary text-foreground"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Tu Correo Electrónico"
              className="w-full p-3 rounded-md bg-secondary border border-border focus:outline-primary text-foreground"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <textarea
              placeholder="Tu Mensaje"
              rows={6}
              className="w-full p-3 rounded-md bg-secondary border border-border focus:outline-primary text-foreground resize-none"
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <button type="submit" className="w-full py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/80 transition-colors cursor-pointer">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}