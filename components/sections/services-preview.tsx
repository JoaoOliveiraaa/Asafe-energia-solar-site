import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Home, Building2, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Home,
    title: "Residencial",
    description:
      "Reduza ate 95% da sua conta de luz com um sistema solar dimensionado para sua residencia. Projeto personalizado e instalacao profissional.",
    image: "/images/service-residential.jpg",
  },
  {
    icon: Building2,
    title: "Comercial e Industrial",
    description:
      "Solucoes de grande porte para empresas e industrias. Maximize seus lucros reduzindo custos operacionais com energia solar.",
    image: "/images/service-commercial.jpg",
  },
  {
    icon: Wrench,
    title: "Manutencao e Monitoramento",
    description:
      "Acompanhamento contínuo do desempenho do seu sistema com manutencao preventiva e corretiva para maxima eficiencia.",
    image: "/images/service-maintenance.jpg",
  },
]

export function ServicesPreviewSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Nossos Servicos
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-5xl text-balance">
            Solucoes completas em energia solar
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            Oferecemos servicos integrados desde o projeto ate a manutencao,
            garantindo o melhor retorno do seu investimento.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-secondary/40" />
                <div className="absolute bottom-4 left-4 rounded-xl bg-primary p-3">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Link href="/servicos">
              Ver Todos os Servicos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
