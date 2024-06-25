import "./App.css";
import ListElem from "./ListElem";

function App() {
  return (
    <>
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center flex-grow">
        <h1>HI this is my Portfolio</h1>
        <a href="https://www.linkedin.com/in/rethey-prikkel-krisztian/" target="_blank">
          My linkedin profile
        </a>
      </header>
      <main className="flex-grow overflow-y-auto p-4 w-svw">
        <h1>Pojects</h1>
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
      </main>
      <footer className="bg-gray-800 text-white p-4 flex justify-center items-center">
        <p>© 2024 - Réthey-Prikkel Kriszsztián</p>
      </footer>
    </>
  );
}

export default App;
