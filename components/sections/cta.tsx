import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative py-24 bg-secondary overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-serif text-3xl font-bold text-secondary-foreground md:text-5xl text-balance">
          Pronto para economizar com energia solar?
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-secondary-foreground/70">
          Solicite agora mesmo um orcamento gratuito e sem compromisso. Nossa
          equipe de especialistas esta pronta para encontrar a melhor solucao
          para voce.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold px-8"
          >
            <Link href="/contato">
              Solicitar Orcamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-accent-foreground text-base font-semibold px-8"
          >
            <a href="tel:+5500000000000">
              <Phone className="mr-2 h-5 w-5" />
              Ligar Agora
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
