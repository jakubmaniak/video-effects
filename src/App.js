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
              <canvas width="640" height="360"></canvas>
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
          <div className="app-section__container preset-editor">
            <textarea className="preset-editor__code" spellCheck="false">fps(30);</textarea>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
