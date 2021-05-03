import '../styles/VideoSourceList.css';
import VideoSource from './VideoSource';

function VideoSourceList(props) {
    return (
        <div className="video-source__list">{
            [...props.videoSources].map((videoSource) =>
                <VideoSource
                    key={videoSource.id}
                    selected={videoSource === props.selectedVideoSource}
                    onClick={() => props.onSelectVideoSource?.(videoSource)}
                    {...videoSource}/>
            )
        }</div>
    );
}

export default VideoSourceList;