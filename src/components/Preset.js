import '../styles/Preset.css';
import { useState } from 'react';

function Preset(props) {
    const [name, setName] = useState(props.name ?? 'New preset');

    return (
        <div className="preset">{name}</div>
    );
}

export default Preset;