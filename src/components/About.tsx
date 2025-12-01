export default function About() {
  return (
    <div
      id="Aktualnosci"
      className="relative w-full bg-lazuli-400 overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-bold text-4xl px-4 bg-gradient-to-r from-lazuli-900 to-lazuli-600 text-transparent bg-clip-text inline-block">
          O nas
        </h2>
        <div className="font-medium px-4 text-xl mt-10 bg-gradient-to-r from-lazuli-900 to-lazuli-800 text-transparent bg-clip-text inline-block">
          {/* Your paragraphs remain unchanged */}
          <p>
            Nasze Koło Naukowe kodON to inicjatywa studentów bioinformatyki,
            którzy łączą zainteresowania biologią, genetyką i uczeniem
            maszynowym. Powstało z chęci tworzenia wspólnych projektów - zarówno
            tych ściśle naukowych, jak i nieco luźniejszych - dających
            przestrzeń do rozwoju i zdobywania umiejętności praktycznych.
          </p>
          <br />
          <p>
            Spotkania odbywają się w luźnej, przyjacielskiej atmosferze.
            Omawiamy postępy prac, dzielimy się zadaniami i planujemy kolejne
            etapy. Gdy ktoś napotyka trudność, wspólnie szukamy rozwiązań -
            organizując szybkie lekcje na miejscu lub otwarte wykłady dla
            wszystkich zainteresowanych.
          </p>
          <br />
          <p>
            Choć jesteśmy jeszcze młodym kołem, mamy już na koncie udany otwarty
            wykład na uczelni oraz projekt, w którym wykorzystaliśmy
            samodzielnie zaimplementowaną sieć NEAT, sterującą graczem w grze
            podobnej do Agar.io - stworzonej również przez nas.
          </p>
          <br />
          <p>
            W tej chwili pracujemy nad modelem językowym przewidującym funkcję
            białka na podstawie sekwencji aminokwasowej oraz planujemy tworzyć
            użyteczne narzędzia bioinformatyczne. To dopiero początek, ale
            wierzymy, że przed nami jeszcze wiele ambitnych projektów i
            naukowych przygód.
          </p>
        </div>
      </div>
    </div>
  );
}
