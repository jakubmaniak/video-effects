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
        setHasChanges(false);
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

    function addNewPreset() {
        let newPreset = {
            id: uuid(),
            name: 'My preset',
            code: 'fps(24);\n\nfor (let y = 0; y < height; y++) {\n  for (let x = 0; x < width; x++) {\n    let {r, g, b} = get(x, y);\n    set(x, y, {r, g, b});\n    \n  }\n}'
        };
        presets.add(newPreset);

        setPresets(new Set(presets));
        setSelectedPreset(newPreset);
    }

    function saveCodeChanges() {
        selectedPreset.code = code;
        setPresets(new Set(presets));
        setHasChanges(false);
    }

    return <>
        <section className="app-section">
            <header>
                <h1 className="app-section__title">Presets</h1>
                <button
                    onClick={addNewPreset}
                >Add new preset</button>
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