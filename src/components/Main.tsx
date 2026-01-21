import About from "./About";
import Contact from "./Contact";
import HonoredOnes from "./HonoredOnes";
import Leaders from "./Leaders";
import ProjectGalery from "./ProjectGalery";
import ProjectInfo from "./ProjectsInfo";

export default function Main() {
  return (
    <main>
      <About />
      <ProjectGalery />
      <Leaders />
      <Contact   discordInviteUrl="https://discord.com/invite/CuDHssj2bd"
                  clubEmail="knkodon@gmail.com"
                  founders={[
                    { name: "Mateusz Gawin", role: "Prezes", email: "m.gawin.946@studms.ug.edu.pl" },
                    { name: "Jan Wolski", role: "Vice", email: "j.wolski.944@studms.ug.edu.pl" },
                  ]}/>
      <HonoredOnes />
      <ProjectInfo />

    </main>
  );
}
