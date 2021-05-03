import { useEffect, useState } from 'react';
import '../styles/PresetList.css';
import Preset from './Preset';

function PresetList(props) {
    return (
        <div className="preset__list">{
            [...props.presets].map((preset) =>
                <Preset
                    key={preset.name}
                    name={preset.name}
                    selected={preset === props.selectedPreset}
                    onClick={() => props.onSelectPreset?.(preset)}
                />
            )
        }</div>
    );
}

export default PresetList;