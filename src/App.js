import './App.css';
import PresetManager from './components/PresetManager';
import VideoManager from './components/VideoManager';

function App() {
  return (
    <div className="app">
      <div className="app__column">
        <VideoManager/>
      </div>
      <div className="app__column">
        <PresetManager/>
      </div>
    </div>
  );
}

export default App;
