
import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-16 bg-gradient-to-r form-bg-gray-900 via-black to bg-gray-900 text-white  ">
      <div className="container mx-auto px-6 text-center space-y-6 flex-grow">
        <h2 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
          About Us 🌍
        </h2>
        <p className="text-lg md:text-xl opacity-90 font-medium text-white/80 max-w-3xl mx-auto">
          Welcome to our travel website! We provide the best travel experiences, helping you explore the world with ease. Whether you're looking for adventure, relaxation, or cultural immersion, we've got you covered.
        </p>
        <div className="mt-8 flex justify-center">
          <img 
            src="https://t3.ftcdn.net/jpg/00/93/76/02/360_F_93760221_KJMb5fQHdgai8y4mUF6TzLJWRJQQAO2K.jpg" 
            alt="About Us" 
            className="w-full max-w-3xl rounded-3xl shadow-2xl border border-white/30 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
