"use client"

import { useState, useMemo } from "react"
import {
  Home,
  Building2,
  Wheat,
  ChevronRight,
  ChevronLeft,
  Zap,
  Sun,
  PiggyBank,
  BatteryCharging,
  RotateCcw,
} from "lucide-react"

const STEPS = [
  {
    question: "Primeiro, a instalacao e para:",
    type: "choice" as const,
    options: [
      { label: "Minha Casa", icon: Home, value: "residencial" },
      { label: "Minha Empresa", icon: Building2, value: "comercial" },
      { label: "Agronegocio", icon: Wheat, value: "agronegocio" },
    ],
  },
  {
    question: "Qual o valor medio da sua conta de luz?",
    type: "choice" as const,
    options: [
      { label: "Ate R$ 300", value: "ate-300" },
      { label: "R$ 300 a R$ 800", value: "300-800" },
      { label: "R$ 800 a R$ 2.000", value: "800-2000" },
      { label: "Acima de R$ 2.000", value: "acima-2000" },
    ],
  },
  {
    question: "Em quanto tempo voce sonha em gerar sua propria energia?",
    type: "choice" as const,
    options: [
      { label: "O mais rapido possivel", value: "urgente" },
      { label: "Em ate 3 meses", value: "3-meses" },
      { label: "Em ate 6 meses", value: "6-meses" },
      { label: "Estou apenas pesquisando", value: "pesquisando" },
    ],
  },
  {
    question: "Qual o tipo da sua cobertura?",
    type: "choice" as const,
    options: [
      { label: "Telhado ceramico", value: "ceramico" },
      { label: "Telhado metalico", value: "metalico" },
      { label: "Laje de concreto", value: "laje" },
      { label: "Fibrocimento", value: "fibrocimento" },
      { label: "Outro / Nao sei", value: "outro" },
    ],
  },
]

function getSimulationValues(billRange: string) {
  switch (billRange) {
    case "ate-300":
      return { savings: 285, kwh: 237, total25: 85500, kwp: 2.1 }
    case "300-800":
      return { savings: 665, kwh: 554, total25: 199500, kwp: 4.62 }
    case "800-2000":
      return { savings: 1330, kwh: 1108, total25: 399000, kwp: 9.24 }
    case "acima-2000":
      return { savings: 2660, kwh: 2216, total25: 798000, kwp: 18.48 }
    default:
      return { savings: 665, kwh: 554, total25: 199500, kwp: 4.62 }
  }
}

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  })
}

export function LeadForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)
  const [name, setName] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const simulation = useMemo(() => {
    const billAnswer = answers[1] || "300-800"
    return getSimulationValues(billAnswer)
  }, [answers])

  function handleSelect(value: string) {
    const newAnswers = [...answers, value]
    setAnswers(newAnswers)

    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowResult(true)
    }
  }

  function handleReset() {
    setCurrentStep(0)
    setAnswers([])
    setShowResult(false)
    setName("")
    setWhatsapp("")
    setSubmitted(false)
  }

  function handleSubmit() {
    if (name.trim() && whatsapp.trim()) {
      setSubmitted(true)
    }
  }

  const step = STEPS[currentStep]
  const progress = showResult ? 100 : (currentStep / STEPS.length) * 100

  // -- RESULT SCREEN --
  if (showResult) {
    if (submitted) {
      return (
        <div className="w-full max-w-md rounded-2xl bg-card p-6 shadow-2xl border border-border md:p-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-card-foreground">
              Recebemos seus dados!
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Nossa equipe entrara em contato pelo WhatsApp em ate 24 horas com uma proposta personalizada para voce.
            </p>
            <a
              href={`https://wa.me/5500000000000?text=Ola!%20Fiz%20a%20simulacao%20no%20site%20e%20gostaria%20de%20saber%20mais.%20Meu%20nome%20e%20${encodeURIComponent(name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 uppercase tracking-wide"
            >
              Falar agora pelo WhatsApp
              <ChevronRight className="h-4 w-4" />
            </a>
            <button
              onClick={handleReset}
              className="mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Fazer nova simulacao
            </button>
          </div>
        </div>
      )
    }

    return (
      <div className="w-full max-w-md rounded-2xl bg-card p-6 shadow-2xl border border-border md:p-8">
        {/* Savings highlight card */}
        <div className="rounded-xl bg-accent/15 border border-accent/30 p-5 text-center mb-5">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent-foreground mb-2">
            <Sun className="h-3.5 w-3.5" />
            Sua economia mensal pode chegar a:
          </div>
          <p className="text-3xl font-bold text-accent-foreground md:text-4xl">
            {formatCurrency(simulation.savings)}
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2.5 mb-6">
          <div className="flex flex-col items-center gap-1 rounded-xl border border-border bg-muted/50 p-3 text-center">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-bold text-card-foreground">
              {simulation.kwh.toLocaleString("pt-BR")} kWh
            </span>
            <span className="text-[10px] text-muted-foreground leading-tight">
              Geracao Mes
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 rounded-xl border border-accent/40 bg-accent/10 p-3 text-center">
            <PiggyBank className="h-4 w-4 text-accent-foreground" />
            <span className="text-sm font-bold text-accent-foreground">
              {formatCurrency(simulation.total25)}
            </span>
            <span className="text-[10px] text-muted-foreground leading-tight">
              Em 25 anos
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 rounded-xl border border-border bg-muted/50 p-3 text-center">
            <BatteryCharging className="h-4 w-4 text-primary" />
            <span className="text-sm font-bold text-card-foreground">
              {simulation.kwp.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} kWp
            </span>
            <span className="text-[10px] text-muted-foreground leading-tight">
              Potencia
            </span>
          </div>
        </div>

        {/* Lead capture */}
        <div className="rounded-xl border border-border bg-muted/30 p-5">
          <p className="text-center text-sm font-semibold text-primary mb-4">
            Preencha abaixo para receber seu orcamento.
          </p>
          <div className="flex flex-col gap-3">
            <div>
              <label className="mb-1 block text-xs font-semibold text-card-foreground">
                Nome Completo
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome e sobrenome"
                className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-card-foreground">
                WhatsApp (com DDD)
              </label>
              <input
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="11987654321"
                className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={!name.trim() || !whatsapp.trim()}
              className="mt-1 w-full rounded-xl bg-accent py-3.5 text-sm font-bold uppercase tracking-wider text-accent-foreground transition-all hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Quero economizar 95%
            </button>
          </div>
          <button
            onClick={handleReset}
            className="mt-3 flex w-full items-center justify-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Fazer nova simulacao
          </button>
        </div>
      </div>
    )
  }

  // -- STEP QUESTIONS --
  return (
    <div className="w-full max-w-md rounded-2xl bg-card p-6 shadow-2xl border border-border md:p-8">
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-3">
          <Zap className="h-5 w-5 text-accent" />
          <h3 className="text-lg font-bold text-card-foreground">
            Descubra sua economia
          </h3>
        </div>
        <p className="text-xs text-muted-foreground">
          Economia de ate 95% na sua conta. Responda em 30 segundos!
        </p>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-medium text-muted-foreground">
            Passo {currentStep + 1} de {STEPS.length}
          </span>
          <span className="text-xs font-medium text-primary">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <p className="mb-5 text-sm font-semibold text-card-foreground">
        {step.question}
      </p>

      <div className="flex flex-col gap-3">
        {step.options.map((option) => {
          const Icon = "icon" in option ? option.icon : null
          return (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className="group flex items-center gap-3 rounded-xl border-2 border-border bg-card px-4 py-3.5 text-left transition-all hover:border-primary hover:shadow-md focus:outline-none focus:border-primary"
            >
              {Icon && (
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
              )}
              <span className="text-sm font-medium text-card-foreground">
                {option.label}
              </span>
              <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          )
        })}
      </div>

      {currentStep > 0 && (
        <button
          onClick={() => {
            setCurrentStep(currentStep - 1)
            setAnswers(answers.slice(0, -1))
          }}
          className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
          Voltar
        </button>
      )}
    </div>
  )
}
