import { useState } from "react";
import PersonCard from "./PersonCard";
import "../style/animation.css";

export default function Leaders() {
  const people = [
    {
      id: 1,
      img: "/kodON_website/img/Mat.jpg",
      role: "Prezes",
      name: "Mateusz",
      surname: "Gawin",
      description:
        "Mateusz Gawin is the president of the company. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      leader: true,
    },
    {
      id: 2,
      img: "/kodON_website/img/Jan.jpg",
      role: "Vice Prezes",
      name: "inż. Jan",
      surname: "Wolski",
      description:
        "Wiceprezes koła, student bioinformatyki. Inzynier sztucznei inteligencji. W kole zajmuje sie stroną merytoryczną.",
      leader: true,
    },
    {
      id: 3,
      img: "/kodON_website/img/Nat.jpg",
      role: "Opiekunka Koła",
      name: "mgr. Natalia",
      surname: "Zagórska",
      description:
        "Opiekunka koła bioinformatycznego, bada choroby autoimmunologiczne skóry i wciąż próbuje wyjaśnić rodzinie, czym właściwie się zajmuje.",
      leader: false,
    },
    {
      id: 4,
      img: "/kodON_website/img/Ana.jpg",
      role: "Social Rybka",
      name: "Anastazja",
      surname: "Szłyk",
      description:
        "W kole zajmuję się social mediami. Dbam o to, żeby nasze działania były dobrze pokazane i łatwo dostępne dla wszystkich zainteresowanych",
      leader: false,
    },
    {
      id: 5,
      img: "/kodON_website/img/Wik.jpg",
      role: "Social Boy - fotocykacz",
      name: "Wiktor",
      surname: "Komor",
      description: "Ekspertka od social media koła KodON",
      leader: false,
    },
    {
      id: 6,
      img: "/kodON_website/img/Kub.jpg",
      role: "Naczelna Sekretarka (do zadań bojowych)",
      name: "Kuba",
      surname: "Kozłowski",
      description: "Tak",
      leader: false,
    },
  ];

  const [selectedPerson, setSelectedPerson] = useState<
    null | (typeof people)[0]
  >(null);

  const leaders = people.filter((p) => p.leader);
  const nonLeaders = people.filter((p) => !p.leader);

  const handlePersonClick = (person: (typeof people)[0]) => {
    setSelectedPerson(selectedPerson?.id === person.id ? null : person);
  };

  return (
    <div className="w-full bg-lazuli-400 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center">
        {/* Title */}
        <h1 className="text-4xl font-bold text-lazuli-900 mb-16 transition-all duration-300">
          {selectedPerson ? selectedPerson.role : "Zarząd"}
        </h1>

        {/* Focused View */}
        {selectedPerson ? (
          <div className="relative flex flex-col md:flex-row items-center gap-10 transition-all duration-300 ease-in-out">
            {/* Clickable image to return */}
            <div
              onClick={() => setSelectedPerson(null)}
              className="cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <img
                key={selectedPerson.id}
                src={selectedPerson.img}
                className="w-80 h-00 rounded-full shadow-md transition-opacity duration-300"
                alt={selectedPerson.name}
              />
            </div>

            {/* Name & Description with fade animation */}
            <div
              key={`${selectedPerson.id}-text`}
              className="flex-1 transition-all duration-500 ease-in-out opacity-100 fade-in"
            >
              <h2 className="text-5xl font-mono font-bold mb-6">
                {selectedPerson.name} {selectedPerson.surname}
              </h2>
              <p className="text-lg leading-relaxed whitespace-pre-wrap max-w-xl">
                {selectedPerson.description}
              </p>
            </div>
          </div>
        ) : (
          // Default leaders view
          <div className="flex flex-wrap justify-center gap-10 mb-16 transition-all duration-300">
            {leaders.map((person) => (
              <PersonCard
                key={person.id}
                {...person}
                size="lg"
                onClick={() => handlePersonClick(person)}
              />
            ))}
          </div>
        )}

        {/* Bottom row */}
        <div
          className={`mt-20 flex justify-center gap-6 flex-wrap transition-all duration-300 ${
            selectedPerson ? "opacity-100 translate-y-0" : "opacity-100"
          }`}
        >
          {(selectedPerson ? people : nonLeaders).map((person) => (
            <PersonCard
              key={`mini-${person.id}`}
              {...person}
              size="sm"
              onClick={() => handlePersonClick(person)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
