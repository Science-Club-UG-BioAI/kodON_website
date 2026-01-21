import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import LogoFooter from "./UI/LogoFooter";

import image1 from "/img/Gal1.jpg";
import image2 from "/img/Gal2.jpg";
import image3 from "/img/Gal3.jpg";
import image4 from "/img/Gal4.jpg";
import image5 from "/img/Gal5.jpg";
import image6 from "/img/Gal6.jpg";
import image7 from "/img/Gal7.jpg";
import image8 from "/img/Gal8.jpg";
import image9 from "/img/Gal9.jpg";
import image10 from "/img/Gal10.jpg";
import image11 from "/img/Gal11.jpg";
import image12 from "/img/Gal12.jpg";
import image13 from "/img/Gal13.jpg";
import image14 from "/img/Gal14.jpg";
import image15 from "/img/Gal15.jpg";

import linkedinIcon from "/img/in.jpg";
import instagramIcon from "/img/ig.jpg";
import githubIcon from "/img/gh.jpg";

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export default function Footer() {
  const socialLinks = [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/company/kolo-naukowe-kodon/posts/?feedView=all",
      icon: linkedinIcon,
    },
    { name: "Instagram", url: "https://www.instagram.com/kodon_ug/", icon: instagramIcon },
    { name: "Github", url: "https://github.com/Science-Club-UG-BioAI", icon: githubIcon },
  ];

  const images: GalleryImage[] = useMemo(
    () => [
      { src: image15, alt: "Inne", caption: "Koło zakupiło nowe bluzy. Zaprojektowane zostały przez " },
      { src: image12, alt: "Hakatlon Bydgoszcz 2025", caption: "Widok na główną scenę" },
      { src: image13, alt: "Hakatlon Bydgoszcz 2025", caption: "Team w trakcie pracy" },
      { src: image14, alt: "Spotkanie z Kosmonautą", caption: "Prezentujemy nasze projekty panu Sławoszowi" },
      { src: image1, alt: "Dni otwarte 2025", caption: "Zdjęcie przed wydarzeniem" },
      { src: image2, alt: "Dni otwarte 2025", caption: "Szybkie poprawki" },
      { src: image3, alt: "Dni otwarte 2025", caption: "Dumny prezes z działającą EVĄ" },
      { src: image4, alt: "Dni otwarte 2025", caption: "Czekając na zainteresowanych" },
      { src: image5, alt: "Dni otwarte 2025", caption: "Prezentacja koła" },
      { src: image7, alt: "Dni otwarte 2025", caption: "Prezentacja koła" },
      { src: image6, alt: "Wykład", caption: "Część wykładu o onkogenomice" },
      { src: image8, alt: "Wykład", caption: "Część wykładu o epigenetyce" },
      { src: image9, alt: "Wykład", caption: "Część wykładu o epigenetyce" },
      { src: image10, alt: "Wykład", caption: "Pomiędzy wykładami" },
      { src: image11, alt: "Wykład", caption: "Część wykładu o sieciach neuronowych" },
    ],
    []
  );

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const openAt = (idx: number) => {
    setActiveIndex(idx);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);
  const prev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setActiveIndex((i) => (i + 1) % images.length);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, images.length]);

  return (
    <footer>
      <div
        id="Galeria"
        className="relative overflow-hidden bg-gradient-to-r from-lazuli-900 to-lazuli-800"
      >
        <div className="absolute overflow-hidden inset-0 bg-[url('/codebcg.jpg')] bg-cover bg-no-repeat bg-center opacity-100 blur-xs" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="relative z-10 container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-lazuli-200 mb-8">Galeria</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center mb-16">
              {images.map((img, idx) => (
                <button
                  key={img.alt}
                  type="button"
                  onClick={() => openAt(idx)}
                  className="group relative focus:outline-none"
                  aria-label={`Powiększ: ${img.alt}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={300}
                    className="object-cover rounded-sm transition-transform duration-200 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-sm ring-0 ring-lazuli-200/40 group-focus-visible:ring-2 transition" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Podgląd zdjęcia"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) close();
            }}
          >
            <div className="relative w-full max-w-5xl">
              <button
                type="button"
                onClick={close}
                className="absolute -top-12 right-0 rounded-lg bg-white/10 px-3 py-2 text-white backdrop-blur hover:bg-white/20"
                aria-label="Zamknij (Esc)"
              >
                ✕
              </button>

              <button
                type="button"
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur hover:bg-white/20"
                aria-label="Poprzednie (←)"
              >
                ←
              </button>

              <button
                type="button"
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur hover:bg-white/20"
                aria-label="Następne (→)"
              >
                →
              </button>

              <div className="flex items-center justify-center">
                <img
                  src={images[activeIndex].src}
                  alt={images[activeIndex].alt}
                  className="max-h-[80vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
                  draggable={false}
                />
              </div>

              <div className="mt-4 rounded-xl bg-white/10 p-4 text-white backdrop-blur">
                <div className="flex items-center justify-between text-sm text-white/80">
                  <span>{images[activeIndex].alt}</span>
                  <span>
                    {activeIndex + 1} / {images.length}
                  </span>
                </div>
                <p className="mt-2 text-base text-white/90">
                  {images[activeIndex].caption}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="relative z-20">
          <div className="bg-[url('/img/wave.jpg')] bg-no-repeat bg-cover h-120 md:h-72 2xl:h-96 3xl:h-200 w-full">
            <div className="container mx-auto px-4 h-full flex flex-col md:flex-row justify-between items-center pt-16 md:pt-0 2xl:pt-0">
              <div className="flex flex-col items-center md:items-start space-y-4 mb-8 md:mb-0">
                <LogoFooter />
                <p className="text-black text-center md:text-left mt-4">
                  &copy; {new Date().getFullYear()} kodON
                </p>
              </div>

              <div>
                <div id="footer_Kontakt">
                  <p className="mb-6">Kontakt:</p>
                  <p className="font-medium">knkodon@gmail.com</p>
                </div>

                <div className="flex gap-4 space-y-4 md:space-y-0 md:space-x-4 mt-10">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lazuli-200 hover:text-lazuli-100 transition-colors"
                    >
                      <img src={link.icon} alt={link.name} width={36} height={36} />
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
