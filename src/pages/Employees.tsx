import { GrainOverlay } from "@/components/grain-overlay"
import { CustomCursor } from "@/components/custom-cursor"
import { useNavigate } from "react-router-dom"
import Icon from "@/components/ui/icon"

const employees = [
  {
    name: "Елена Васильева",
    role: "Руководитель центра",
    description: "15 лет в сфере сертификации, эксперт по техническим регламентам ТР ТС",
    photo: "https://cdn.poehali.dev/projects/075f99fa-c4bc-4933-b10a-d721ba95f1d2/files/28c2752e-c5f8-48b7-b33c-004059f8d237.jpg",
  },
  {
    name: "Андрей Морозов",
    role: "Менеджер по качеству",
    description: "Специалист по системам менеджмента качества ISO 9001 и ГОСТ Р",
    photo: "https://cdn.poehali.dev/projects/075f99fa-c4bc-4933-b10a-d721ba95f1d2/files/bb60782c-99a0-492b-a390-b0e6f79c139e.jpg",
  },
  {
    name: "Ольга Смирнова",
    role: "Юрист по compliance",
    description: "Эксперт в области нормативно-правового регулирования и технического законодательства",
    photo: "https://cdn.poehali.dev/projects/075f99fa-c4bc-4933-b10a-d721ba95f1d2/files/0c8d64b9-06bc-4dfe-8267-d644b2a46394.jpg",
  },
  {
    name: "Виктор Соколов",
    role: "Директор по сертификации",
    description: "Более 20 лет опыта, выдал свыше 3000 сертификатов и деклараций соответствия",
    photo: "https://cdn.poehali.dev/projects/075f99fa-c4bc-4933-b10a-d721ba95f1d2/files/ff686e57-f942-4002-94ff-288ddb5d58ca.jpg",
  },
  {
    name: "Мария Козлова",
    role: "AI-аналитик",
    description: "Разрабатывает и обучает модели ИИ для автоматической проверки документов",
    photo: "https://cdn.poehali.dev/projects/075f99fa-c4bc-4933-b10a-d721ba95f1d2/files/8acdd98f-b775-485d-88f9-b9fd5721fcaa.jpg",
  },
  {
    name: "Игорь Петров",
    role: "Технический эксперт",
    description: "Инженер-технолог, специализация — промышленное оборудование и электроника",
    photo: "https://cdn.poehali.dev/projects/075f99fa-c4bc-4933-b10a-d721ba95f1d2/files/42ed1742-6399-4f94-aa8f-a83e9188795d.jpg",
  },
]

export default function Employees() {
  const navigate = useNavigate()

  return (
    <main className="relative min-h-screen w-full bg-background">
      <CustomCursor />
      <GrainOverlay />

      {/* Nav */}
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-5 md:px-12">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 transition-transform hover:scale-105"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/15 backdrop-blur-md">
            <span className="font-sans text-lg font-bold text-foreground">AI</span>
          </div>
          <span className="font-sans text-lg font-semibold tracking-tight text-foreground">AI Certify</span>
        </button>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 font-mono text-sm text-foreground/60 transition-colors hover:text-foreground"
        >
          <Icon name="ArrowLeft" size={16} />
          На главную
        </button>
      </nav>

      <div className="px-6 pb-20 pt-28 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <h1 className="mb-2 font-sans text-4xl font-light tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Сотрудники
            </h1>
            <p className="font-mono text-sm text-foreground/60 md:text-base">/ Наша команда экспертов</p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {employees.map((emp, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 backdrop-blur-sm transition-all duration-300 hover:border-foreground/20 hover:bg-foreground/10"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={emp.photo}
                    alt={emp.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <div className="mb-1 flex items-center gap-2">
                    <div className="h-px w-6 bg-primary/60" />
                    <span className="font-mono text-xs text-foreground/50">0{i + 1}</span>
                  </div>
                  <h3 className="mb-1 font-sans text-xl font-light text-foreground">{emp.name}</h3>
                  <p className="mb-3 font-mono text-xs text-primary">{emp.role}</p>
                  <p className="text-sm leading-relaxed text-foreground/70">{emp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
