import './App.css';
import { useState } from 'react';
import PresetManager from './components/PresetManager';
import VideoManager from './components/VideoManager';

function App() {
  let [manipulator, setManipulator] = useState();

  return (
    <div className="app">
      <div className="app__column">
        <VideoManager manipulator={manipulator}/>
      </div>
      <div className="app__column">
        <PresetManager onManipulatorChange={setManipulator}/>
      </div>
    </div>
  );
}

export default App;
