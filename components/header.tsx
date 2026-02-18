"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Servicos" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/asafe.png"
            alt="ASAFE Energia Solar"
            width={200}
            height={120}
            className="h-20 w-auto md:h-20 py-2"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+5500000000000"
            className="flex items-center gap-2 text-sm font-medium text-foreground/80"
          >
            <Phone className="h-4 w-4 text-primary" />
            (00) 00000-0000
          </a>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contato">Solicitar Orcamento</Link>
          </Button>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-foreground/80 transition-colors hover:text-primary py-2"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <a
                href="tel:+5500000000000"
                className="flex items-center gap-2 text-sm font-medium text-foreground/80"
              >
                <Phone className="h-4 w-4 text-primary" />
                (00) 00000-0000
              </a>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                <Link href="/contato">Solicitar Orcamento</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
