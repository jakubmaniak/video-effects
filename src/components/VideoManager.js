import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import VideoSourceList from './VideoSourceList';
import VideoPreview from './VideoPreview';

function VideoManager() {
    let [videoSources, setVideoSources] = useState(new Set());
    let [selectedVideoSource, setSelectedVideoSource] = useState();

    useEffect(() => {
        videoSources = new Set([
            {
                id: uuid(),
                name: 'Big Buck Bunny',
                source: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
            },
            {
                id: uuid(),
                name: 'Tears of Steel',
                source: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
            }
        ]);
        setVideoSources(videoSources);

        setSelectedVideoSource(videoSources.values().next().value);
    }, []);

    function handleVideoSourceChange(videoSource) {
        if (selectedVideoSource === videoSource) {
            return;
        }

        setSelectedVideoSource(videoSource);
    }

    return <>
        <section className="app-section">
            <header>
                <h1 className="app-section__title">Video sources</h1>
            </header>
            <div className="video-sources">
                <VideoSourceList
                    videoSources={videoSources}
                    selectedVideoSource={selectedVideoSource}
                    onSelectVideoSource={handleVideoSourceChange}/>
            </div>
        </section>
        <section className="app-section">
            <header>
                <h1 className="app-section__title">Video preview</h1>
            </header>
            <div className="video-preview">
                <VideoPreview videoSource={selectedVideoSource}/>
            </div>
        </section>
    </>;
}

export default VideoManager;