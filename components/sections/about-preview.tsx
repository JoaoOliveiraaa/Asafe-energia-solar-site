import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ShieldCheck, Clock, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: ShieldCheck,
    title: "Garantia de 25 Anos",
    description: "Paineis com garantia de desempenho de 25 anos.",
  },
  {
    icon: Clock,
    title: "Retorno Rapido",
    description: "Payback medio de 3 a 5 anos no investimento.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfacao Total",
    description: "Mais de 98% dos clientes recomendam nossos servicos.",
  },
]

export function AboutPreviewSection() {
  return (
    <section className="py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/about-team.jpg"
                alt="Equipe ASAFE Energia Solar"
                width={600}
                height={450}
                className="w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-primary p-8 text-center md:block">
              <span className="block text-4xl font-bold text-primary-foreground">10+</span>
              <span className="text-sm text-primary-foreground/80">
                Anos de<br />experiencia
              </span>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Quem Somos
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Comprometidos com o futuro sustentavel do Brasil
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              A ASAFE Energia Solar nasceu com a missao de democratizar o acesso
              a energia limpa. Com uma equipe altamente qualificada e
              comprometida, ja transformamos a vida de centenas de familias e
              empresas em todo o Brasil.
            </p>

            <div className="mt-8 flex flex-col gap-6">
              {features.map((feat) => (
                <div key={feat.title} className="flex items-start gap-4">
                  <div className="shrink-0 rounded-lg bg-primary/10 p-3">
                    <feat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {feat.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {feat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/sobre">
                  Conheca Nossa Historia
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
