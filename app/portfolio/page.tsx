"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Zap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  "Todos",
  "Residencial",
  "Comercial",
  "Industrial",
  "Agronegocio",
]

const projects = [
  {
    id: "residencia-silva",
    title: "Residencia Silva",
    category: "Residencial",
    location: "Nuporanga, SP",
    power: "6.82 kWp",
    description: "Sistema residencial completo com 11 placas Solares de 620 W.",
    image: "/images/portfolio-1.jpg",
  },
  {
    id: "residencia-americo-620",
    title: "Residencia",
    category: "Residencial",
    location: "Cidade de Américo Brasiliense, SP",
    power: "6.20 kWp",
    description: "Sistema residencial completo com 10 Placas solares 620W de potencia e Inversor de 6 kW.",
    image: "/images/portfolio-2.jpg",
  },
  {
    id: "residencia-americo-420",
    title: "Residencia",
    category: "Residencial",
    location: "Americo Brasiliense, SP",
    power: "4.2 kWp",
    description: "Sistema residencial completo com 6 Placas solares 70W de potencia e 2 Micro Inversores de 2250W",
    image: "/images/portfolio-3.jpg",
  },
  {
    id: "residencia-sao-carlos-660",
    title: "Residencia em São Carlos",
    category: "Residencial",
    location: "São Carlos, SP",
    power: "6.6 kWp",
    description: "Sistema residencial completo com 11 Placas solares 600W de potencia e Inversor de 6 kW.",
    image: "/images/portfolio-4.jpg",
  },
  /*{
    id: "condominio-alto-padrao",
    title: "Condominio Alto Padrão",
    category: "Residencial",
    location: "Brasilia, DF",
    power: "45 kWp",
    description: "Instalacao em condominio de luxo com 12 unidades beneficiadas.",
    image: "/images/portfolio-5.jpg",
  },
  {
    id: "shopping-center-sul",
    title: "Shopping Center Sul",
    category: "Comercial",
    location: "Curitiba, PR",
    power: "500 kWp",
    description: "Maior projeto comercial da ASAFE, cobrindo todo o telhado do shopping.",
    image: "/images/portfolio-6.jpg",
  },
  {
    id: "residencia-moderna",
    title: "Residencia Moderna",
    category: "Residencial",
    location: "Florianopolis, SC",
    power: "12 kWp",
    description: "Sistema de alta performance em residencia contemporanea.",
    image: "/images/service-residential.jpg",
  },
  {
    id: "logistica-express",
    title: "Logistica Express",
    category: "Comercial",
    location: "Goiania, GO",
    power: "200 kWp",
    description: "Centro de distribuicao com cobertura solar completa.",
    image: "/images/service-commercial.jpg",
  },*/
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="relative bg-secondary pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Portfolio
          </span>
          <h1 className="mt-3 font-serif text-4xl font-bold text-secondary-foreground md:text-5xl text-balance">
            Nossos projetos realizados
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground/70">
            Confira alguns dos mais de 500 projetos que ja realizamos em todo o
            Brasil.
          </p>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group overflow-hidden rounded-2xl bg-card border border-border transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/30 transition-colors" />
                  <span className="absolute top-4 left-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-primary" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap className="h-3 w-3 text-accent" />
                      {project.power}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-secondary-foreground md:text-5xl text-balance">
            Quer ver seu projeto aqui?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-secondary-foreground/70">
            Entre em contato e faca parte da nossa lista de clientes satisfeitos.
            Solicite um orcamento gratuito agora mesmo.
          </p>
          <div className="mt-10">
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
          </div>
        </div>
      </section>
    </>
  )
}
