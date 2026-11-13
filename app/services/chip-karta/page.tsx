import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LeadModal } from "@/components/lead-modal"
import { LeadButton } from "@/components/lead-button"
const breatheClass = "btn-breathe"

export default function ChipKartaPage() {
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
              Чип-карта тахографа
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
              Если вы планируете работать водителем-международником в Европе — чип-карта тахографа нужна вам так же, как и сами права. Без неё вас просто не допустят к работе.
            </p>
            <div className="mt-8">
              <LeadButton
                title="Чип-карта тахографа"
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
      src="https://i.postimg.cc/zfsxPwBL/Чип_карта.jpg" 
      alt="Чип-карта" 
      className="w-full h-full object-cover" 
    />
  </div>
</div>

        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20">

          {/* Что такое */}
          <section className="mb-14">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Что такое чип-карта тахографа</h2>
            <div className="h-1 w-16 rounded-full bg-accent mb-6" />
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Чип-карта — это персональная карта памяти, которая вставляется в цифровой тахограф автомобиля. Она записывает всё: сколько часов вы провели за рулём, когда отдыхали, с какой скоростью ехали.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              По закону ЕС все грузовые автомобили весом свыше 3,5 тонны обязаны быть оснащены цифровым тахографом. Без вашей личной карты тахограф просто не начнёт запись — а без записи работа невозможна.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Карта именная, выдаётся на 5 лет и привязана к вашему водительскому удостоверению. Передавать её другому водителю нельзя.
            </p>
            <div className="mt-6 rounded-2xl bg-accent/10 border border-accent/20 px-6 py-4">
              <p className="text-base text-foreground">
                ⏰ <strong>Важно про срок действия:</strong> не ждите, пока карта истечёт. Оформить новую можно за 60 дней до окончания действующей. Если просрочить — выйдет простой: без карты к работе не допустят.
              </p>
            </div>
          </section>
 <div className="mb-10 flex justify-center">
            <LeadButton
              title="Чип-карта тахографа"
              className="rounded-xl bg-accent px-10 py-4 text-base font-semibold text-white shadow-md transition-all btn-breathe hover:scale-105 hover:bg-[#3670c2] hover:shadow-xl"
            >
              Оставить заявку
            </LeadButton>
          </div>
          {/* Ключевые цифры */}
          <section className="mb-14">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Ключевые цифры</h2>
            <div className="h-1 w-16 rounded-full bg-accent mb-6" />
            <div className="rounded-2xl bg-foreground p-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 rounded-xl bg-white/10 px-5 py-4 text-center">
                  <p className="font-serif text-3xl font-bold text-white">5 лет</p>
                  <p className="mt-1 text-sm text-primary-foreground/70">Срок действия карты</p>
                </div>
                <div className="flex-1 rounded-xl bg-white/10 px-5 py-4 text-center">
                  <p className="font-serif text-3xl font-bold text-white">30 дней</p>
                  <p className="mt-1 text-sm text-primary-foreground/70">Срок изготовления</p>
                </div>
                <div className="flex-1 rounded-xl bg-white/10 px-5 py-4 text-center">
                  <p className="font-serif text-3xl font-bold text-white">60 дней</p>
                  <p className="mt-1 text-sm text-primary-foreground/70">Заявка на замену заранее</p>
                </div>
              </div>
            </div>
          </section>

          {/* Как проходит */}
          <section className="mb-14">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Как проходит оформление</h2>
            <div className="h-1 w-16 rounded-full bg-accent mb-6" />
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Вам не нужно никуда ехать на старте. Весь процесс начинается онлайн:
            </p>
            <div className="flex flex-col gap-4">
              {[
                { num: "1", title: "Оставляете заявку", desc: "Через форму на сайте или в мессенджере — удобнее, как вам." },
                { num: "2", title: "Консультация с менеджером", desc: "Отвечаем на вопросы, объясняем, какие документы нужны именно в вашей ситуации." },
                { num: "3", title: "Отправляете документы", desc: "Всё в электронном виде — сканы и фото через мессенджер или email." },
                { num: "4", title: "Мы оформляем карту", desc: "Берём на себя всё взаимодействие с польскими органами." },
                { num: "5", title: "Вы получаете готовую карту", desc: "Доставка по всему ЕС или самовывоз из нашего офиса в Кракове." },
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
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Какие документы нужны</h2>
            <div className="h-1 w-16 rounded-full bg-accent mb-6" />
            <div className="flex flex-col gap-3">
              {[
                "Скан паспорта",
                "Скан водительского удостоверения (обе стороны)",
                "Фотография на белом фоне (отправляется в электронном виде)",
                "Заполненное заявление — бланк предоставляем мы",
                "Выписка из ГАИ с переводом на польский язык",
                "Скан предыдущей карты — только если оформляете замену",
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
                💬 Если что-то из списка вызывает вопросы — не беспокойтесь. Менеджер объяснит по каждому пункту отдельно.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-2xl bg-foreground px-8 py-10 text-center">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground mb-3">
              Хотите уточнить стоимость или сразу подать заявку?
            </h2>
            <p className="text-lg text-primary-foreground/75 mb-8">
              Напишите нам — ответим быстро и расскажем, что именно нужно в вашем случае.
            </p>
            <LeadButton
              title="Чип-карта тахографа"
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
