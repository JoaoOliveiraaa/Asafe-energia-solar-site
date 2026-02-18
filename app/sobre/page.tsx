import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Target, Eye, Heart, Award, Users, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "Sobre Nos | ASAFE Energia Solar",
  description:
    "Conheca a ASAFE Energia Solar, empresa lider em solucoes de energia fotovoltaica. Mais de 10 anos de experiencia transformando vidas com energia limpa.",
}

const values = [
  {
    icon: Award,
    title: "Excelencia",
    description:
      "Buscamos a excelencia em cada projeto, utilizando os melhores equipamentos e as tecnicas mais avancadas do mercado.",
  },
  {
    icon: Users,
    title: "Comprometimento",
    description:
      "Nosso compromisso vai alem da instalacao. Acompanhamos cada cliente para garantir o maximo retorno do investimento.",
  },
  {
    icon: Lightbulb,
    title: "Inovacao",
    description:
      "Estamos sempre atualizados com as ultimas tecnologias em energia solar para oferecer o que ha de melhor.",
  },
  {
    icon: Heart,
    title: "Sustentabilidade",
    description:
      "Acreditamos que a energia solar e o caminho para um futuro mais limpo e sustentavel para as proximas geracoes.",
  },
]

const timeline = [
  {
    year: "2014",
    title: "Fundacao",
    description:
      "A ASAFE Energia Solar foi fundada com a missao de levar energia limpa e acessivel para todo o Brasil.",
  },
  {
    year: "2016",
    title: "Expansao Regional",
    description:
      "Ampliamos nossas operacoes para atender todo o estado, consolidando nossa presenca no mercado.",
  },
  {
    year: "2019",
    title: "100 Projetos",
    description:
      "Alcancamos a marca de 100 projetos instalados, consolidando nossa reputacao de qualidade e confianca.",
  },
  {
    year: "2022",
    title: "Referencia Nacional",
    description:
      "Nos tornamos referencia em energia solar no Brasil, com mais de 350 projetos e parcerias estrategicas.",
  },
  {
    year: "2025",
    title: "500+ Projetos",
    description:
      "Ultrapassamos a marca de 500 projetos realizados, impactando vidas e o meio ambiente positivamente.",
  },
]

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-secondary pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                Sobre a ASAFE
              </span>
              <h1 className="mt-3 font-serif text-4xl font-bold text-secondary-foreground md:text-5xl text-balance">
                Transformando o sol em energia para o futuro
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-secondary-foreground/70">
                Somos uma empresa especializada em energia solar fotovoltaica,
                dedicada a oferecer solucoes inteligentes e sustentaveis. Com
                mais de 10 anos de atuacao no mercado brasileiro, ja
                transformamos a realidade energetica de centenas de lares e
                negocios.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-secondary-foreground/70">
                Nossa equipe e formada por engenheiros, tecnicos e consultores
                altamente qualificados, comprometidos em entregar resultados que
                superam as expectativas.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/about-team.jpg"
                alt="Equipe ASAFE Energia Solar"
                width={600}
                height={450}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-card border border-border p-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Missao</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Democratizar o acesso a energia solar no Brasil, oferecendo
                solucoes de alta qualidade com atendimento personalizado e
                precos justos.
              </p>
            </div>
            <div className="rounded-2xl bg-primary p-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/20">
                <Eye className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground">Visao</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
                Ser a empresa de energia solar mais confiavel e inovadora do
                Brasil, liderando a transicao energetica do pais.
              </p>
            </div>
            <div className="rounded-2xl bg-card border border-border p-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/20">
                <Heart className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Valores</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Transparencia, qualidade, inovacao, sustentabilidade e
                comprometimento com o cliente em tudo o que fazemos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Nossos Pilares
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-5xl text-balance">
              O que nos move
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl bg-card border border-border p-8 text-center transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Nossa Trajetoria
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-5xl text-balance">
              Uma historia de transformacao
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-1/2" />

            <div className="flex flex-col gap-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`hidden md:block md:w-1/2 ${
                      index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"
                    }`}
                  >
                    <span className="text-3xl font-bold text-accent">
                      {item.year}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  <div className="absolute left-6 top-2 z-10 h-4 w-4 rounded-full border-4 border-primary bg-card md:left-1/2 md:-translate-x-1/2" />

                  <div className="ml-16 md:hidden">
                    <span className="text-2xl font-bold text-accent">
                      {item.year}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
