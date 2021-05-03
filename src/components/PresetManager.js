import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import PresetList from './PresetList';
import PresetEditor from './PresetEditor';

function PresetManager() {
    let [presets, setPresets] = useState(new Set());
    let [selectedPreset, _setSelectedPreset] = useState();
    let [code, setCode] = useState('');
    let [hasChanges, setHasChanges] = useState(false);

    function setSelectedPreset(preset) {
        _setSelectedPreset(preset);
        setCode(preset.code);
    }

    useEffect(() => {
        presets = new Set([
            {
                id: uuid(),
                name: 'No effects',
                code: 'fps(24);'
            },    
            {
                id: uuid(),
                name: 'Grayscale'
            }
        ]);
        setPresets(presets);

        setSelectedPreset(presets.values().next().value);
    }, []);

    function saveCodeChanges() {
        selectedPreset.code = code;
        setPresets(new Set(presets));
        setHasChanges(false);
    }

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
                    onSelectPreset={(preset) => { setSelectedPreset(preset); setHasChanges(false); }}
                />
            </div>
            </section>
            <section className="app-section">
            <header>
                <h1 className="app-section__title">Preset editor</h1>
                <button
                    onClick={saveCodeChanges}
                    disabled={!hasChanges}
                >Save changes</button>
            </header>
            <div className="preset-editor">
                <PresetEditor
                    code={code}
                    onCodeChange={(code) => { setCode(code); setHasChanges(true); }}
                />
            </div>
        </section>
    </>;
}

export default PresetManager;