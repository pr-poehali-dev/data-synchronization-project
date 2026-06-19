import { useReveal } from "@/hooks/use-reveal"

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center overflow-y-auto px-6 pt-20 pb-8 md:overflow-y-hidden md:px-12 md:pt-0 md:pb-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-4xl font-light tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Услуги
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Что мы оформляем</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-x-16 md:gap-y-12 lg:gap-x-24">
          {[
            {
              title: "Сертификаты соответствия",
              description: "Оформление сертификатов ТР ТС, ГОСТ Р и добровольной сертификации",
              direction: "top",
            },
            {
              title: "Декларации соответствия",
              description: "Регистрация деклараций на продукцию с проверкой документов ИИ",
              direction: "right",
            },
            {
              title: "ИИ-подбор схемы",
              description: "Алгоритм определяет нужный регламент и схему сертификации за минуты",
              direction: "left",
            },
            {
              title: "Сопровождение и аудит",
              description: "Консультации экспертов, проверка пакета документов и контроль сроков",
              direction: "bottom",
            },
          ].map((service, i) => (
            <ServiceCard key={i} service={service} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: { title: string; description: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (service.direction) {
        case "left":
          return "-translate-x-16 opacity-0"
        case "right":
          return "translate-x-16 opacity-0"
        case "top":
          return "-translate-y-16 opacity-0"
        case "bottom":
          return "translate-y-16 opacity-0"
        default:
          return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
        <span className="font-mono text-xs text-foreground/60">0{index + 1}</span>
      </div>
      <h3 className="mb-2 font-sans text-xl font-light text-foreground sm:text-2xl md:text-3xl">{service.title}</h3>
      <p className="text-sm leading-relaxed text-foreground/80 md:text-base">{service.description}</p>
    </div>
  )
}
