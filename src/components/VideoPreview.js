import { useEffect, useRef, useState } from 'react';
import '../styles/VideoPreview.css';

function VideoPreview() {
    let canvasRef = useRef();
    let [video, setVideo] = useState();
    let [playing, setPlaying] = useState(true);
    let [muted, setMuted] = useState(true);

    useEffect(() => {
        video = document.createElement('video');
        video.muted = true;
        video.src = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
        video.play();

        setVideo(video);

        let ctx = canvasRef.current.getContext('2d');

        setInterval(() => {
            ctx.drawImage(video, 0, 0, 640, 360);
        }, 1000 / 24);
    }, []);

    function handlePlayButtonClick() {
        if (playing) {
            video.pause();
        }
        else {
            video.play();
        }
        setPlaying(!playing);
    }

    function handleMuteButtonClick() {
        video.muted = !muted;
        setMuted(!muted);
    }

    return (
        <div className="video-preview__container">
            <canvas className="video-preview__canvas" width="640" height="360" ref={canvasRef}></canvas>
            <div className="video-controls">
                <button
                    className={playing ? 'video-control--pause' : 'video-control--play'}
                    onClick={handlePlayButtonClick}
                ></button>
                <button
                    className={muted ? 'video-control--volume-mute' : 'video-control--volume-medium'}
                    onClick={handleMuteButtonClick}
                ></button>
            </div>
        </div>
    );
}

export default VideoPreview;