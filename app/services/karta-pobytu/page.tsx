import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LeadModal } from "@/components/lead-modal"
import { LeadButton } from "@/components/lead-button"
const breatheClass = "btn-breathe"

export default function KartaPobytuPage() {
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
              Карта побыта
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
              Виза заканчивается — и начинается беготня. Карта побыта решает это раз и надолго. Вы получаете официальный статус жителя Польши и спокойно работаете без оглядки на даты.
            </p>
            <div className="mt-8">
              <LeadButton
                title="Карта побыта"
                className="rounded-xl bg-accent px-10 py-4 text-base font-semibold text-white shadow-md transition-all btn-breathe hover:shadow-xl"
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
    src="https://i.postimg.cc/85LZ8FJB/Карта_побыта.jpg" 
    alt="Карта побыта" 
    className="w-full h-full object-cover" 
  />
</div>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20">

          {/* Что такое */}
          <section className="mb-14">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Что такое карта побыта</h2>
            <div className="h-1 w-16 rounded-full bg-accent mb-6" />
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Карта побыта (по-польски — karta pobytu) — это пластиковая карточка с чипом, которая подтверждает ваше право жить и работать в Польше. Она заменяет визу и действует значительно дольше.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Для водителей и людей, работающих в сфере грузоперевозок, это особенно важно: официальный статус — обязательное условие для оформления Код 95, замены прав и трудоустройства в польскую компанию.
            </p>
          </section>

          {/* Преимущества */}
          <section className="mb-14">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Что даёт карта побыта</h2>
            <div className="h-1 w-16 rounded-full bg-accent mb-6" />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: "💼", title: "Работа без ограничений", desc: "Официальное трудоустройство в любой польской компании." },
                { icon: "🌍", title: "Свобода передвижения", desc: "Путешествия по всей зоне Шенген без лишних вопросов." },
                { icon: "📅", title: "Никаких продлений визы", desc: "Действует до 3 лет — и продлевается снова." },
                { icon: "🏠", title: "Путь к постоянному статусу", desc: "Через 5 лет можно подать на постоянное проживание." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-border bg-secondary p-6">
                  <div className="mb-3 text-2xl">{item.icon}</div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Кому подходит */}
          <section className="mb-14">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Кому подходит</h2>
            <div className="h-1 w-16 rounded-full bg-accent mb-6" />
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Карту побыта можно оформить, если вы уже находитесь в Польше и у вас есть основание для проживания — чаще всего это трудовой договор или контракт с работодателем.
            </p>
            <div className="rounded-2xl bg-accent/10 border border-accent/20 px-6 py-4">
              <p className="text-base text-foreground">
                ⚠️ <strong>Главное правило:</strong> подавать документы нужно до того, как истечёт срок действия вашей визы. Если виза уже закончилась — ситуация усложняется. Не затягивайте.
              </p>
            </div>
          </section>

          {/* Документы */}
          <section className="mb-14">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Какие документы нужны</h2>
            <div className="h-1 w-16 rounded-full bg-accent mb-6" />
            <div className="flex flex-col gap-3">
              {[
                "Действующий паспорт",
                "Заполненное заявление на польском языке",
                "Фотографии на документы",
                "Подтверждение занятости — трудовой договор или заявление от работодателя",
                "Подтверждение места проживания — договор аренды",
                "Медицинская страховка",
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
                💬 Точный список зависит от вашей ситуации. Уточним всё на консультации — <strong>бесплатно и без обязательств</strong>.
              </p>
            </div>
          </section>
<div className="mb-10 flex justify-center">
            <LeadButton
              title="Карта побыта"
              className="rounded-xl bg-accent px-10 py-4 text-base font-semibold text-white shadow-md transition-all btn-breathe hover:shadow-xl"
            >
              Получить консультацию
            </LeadButton>
          </div>
          {/* Процесс */}
          <section className="mb-14">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Как проходит оформление</h2>
            <div className="h-1 w-16 rounded-full bg-accent mb-6" />
            <div className="flex flex-col gap-4">
              {[
                { num: "1", title: "Собираем документы вместе", desc: "Проверяем, что есть, чего не хватает — и говорим, как это исправить." },
                { num: "2", title: "Заполняем заявление", desc: "Берём на себя все формы на польском языке. Вам ничего не нужно переводить самостоятельно." },
                { num: "3", title: "Подаём в уженд воевудзкий", desc: "Записываемся на приём и сопровождаем процесс подачи." },
                { num: "4", title: "Ожидание и отслеживание", desc: "Пока идёт рассмотрение, вы продолжаете легально находиться в стране — по штампу в паспорте." },
                { num: "5", title: "Получаете карту", desc: "Сообщаем, когда документ готов к выдаче." },
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
            <div className="mt-6 rounded-2xl bg-accent/10 border border-accent/20 px-6 py-4">
              <p className="text-base text-foreground">
                📋 <strong>Штамп в паспорте — это не страшно:</strong> после подачи заявления вы получаете отметку, которая подтверждает законность вашего пребывания. Вы не становитесь нелегалом, пока идёт рассмотрение.
              </p>
            </div>
          </section>

          {/* Сроки */}
          <section className="mb-14">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Сроки</h2>
            <div className="h-1 w-16 rounded-full bg-accent mb-6" />
            <div className="rounded-2xl bg-foreground p-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 rounded-xl bg-white/10 px-5 py-4 text-center">
                  <p className="font-serif text-3xl font-bold text-white">1–3 мес.</p>
                  <p className="mt-1 text-sm text-primary-foreground/70">Рассмотрение заявки</p>
                </div>
                <div className="flex-1 rounded-xl bg-white/10 px-5 py-4 text-center">
                  <p className="font-serif text-3xl font-bold text-white">3 года</p>
                  <p className="mt-1 text-sm text-primary-foreground/70">Срок действия карты</p>
                </div>
                <div className="flex-1 rounded-xl bg-white/10 px-5 py-4 text-center">
                  <p className="font-serif text-3xl font-bold text-white">5 лет</p>
                  <p className="mt-1 text-sm text-primary-foreground/70">Путь к ПМЖ</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-2xl bg-foreground px-8 py-10 text-center">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground mb-3">
              Расскажите нам вашу ситуацию
            </h2>
            <p className="text-lg text-primary-foreground/75 mb-8">
              Скажем, с чего начать и что нужно именно вам. Консультация бесплатная.
            </p>
            <LeadButton
              title="Карта побыта"
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
