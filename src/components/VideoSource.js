import '../styles/VideoSource.css';
import { useEffect, useState } from 'react';

function VideoSource(props) {
    let [selected, setSelected] = useState(false);
    const [name, setName] = useState(props.name ?? 'Video source');
    const [source, setSource] = useState(props.source ?? '');

    useEffect(() => {
        if (!props.selected == selected) {
            setSelected(!!props.selected);
        }
    }, [props.selected]);

    function sliceSource(address, maxLength) {
        if (address.length > maxLength) {
            return '...' + address.slice(-maxLength + 3);
        }

        return address;
    }

    function getItemClassName() {
        return 'video-source' + (
            selected ? ' video-source--selected' : ''
        );
    }

    return (
        <button className={getItemClassName()} onClick={props.onClick}>
            <span className="video-source__name">{name}</span>
            <span className="video-source__address">{sliceSource(source, 40)}</span>
        </button>
    );
}

export default VideoSource;