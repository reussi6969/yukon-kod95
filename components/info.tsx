"use client"

import { useEffect, useRef, useState } from "react"
import { Monitor, MapPin, FileCheck, Truck } from "lucide-react"

const steps = [
  {
    icon: Monitor,
    step: "1",
    title: "Онлайн обучение",
    description:
      "Проходите теоретический курс удалённо из любой точки мира. Удобная платформа, доступ 24/7.",
  },
  {
    icon: MapPin,
    step: "2",
    title: "Визит в Краков",
    description:
      "Приезжаете в Краков всего на 1 день для сдачи медицинских анализов и подачи документов.",
  },
  {
    icon: FileCheck,
    step: "3",
    title: "Получение сертификата",
    description:
      "После успешного завершения курса получаете официальный сертификат Код 95, признанный во всем ЕС.",
  },
  {
    icon: Truck,
    step: "4",
    title: "Работа в Европе",
    description:
      "Легально работаете водителем грузового транспорта в любой стране Европейского Союза.",
  },
]

function FadeInSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {children}
    </div>
  )
}

export function Info() {
  return (
    <section id="info" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <FadeInSection>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground text-balance">
              {"Как это работает"}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {"Простой и понятный процесс получения Код 95 в четыре шага"}
            </p>
          </div>
        </FadeInSection>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
             <FadeInSection key={step.step} delay={i * 120} className="h-full">
                <div className="relative flex h-full flex-col items-center rounded-xl border border-border bg-background p-6 pt-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                    {`Шаг ${step.step}`}
                  </span>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-foreground">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </FadeInSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
