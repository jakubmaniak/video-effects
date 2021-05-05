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
            let frameCopies = [];
            let redrawImageData = frame;

            let fps = function() { };
            let copyFrame = () => {
                let copy = ctx.createImageData(frame.width, frame.height);
                copy.data.set(new Uint8ClampedArray(frame.data));
                return frameCopies.push(copy) - 1;
            };
            let apply = (copy = null) => {
                redrawImageData = (copy !== null ? frameCopies[copy] : frame);
            };
            let get = (x, y, copy = null) => {
                let img = (copy !== null ? frameCopies[copy] : frame);
                let index = (img.width * y + x) * 4;
                return {
                    r: img.data[index],
                    g: img.data[index + 1],
                    b: img.data[index + 2],
                    a: img.data[index + 3]
                };
            };
            let set = (x, y, { r = null, g = null, b = null, a = null }, copy = null) => {
                let img = (copy !== null ? frameCopies[copy] : frame);
                let index = (img.width * y + x) * 4;
                (r != null) && (img.data[index] = r);
                (g != null) && (img.data[index + 1] = g);
                (b != null) && (img.data[index + 2] = b);
                (a != null) && (img.data[index + 3] = a);
            };
            
            manipulatorRef.current?.(frame.width, frame.height, fps, get, set, copyFrame, apply);

            ctx.putImageData(redrawImageData, 0, 0);
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