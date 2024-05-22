import React, { useEffect } from 'react';
import './Hero.css';

function Hero() {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      const moveX = ((clientX - innerWidth / 2) / innerWidth) * 10;
      const moveY = ((clientY - innerHeight / 2) / innerHeight) * 10;

      document.querySelector('.stars').style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="hero relative h-screen flex items-center justify-center text-white text-center">
      <div className="hero-content z-10">
        <div className="image-container mb-4">
          <img 
            src="/images/ttff2.png" 
            alt="Profile" 
            className="profile-image mx-auto"
          />
        </div>
        <p className="subtitle text-lg text-gray-400 mb-2">Web Developer</p>
        <h1 className="text-4xl font-bold mb-4">
          Hello, I'm <span className="text-purple-500">Pranshu Chourasia</span>
        </h1>
        <p className="description max-w-lg mx-auto mb-8">
          I'm a digital artisan, weaving elegance and functionality into every pixel. With a mastery of diverse programming languages and the latest technologies, I turn visionary concepts into captivating web experiences. Let's create something extraordinary together!
        </p>
        <div className="buttons space-x-4">
          <button className="button bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Learn More!
          </button>
          <button className="button bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Resume
          </button>
        </div>
        <div className="social-links mt-4 space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="stars absolute inset-0 overflow-hidden z-0"></div>
    </section>
  );
}

export default Hero;
