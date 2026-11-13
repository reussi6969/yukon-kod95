import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LeadModal } from "@/components/lead-modal"
import { LeadButton } from "@/components/lead-button"
const breatheClass = "btn-breathe"

export default function ZamenaPravPage() {
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
              Замена прав
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
              Польские права — это права европейского образца. С ними вы можете работать и ездить по всему Евросоюзу без вопросов.
            </p>
            <div className="mt-8">
              <LeadButton
                title="Замена прав"
                className="rounded-xl bg-accent px-10 py-4 text-base font-semibold text-white shadow-md transition-all btn-breathe hover:scale-105 hover:bg-[#3670c2] hover:shadow-xl"
              >
                Получить консультацию
              </LeadButton>
            </div>
          </div>
        </div>

        {/* Баннер */}
        <div className="mx-auto max-w-4xl px-4 -mt-8">
  <div className="overflow-hidden rounded-2xl shadow-xl bg-secondary aspect-[16/7] flex items-center justify-center border border-border">
    <img 
      src="https://i.postimg.cc/Y0ZNhMWL/Zamena-prav.jpg" 
      alt="Замена прав" 
      className="w-full h-full object-cover" 
    />
  </div>
</div>

        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20">

          {/* Зачем менять */}
          <section className="mb-14">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Зачем вообще менять права</h2>
            <div className="h-1 w-16 rounded-full bg-accent mb-6" />
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Ваши права из Украины, Беларуси, Казахстана или другой страны СНГ в Польше формально действуют. Но на практике — это постоянные вопросы на границах, ограничения при трудоустройстве и невозможность работать водителем в европейской компании официально.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Польское удостоверение снимает все эти проблемы разом. Оно признаётся во всех 27 странах ЕС и открывает доступ к официальной работе водителем без каких-либо оговорок.
            </p>
            <div className="rounded-2xl bg-accent/10 border border-accent/20 px-6 py-4">
              <p className="text-base text-foreground">
                💡 <strong>Коротко о главном:</strong> замена прав — это не пересдача экзаменов с нуля. Для большинства стран СНГ это административная процедура обмена документа. Никакой езды на автодроме.
              </p>
            </div>
          </section>

          {/* Кто может */}
          <section className="mb-14">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Кто может поменять права</h2>
            <div className="h-1 w-16 rounded-full bg-accent mb-6" />
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Основное условие одно: вы должны легально находиться в Польше — то есть иметь действующую визу, карту побыта или другой документ, подтверждающий ваш статус.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Само иностранное удостоверение должно быть действующим на момент подачи документов.
            </p>
          </section>

          {/* Документы */}
          <section className="mb-14">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Какие документы нужны</h2>
            <div className="h-1 w-16 rounded-full bg-accent mb-6" />
            <div className="flex flex-col gap-3">
              {[
                "Действующий паспорт",
                "Иностранное водительское удостоверение (оригинал)",
                "Документ, подтверждающий легальное проживание в Польше (карта побыта, виза)",
                "Медицинская справка от польского врача",
                "Фотография на документы",
                "Перевод иностранных прав на польский язык (если нет международного удостоверения)",
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
            <div className="mt-6 rounded-2xl bg-accent/10 border border-accent/20 px-6 py-4">
              <p className="text-base text-foreground">
                💬 Точный список зависит от вашей страны и ситуации. Уточним всё на консультации — <strong>бесплатно</strong>.
              </p>
            </div>
          </section>
<div className="mb-10 flex justify-center">
            <LeadButton
              title="Замена прав"
              className="rounded-xl bg-accent px-10 py-4 text-base font-semibold text-white shadow-md transition-all btn-breathe hover:scale-105 hover:bg-[#3670c2] hover:shadow-xl"
            >
              Получить консультацию
            </LeadButton>
          </div>
          {/* Процесс */}
          <section className="mb-14">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Как проходит процесс</h2>
            <div className="h-1 w-16 rounded-full bg-accent mb-6" />
            <div className="flex flex-col gap-4">
              {[
                { num: "1", title: "Оставляете заявку", desc: "Рассказываете о своей ситуации: из какой страны права, какой документ о пребывании." },
                { num: "2", title: "Мы проверяем ваши документы", desc: "Говорим, чего не хватает, помогаем с переводами и справками." },
                { num: "3", title: "Подаём заявление в уженд", desc: "Берём на себя взаимодействие с польскими органами — вы не тратите время на очереди." },
                { num: "4", title: "Забираете готовые польские права", desc: "Сообщаем, когда документ готов. Можно забрать лично или организовать доставку." },
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

          {/* Сроки */}
          <section className="mb-14">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Сроки</h2>
            <div className="h-1 w-16 rounded-full bg-accent mb-6" />
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full min-w-[280px]">
                <tbody>
                  <tr className="border-b border-border bg-background">
                    <td className="px-4 py-3 text-sm font-medium text-foreground sm:px-6 sm:py-4 sm:text-base">Срок оформления</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground sm:px-6 sm:py-4 sm:text-base">от 30 дней</td>
                  </tr>
                  <tr className="bg-secondary">
                    <td className="px-4 py-3 text-sm font-medium text-foreground sm:px-6 sm:py-4 sm:text-base">Срок действия польских прав</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground sm:px-6 sm:py-4 sm:text-base">15 лет</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 rounded-2xl bg-accent/10 border border-accent/20 px-6 py-4">
              <p className="text-base text-foreground">
                ⚠️ <strong>Важно:</strong> не откладывайте, если ваше иностранное удостоверение скоро истекает. Подавать на замену нужно с действующим документом на руках.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-2xl bg-foreground px-8 py-10 text-center">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground mb-3">
              Напишите нам — консультация бесплатная
            </h2>
            <p className="text-lg text-primary-foreground/75 mb-8">
              Расскажем, подходят ли ваши права для замены и что конкретно нужно в вашем случае.
            </p>
            <LeadButton
              title="Замена прав"
              className="rounded-xl bg-accent px-10 py-4 text-base font-semibold text-white shadow-md transition-all hover:scale-105 hover:bg-[#3670c2] hover:shadow-xl"
            >
              Получить консультацию
            </LeadButton>
          </section>

        </div>
      </main>
      <Footer />
      <LeadModal />
    </>
  )
}
