import { useEffect, useState } from 'react';
import PresetList from './PresetList';
import PresetEditor from './PresetEditor';

function PresetManager() {
    let [presets, setPresets] = useState(new Set());
    let [selectedPreset, _setSelectedPreset] = useState();
    let [presetCode, _setPresetCode] = useState('');

    function setSelectedPreset(value) {
        _setSelectedPreset(value);
        _setPresetCode(value.code);
    }

    function setPresetCode(value) {
        selectedPreset.code = value;
        _setPresetCode(value);
    }

    useEffect(() => {
        presets.add({ name: 'No effects', code: 'fps(24);' });
        presets.add({ name: 'Grayscale' });
        setPresets(new Set(presets));

        setSelectedPreset(presets.values().next().value);
    }, []);

    return <>
        <section className="app-section">
            <header>
                <h1 className="app-section__title">Presets</h1>
                <button>Add new preset</button>
            </header>
            <div className="presets">
                <PresetList
                    presets={presets}
                    selectedPreset={selectedPreset}
                    onSelectPreset={setSelectedPreset}
                />
            </div>
            </section>
            <section className="app-section">
            <header>
                <h1 className="app-section__title">Preset editor</h1>
            </header>
            <div className="preset-editor">
                <PresetEditor
                    code={presetCode}
                    onCodeChange={setPresetCode}
                />
            </div>
        </section>
    </>;
}

export default PresetManager;