import PresetList from './PresetList';
import PresetEditor from './PresetEditor';

function PresetManager() {
    return <>
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
    </>;
}

export default PresetManager;