"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"
import { openLeadModal } from "@/components/lead-modal"

const PHONE = "+48452650325"
const PHONE_DISPLAY = "+48 452 650 325"
const WHATSAPP = "https://wa.me/48452650325"
const TELEGRAM = "https://t.me/MarynaKod95"
const VIBER = "viber://chat?number=%2B48452650325"
const INSTAGRAM = "https://www.instagram.com/yukon_kod_95/"

// Все кнопки одного голубого цвета, при hover — темнее
const BTN_BASE = "bg-accent hover:bg-[#3d7dca]"

const socialButtons = [
  {
    label: "Instagram",
    href: INSTAGRAM,
    target: "_blank",
    icon: (
      // Градиентная иконка Instagram (оригинальные цвета)
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFDC80" />
            <stop offset="25%" stopColor="#FCAF45" />
            <stop offset="50%" stopColor="#F77737" />
            <stop offset="75%" stopColor="#F56040" />
            <stop offset="100%" stopColor="#C13584" />
          </linearGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill="url(#ig-grad)" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="1.8" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: TELEGRAM,
    target: "_blank",
    icon: (
      // Белая иконка Telegram
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="white">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: WHATSAPP,
    target: "_blank",
    icon: (
      // Зелёная иконка WhatsApp
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="12" fill="#25D366" />
        <path fill="white" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      </svg>
    ),
  },
  {
    label: "Viber",
    href: VIBER,
    target: undefined,
    icon: (
      // Фиолетовая иконка Viber — только бабл, без трубки внутри
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="12" fill="#7360F2" />
        {/* Только облако без трубки */}
        <path fill="white" d="M12 5C7.9 5 4.5 7.8 4.5 11.3c0 2.1 1.1 4 2.9 5.2v2.5l2.6-1.3c.7.2 1.3.3 2 .3 4.1 0 7.5-2.8 7.5-6.3S16.1 5 12 5z" />
      </svg>
    ),
  },
  {
    label: PHONE_DISPLAY,
    href: `tel:${PHONE}`,
    target: undefined,
    icon: <Phone className="h-6 w-6 shrink-0 text-white" strokeWidth={2} />,
  },
]

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTimeout(() => setVisible(true), delay); observer.unobserve(el) } },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
      {children}
    </div>
  )
}

export function Contact() {
  return (
    <section id="contact" className="bg-foreground py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">

        {/* Заголовок */}
        <FadeInSection>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-5xl font-bold text-primary-foreground text-balance">
              {"Остались вопросы?"}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
              {"Свяжитесь с нами любым удобным способом!"}
            </p>
          </div>
        </FadeInSection>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">

          {/* 5 больших кнопок */}
          <FadeInSection delay={100}>
            <div className="flex flex-col gap-3">
              {socialButtons.map((btn) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  target={btn.target}
                  rel={btn.target === "_blank" ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-4 rounded-2xl px-6 py-4 text-lg font-semibold text-white shadow-md transition-all duration-200 lg:hover:scale-[1.03] lg:hover:shadow-xl ${BTN_BASE}`}
                >
                  {btn.icon}
                  {btn.label}
                </a>
              ))}
            <button onClick={() => openLeadModal()}
              
              className="mt-2 flex items-center gap-4 rounded-2xl border-2 border-accent bg-transparent px-6 py-4 text-lg font-semibold text-accent shadow-md transition-all duration-200 lg:hover:scale-[1.03] lg:hover:bg-accent lg:hover:text-white"
            >
              {"✉️  Оставить заявку"}
            </button>
          </div>
          </FadeInSection>

          {/* Email и Адрес — по центру вертикально */}
          <FadeInSection delay={200}>
            <div className="flex h-full flex-col justify-center gap-8">

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/20">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  {/* Увеличен: text-lg → text-2xl */}
                  <h3 className="font-serif text-2xl font-bold text-primary-foreground">{"Email"}</h3>
                  <a href="mailto:kod95@yukon.com.pl" className="mt-1 block text-primary-foreground/70 transition-colors hover:text-accent">
                    {"kod95@yukon.com.pl"}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/20">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  {/* Увеличен: text-lg → text-2xl */}
                  <h3 className="font-serif text-2xl font-bold text-primary-foreground">{"Адрес"}</h3>
                  <p className="mt-1 text-primary-foreground/70">
                    {"al. 29 Listopada 130/421, 31-406 Krakow, Polska"}
                  </p>
                </div>
              </div>

            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
