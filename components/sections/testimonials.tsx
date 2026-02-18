import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Empresario",
    text: "A ASAFE transformou a gestao de energia da minha empresa. Economizamos mais de R$ 5.000 por mes na conta de luz. O retorno do investimento veio antes do previsto!",
    rating: 5,
  },
  {
    name: "Ana Paula Rodrigues",
    role: "Proprietaria Residencial",
    text: "Desde a instalacao dos paineis solares, minha conta de luz caiu 92%. A equipe da ASAFE foi extremamente profissional e atenciosa durante todo o processo.",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    role: "Gerente Industrial",
    text: "Optamos pela ASAFE para nosso parque industrial e nao poderiamos estar mais satisfeitos. A qualidade dos equipamentos e do servico e impecavel.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Depoimentos
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-5xl text-balance">
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-2xl bg-card border border-border p-8 transition-all hover:shadow-lg"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/10" />
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
