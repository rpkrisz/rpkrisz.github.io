import H1 from "@/Components/H1";
import ProjectElem from "../Components/ProjectElem";

const Projects = () => {
  return (
    <>
      <H1>My Pojects</H1>
      <ul className="flex flex-col justify-center gap-3">
        <ProjectElem
          name="Burgonya térkép játék"
          link="https://rpkrisz.github.io/JS-BurgonyaTerkep"
          imageSrc="./assets/burgonya_minta.png"
          thisPic="a játékról."
        ></ProjectElem>
        <ProjectElem
          name="Bérkalkulátor alkalmazás"
          link="https://rpkrisz.github.io/Berkalkulator"
          imageSrc="./assets/berkalk_minta.png"
          thisPic="az alkalmazásról."
        ></ProjectElem>
        <ProjectElem
          name="Unstable Unicorns weblap"
          link="https://rpkrisz.github.io/UnstableUnicorns"
          imageSrc="./assets/unstable_minta.png"
          thisPic="a weboldalról."
        ></ProjectElem>
      </ul>
    </>
  );
};

export default Projects;
