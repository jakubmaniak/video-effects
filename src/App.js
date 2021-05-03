import './App.css';
import PresetEditor from './components/PresetEditor';
import PresetList from './components/PresetList';
import VideoPreview from './components/VideoPreview';
import VideoSourceList from './components/VideoSourceList';

function App() {
  return (
    <div className="app">
      <div className="app__column">
          <section className="app-section">
            <header>
              <h1 className="app-section__title">Video sources</h1>
            </header>
            <div className="video-sources">
              <VideoSourceList/>
            </div>
          </section>
          <section className="app-section">
            <header>
              <h1 className="app-section__title">Video preview</h1>
            </header>
            <div className="video-preview">
              <VideoPreview/>
            </div>
          </section>
      </div>
      <div className="app__column">
        <section className="app-section">
          <header>
            <h1 className="app-section__title">Presets</h1>
            <button>Add new preset</button>
          </header>
          <div className="presets">
            <PresetList/>
          </div>
        </section>
        <section className="app-section">
          <header>
            <h1 className="app-section__title">Preset editor</h1>
          </header>
          <div className="preset-editor">
            <PresetEditor/>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
