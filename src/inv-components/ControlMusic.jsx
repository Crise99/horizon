
import  { useRef, useState } from 'react';

const ControlMusic = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const handlePlayMusic = () => {
        if (isPlaying) {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
        audioRef.current.volume = 0.2;
    };

    const handleStop = () => {
        if (!isPlaying) {
            audioRef.current.pause();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <>
            <audio ref={audioRef}  loop>
                <source src="/cancion-fondo.mp3" type="audio/mpeg" />
            </audio>
            <button className="btn-music m-2 font-medium shadow-md rounded-3xl py-3 px-10 bg-color01 text-white" onClick={handlePlayMusic}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-music-heart"
                ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
                    d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path><path d="M9 17v-13h10v7"
                    ></path><path d="M9 8h10"></path><path
                        d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z"
                    ></path></svg >

            </button>
            <button className="btn-music m-2 font-medium shadow-md rounded-3xl py-3 px-10 bg-color01 text-white" onClick={handleStop}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-music-cancel"
                ><path stroke="none" d="M0 0h24v24H0z" fill="none"
                ></path><path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"
                ></path><path d="M9 17v-13h10v8"></path><path d="M9 8h10"
                ></path><path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
                ></path><path d="M17 21l4 -4"></path></svg>
            </button>
        </>
    );
};

export default ControlMusic;