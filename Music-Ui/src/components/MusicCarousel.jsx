import { useState } from "react";
import { FaPlay, FaPause, FaForward, FaBackward, FaRandom } from "react-icons/fa";

const songs = [
  {
    title: "Song 1",
    artist: "Artist 1",
    image: "https://picsum.photos/400/400?1",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    title: "Song 2",
    artist: "Artist 2",
    image: "https://picsum.photos/400/400?2",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    title: "Song 3",
    artist: "Artist 3",
    image: "https://picsum.photos/400/400?3",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
];

function MusicCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const nextSong = () => {
    setCurrent((prev) => (prev + 1) % songs.length);
  };

  const prevSong = () => {
    setCurrent((prev) =>
      prev === 0 ? songs.length - 1 : prev - 1
    );
  };

  const shuffleSong = () => {
    const random = Math.floor(Math.random() * songs.length);
    setCurrent(random);
  };

  return (
    <div className="carousel-wrapper">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${current * 320}px)` }}
      >
        {songs.map((song, index) => (
          <div
            className={`card ${index === current ? "active" : ""}`}
            key={index}
          >
            <img src={song.image} alt={song.title} />
            <h2>{song.title}</h2>
            <p>{song.artist}</p>
          </div>
        ))}
      </div>

      <div className="controls">
        <FaRandom onClick={shuffleSong} />
        <FaBackward onClick={prevSong} />
        {isPlaying ? (
          <FaPause onClick={() => setIsPlaying(false)} />
        ) : (
          <FaPlay onClick={() => setIsPlaying(true)} />
        )}
        <FaForward onClick={nextSong} />
      </div>
    </div>
  );
}

export default MusicCarousel;