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
import linkedinIcon from "/img/in.jpg";
import instagramIcon from "/img/ig.jpg";
import githubIcon from "/img/gh.jpg";

export default function Footer() {
  const socialLinks = [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/company/kolo-naukowe-kodon/posts/?feedView=all",
      icon: linkedinIcon,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/kodon_ug/",
      icon: instagramIcon,
    },
    {
      name: "Github",
      url: "https://github.com/Science-Club-UG-BioAI",
      icon: githubIcon,
    },
  ];

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
              <img
                src={image1}
                alt="Image 1"
                width={400}
                height={300}
                className="object-cover rounded-sm"
              />
              <img
                src={image2}
                alt="Image 2"
                width={400}
                height={300}
                className="object-cover rounded-sm"
              />
              <img
                src={image3}
                alt="Image 3"
                width={400}
                height={300}
                className="object-cover rounded-sm"
              />
              <img
                src={image4}
                alt="Image 4"
                width={400}
                height={300}
                className="object-cover rounded-sm"
              />
              <img
                src={image5}
                alt="Image 5"
                width={400}
                height={300}
                className="object-cover rounded-sm"
              />
              <img
                src={image6}
                alt="Image 6"
                width={400}
                height={300}
                className="object-cover rounded-sm"
              />
              <img
                src={image7}
                alt="Image 7"
                width={400}
                height={300}
                className="object-cover rounded-sm"
              />
              <img
                src={image8}
                alt="Image 8"
                width={400}
                height={300}
                className="object-cover rounded-sm"
              />
              <img
                src={image9}
                alt="Image 9"
                width={400}
                height={300}
                className="object-cover rounded-sm"
              />
              <img
                src={image10}
                alt="Image 10"
                width={400}
                height={300}
                className="object-cover rounded-sm"
              />
              <img
                src={image11}
                alt="Image 11"
                width={400}
                height={300}
                className="object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
        <div className="relative z-20">
          <div className="bg-[url('/img/wave.jpg')] bg-no-repeat bg-cover h-120 md:h-72 2xl:h-96 3xl:h-200 w-full">
            <div className="container mx-auto px-4 h-full flex flex-col md:flex-row justify-between items-center pt-16 md:pt-0 2xl:pt-0">
              <div className="flex flex-col items-center md:items-start space-y-4 mb-8 md:mb-0">
                <LogoFooter />
                <p className="text-black text-center md:text-left mt-4">
                  &copy; {new Date().getFullYear()} kodON. Wszystkie prawa
                  zastrzeżone.
                </p>
              </div>
              <div>
                <div id="Kontakt">
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
                      <img
                        src={link.icon}
                        alt={link.name}
                        width={36}
                        height={36}
                      />
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
