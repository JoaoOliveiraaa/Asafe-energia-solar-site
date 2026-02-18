import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Home,
  Building2,
  Factory,
  Wrench,
  FileCheck,
  BarChart3,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "Servicos | ASAFE Energia Solar",
  description:
    "Conheca os servicos da ASAFE Energia Solar: instalacao residencial, comercial e industrial, manutencao, projetos e monitoramento.",
}

const services = [
  {
    icon: Home,
    title: "Energia Solar Residencial",
    description:
      "Sistemas fotovoltaicos dimensionados para sua residencia. Reduza ate 95% da conta de luz e valorize seu imovel com energia limpa e renovavel.",
    image: "/images/service-residential.jpg",
    benefits: [
      "Reducao de ate 95% na conta de luz",
      "Valorizacao do imovel em ate 8%",
      "Retorno do investimento em 3-5 anos",
      "Garantia de 25 anos nos paineis",
    ],
  },
  {
    icon: Building2,
    title: "Energia Solar Comercial",
    description:
      "Solucoes para comercios e escritorios. Reduza os custos operacionais e posicione sua empresa como sustentavel e inovadora.",
    image: "/images/service-commercial.jpg",
    benefits: [
      "Reducao significativa nos custos fixos",
      "Imagem sustentavel para sua marca",
      "Sistema dimensionado sob medida",
      "Monitoramento remoto incluido",
    ],
  },
  {
    icon: Factory,
    title: "Energia Solar Industrial",
    description:
      "Projetos de grande porte para industrias e parques industriais. Engenharia de alta performance para maxima economia e eficiencia.",
    image: "/images/portfolio-4.jpg",
    benefits: [
      "Projetos de alta capacidade",
      "Engenharia especializada",
      "Financiamento facilitado",
      "Suporte tecnico dedicado",
    ],
  },
  {
    icon: Wrench,
    title: "Manutencao Preventiva",
    description:
      "Servicos periodicos de limpeza, inspecao e manutencao para garantir o maximo desempenho do seu sistema fotovoltaico.",
    image: "/images/service-maintenance.jpg",
    benefits: [
      "Limpeza profissional dos paineis",
      "Inspecao eletrica completa",
      "Relatorio de desempenho",
      "Garantia de eficiencia maxima",
    ],
  },
  {
    icon: FileCheck,
    title: "Projetos Sob Medida",
    description:
      "Desenvolvemos projetos personalizados de acordo com suas necessidades especificas, perfil de consumo e espaco disponivel.",
    image: "/images/portfolio-5.jpg",
    benefits: [
      "Estudo de viabilidade completo",
      "Projeto eletrico detalhado",
      "Homologacao junto a concessionaria",
      "Documentacao tecnica completa",
    ],
  },
  {
    icon: BarChart3,
    title: "Monitoramento Inteligente",
    description:
      "Acompanhe em tempo real a geracao de energia do seu sistema com nossa plataforma de monitoramento avancada.",
    image: "/images/portfolio-2.jpg",
    benefits: [
      "Painel em tempo real",
      "Alertas automaticos",
      "Relatorios de performance",
      "Acesso via app mobile",
    ],
  },
]

const process = [
  {
    step: "01",
    title: "Consulta Gratuita",
    description:
      "Entre em contato conosco para uma analise inicial do seu consumo de energia e das possibilidades de economia.",
  },
  {
    step: "02",
    title: "Projeto Personalizado",
    description:
      "Nossa equipe de engenharia desenvolve um projeto sob medida, considerando seu perfil de consumo e espaco disponivel.",
  },
  {
    step: "03",
    title: "Instalacao Profissional",
    description:
      "Tecnicos certificados realizam a instalacao seguindo os mais rigorosos padroes de qualidade e seguranca.",
  },
  {
    step: "04",
    title: "Monitoramento Continuo",
    description:
      "Apos a instalacao, monitoramos continuamente o desempenho do seu sistema para garantir a maxima eficiencia.",
  },
]

export default function ServicosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-secondary pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Nossos Servicos
          </span>
          <h1 className="mt-3 font-serif text-4xl font-bold text-secondary-foreground md:text-5xl text-balance">
            Solucoes completas em energia solar
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground/70">
            Da consultoria a manutencao, oferecemos tudo o que voce precisa para
            gerar sua propria energia de forma limpa e economica.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                  index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full object-cover aspect-[3/2]"
                  />
                  <div className="absolute top-4 left-4 rounded-xl bg-primary p-3">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-6 flex flex-col gap-3">
                    {service.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center gap-3 text-sm text-foreground"
                      >
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button
                      asChild
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Link href="/contato">
                        Solicitar Orcamento
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Como Funciona
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-5xl text-balance">
              Nosso processo simplificado
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.step}
                className="relative rounded-2xl bg-card border border-border p-8 transition-all hover:shadow-lg"
              >
                <span className="text-5xl font-bold text-primary/10">
                  {item.step}
                </span>
                <h3 className="mt-2 text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
