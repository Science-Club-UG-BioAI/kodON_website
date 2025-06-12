import { useState } from "react";

export default function Galery() {
  const galeryContent = ["0", "1", "2"];
  const [selectedContent, setSelectedContent] = useState(1);

  const projectName = ["Projekt 1", "Projekt 2", "Projekt 3"];
  const porjectDesc = [
    "Opis projektu 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua",
    "Opis projektu 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua",
    "Opis projektu 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua",
  ];

  const handleLeftClick = () => {
    const newIndex =
      selectedContent === 0 ? galeryContent.length - 1 : selectedContent - 1;
    setSelectedContent(newIndex);
  };

  const handleRightClick = () => {
    const newIndex =
      selectedContent === galeryContent.length - 1 ? 0 : selectedContent + 1;
    setSelectedContent(newIndex);
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="overflow-hidden">
        <div className="z-1 absolute w-full h-full flex flex-col justify-center pl-150 pr-30 bg-gradient-to-r from-lazuli-t to-lazuli-900 to-40% text-lazuli-200">
          <h3 className="text-5xl font-bold mb-5">
            {projectName[selectedContent]}
          </h3>
          <p className="text-xl">{porjectDesc[selectedContent]}</p>
        </div>
        <img
          className="size-full blur-xs"
          src={`src/assets/img/Project_${galeryContent[selectedContent]}.png`}
          alt="Project Photo"
        />
      </div>

      {/* Buttons */}
      <button
        className="z-1 absolute left-0 top-0 w-15 h-full flex items-center opacity-20 hover:opacity-50 hover:scale-125 transition duration-50"
        onClick={handleLeftClick}
      >
        <div className="z-1 w-15 h-15 rotate-135 inset-shadow-arrow"></div>
      </button>

      <button
        className="z-1 absolute right-0 top-0 w-15 h-full flex items-center opacity-20 hover:opacity-50 hover:scale-125 transition duration-50"
        onClick={handleRightClick}
      >
        <div className="z-1 w-15 h-15 rotate-315 inset-shadow-arrow"></div>
      </button>
    </div>
  );
}
