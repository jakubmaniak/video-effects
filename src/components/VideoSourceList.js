import '../styles/VideoSourceList.css';
import VideoSource from './VideoSource';

function VideoSourceList() {
    return (
        <div className="video-source__list">
            <VideoSource
                name="Big Buck Bunny"
                source="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            />
            <VideoSource
                name="Tears of Steel"
                source="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
            />
            <VideoSource/>
        </div>
    );
}

export default VideoSourceList;