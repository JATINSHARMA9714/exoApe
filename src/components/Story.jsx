import React from "react";
import vid6 from "../../videos/video-6.mp4";

const Story = () => {
  return (
    <div className="w-full h-[55vh] sm:h-[100vh] sm:px-10 px-5 overflow-x-hidden bg-[#080608] text-[#E0CCBB]">
      <div className="w-full flex flex-wrap sm:gap-20 gap-8 items-center py-4 border-b-[1px] border-[#e0ccbbba]">
        <div className="w-[30%]">
          <div className="text py-8 sm:text-9xl text-5xl leading-none">
            <h1>Our</h1>
            <h1>Story</h1>
          </div>
          <h3 className="text-xs sm:text-xl">
            The story behind Exo Ape is one of exploration, creativity and
            curiosity.
          </h3>
        </div>
        <div className="video sm:w-[60%] w-[40%] overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full "
            src={vid6}
          ></video>
        </div>
      </div>
      <div className="texts text-xs sm:text-sm mt-10 font-semibold flex justify-between sm:gap-20 text-[#B5A598]">
        <div className="sm:w-[13%] w-[25%] leading-6">
          <p>
            Willem II Singel 8 6041 HS, Roermond The Netherlands
            hello@exoape.com
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h3>Work</h3>
          <h3>Studio</h3>
          <h3>News</h3>
          <h3>Contact</h3>
        </div>
        <div className="flex flex-col gap-1">
          <h3>Behance</h3>
          <h3>Dribble</h3>
          <h3>Twitter</h3>
          <h3>Instagram</h3>
        </div>
      </div>
    </div>
  );
};

export default Story;
