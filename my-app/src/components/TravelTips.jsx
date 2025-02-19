import React from "react";

const TravelTips = () => {
  return (
    <section id="travel-tips" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Travel Tips
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tip 1 */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Pack Light</h3>
            <p className="text-gray-300">
              Avoid overpacking and make sure to bring only the essentials. This will
              help you move around easily and save space for souvenirs. Consider rolling
              clothes instead of folding them to save space and reduce wrinkles.
            </p>
          </div>

          {/* Tip 2 */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Stay Hydrated</h3>
            <p className="text-gray-300">
              It's easy to forget to drink water, especially when traveling to different
              climates. Always carry a reusable water bottle and make sure to stay hydrated
              to keep your energy levels up.
            </p>
          </div>

          {/* Tip 3 */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Learn Key Phrases</h3>
            <p className="text-gray-300">
              Even if you're traveling to a place where you don't speak the language, learning
              a few key phrases can go a long way. "Hello," "Thank you," and "Where is the bathroom?"
              can be lifesavers when navigating unfamiliar places.
            </p>
          </div>

          {/* Tip 4 */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Keep Copies of Important Documents</h3>
            <p className="text-gray-300">
              Always make photocopies of important travel documents like your passport, ID,
              flight tickets, and hotel reservations. Keep a copy in a separate bag and consider
              storing a digital copy on your phone or cloud service for added security.
            </p>
          </div>

          {/* Tip 5 */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Plan Ahead, But Stay Flexible</h3>
            <p className="text-gray-300">
              It's important to have a plan for your trip, but also be open to unexpected
              adventures. Be flexible with your schedule and allow time for spontaneous
              exploration and relaxation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelTips;