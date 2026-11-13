"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Users, Award, Headphones } from "lucide-react"

const stats = [
  { icon: Shield, value: "100%", label: "Легальное оформление" },
  { icon: Users, value: "2500+", label: "Довольных клиентов" },
  { icon: Award, value: "5 лет", label: "Опыта работы" },
  { icon: Headphones, value: "24/7", label: "Поддержка" },
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

export function About() {
  return (
    <section id="about" className="bg-secondary pt-10 pb-20 md:pt-14 md:pb-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Картинка */}
          <FadeInSection>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://i.postimg.cc/WbXwKDkC/ispol'zua-vnesnost'-devuska-202603221946.jpg"
                alt="Краков, Польша — город где базируется Yukon KOD 95"
                className="h-auto w-full object-cover"
                width={700}
                height={470}
              />
            </div>
          </FadeInSection>

          {/* Текст */}
          <FadeInSection delay={150}>
            <div>
              <h2 className="font-serif text-5xl font-bold text-foreground text-balance">
                {"О компании "}
                <span className="font-mono text-2xl tracking-tight text-foreground sm:text-3xl md:text-4xl">{"YUKON"}</span>{" "}
                <span className="font-mono text-2xl tracking-tight text-accent sm:text-3xl md:text-4xl">
                  {"KOD "}
                  <span className="font-sans font-black text-[1.1em]">{"95"}</span>
                </span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {"Ваша задача — уверенно чувствовать себя за рулем. Наша — сделать вашу работу в Европе легальной."}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {"YUKON KOD 95 — это профильная школа в Кракове, созданная специально для водителей из стран СНГ. Мы построили обучение так, чтобы сэкономить ваши деньги и нервы на проживании в Польше."}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {"Всю теорию вы проходите онлайн, находясь дома. Приехать в Краков нужно всего на 1 день. Всю бюрократию мы берем на себя: заранее бронируем время на медкомиссию и психотесты, помогаем заполнить анкеты и буквально за руку проводим через подачу документов. Никаких очередей и стресса — только легальный старт вашей карьеры в ЕС."}
              </p>
            </div>
          </FadeInSection>
        </div>

        {/* Статистика — увеличенный текст */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <FadeInSection key={stat.label} delay={i * 100}>
                <div className="flex flex-col items-center rounded-xl bg-background p-6 text-center shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <span className="font-sans font-black text-3xl text-foreground">{stat.value}</span>
                  {/* Увеличенный текст подписи */}
                  <span className="mt-2 text-base text-muted-foreground">{stat.label}</span>
                </div>
              </FadeInSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
