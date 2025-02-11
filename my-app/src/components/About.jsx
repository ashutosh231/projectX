import React from 'react'

const About = () => {
  return (
    <div>
        <section id="about" className="py-12 bg-black-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white">About Us 🌍</h2>
          <p className="text-white mt-4 max-w-3xl mx-auto">
            Welcome to our travel website! We provide the best travel experiences, helping you explore the world with ease. Whether you're looking for adventure, relaxation, or cultural immersion, we've got you covered.
          </p>
          <div className="mt-8">
            <img 
              src="/images/about-travel.jpg" 
              alt="About Us" 
              className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About