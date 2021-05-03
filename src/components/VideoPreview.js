import { useEffect, useRef, useState } from 'react';
import '../styles/VideoPreview.css';

function VideoPreview(props) {
    let canvasRef = useRef();
    let videoRef = useRef();
    let [playing, setPlaying] = useState(true);
    let [muted, setMuted] = useState(true);

    useEffect(() => {
        let video = document.createElement('video');
        video.muted = true;
        video.src = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
        video.loop = true;
        video.play();

        videoRef.current = video;

        let ctx = canvasRef.current.getContext('2d');

        setInterval(() => {
            ctx.drawImage(video, 0, 0, 640, 360);
        }, 1000 / 24);
    }, []);

    useEffect(() => {
        videoRef.current.src = props.videoSource?.source;
        videoRef.current.play();
    }, [props.videoSource]);

    function handlePlayButtonClick() {
        if (playing) {
            videoRef.current.pause();
        }
        else {
            videoRef.current.play();
        }
        setPlaying(!playing);
    }

    function handleMuteButtonClick() {
        videoRef.current.muted = !muted;
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