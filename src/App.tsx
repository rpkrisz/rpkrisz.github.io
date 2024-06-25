import "./App.css";

function App() {

  return (
    <>
      <header>
        <h1>HI this is my Portfolio</h1>
        <div id="logger">
          <span id="toggel">
            <img src="/assets/sun_icon.png" alt="light" />
          </span>
        </div>
      </header>
      <main>
        <a href="https://www.linkedin.com/in/rethey-prikkel-krisztian/" target="_blank">
          My linkedin profile
        </a>
        <h1>Poject links</h1>
        <ul>
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
      <footer>
        <p>© 2024 - Réthey-Prikkel Kriszsztián</p>
      </footer>
    </>
  );
}

export default App;
