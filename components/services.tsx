"use client"

import { useEffect, useRef, useState } from "react"
import { BookOpen, GraduationCap, CreditCard, FileText, Globe, IdCard } from "lucide-react"
import { openLeadModal } from "@/components/lead-modal"

const services = [
  {
    icon: BookOpen,
    title: "Короткий курс",
    description: "Для водителей с категорией C, выданной до 09.09.2009 года. Ускоренная программа обучения для быстрого получения квалификации.",
    image: "https://i.postimg.cc/s228xyF5/Korotkij-kurs.jpg",
    featured: true,
    available: true,
  },
  {
    icon: GraduationCap,
    title: "Длинный курс",
    description: "Для водителей с категорией C, выданной после 09.09.2009 года. Полный курс обучения с теорией и практикой.",
    image: "https://i.postimg.cc/m2N6ShBS/Dlinnyj-kurs.jpg",
    featured: true,
    available: false,
  },
  {
    icon: IdCard,
    title: "Замена прав",
    description: "Поможем заменить водительское удостоверение на европейское. Полное сопровождение процесса.",
  },
  {
    icon: CreditCard,
    title: "Чип-карта",
    description: "Оформление цифровой карты водителя для тахографа. Необходима для легальной работы в ЕС.",
  },
  {
    icon: FileText,
    title: "Карта побыта",
    description: "Помощь в получении вида на жительство в Польше. Юридическое сопровождение на каждом этапе.",
  },
  {
    icon: Globe,
    title: "Приглашение на визу",
    description: "Оформление приглашения для получения рабочей визы. Быстро и надежно.",
  },
]

function AnimatedCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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
    <div ref={ref} className={`h-full transition-all duration-700 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
      {children}
    </div>
  )
}

export function Services() {
  return (
    <section id="services">
      <style>{`
        @keyframes breathe { 0%,100%{transform:scale(1)} 50%{transform:scale(1.06)} }
        .btn-breathe{animation:breathe 2.4s ease-in-out infinite}
      `}</style>

      <div className="bg-background pt-10 md:pt-12" />

      <div className="bg-foreground py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="font-serif text-5xl font-bold text-primary-foreground">{"Наши услуги"}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/80 sm:text-lg">{"Выберите подходящий курс для получения сертификата КОД 95"}</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-14 pt-14 md:pb-20 md:pt-14">
        
        {/* ГЛАВНАЯ СЕТКА: делит экран на 2 равные колонки на ПК */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
          
          {/* ================= ЛЕВАЯ КОЛОНКА (Основной курс) ================= */}
          <div className="flex flex-col gap-8 w-full">
            {services.filter((s) => s.featured).map((service, i) => (
              service.title === "Длинный курс" ? null : // Заглушка на месте!
              <AnimatedCard key={service.title} delay={i * 150}>
                <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-xl">
                  <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                    <img src={service.image} alt={service.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-between gap-4 p-6 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <h3 className="font-serif text-3xl font-bold text-card-foreground sm:text-4xl">{service.title}</h3>
                      <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{service.description}</p>
                      <span className="font-sans text-4xl font-semibold text-foreground/70">{"799 zł"}</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3 w-full">
                      {service.available !== false ? (
                        <>
                          <button
                            onClick={() => openLeadModal()}
                            className="btn-breathe rounded-lg px-6 py-3 text-base font-semibold text-white bg-accent transition-all duration-200 hover:scale-105 hover:bg-foreground hover:shadow-lg"
                          >
                            {"Записаться на курс"}
                          </button>
                          <a href="/knowledge/kak-prohodit-obuchenie"
                            className="rounded-lg border-2 border-accent px-6 py-3 text-base font-semibold text-accent transition-all hover:scale-105 hover:bg-accent hover:text-white">
                            {"Подробнее"}
                          </a>
                        </>
                        ) : (
                        <button disabled className="w-full cursor-not-allowed rounded-lg border-2 border-gray-300 bg-gray-100 px-6 py-3 text-base font-semibold text-gray-400">
                          {"Пока недоступен"}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>

          {/* ================= ПРАВАЯ КОЛОНКА (Доп. услуги) ================= */}
          <div className="flex flex-col h-full pt-8 lg:pt-0 w-full">
            <AnimatedCard delay={200}>
              <h3 className="mb-6 font-serif text-3xl font-bold text-foreground sm:text-4xl text-center">
                {"Дополнительные услуги"}
              </h3>
            </AnimatedCard>
            
            <div className="grid gap-4 sm:grid-cols-2 flex-1">
              {services.filter((s) => !s.featured).map((service, i) => {
                const Icon = service.icon
                return (
                  <AnimatedCard key={service.title} delay={i * 100}>
                    <div className="group flex h-full flex-col items-center justify-center rounded-xl border border-border bg-background p-5 text-center shadow-sm transition-all duration-300 hover:border-accent/30 hover:scale-105 hover:shadow-xl">
                      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 transition-transform duration-300 group-hover:scale-105">
                        <Icon className="h-7 w-7 text-accent" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-foreground">{service.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                    </div>
                  </AnimatedCard>
                )
              })}
            </div>

            <div className="mt-6 flex justify-center w-full py-2">
              <button
                onClick={() => openLeadModal("Бесплатная консультация?")}
                className="btn-breathe w-full lg:w-auto rounded-xl px-6 lg:px-12 py-4 text-base font-semibold text-white bg-accent shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-foreground hover:shadow-xl"
              >
                {"Получить бесплатную консультацию"}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
