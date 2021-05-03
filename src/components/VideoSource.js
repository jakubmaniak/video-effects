import '../styles/VideoSource.css';
import { useEffect, useState } from 'react';

function VideoSource(props) {
    let [selected, setSelected] = useState(false);

    useEffect(() => {
        if (!props.selected === selected) {
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
            <span className="video-source__name">{props.name ?? 'Video source'}</span>
            <span className="video-source__address">{sliceSource(props.source ?? '', 40)}</span>
        </button>
    );
}

export default VideoSource;