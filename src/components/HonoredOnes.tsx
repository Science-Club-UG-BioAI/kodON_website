import React, { useMemo } from "react";

type SocialKind = "website" | "linkedin" | "instagram" | "github" | "facebook" | "x";

type SocialLink = {
  kind: SocialKind;
  url: string;
  label?: string; // opcjonalnie np. "Profil"
};

type Collaboration = {
  name: string;
  description: string;
  socials: SocialLink[];
  logoSrc?: string; // opcjonalne logo
};

function socialLabel(kind: SocialKind) {
  switch (kind) {
    case "website":
      return "Strona";
    case "linkedin":
      return "LinkedIn";
    case "instagram":
      return "Instagram";
    case "github":
      return "GitHub";
    case "facebook":
      return "Facebook";
    case "x":
      return "X";
    default:
      return "Link";
  }
}

export default function HonoredOnes() {
  // Podmień na realne dane
  const collaborations: Collaboration[] = useMemo(
    () => [
      {
        name: "Daria Lewandowska",
        description:
          "Pomogła zaprojektować logo i bluzy koła",
        socials: [
          { kind: "instagram", url: "https://www.instagram.com/nochsozo/" },
        ],
        // logoSrc: "",
      },
      {
        name: "Alicja Belecka",
        description: "Pomogła zaprojektować logo i bluzy koła",
        socials: [
            { kind: "instagram", url: "https://www.instagram.com/lekko.artystycznie/" },
        ]
      },

      {
        name: "Martyna Kudeń",
        description: "Pomogła zaprojektować logo i bluzy koła",
        socials: [
            { kind: "instagram", url: "https://www.instagram.com/martynakuden/" },
        ]
      },
    ],
    []
  );

  return (
    <section
      id="Wspolprace"
      className="relative overflow-hidden bg-gradient-to-r from-lazuli-900 to-lazuli-800"
      aria-label="Współprace"
    >
      <div className="absolute inset-0 bg-lazuli-400 bg-cover bg-no-repeat bg-center opacity-100" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <header className="max-w-3xl">
          <h2 className="font-bold text-4xl px-4 bg-gradient-to-r from-lazuli-900 to-lazuli-800 text-transparent bg-clip-text inline-block">Współprace</h2>
          <p className="mt-4 text-lazuli-100/80">
            Ludzie i organizacje, z którymi współpracujemy
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {collaborations.map((c) => (
            <article
              key={c.name}
              className="rounded-2xl bg-lazuli-900/10 backdrop-blur transition-colors overflow-hidden hover:shadow-md"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  {c.logoSrc ? (
                    <div className="h-12 w-12 rounded-xl overflow-hidden border border-lazuli-200/20">
                      <img
                        src={c.logoSrc}
                        alt={`${c.name} logo`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : (<div></div>)}

                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold text-lazuli-100 leading-snug">
                      {c.name}
                    </h3>
                    <p className="mt-2 text-sm text-lazuli-100/75 leading-relaxed">
                      {c.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {c.socials.map((s) => (
                    <a
                      key={`${c.name}-${s.kind}-${s.url}`}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-lazuli-200/30 px-3 py-1.5 text-sm text-lazuli-100 hover:bg-white/15 transition-colors"
                      aria-label={`${c.name}: ${socialLabel(s.kind)}`}
                    >
                      <span className="text-lazuli-100/80">
                        {s.label ?? socialLabel(s.kind)}
                      </span>
                      <span aria-hidden="true" className="text-lazuli-100/60">
                        ↗
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
