"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Mail, MapPin, Clock, ChevronDown } from "lucide-react"

const navLinks = [
  { label: "Главная", href: "/#hero", anchor: true, dropdown: false },
  { label: "Услуги", href: "/services", anchor: false, dropdown: true },
  { label: "Документы", href: "/documents", anchor: false, dropdown: false },
  { label: "База знаний", href: "/knowledge", anchor: false, dropdown: false },
  { label: "Цены", href: "/#pricing", anchor: true, dropdown: false },
  { label: "Контакт", href: "/#contact", anchor: true, dropdown: false },
]

const serviceLinks = [
  { label: "Короткий курс", href: "/services/korotkiy-kurs" },
  { label: "Чип-карта", href: "/services/chip-karta" },
  { label: "Замена прав", href: "/services/zamena-prav" },
  { label: "Приглашение на визу", href: "/services/priglashenie-na-vizu" },
  { label: "Карта побыта", href: "/services/karta-pobytu" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [topBarVisible, setTopBarVisible] = useState(true)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 10)
      setScrollY(y)
      setTopBarVisible(y < 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const progress = Math.min(1, scrollY / 80)
  const bgOpacity = progress * 0.78
  const blurAmount = progress * 24

  function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault()
    setMobileOpen(false)
    const anchor = href.startsWith("/") ? href.slice(1) : href
    if (isHome) {
      const target = document.querySelector(anchor)
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" })
    } else {
      window.location.href = href
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-none"}`}
      style={{
        backgroundColor: `rgba(255, 255, 255, ${bgOpacity})`,
        backdropFilter: `blur(${blurAmount}px) saturate(180%)`,
        WebkitBackdropFilter: `blur(${blurAmount}px) saturate(180%)`,
        transition: "background-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Top bar */}
      <div
        className="hidden sm:block overflow-hidden border-b border-border/60"
        style={{
          maxHeight: topBarVisible ? "48px" : "0px",
          opacity: topBarVisible ? 1 : 0,
          transition: "max-height 0.35s ease, opacity 0.25s ease",
          backgroundColor: "rgba(245, 245, 245, 0.9)",
        }}
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs sm:text-sm">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1 text-foreground">
              <MapPin className="h-3.5 w-3.5 text-accent" />
              {"al. 29 Listopada 130/421, 31-406 Krakow"}
            </span>
            <span className="hidden items-center gap-1 text-foreground sm:flex">
              <Clock className="h-3.5 w-3.5 text-accent" />
              {"Пн - Пт 09:00 - 16:00"}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+48452650325" className="flex items-center gap-1 text-foreground transition-colors hover:text-accent">
              <Phone className="h-3.5 w-3.5 text-accent" />
              {"+48 452 650 325"}
            </a>
            <a href="mailto:kod95@yukon.com.pl" className="hidden items-center gap-1 text-foreground transition-colors hover:text-accent md:flex">
              <Mail className="h-3.5 w-3.5 text-accent" />
              {"kod95@yukon.com.pl"}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-mono text-2xl font-bold tracking-tight text-foreground">{"YUKON"}</span>
          <span className="font-mono text-2xl font-bold text-accent">
            {"KOD "}
            <span className="font-sans font-black text-[1.1em]">{"95"}</span>
          </span>
        </Link>

        {/* Десктоп навигация */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.href} className="relative group">
                <button className="font-sans text-sm font-medium text-foreground transition-colors hover:text-accent flex items-center gap-1">
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
                  <div className="rounded-xl border border-border bg-background shadow-xl py-2 min-w-[200px]">
                    {serviceLinks.map((s) => (
                      <Link key={s.href} href={s.href}
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-accent transition-colors">
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : link.anchor ? (
              <a key={link.href} href={link.href} onClick={(e) => handleAnchorClick(e, link.href)}
                className="font-sans text-sm font-medium text-foreground transition-colors hover:text-accent">
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href}
                className={`font-sans text-sm font-medium transition-colors hover:text-accent ${pathname.startsWith(link.href) ? "text-accent" : "text-foreground"}`}>
                {link.label}
              </Link>
            )
          )}
        </nav>

        <button onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-md p-2 text-foreground transition-colors hover:bg-secondary lg:hidden" aria-label="Toggle menu">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Мобильное меню */}
      {mobileOpen && (
        <nav className="border-t border-border bg-background/95 px-4 pb-4 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.href}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2.5 font-sans text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    {link.label}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {servicesOpen && (
                    <div className="ml-3 flex flex-col gap-1 border-l border-border pl-3 mt-1 mb-1">
                      {serviceLinks.map((s) => (
                        <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)}
                          className="rounded-md px-3 py-2 font-sans text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : link.anchor ? (
                <a key={link.href} href={link.href} onClick={(e) => handleAnchorClick(e, link.href)}
                  className="rounded-md px-3 py-2.5 font-sans text-sm font-medium text-foreground transition-colors hover:bg-secondary">
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                  className="rounded-md px-3 py-2.5 font-sans text-sm font-medium text-foreground transition-colors hover:bg-secondary">
                  {link.label}
                </Link>
              )
            )}
          </div>
        </nav>
      )}
    </header>
  )
}
