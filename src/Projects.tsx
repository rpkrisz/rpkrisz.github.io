import ListElem from "./Components/ListElem";

const Projects = () => {
  return (
    <>
      <h1 className="text-start my-2">My Pojects</h1>
      <ul className="flex flex-col justify-center gap-3">
        <ListElem
          name="Burgonya térkép játék"
          link="https://rpkrisz.github.io/JS-BurgonyaTerkep/"
          imageSrc="./assets/burgonya_minta.png"
          thisPic="a játékról."
        ></ListElem>
        <ListElem
          name="Bérkalkulátor alkalmazás"
          link="https://rpkrisz.github.io/Berkalkulator/"
          imageSrc="./assets/berkalk_minta.png"
          thisPic="az alkalmazásról."
        ></ListElem>
        <ListElem
          name="Unstable Unicorns weblap"
          link="https://rpkrisz.github.io/UnstableUnicorns/"
          imageSrc="./assets/unstable_minta.png"
          thisPic="a weboldalról."
        ></ListElem>
      </ul>
    </>
  );
};

export default Projects;
