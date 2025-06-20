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
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex ">
      <div className="relative size-full overflow-hidden">
        <div className="z-1 absolute size-full grid grid-cols-11 grid-rows-11 bg-gradient-to-r from-lazuli-t to-lazuli-900 to-40% text-lazuli-200 px-4">
          <button
            className="z-2 cursor-pointer flex justify-center items-center col-span-2 col-start-1 row-span-11 row-start-1 opacity-20 transition duration-100 hover:opacity-50 hover:scale-125 "
            onClick={handleLeftClick}
          >
            <div className="aspect-square w-[4.5vw]  rotate-135 inset-shadow-arrow"></div>
          </button>
          <button
            className="z-2 cursor-pointer flex justify-center items-center col-span-2 col-start-10 row-span-11 row-start-1 opacity-20 transition duration-100 hover:opacity-50 hover:scale-125"
            onClick={handleRightClick}
          >
            <div className="aspect-square w-[4.5vw] rotate-315 inset-shadow-arrow"></div>
          </button>
          <h3 className="col-span-4 col-start-6 row-span-1 row-start-4 text-[2vw] font-bold mb-5">
            {projectName[selectedContent]}
          </h3>
          <p className="col-span-4 col-start-6 row-span-5 row-start-5 text-[1.4vw]">
            {porjectDesc[selectedContent]}
          </p>

          {/* Dots */}
          <div className="col-span-3 col-start-5 row-start-10 flex items-center justify-between px-[27%]">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`after:content-[''] aspect-square after:aspect-square h-[55%] after:h-[60%] rounded-full after:rounded-full flex after:block items-center justify-center transition bg-lazuli-200 after:bg-lazuli-400 opacity-30 after:opacity-30 duration-1 transform ${
                  selectedContent === i
                    ? "opacity-80 scale-110 shadow-md after:bg-lazuli-800 after:opacity-80"
                    : ""
                }`}
              />
            ))}
          </div>
        </div>
        <img
          className="size-full aspect-3/2 blur-xs object-cover transition-opacity duration-500"
          src={`/kodON_website/img/Project_${galeryContent[selectedContent]}.png`}
          alt="Project Photo"
        />
      </div>
    </div>
  );
}
