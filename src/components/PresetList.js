import { useEffect, useRef } from 'react';
import '../styles/PresetList.css';
import Preset from './Preset';

function PresetList(props) {
    let listRef = useRef();

    useEffect(() => {
        listRef.current.scrollTop = listRef.current.scrollHeight;
    }, [props.presets]);

    function handleItemClick(preset) {
        if (preset !== props.selectedPreset) {
            props.onSelectPreset?.(preset);
        }
    }

    return (
        <div className="preset__list" ref={listRef}>{
            [...props.presets].map((preset) =>
                <Preset
                    key={preset.id}
                    name={preset.name}
                    selected={preset === props.selectedPreset}
                    onClick={() => handleItemClick(preset)}
                />
            )
        }</div>
    );
}

export default PresetList;