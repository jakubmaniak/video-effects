import '../styles/VideoSource.css';
import { useState } from 'react';

function VideoSource(props) {
    const [name, setName] = useState(props.name ?? 'Video source');
    const [source, setSource] = useState(props.source ?? '');

    function sliceSource(address, maxLength) {
        if (address.length > maxLength) {
            return '...' + address.slice(-maxLength + 3);
        }

        return address;
    }

    return (
        <div className="video-source">
            <span className="video-source__name">{name}</span>
            <span className="video-source__address">{sliceSource(source, 40)}</span>
        </div>
    );
}

export default VideoSource;