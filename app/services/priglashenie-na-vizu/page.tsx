import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LeadModal } from "@/components/lead-modal"
import { LeadButton } from "@/components/lead-button"
const breatheClass = "btn-breathe"

export default function PriglashenieNaVizuPage() {
  return (
    <>
      <Header />
      <main className="bg-background">
  <style>{`
    @keyframes breathe { 0%,100%{transform:scale(1)} 50%{transform:scale(1.06)} }
    .btn-breathe{animation:breathe 2.4s ease-in-out infinite}
  `}</style>

        {/* Hero */}
        <div className="bg-foreground py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="mb-4 font-mono text-sm font-bold uppercase tracking-widest text-accent">Услуги</p>
            <h1 className="font-serif text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl">
              Приглашение на визу
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
              Хотите легально приехать в Польшу работать — но пока нет ни польского работодателя, ни готовых документов? Приглашение решает эту проблему.
            </p>
            <div className="mt-8">
              <LeadButton
                title="Приглашение на визу"
                className="rounded-xl bg-accent px-10 py-4 text-base font-semibold text-white shadow-md transition-all btn-breathe hover:scale-105 hover:bg-[#3670c2] hover:shadow-xl"
              >
                Оставить заявку
              </LeadButton>
            </div>
          </div>
        </div>

        {/* Баннер */}
        <div className="mx-auto max-w-4xl px-4 -mt-8">
          <div className="overflow-hidden rounded-2xl shadow-xl bg-secondary aspect-[16/7] flex items-center justify-center border border-border">
  <img 
    src="https://i.postimg.cc/wBCwb5vf/Приглашения_на_визу.jpg" 
    alt="Приглашение на визу" 
    className="w-full h-full object-cover" 
  />
</div>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20">

          {/* Что такое */}
          <section className="mb-14">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Что такое приглашение на визу</h2>
            <div className="h-1 w-16 rounded-full bg-accent mb-6" />
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Приглашение (по-польски — zaproszenie) — это официальный документ от польской компании или физического лица. Он подтверждает, что вас ждут в Польше и берут на себя ответственность за цель вашего визита.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Без этого документа получить рабочую визу в большинстве случаев невозможно. Консульство просто не примет заявку.
            </p>
            <div className="rounded-2xl bg-accent/10 border border-accent/20 px-6 py-4">
              <p className="text-base text-foreground">
                💡 <strong>Важно понимать:</strong> приглашение — это не гарантия визы. Но это обязательный первый шаг. С правильно оформленным документом шансы на одобрение значительно выше.
              </p>
            </div>
          </section>

          {/* Кому нужно */}
          <section className="mb-14">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Кому нужно приглашение</h2>
            <div className="h-1 w-16 rounded-full bg-accent mb-6" />
            <div className="flex flex-col gap-3">
              {[
                "Планируете приехать в Польшу на работу, но ещё находитесь на родине",
                "Не имеете официального контракта с польским работодателем",
                "Хотите оформить визу через консульство Польши в своей стране",
                "Планируете пройти обучение Код 95 или оформить другие документы по приезде",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4 rounded-xl border border-border bg-background px-5 py-4">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <svg className="h-3.5 w-3.5 text-accent" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-base text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </section>
<div className="mb-10 flex justify-center">
            <LeadButton
              title="Приглашение на визу"
              className="rounded-xl bg-accent px-10 py-4 text-base font-semibold text-white shadow-md transition-all btn-breathe hover:scale-105 hover:bg-[#3670c2] hover:shadow-xl"
            >
              Получить консультацию
            </LeadButton>
          </div>
          {/* Как работает */}
          <section className="mb-14">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Как это работает: три шага</h2>
            <div className="h-1 w-16 rounded-full bg-accent mb-6" />
            <div className="flex flex-col gap-4">
              {[
                { num: "1", title: "Мы оформляем приглашение", desc: "Регистрируем документ официально через польские органы." },
                { num: "2", title: "Вы идёте в консульство", desc: "Подаёте приглашение вместе с пакетом документов на визу." },
                { num: "3", title: "Приезжаете в Польшу", desc: "Легально, с открытой визой и чётким планом." },
              ].map((step) => (
                <div key={step.num} className="flex gap-4 rounded-xl border border-border bg-background px-5 py-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground">
                    <span className="font-mono text-sm font-bold text-white">{step.num}</span>
                  </div>
                  <div>
                    <p className="font-serif text-base font-bold text-foreground">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Документы */}
          <section className="mb-14">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Что нужно от вас</h2>
            <div className="h-1 w-16 rounded-full bg-accent mb-6" />
            <div className="flex flex-col gap-3">
              {[
                "Скан действующего паспорта",
                "Ваши контактные данные",
                "Цель визита — работа, обучение или иное",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4 rounded-xl border border-border bg-background px-5 py-4">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <svg className="h-3.5 w-3.5 text-accent" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-base text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Всё остальное — наша забота. Мы готовим документ, регистрируем его в уженде и передаём вам в электронном виде.
            </p>
          </section>

          {/* Сроки */}
          <section className="mb-14">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Сроки</h2>
            <div className="h-1 w-16 rounded-full bg-accent mb-6" />
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full min-w-[280px]">
                <tbody>
                  <tr className="border-b border-border bg-background">
                    <td className="px-4 py-3 text-sm font-medium text-foreground sm:px-6 sm:py-4 sm:text-base">Оформление приглашения</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground sm:px-6 sm:py-4 sm:text-base">от 3 дней</td>
                  </tr>
                  <tr className="bg-secondary">
                    <td className="px-4 py-3 text-sm font-medium text-foreground sm:px-6 sm:py-4 sm:text-base">Срок действия</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground sm:px-6 sm:py-4 sm:text-base">до 1 года</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 rounded-2xl bg-accent/10 border border-accent/20 px-6 py-4">
              <p className="text-base text-foreground">
                ⏰ <strong>Не тяните:</strong> запись в консульство во многих городах занята на несколько недель вперёд. Чем раньше у вас будет готовое приглашение — тем раньше вы сможете записаться на приём.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-2xl bg-foreground px-8 py-10 text-center">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground mb-3">
              Напишите нам — начнём оформление в ближайшие дни
            </h2>
            <p className="text-lg text-primary-foreground/75 mb-8">
              Расскажем, что нужно именно в вашей ситуации.
            </p>
            <LeadButton
              title="Приглашение на визу"
              className="rounded-xl bg-accent px-10 py-4 text-base font-semibold text-white shadow-md transition-all hover:scale-105 hover:bg-[#3670c2] hover:shadow-xl"
            >
              Оставить заявку
            </LeadButton>
          </section>

        </div>
      </main>
      <Footer />
      <LeadModal />
    </>
  )
}
