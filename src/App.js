import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app__column">
          <section className="app-section">
            <header>
              <h1 className="app-section__title">Video sources</h1>
            </header>
            <div className="app-section__container">
              Video sources content
            </div>
          </section>
          <section className="app-section">
            <header>
              <h1 className="app-section__title">Video preview</h1>
            </header>
            <div className="app-section__container">
              Video preview content
            </div>
          </section>
      </div>
      <div className="app__column">
        <section className="app-section">
          <header>
            <h1 className="app-section__title">Presets</h1>
            <button>Add new preset</button>
          </header>
          <div className="app-section__container">
            Presets content
          </div>
        </section>
        <section className="app-section">
          <header>
            <h1 className="app-section__title">Preset editor</h1>
          </header>
          <div className="app-section__container">
            Preset editor content
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
