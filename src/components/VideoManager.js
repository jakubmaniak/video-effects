import VideoSourceList from './VideoSourceList';
import VideoPreview from './VideoPreview';

function VideoManager() {
    return <>
        <section className="app-section">
            <header>
                <h1 className="app-section__title">Video sources</h1>
            </header>
            <div className="video-sources">
                <VideoSourceList/>
            </div>
        </section>
        <section className="app-section">
            <header>
                <h1 className="app-section__title">Video preview</h1>
            </header>
            <div className="video-preview">
                <VideoPreview/>
            </div>
        </section>
    </>;
}

export default VideoManager;