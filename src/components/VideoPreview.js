import '../styles/VideoPreview.css';
import { useEffect, useRef, useState } from 'react';

function VideoPreview(props) {
    let canvasRef = useRef();
    let videoRef = useRef();
    let manipulatorRef = useRef();
    let [playing, setPlaying] = useState(true);
    let [muted, setMuted] = useState(true);

    useEffect(() => {
        let video = document.createElement('video');
        video.crossOrigin = 'anonymous';
        video.muted = true;
        video.loop = true;

        videoRef.current = video;

        let ctx = canvasRef.current.getContext('2d');
        
        let srcCanvas = document.createElement('canvas');
        srcCanvas.width = 640;
        srcCanvas.height = 360;
        let srcCtx = srcCanvas.getContext('2d');

        setInterval(() => {
            srcCtx.drawImage(video, 0, 0, 640, 360);
            let frame = srcCtx.getImageData(0, 0, 640, 360);
            let fps = function() { };
            let get = (x, y) => {
                let index = (frame.width * y + x) * 4;
                return {
                    r: frame.data[index],
                    g: frame.data[index + 1],
                    b: frame.data[index + 2],
                    a: frame.data[index + 3]
                };
            };
            let set = (x, y, { r = null, g = null, b = null, a = null }) => {
                let index = (frame.width * y + x) * 4;
                (r != null) && (frame.data[index] = r);
                (g != null) && (frame.data[index + 1] = g);
                (b != null) && (frame.data[index + 2] = b);
                (a != null) && (frame.data[index + 3] = a);
            };
            
            manipulatorRef.current?.(frame.width, frame.height, fps, get, set);
            
            ctx.putImageData(frame, 0, 0);
        }, 1000 / 24);
    }, []);

    useEffect(() => {
        videoRef.current.src = props.videoSource?.source;
        videoRef.current.play();
    }, [props.videoSource]);

    useEffect(() => {
        manipulatorRef.current = props.manipulator;
    }, [props.manipulator]);

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