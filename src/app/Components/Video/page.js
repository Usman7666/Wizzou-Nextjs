"use client"
import { useRef, useState } from "react";


export default function VideoPlayer({src}) {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlayPause = () => {
        if (!videoRef.current) return;

        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return(
        <div>
            <video ref={videoRef} autoPlay  loop muted playsInline>
            <source src={src} type="video/mp4" />
          </video>
          <svg
            className="video-play-button"
            onClick={togglePlayPause}
            xmlns="http://www.w3.org/2000/svg"
            width="184"
            height="183"
            viewBox="0 0 184 183"
            fill="none"
          >
            <circle
              cx="91.8358"
              cy="91.5869"
              r="91.3017"
              fill="white"
              fillOpacity="0.3"
            />
            <circle
              cx="91.8358"
              cy="89.8096"
              r="70.92"
              fill="white"
              fillOpacity="0.3"
            />
            <circle cx="91.8358" cy="90.2852" r="44" fill="white" />
            <path
              d="M104.742 86.4947C105.343 86.8146 105.846 87.2921 106.197 87.8761C106.548 88.4601 106.734 89.1286 106.734 89.8099C106.734 90.4912 106.548 91.1597 106.197 91.7437C105.846 92.3277 105.343 92.8052 104.742 93.1251L88.6955 101.851C86.1117 103.256 82.938 101.428 82.938 98.5369V81.0842C82.938 78.1911 86.1117 76.3637 88.6955 77.7677L104.742 86.4947Z"
              fill="#218AF0"
            />
          </svg>
        </div>
    )
}