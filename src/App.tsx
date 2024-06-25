import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>HI this is my Portfolio</h1>
        <a href="https://www.linkedin.com/in/rethey-prikkel-krisztian/" target="_blank">
          My linkedin profile
        </a>
        <div id="logger">
          <span id="toggel">
            <img src="/assets/sun_icon.png" alt="light" />
          </span>
        </div>
      </header>
      <main>
        <h1>Poject links</h1>
        <ul className="flex justify-center">
          <li>
            <img src="assets/burgonya_minta.png" alt="Egy kép a játékról" />
            <a href="https://rpkrisz.github.io/JS-BurgonyaTerkep/">Burgonya térkép</a>
          </li>
          <li>
            <img src="assets/berkalk_minta.png" alt="Egy kép a alkalmazásról" />
            <a href="https://rpkrisz.github.io/Berkalkulator/"> Bérkalkulátor</a>
          </li>
        </ul>
      </main>
      <footer className="flex items-center justify-center">
        <p>© 2024 - Réthey-Prikkel Kriszsztián</p>
      </footer>
    </>
  );
}

export default App;
