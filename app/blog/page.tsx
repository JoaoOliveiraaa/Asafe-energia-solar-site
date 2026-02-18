import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | ASAFE Energia Solar",
  description:
    "Fique por dentro das novidades sobre energia solar, dicas de economia e sustentabilidade no blog da ASAFE Energia Solar.",
}

const featuredPost = {
  slug: "vantagens-energia-solar-2025",
  title: "As 10 Principais Vantagens da Energia Solar em 2025",
  excerpt:
    "Descubra por que investir em energia solar em 2025 e uma das melhores decisoes financeiras e ambientais que voce pode tomar. Desde a economia na conta de luz ate a valorizacao do imovel.",
  image: "/images/blog-1.jpg",
  date: "10 Jan 2025",
  readTime: "8 min de leitura",
  category: "Economia",
}

const posts = [
  {
    slug: "como-funciona-energia-solar",
    title: "Como Funciona a Energia Solar Fotovoltaica?",
    excerpt:
      "Entenda de forma simples como os paineis solares convertem a luz do sol em energia eletrica para alimentar sua casa ou empresa.",
    image: "/images/blog-2.jpg",
    date: "25 Dez 2024",
    readTime: "6 min de leitura",
    category: "Educacao",
  },
  {
    slug: "economia-energia-solar-residencial",
    title: "Quanto Voce Pode Economizar com Energia Solar?",
    excerpt:
      "Calculamos a economia real de familias que adotaram energia solar. Os resultados vao surpreender voce.",
    image: "/images/blog-3.jpg",
    date: "15 Dez 2024",
    readTime: "5 min de leitura",
    category: "Economia",
  },
  {
    slug: "manutencao-paineis-solares",
    title: "Guia Completo de Manutencao de Paineis Solares",
    excerpt:
      "Aprenda tudo sobre como cuidar do seu sistema fotovoltaico para garantir a maxima eficiencia e durabilidade ao longo dos anos.",
    image: "/images/service-maintenance.jpg",
    date: "08 Dez 2024",
    readTime: "7 min de leitura",
    category: "Manutencao",
  },
  {
    slug: "financiamento-energia-solar",
    title: "Financiamento Solar: Opcoes Para Todos os Bolsos",
    excerpt:
      "Conheca as melhores linhas de credito e financiamento disponiveis para instalar seu sistema de energia solar.",
    image: "/images/hero-solar.jpg",
    date: "01 Dez 2024",
    readTime: "6 min de leitura",
    category: "Financas",
  },
  {
    slug: "energia-solar-agronegocio",
    title: "Energia Solar no Agronegocio: Uma Revolucao Silenciosa",
    excerpt:
      "Como o setor agricola esta se beneficiando da energia solar para reduzir custos e aumentar a competitividade.",
    image: "/images/portfolio-3.jpg",
    date: "20 Nov 2024",
    readTime: "5 min de leitura",
    category: "Agronegocio",
  },
  {
    slug: "tendencias-energia-solar-2025",
    title: "Tendencias do Mercado de Energia Solar para 2025",
    excerpt:
      "As principais tendencias que devem moldar o mercado de energia solar no proximo ano, de novas tecnologias a politicas publicas.",
    image: "/images/portfolio-2.jpg",
    date: "10 Nov 2024",
    readTime: "8 min de leitura",
    category: "Tendencias",
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-secondary pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Blog
          </span>
          <h1 className="mt-3 font-serif text-4xl font-bold text-secondary-foreground md:text-5xl text-balance">
            Noticias e artigos sobre energia solar
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground/70">
            Dicas, novidades e conteudo educativo sobre energia solar, economia
            e sustentabilidade.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            href="#"
            className="group grid gap-8 overflow-hidden rounded-2xl bg-card border border-border transition-all hover:shadow-xl lg:grid-cols-2"
          >
            <div className="relative h-64 overflow-hidden lg:h-auto">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-accent-foreground">
                Destaque
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <span className="inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {featuredPost.category}
              </span>
              <h2 className="mt-4 font-serif text-2xl font-bold text-foreground md:text-3xl group-hover:text-primary transition-colors">
                {featuredPost.title}
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {featuredPost.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {featuredPost.readTime}
                </span>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Ler artigo completo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href="#"
                className="group overflow-hidden rounded-2xl bg-card border border-border transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {post.category}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
