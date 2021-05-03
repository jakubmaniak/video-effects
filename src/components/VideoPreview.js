import '../styles/VideoPreview.css';

function VideoPreview() {
    return (
        <div className="video-preview__container">
            <canvas width="640" height="360"></canvas>
            <div className="video-controls">
                <button className="video-control--play"></button>
                <button className="video-control--volume-medium"></button>
            </div>
        </div>
    );
}

export default VideoPreview;