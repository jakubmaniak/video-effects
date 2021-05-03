import '../styles/Preset.css';
import { useEffect, useState } from 'react';

function Preset(props) {
    const [name, setName] = useState(props.name ?? 'New preset');
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        if (!props.selected == selected) {
            setSelected(!!props.selected);
        }
    }, [props.selected]);

    function getItemClassName() {
        return 'preset' + (
            selected ? ' preset--selected' : ''
        );
    }

    return (
        <button className={getItemClassName()} onClick={props.onClick}>{name}</button>
    );
}

export default Preset;