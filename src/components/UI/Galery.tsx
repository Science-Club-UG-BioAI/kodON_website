import { useState } from "react";

export default function Galery() {
  const galeryContent = ["0", "1", "2"];
  let selectedContent = 1;
  const [galery, setGalery] = useState(galeryContent[selectedContent]);

  const buttonLeft = (
    <button
      className="z-1 absolute left-0 top-0 w-15 h-full flex items-center opacity-20 hover:opacity-50 hover:scale-125 transition duration-50"
      onClick={(e) => {
        // e.preventDefault();
        if (selectedContent == 0) {
          selectedContent = 2;
          setGalery(galeryContent[selectedContent]);
          console.log(galery);
        } else {
          selectedContent -= 1;
          setGalery(galeryContent[selectedContent]);
          console.log(galery);
        }
      }}
    >
      <div className="z-1 w-15 h-15 rotate-135 inset-shadow-arrow"></div>
    </button>
  );

  const buttonRight = (
    <button
      className="z-1 absolute right-0 top-0 w-15 h-full flex items-center opacity-20 hover:opacity-50 hover:scale-125 transition duration-50"
      onClick={(e) => {
        e.preventDefault();
        if (selectedContent == 2) {
          selectedContent = 0;
        } else {
          selectedContent += 1;
        }
        console.log(galery);
        setGalery(galeryContent[selectedContent]);
      }}
    >
      <div className="z-1 w-15 h-15 rotate-315 inset-shadow-arrow"></div>
    </button>
  );

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="overflow-hidden">
        <div className="z-1 absolute w-full h-full flex flex-col justify-center pl-150 pr-30 bg-gradient-to-r from-lazuli-t to-lazuli-900 to-40% text-lazuli-200">
          <h3 className="text-5xl font-bold mb-5">Nazwa projektu</h3>
          <p className="text-xl">
            Opis projektu Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <img
          className="size-full blur-xs"
          src={`src\\assets\\img\\Project_${galery}.png`}
          alt="Project Photo"
        />
      </div>
      {buttonLeft}
      {buttonRight}
    </div>
  );
}
