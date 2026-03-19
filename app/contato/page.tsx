"use client"

import { useState } from "react"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    value: "(16) 99601-1587",
    href: "tel:+5516996011587",
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "contato@asafeenergia.com.br",
    href: "mailto:contato@asafeenergia.com.br",
  },
  {
    icon: MapPin,
    title: "Endereco",
    value: "R. Rio Paranapanema, 271 - Jockey Clube, Sao Carlos - SP, 13565-050",
    href: "https://maps.google.com/?q=R.+Rio+Paranapanema,+271+-+Jockey+Clube,+Sao+Carlos+-+SP",
  },
  {
    icon: Clock,
    title: "Horario",
    value: "Seg a Sex: 8h as 18h | Sab: 8h as 12h",
    href: null,
  },
]

export default function ContatoPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-secondary pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Contato
          </span>
          <h1 className="mt-3 font-serif text-4xl font-bold text-secondary-foreground md:text-5xl text-balance">
            Fale com a nossa equipe
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground/70">
            Estamos prontos para ajudar voce a dar o primeiro passo rumo a
            energia solar. Solicite seu orcamento gratuito.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Info */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Informacoes de contato
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Entre em contato por qualquer um dos canais abaixo ou preencha
                  o formulario ao lado. Responderemos o mais rapido possivel.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="shrink-0 rounded-lg bg-primary/10 p-3">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">
                        {info.title}
                      </h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="mt-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm text-muted-foreground">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-primary p-8">
                <h3 className="text-lg font-bold text-primary-foreground">
                  Orcamento rapido?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
                  Envie sua conta de luz pelo WhatsApp e receba um orcamento
                  personalizado em ate 24 horas.
                </p>
                <Button
                  asChild
                  className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <a href="https://wa.me/5516996011587" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl bg-card border border-border p-8 md:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Mensagem enviada!
                    </h3>
                    <p className="mt-3 max-w-sm text-muted-foreground">
                      Obrigado pelo contato. Nossa equipe retornara em breve com
                      todas as informacoes que voce precisa.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Enviar nova mensagem
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-foreground">
                      Solicite seu orcamento
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Preencha o formulario abaixo e entraremos em contato.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="flex flex-col gap-2">
                          <Label htmlFor="name" className="text-foreground">
                            Nome completo
                          </Label>
                          <Input
                            id="name"
                            placeholder="Seu nome"
                            required
                            className="bg-background"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <Label htmlFor="email" className="text-foreground">
                            E-mail
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="seu@email.com"
                            required
                            className="bg-background"
                          />
                        </div>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="flex flex-col gap-2">
                          <Label htmlFor="phone" className="text-foreground">
                            Telefone
                          </Label>
                          <Input
                            id="phone"
                            placeholder="(00) 00000-0000"
                            required
                            className="bg-background"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <Label htmlFor="city" className="text-foreground">
                            Cidade / Estado
                          </Label>
                          <Input
                            id="city"
                            placeholder="Sua cidade"
                            required
                            className="bg-background"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <Label htmlFor="service" className="text-foreground">
                          Tipo de servico
                        </Label>
                        <select
                          id="service"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-foreground"
                          required
                        >
                          <option value="">Selecione um servico</option>
                          <option value="residencial">Energia Solar Residencial</option>
                          <option value="comercial">Energia Solar Comercial</option>
                          <option value="industrial">Energia Solar Industrial</option>
                          <option value="manutencao">Manutencao</option>
                          <option value="outro">Outro</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-2">
                        <Label htmlFor="bill" className="text-foreground">
                          Valor medio da conta de luz (R$)
                        </Label>
                        <Input
                          id="bill"
                          placeholder="Ex: R$ 500,00"
                          className="bg-background"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <Label htmlFor="message" className="text-foreground">
                          Mensagem
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Conte-nos mais sobre seu projeto..."
                          rows={4}
                          className="bg-background resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 w-full md:w-auto"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Enviar Mensagem
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="overflow-hidden rounded-2xl bg-secondary/10 border border-border">
            <div className="flex h-80 items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto h-12 w-12 text-primary/30" />
                <p className="mt-4 text-lg font-semibold text-foreground">
                  Nossa Localizacao
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  R. Rio Paranapanema, 271 - Jockey Clube, Sao Carlos - SP
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
