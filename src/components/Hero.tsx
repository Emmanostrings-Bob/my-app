
import { useState } from 'react';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handleCancelClick = () => {
    setIsPlaying(false);
  };

  return (
    <section className=" bg-black text-white h-screen flex items-end">
      <video autoPlay loop muted={!isPlaying} className={`absolute inset-0 w-full h-full object-cover ${isPlaying ? 'opacity-100' : 'opacity-20'}`}>
        <source src="/assets/Photoruum Intro.mp4" type="video/mp4" />
      </video>
      {!isPlaying && (
        <div className="absolute flex flex-col mb-5 ml-10 text-white">
          <a href="#" onClick={handlePlayClick} className="flex items-center space-x-2 text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-6.29-3.396A1 1 0 007 8.602v6.796a1 1 0 001.463.887l6.29-3.396a1 1 0 000-1.774z"></path>
            </svg>
            <span>WATCH VIDEO</span>
          </a>
          <div className="w-24 h-1 bg-white mt-2"></div>
        </div>
      )}
      {isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <video controls autoPlay className="w-full h-full max-w-4xl max-h-96">
            <source src="/assets/Photoruum Intro.mp4" type="video/mp4" />
          </video>
          <button onClick={handleCancelClick} className="absolute top-4 right-4 text-white text-3xl">
            &times;
          </button>
        </div>
      )}
    </section>
  );
};

export default Hero;
