"use client"

import { useEffect, useRef, useState } from "react"
import { BookOpen, GraduationCap, CreditCard, FileText, Globe, IdCard } from "lucide-react"
import { openLeadModal } from "@/components/lead-modal"
import { SHORT_COURSE_PRICE, LONG_COURSE, isLongCoursePromoActive } from "@/lib/prices"

const services = [
  {
    icon: BookOpen,
    title: "Короткий курс",
    description: "Для водителей с категорией C, выданной до 09.09.2009 года. Ускоренная программа обучения для быстрого получения квалификации.",
    image: "/images/korotkij-kurs.webp",
    featured: true,
    available: true,
    course: "short",
    more: "/services/korotkiy-kurs",
  },
  {
    icon: GraduationCap,
    title: "Длинный курс",
    description: "Для водителей с категорией C, выданной после 09.09.2009 года. Полный курс обучения с теорией и практикой.",
    image: "/images/dlinnyj-kurs.webp",
    featured: true,
    available: true,
    course: "long",
    more: "/knowledge/kak-prohodit-obuchenie",
  },
  {
    icon: IdCard,
    title: "Замена прав",
    href: "/services/zamena-prav",
    description: "Поможем заменить водительское удостоверение на европейское. Полное сопровождение процесса.",
  },
  {
    icon: CreditCard,
    title: "Чип-карта",
    href: "/services/chip-karta",
    description: "Оформление цифровой карты водителя для тахографа. Необходима для легальной работы в ЕС.",
  },
  {
    icon: FileText,
    title: "Карта побыта",
    href: "/services/karta-pobytu",
    description: "Помощь в получении вида на жительство в Польше. Юридическое сопровождение на каждом этапе.",
  },
  {
    icon: Globe,
    title: "Приглашение на визу",
    href: "/services/priglashenie-na-vizu",
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

function CardPrice({ course }: { course?: string }) {
  if (course === "long" && isLongCoursePromoActive()) {
    return (
      <div className="flex flex-col items-center gap-1">
        <span className="rounded-full bg-accent px-3 py-1 text-sm font-semibold text-white">{`Скидка ${LONG_COURSE.promoLabel}`}</span>
        <div className="flex flex-wrap items-baseline justify-center gap-x-3">
          <span className="whitespace-nowrap font-sans text-2xl font-medium text-muted-foreground line-through">{`${LONG_COURSE.regular} zł`}</span>
          <span className="whitespace-nowrap font-sans text-4xl font-semibold text-foreground">{`${LONG_COURSE.promo} zł`}</span>
        </div>
        <span className="text-xs text-muted-foreground">{`Самая низкая цена за 30 дней до скидки: ${LONG_COURSE.regular} zł`}</span>
      </div>
    )
  }
  const price = course === "long" ? LONG_COURSE.regular : SHORT_COURSE_PRICE
  return <span className="whitespace-nowrap font-sans text-4xl font-semibold text-foreground/70">{`${price} zł`}</span>
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
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary-foreground">{"Наши услуги"}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/80 sm:text-lg">{"Выберите подходящий курс для получения сертификата КОД 95"}</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-14 pt-14 md:pb-20 md:pt-14">
        
        {/* Курсы: короткий слева, длинный справа */}
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:gap-10">
            {services.filter((s) => s.featured).map((service, i) => (
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
                      <CardPrice course={service.course} />
                    </div>
                    <div className="flex flex-wrap justify-center gap-3 w-full">
                      {service.available !== false ? (
                        <>
                          <button
                            onClick={() => openLeadModal(`${service.title} КОД 95`)}
                            className="btn-breathe rounded-lg px-6 py-3 text-base font-semibold text-white bg-accent transition-all duration-200 hover:scale-105 hover:bg-foreground hover:shadow-lg"
                          >
                            {"Записаться на курс"}
                          </button>
                          <a href={service.more}
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

        {/* Дополнительные услуги — под курсами, в один ряд */}
        <div className="mt-16 md:mt-20">
          <AnimatedCard>
            <h3 className="mb-8 text-center font-serif text-3xl font-bold text-foreground sm:text-4xl">
              {"Дополнительные услуги"}
            </h3>
          </AnimatedCard>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.filter((s) => !s.featured).map((service, i) => {
              const Icon = service.icon
              return (
                <AnimatedCard key={service.title} delay={i * 100}>
                  <a href={service.href}
                    className="group flex h-full items-start gap-4 rounded-xl border border-border bg-background p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl sm:flex-col sm:items-center sm:gap-0 sm:p-6 sm:text-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 transition-colors duration-300 group-hover:bg-accent sm:mb-4 sm:h-14 sm:w-14">
                      <Icon className="h-6 w-6 text-accent transition-colors duration-300 group-hover:text-white sm:h-7 sm:w-7" />
                    </div>
                    <div className="flex flex-1 flex-col sm:items-center">
                      <h4 className="font-serif text-xl font-bold text-foreground">{service.title}</h4>
                      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground sm:mt-2">{service.description}</p>
                      <span className="mt-3 text-sm font-semibold text-accent sm:mt-4">{"Подробнее →"}</span>
                    </div>
                  </a>
                </AnimatedCard>
              )
            })}
          </div>

          <div className="mt-10 flex justify-center w-full">
            <button
              onClick={() => openLeadModal("Бесплатная консультация")}
              className="btn-breathe w-full lg:w-auto rounded-xl px-6 lg:px-12 py-4 text-base font-semibold text-white bg-accent shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-foreground hover:shadow-xl"
            >
              {"Получить бесплатную консультацию"}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
