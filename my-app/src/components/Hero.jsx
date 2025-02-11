export default function Hero() {
  return (
    <section id="hero" className="relative mt-8 w-full h-full">
      <div className="h-full">
        <img
          src="https://png.pngtree.com/background/20210709/original/pngtree-travel-travel-light-swallow-picture-image_924323.jpg"
          alt="Travel Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center gap-4">
        <div className="text-white px-4 md:px-0">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
            TRAVEL TO EXPLORE
          </h1>
          <p className="mt-2 text-lg md:text-xl">
            Discover new places and experience adventures like never before.
          </p>
        </div>
        <div className="flex flex-col md:flex-row bg-white/80 p-4 rounded-md shadow-lg mt-4">
          <div className="flex flex-col items-center md:items-start md:px-6 mb-4 md:mb-0">
            <label className="text-lg text-blue-900">
              Where do you want to go?
            </label>
            <input
              type="text"
              placeholder="Search your location"
              className="mt-2 bg-transparent border-b-2 border-blue-900 text-center md:text-left text-black placeholder-gray-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col items-center md:items-start md:px-6 mb-4 md:mb-0">
            <label className="text-lg text-blue-900">Check-in</label>
            <input
              type="date"
              className="mt-2 bg-transparent border-b-2 border-blue-900 text-center md:text-left text-black focus:outline-none"
            />
          </div>
          <div className="flex flex-col items-center md:items-start md:px-6 mb-4 md:mb-0">
            <label className="text-lg text-blue-900">Check-out</label>
            <input
              type="date"
              className="mt-2 bg-transparent border-b-2 border-blue-900 text-center md:text-left text-black focus:outline-none"
            />
          </div>
          <button className="mt-4 md:mt-0 md:ml-6 px-6 py-3 cursor-pointer rounded-md border-none text-white bg-blue-600 text-lg uppercase transition duration-300 hover:bg-blue-900">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
}
