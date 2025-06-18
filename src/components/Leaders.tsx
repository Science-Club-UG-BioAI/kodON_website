import { useState } from "react";
import PersonCard from "./PersonCard";
import "../style/animation.css";

export default function Leaders() {
  const people = [
    {
      id: 1,
      img: "/kodON_website/img/Prezes.png",
      role: "Prezes",
      name: "Mateusz",
      surname: "Gawin",
      description:
        "Mateusz Gawin is the president of the company. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      leader: true,
    },
    {
      id: 2,
      img: "/kodON_website/img/Vice_Prezes.png",
      role: "Vice Prezes",
      name: "Jan",
      surname: "Wolski",
      description:
        "Jan Wolski supports internal operations. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      leader: true,
    },
    {
      id: 3,
      img: "/kodON_website/img/Project_0.png",
      role: "Mental Help Developer",
      name: "Kot",
      surname: "Kotowaty",
      description:
        "I can't escape this hell So many times I've tried But I'm still caged inside Somebody get me through this nightmare I can't control myself. Ten kot został zwierzęciem którym został",
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
