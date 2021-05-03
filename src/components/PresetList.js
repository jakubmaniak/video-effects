import { useEffect, useState } from 'react';
import '../styles/PresetList.css';
import Preset from './Preset';

function PresetList() {
    let [presets, setPresets] = useState(new Set());
    let [selectedPreset, setSelectedPreset] = useState();

    useEffect(() => {
        presets.add({ name: 'No effects' });
        presets.add({ name: 'Grayscale' });
        setPresets(new Set(presets));

        setSelectedPreset(presets.values().next().value);
    }, []);

    return (
        <div className="preset__list">{
            [...presets].map((preset) =>
                <Preset
                    key={preset.name}
                    name={preset.name}
                    selected={preset === selectedPreset}
                    onClick={() => setSelectedPreset(preset)}
                />
            )
        }</div>
    );
}

export default PresetList;