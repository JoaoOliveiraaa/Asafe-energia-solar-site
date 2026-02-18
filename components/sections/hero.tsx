import Image from "next/image"
import { Zap } from "lucide-react"
import { LeadForm } from "@/components/lead-form"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-solar.jpg"
          alt="Instalacao de paineis solares"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-secondary/80" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 pt-40">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="max-w-2xl flex-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2">
              <Zap className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">
                Lider em energia solar no Brasil
              </span>
            </div>

            <h1 className="font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              <span className="text-balance text-white">
                Transforme o sol em{" "}
                <span className="text-accent">economia</span> e{" "}
                <span className="text-white">sustentabilidade</span>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              A ASAFE Energia Solar oferece solucoes completas em energia
              fotovoltaica. Reduza ate 95% da sua conta de luz com tecnologia de
              ponta e atendimento personalizado.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>+500 projetos instalados</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>Garantia de 25 anos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Atendimento em todo o Brasil</span>
              </div>
            </div>
          </div>

          <div className="w-full flex-shrink-0 lg:w-auto">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  )
}
