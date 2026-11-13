import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LeadModal } from "@/components/lead-modal"
import { LeadButton } from "@/components/lead-button"
const breatheClass = "btn-breathe"

export default function KorotkiyKursPage() {
  return (
    <>
      <Header />
      <main className="bg-background">
  <style>{`
    @keyframes breathe { 0%,100%{transform:scale(1)} 50%{transform:scale(1.06)} }
    .btn-breathe{animation:breathe 2.4s ease-in-out infinite}
  `}</style>

        {/* Hero блок */}
        <div className="bg-foreground py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="mb-4 font-mono text-sm font-bold uppercase tracking-widest text-accent">Услуги</p>
            <h1 className="font-serif text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl">
              Короткий курс КОД 95
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
              Если у вас есть категория C или D, но получены они давно — вы почти наверняка можете оформить Код 95 по короткому курсу. Без долгой учёбы, без экзамена.
            </p>
           <div className="mt-6 mb-2">
              <p className="font-sans text-3xl font-semibold text-white/90">
                799 <span className="text-xl font-medium text-white/60">zł</span>
              </p>
            </div>
            <div className="mt-4">
              <LeadButton
                title="Короткий курс КОД 95"
                className="rounded-xl bg-accent px-10 py-4 text-base font-semibold text-white shadow-md transition-all btn-breathe hover:scale-105 hover:bg-[#3670c2] hover:shadow-xl"
              >
                Записаться на курс
              </LeadButton>
            </div>
          </div>
        </div>

        {/* Картинка-баннер */}
        <div className="mx-auto max-w-4xl px-4 -mt-8">
          <div className="overflow-hidden rounded-2xl shadow-xl bg-secondary aspect-[16/7]">
            <img
              src="https://i.postimg.cc/yNMLrhdg/Код_95_1.jpg"
              alt="Короткий курс КОД 95"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20">

          {/* Что такое Код 95 */}
          <section className="mb-14">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Что такое Код 95 и зачем он нужен</h2>
            <div className="h-1 w-16 rounded-full bg-accent mb-6" />
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Код 95 — это квалификационная отметка в водительском удостоверении. Без неё работать наёмным водителем грузовика или автобуса в странах Евросоюза официально нельзя.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Документ подтверждает, что водитель прошёл профессиональную подготовку и знает европейские стандарты безопасности. Это не экзамен на права — это обязательное условие для легальной работы по найму в ЕС.
            </p>
          </section>

          {/* Кому подходит */}
          <section className="mb-14">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Короткий курс: кому он подходит</h2>
            <div className="h-1 w-16 rounded-full bg-accent mb-6" />
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Существует два формата обучения — длинный и короткий. Короткий курс подходит вам, если попадаете хотя бы под один из этих пунктов:
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-secondary p-6">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <span className="text-2xl">🚛</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">Категория C</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Грузовые перевозки. Получили её <strong>до 09.09.2009</strong> года.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-secondary p-6">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <span className="text-2xl">🚌</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">Категория D</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Пассажирские перевозки. Получили её <strong>до 08.08.2008</strong> года.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-secondary p-6">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">Повторное обучение</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Ранее проходили длинный курс, но с момента окончания прошло <strong>более 5 лет</strong>.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-accent/10 border border-accent/20 px-6 py-4">
              <p className="text-base text-foreground">
                💬 <strong>Не уверены, подходит ли вам короткий курс?</strong> Напишите нам — проверим вашу ситуацию бесплатно и скажем точно.
              </p>
            </div>
          </section>
<div className="mb-10 flex justify-center">
            <LeadButton
              title="Короткий курс КОД 95"
              className="rounded-xl bg-accent px-10 py-4 text-base font-semibold text-white shadow-md transition-all btn-breathe hover:scale-105 hover:bg-[#3670c2] hover:shadow-xl"
            >
              Оставить заявку
            </LeadButton>
          </div>
          {/* Сколько длится */}
          <section className="mb-14">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Сколько длится и как проходит</h2>
            <div className="h-1 w-16 rounded-full bg-accent mb-6" />

            {/* Таблица — адаптивная */}
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full min-w-[320px]">
                <thead>
                  <tr className="bg-foreground">
                    <th className="px-4 py-3 text-left font-serif text-sm font-bold text-primary-foreground sm:px-6 sm:py-4 sm:text-base">Формат</th>
                    <th className="px-4 py-3 text-left font-serif text-sm font-bold text-primary-foreground sm:px-6 sm:py-4 sm:text-base">Продолжительность</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border bg-background">
                    <td className="px-4 py-3 text-sm text-foreground font-medium sm:px-6 sm:py-4 sm:text-base">Стандартный курс</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground sm:px-6 sm:py-4 sm:text-base">5 рабочих дней</td>
                  </tr>
                  <tr className="border-t border-border bg-secondary">
                    <td className="px-4 py-3 text-sm text-foreground font-medium sm:px-6 sm:py-4 sm:text-base">С допуском ADR</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground sm:px-6 sm:py-4 sm:text-base">3 рабочих дня</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Обучение проходит в группе, в комфортном формате: теория, практические занятия, разбор реальных рабочих ситуаций. После окончания курса <strong className="text-foreground">экзамен сдавать не нужно</strong> — это одно из главных отличий короткого курса от длинного.
            </p>

            <div className="overflow-hidden rounded-2xl shadow-xl bg-secondary aspect-[16/7] flex items-center justify-center border border-border">
  <img 
    src="https://i.postimg.cc/PqgSFbxP/Код_95_2.jpg" 
    alt="Код 95" 
    className="w-full h-full object-cover" 
  />
</div>
          </section>

          {/* Что входит */}
          <section className="mb-14">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Что входит в стоимость</h2>
            <div className="h-1 w-16 rounded-full bg-accent mb-6" />
            <div className="flex flex-col gap-3">
              {[
                "Подготовка и получение PKZ (регистрационный номер водителя)",
                "Психологическое тестирование",
                "Медицинский осмотр",
                "Теоретическое обучение (все 5 дней)",
                "Помощь с трудоустройством — с опытом или без",
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
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Мы берём на себя всю бумажную часть. Вам не нужно самостоятельно разбираться в польских канцеляриях, записываться по отдельности на медосмотр или искать врача для психотеста — всё организовано в одном месте.
            </p>
          </section>

          {/* Что получаете */}
          <section className="mb-14">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Что вы получаете по итогу</h2>
            <div className="h-1 w-16 rounded-full bg-accent mb-6" />
            <div className="rounded-2xl bg-foreground p-8">
              <p className="text-lg leading-relaxed text-primary-foreground/90 mb-4">
                После окончания курса вы получаете удостоверение Код 95. На его основании в ваши права вносится отметка с датой действия.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <div className="flex-1 rounded-xl bg-white/10 px-5 py-4 text-center">
                  <p className="font-serif text-3xl font-bold text-white">5 лет</p>
                  <p className="mt-1 text-sm text-primary-foreground/70">Срок действия сертификата</p>
                </div>
                <div className="flex-1 rounded-xl bg-white/10 px-5 py-4 text-center">
                  <p className="font-serif text-3xl font-bold text-white">27 стран</p>
                  <p className="mt-1 text-sm text-primary-foreground/70">Действителен во всём ЕС</p>
                </div>
                <div className="flex-1 rounded-xl bg-white/10 px-5 py-4 text-center">
                  <p className="font-serif text-3xl font-bold text-white">0</p>
                  <p className="mt-1 text-sm text-primary-foreground/70">Экзаменов сдавать не нужно</p>
                </div>
              </div>
            </div>
            
          </section>

          {/* CTA */}
          <section className="rounded-2xl bg-foreground px-8 py-10 text-center">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground mb-3">
              Остались вопросы или хотите записаться?
            </h2>
            <p className="text-lg text-primary-foreground/75 mb-8">
              Напишите нам — ответим в течение нескольких минут и расскажем, что конкретно нужно в вашем случае.
            </p>
            <LeadButton
              title="Короткий курс КОД 95"
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
