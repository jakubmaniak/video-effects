import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import predefinedPresets from '../presets';
import { name as newPresetName, code as newPresetCode } from '../presets/_new';
import PresetList from './PresetList';
import PresetEditor from './PresetEditor';

function PresetManager(props) {
    let [presets, setPresets] = useState(new Set());
    let [selectedPreset, _setSelectedPreset] = useState();
    let [code, setCode] = useState('');
    let [hasChanges, setHasChanges] = useState(false);

    function setSelectedPreset(preset) {
        _setSelectedPreset(preset);
        setCode(preset.code);
        setManipulatorCode(preset.code);
        setHasChanges(false);
    }

    useEffect(() => {
        predefinedPresets.then((presetModules) => {
            presets = new Set(
                presetModules.map((presetModule) => ({
                    id: uuid(),
                    name: presetModule.name,
                    code: presetModule.code.trim()
                }))
            );
            setPresets(presets);
            setSelectedPreset(presets.values().next().value);
        });
    }, []);

    function addNewPreset() {
        let newPreset = {
            id: uuid(),
            name: newPresetName,
            code: newPresetCode.trim()
        };
        presets.add(newPreset);

        setPresets(new Set(presets));
        setSelectedPreset(newPreset);
    }

    function saveCodeChanges() {
        selectedPreset.code = code;
        setPresets(new Set(presets));
        setManipulatorCode(code);
        setHasChanges(false);
    }

    function setManipulatorCode(code) {
        props.onManipulatorChange?.(() => new Function('width', 'height', 'fps', 'get', 'set', 'copyFrame', 'apply', code));
    }

    return <>
        <section className="app-section">
            <header>
                <h1 className="app-section__title">Presets</h1>
                <button onClick={addNewPreset}>Add new preset</button>
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
                    preset={selectedPreset}
                    onCodeChange={(code) => { setCode(code); setHasChanges(true); }}
                />
            </div>
        </section>
    </>;
}

export default PresetManager;