"use client";

import React, { useState, useEffect } from "react";
import { FaPlay, FaPause, FaRedo } from "react-icons/fa";

const McLovin: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showRestart, setShowRestart] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [audio] = useState(
    typeof Audio !== "undefined"
      ? new Audio("/mclovin_spaceboy.mp3")
      : null
  );

  const togglePlay = () => {
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setShowRestart(false);
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  const restartSong = () => {
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    setIsPlaying(true);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && audio) {
      timer = setTimeout(() => {
        setShowRestart(true);
      }, 5000);
    } else {
      setShowRestart(false);
    }

    return () => clearTimeout(timer);
  }, [isPlaying, audio]);

  useEffect(() => {
    if (audio) {
      audio.onerror = () => {
        setAudioError(true);
      };
    }
  }, [audio]);

  useEffect(() => {
    if (audio) {
      const handleEnded = () => {
        setIsPlaying(false);
        setShowRestart(false);
      };

      audio.addEventListener("ended", handleEnded);
      return () => audio.removeEventListener("ended", handleEnded);
    }
  }, [audio]);

  return (
    <div className="flex flex-col justify-center items-center py-10">
      <button
        onClick={togglePlay}
        className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg focus:outline-none transition duration-300"
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? <FaPause size={32} /> : <FaPlay size={32} />}
      </button>

      <p className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-100">
        {isPlaying ? "Now Playing: SpaceBoy by McLovin" : "Play McLovin's Anthem"}
      </p>

      {audioError && (
        <p className="mt-4 text-red-500">
          Error: Unable to load the audio file. Please check the file path.
        </p>
      )}

      {showRestart && !audioError && (
        <div className="mt-4 animate-fade-in">
          <button
            onClick={restartSong}
            className="flex items-center justify-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-lg focus:outline-none transition duration-300"
            aria-label="Restart Music"
          >
            <FaRedo className="mr-2" size={16} />
            Restart Song
          </button>
        </div>
      )}
    </div>
  );
};

export default McLovin;