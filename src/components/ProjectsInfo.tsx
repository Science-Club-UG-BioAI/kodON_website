export default function ProjectInfo() {
  const projects = [
    {
      name: "Eva",
      desc:
        "Stworzyliśmy model NEAT, który uczy się samemu przechodzić napisaną przez nas grę symulującą ewolucję.",
      href: "https://github.com/Science-Club-UG-BioAI/EVA",
      tag: "RL / NEAT",
    },
    {
      name: "Słowik",
      desc:
        "Napisaliśmy model językowy, który przewiduje funkcję białka na podstawie jego sekwencji aminokwasowej.",
      href: "https://github.com/Science-Club-UG-BioAI/Nightingale",
      tag: "BioNLP",
    },
    {
      name: "Ichor",
      desc:
        "Aplikacja służąca do identyfikacji elementów morfotycznych krwi na podstawie zdjęć mikroskopowych.",
      href: "https://github.com/Science-Club-UG-BioAI/Ichor",
      tag: "CV / MedTech",
    },
    {
        name: "Zgrany Budżet",
        desc: "System który porządkuje proces tworzenia budżetu dla każdego organu administracyjnego.",
        href: "https://github.com/Science-Club-UG-BioAI/HackNation-Project",
        tag: "hakatlon"
    
    }
  ];

  return (
    <div className="relative w-full bg-lazuli-400 overflow-hidden">
      <div
        id="O-nas"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <h2 className="font-bold text-4xl px-4 bg-gradient-to-r from-lazuli-900 to-lazuli-800 text-transparent bg-clip-text inline-block">
          Szczegóły projektów
        </h2>

        <div className="mt-10 px-4 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.href}
              className="group rounded-2xl bg-lazuli-900/10 hover:bg-lazuli-900/15 transition p-6 shadow-sm hover:shadow-md"
              aria-label={`Przejdź do: ${p.name}`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-bold text-2xl">
                  {p.name}
                </h3>

                <span className="text-sm font-semibold px-3 py-1 rounded-full bg-lazuli-200/30 text-lazuli-900">
                  {p.tag}
                </span>
              </div>

              <p className="mt-4 text-base bg-gradient-to-r from-lazuli-900 to-lazuli-800 text-transparent bg-clip-text">
                {p.desc}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 font-semibold text-lazuli-900/80 group-hover:text-lazuli-900 transition">
                Zobacz projekt
                <span className="transform transition group-hover:translate-x-1">→</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
