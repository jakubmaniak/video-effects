import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import '../styles/VideoSourceList.css';
import VideoSource from './VideoSource';

function VideoSourceList() {
    let [videoSources, setVideoSources] = useState(new Set());
    let [selectedVideoSource, setSelectedVideoSource] = useState();

    useEffect(() => {
        videoSources.add({
            id: uuid(),
            name: 'Big Buck Bunny',
            source: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        });
        videoSources.add({
            id: uuid(),
            name: 'Tears of Steel',
            source: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
        });
        setVideoSources(new Set(videoSources));

        setSelectedVideoSource(videoSources.values().next().value);
    }, []);

    return (
        <div className="video-source__list">{
            [...videoSources.values()].map((videoSource) =>
                <VideoSource
                    key={videoSource.id}
                    selected={selectedVideoSource === videoSource}
                    onClick={() => setSelectedVideoSource(videoSource)}
                    {...videoSource}/>
            )
        }</div>
    );
}

export default VideoSourceList;