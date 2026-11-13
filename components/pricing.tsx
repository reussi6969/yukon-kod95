"use client"

import { openLeadModal } from "@/components/lead-modal"

import { useEffect, useRef, useState } from "react"
import { Check, Clock } from "lucide-react"

const plans = [
  {
    title: "Короткий курс",
    subtitle: "КОД 95",
    price: "799",
    currency: "PLN",
    description: "Для водителей с категорией C, выданной до 09.09.2009 года",
    features: [
      "Онлайн обучение (теория)",
      "Всего 1 визит в Краков",
      "Сдача медицинских анализов",
      "Подача документов",
      "Официальный сертификат КОД 95",
      "Признан во всём Евросоюзе",
      "Поддержка на каждом этапе",
    ],
    available: true,
    featured: true,
    badge: "Популярный",
    cta: "Записаться",
  },
  {
    title: "Длинный курс",
    subtitle: "КОД 95",
    price: "XXX",
    currency: "PLN",
    description: "Для водителей с категорией C, выданной после 09.09.2009 года",
    features: [
      "Онлайн обучение (теория)",
      "Всего 1 визит в Краков",
      "Сдача медицинских анализов",
      "Подача документов",
      "Официальный сертификат КОД 95",
      "Признан во всём Евросоюзе",
      "Поддержка на каждом этапе",
    ],
    available: false,
    featured: false,
    badge: "Скоро",
    cta: "Скоро доступен",
  },
  {
    title: "Доп. услуги",
    subtitle: "Пакет",
    price: null,
    currency: "",
    description: "Замена прав, чип-карта, карта побыта и другое",
    features: [
      "Замена водительских прав",
      "Оформление чип-карты",
      "Карта побыта (вид на жительство)",
      "Приглашение на рабочую визу",
      "Консультация и сопровождение",
    ],
    available: true,
    featured: false,
    badge: null,
    cta: "Узнать цену",
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
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])
  return (
    <div ref={ref} className={`h-full transition-all duration-700 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
      {children}
    </div>
  )
}

function PlanSubtitle({ text, featured }: { text: string; featured: boolean }) {
  const cls = `font-mono text-xl font-bold tracking-wider ${featured ? "text-accent" : "text-accent"}`
  if (text === "КОД 95") {
    return (
      <span className={cls}>
        {"КОД "}
        <span className="font-sans font-black tracking-normal">{"95"}</span>
      </span>
    )
  }
  return <span className={cls}>{text}</span>
}

export function Pricing() {
  return (
    <section id="pricing" className="bg-secondary pt-10 pb-20 md:pt-14 md:pb-28">
      <div className="mx-auto max-w-7xl px-4">

        <FadeInSection>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-5xl font-bold text-foreground text-balance">
              {"Цены"}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {"Прозрачные условия — никаких скрытых платежей"}
            </p>
          </div>
        </FadeInSection>

       <div className="mt-12 flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8 mx-auto max-w-4xl w-full [&>*]:flex-1 [&>*]:w-full [&>*]:max-w-[420px]">
          {plans.map((plan, i) => (
            plan.title === "Длинный курс" ? null :
            <FadeInSection key={plan.title} delay={i * 120}>
              <div className={`relative flex h-full flex-col rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.featured ? "border-accent bg-foreground shadow-xl" : "border-border bg-background shadow-sm"
              }`}>

                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1 text-sm font-semibold ${
                      plan.available ? "bg-accent text-white" : "bg-muted text-muted-foreground"
                    }`}>
                      {!plan.available && <Clock className="h-3.5 w-3.5" />}
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-7 pt-8">
                  <div className="text-center">
                    <h3 className={`font-serif text-4xl font-bold ${plan.featured ? "text-primary-foreground" : "text-foreground"}`}>
                      {plan.title}
                    </h3>
                    <div className="mt-1">
                      <PlanSubtitle text={plan.subtitle} featured={plan.featured} />
                    </div>
                    <p className={`mt-3 text-lg leading-relaxed ${plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      {plan.description}
                    </p>
                  </div>

                  {/* Цена — text-6xl (уменьшено с 8xl) */}
                  <div className="my-6 text-center">
                    {plan.price ? (
                      <>
                        <span className={`font-sans font-black text-6xl ${plan.featured ? "text-primary-foreground" : "text-foreground"}`}>
                          {plan.price}
                        </span>
                        <span className={`ml-2 text-lg font-medium ${plan.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                          {plan.currency}
                        </span>
                      </>
                    ) : (
                      <span className={`font-sans font-black text-4xl ${plan.featured ? "text-primary-foreground" : "text-foreground"}`}>
                        {"По запросу"}
                      </span>
                    )}
                  </div>

                  <div className={`mb-6 h-px ${plan.featured ? "bg-primary-foreground/20" : "bg-border"}`} />

                  <ul className="flex flex-1 flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          plan.featured ? "bg-accent/30" : "bg-accent/10"
                        }`}>
                          <Check className="h-3 w-3 text-accent" />
                        </div>
                        <span className={`text-base ${plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    {plan.available ? (
                      <button onClick={() => openLeadModal()} className={`flex w-full items-center justify-center rounded-lg px-6 py-4 text-base font-semibold transition-all hover:scale-105 ${
                        plan.featured
                          ? "bg-accent text-white hover:bg-accent/90"
                          : "border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-white"
                      }`}>
                        {plan.cta}
                      </button>
                    ) : (
                      <button disabled className="flex w-full cursor-not-allowed items-center justify-center rounded-lg border-2 border-muted bg-muted/50 px-6 py-4 text-base font-semibold text-muted-foreground">
                        {plan.cta}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={400}>
          <div className="mt-14 mb-2 text-center">
            <p className="text-lg text-muted-foreground">
              {"Есть вопросы по стоимости? "}
              <a href="#contact" className="font-semibold text-accent underline-offset-4 hover:underline">
                {"Напишите нам"}
              </a>
              {" — ответим быстро."}
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
