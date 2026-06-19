import { useReveal } from "@/hooks/use-reveal"

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center overflow-y-auto px-6 pt-20 pb-8 md:overflow-y-hidden md:px-12 md:pt-0 md:pb-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-4xl font-light tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Кейсы
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Выданные документы</p>
        </div>

        <div className="space-y-0">
          {[
            {
              number: "01",
              title: "Завод «ТехноПром»",
              category: "Сертификат ТР ТС на оборудование",
              year: "2025",
              direction: "left",
            },
            {
              number: "02",
              title: "ГК «ЭкоФуд»",
              category: "Декларация на пищевую продукцию",
              year: "2025",
              direction: "right",
            },
            {
              number: "03",
              title: "Бренд «Луко»",
              category: "Добровольный сертификат ГОСТ Р",
              year: "2024",
              direction: "left",
            },
          ].map((project, i) => (
            <ProjectCard key={i} project={project} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  isVisible,
}: {
  project: { number: string; title: string; category: string; year: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return project.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  return (
    <div
      className={`group flex items-center justify-between border-b border-foreground/10 py-5 transition-all duration-700 hover:border-foreground/20 md:py-8 ${getRevealClass()}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex items-baseline gap-3 md:gap-8">
        <span className="font-mono text-xs text-foreground/30 transition-colors group-hover:text-foreground/50 md:text-base">
          {project.number}
        </span>
        <div>
          <h3 className="mb-1 font-sans text-xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 sm:text-2xl md:text-3xl lg:text-4xl">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-foreground/50 md:text-sm">{project.category}</p>
        </div>
      </div>
      <span className="font-mono text-xs text-foreground/30 md:text-sm">{project.year}</span>
    </div>
  )
}
