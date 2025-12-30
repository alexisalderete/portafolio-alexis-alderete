import { useState, useRef } from "react"

export function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const FORMSPREE_URL = "https://formspree.io/f/mlgekvez"

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("")

    const formData = new FormData(formRef.current)

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      })

      if (response.ok) {
        setStatus("success")
        formRef.current.reset()
        setTimeout(() => setStatus(""), 5000)
      } else {
        setStatus("error")
      }
    } catch (error) {
      console.error("Error:", error)
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-foreground mb-12">Contacto</h2>
        <div className="p-8 rounded-xl border border-border bg-card">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Tu Nombre"
              className="w-full p-3 rounded-md bg-secondary border border-border focus:outline-primary text-foreground"
              required
              disabled={isSubmitting}
            />
            <input
              type="email"
              name="email"
              placeholder="Tu Correo Electrónico"
              className="w-full p-3 rounded-md bg-secondary border border-border focus:outline-primary text-foreground"
              required
              disabled={isSubmitting}
            />
            <textarea
              name="message"
              placeholder="Tu Mensaje"
              rows={6}
              className="w-full p-3 rounded-md bg-secondary border border-border focus:outline-primary text-foreground resize-none"
              required
              disabled={isSubmitting}
            />
            
            <button 
              type="submit" 
              className="w-full py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/80 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
            </button>
            
            {/* Mensajes de estado - Personaliza según tu diseño */}
            {status === "success" && (
              <div className="mt-4 p-4 rounded-lg bg-green-100 border border-green-400 text-green-700">
                <p className="font-medium">¡Mensaje enviado!</p>
                <p className="text-sm">Gracias por contactarme. Te responderé lo antes posible.</p>
              </div>
            )}
            
            {status === "error" && (
              <div className="mt-4 p-4 rounded-lg bg-red-100 border border-red-400 text-red-700">
                <p className="font-medium">Error al enviar</p>
                <p className="text-sm">Por favor, inténtalo de nuevo o contáctame directamente por email.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}