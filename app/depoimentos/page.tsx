import type { Metadata } from "next"
import { ElfsightGoogleReviews } from "@/components/elfsight-google-reviews"
import { CTASection } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "Depoimentos | ASAFE Energia Solar",
  description:
    "Leia os depoimentos e avaliacoes de clientes da ASAFE Energia Solar no Google. Veja o que quem ja instalou energia solar conosco tem a dizer.",
}

export default function DepoimentosPage() {
  return (
    <>
      <section className="relative bg-secondary pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Depoimentos
          </span>
          <h1 className="mt-3 font-serif text-4xl font-bold text-secondary-foreground md:text-5xl text-balance">
            Avaliacoes dos nossos clientes
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground/70">
            Depoimentos reais publicados no Google por quem ja confiou na ASAFE
            para gerar energia solar.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <ElfsightGoogleReviews />
        </div>
      </section>

      <CTASection />
    </>
  )
}
