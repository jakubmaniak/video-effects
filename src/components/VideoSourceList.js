import '../styles/VideoSourceList.css';
import VideoSource from './VideoSource';

function VideoSourceList() {
    return (
        <div className="video-source__list">
            <VideoSource/>
            <VideoSource/>
            <VideoSource/>
        </div>
    );
}

export default VideoSourceList;