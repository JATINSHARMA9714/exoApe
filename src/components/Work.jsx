import { motion } from "framer-motion";
import React, { useState } from "react";

const Work = () => {
  const [data, setData] = useState([
    {
      heading: "Studio D",
      subheading: "Urban and Landscape Design",
      image:
        "https://a.storyblok.com/f/133769/2409x3000/b5ccf4619b/studio-d-hero.jpg/m/1300x1619/filters:format(webp):quality(70)",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914798702/rendition/720p/file.mp4?loc=external&log_user=0&signature=b76cb0994de6beca7f6ba29e7eb52db1750d34600352dab2566c6ca16fcd817f",
    },
    {
      heading: "Rino & Pelle",
      subheading: "Effortless chic lifestyle",
      image:
        "https://a.storyblok.com/f/133769/2500x3113/78edf86efd/rino-pelle-hero.jpg/m/1300x1619/filters:format(webp):quality(70)",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b",
    },
    {
      heading: "Aebele Interiors",
      subheading: "Luxurious design experience",
      image:
        "https://a.storyblok.com/f/133769/1606x2000/09a30057bd/aebele-interiors-hero.jpg/m/1300x1619/filters:format(webp):quality(70)",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914796979/rendition/540p/file.mp4?loc=external&log_user=0&signature=57ac30ff6fc3b29802f7414617e808395306f0b0fa5c9c6e3ef483a532f49c15",
    },
    {
      heading: "Pixelflakes",
      subheading: "Architectural marketing agency",
      image:
        "https://a.storyblok.com/f/133769/2880x3588/5c50befb8e/pixel-flakes-hero.jpg/m/1300x1620/filters:format(webp):quality(70)",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076",
    },
  ]);
  return (
    <div className="w-full relative">
      <div className="max-w-screen-2xl p-10 sm:p-32">
        <div className="featured flex items-center gap-1">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-4"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h1 className="">Featured Projects</h1>
        </div>
        <h1 className="text-7xl overflow-hidden sm:text-[13rem] sm:tracking-tighter sm:font-semibold my-3">
          <motion.span
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="inline-block "
          >
            Work
          </motion.span>
        </h1>
        <p className="font-semibold text-zinc-600 my-3">
          Highlights of cases that we passionately built with forward-thinking
          clients and friends over the years.
        </p>
        <div className="elems mt-10 sm:flex sm:flex-wrap sm:gap-1">
          {data.map((d, i) => (
            <div key={i} className="elem w-full sm:w-[39vw] ">
              <div className="video relative overflow-hidden h-[104vw] sm:h-[50vw] ">
                <motion.img
                  data-scroll
                  data-scroll-speed="-.4"
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                  className="sm:absolute sm:top-0 sm:left-0 sm:z-10 w-full h-full object-cover hidden sm:block"
                  src={d.image}
                  alt=""
                />
                <video
                  autoPlay
                  muted
                  loop
                  className="absolute block sm:z-0 scale-[1.3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src={d.video}
                ></video>
              </div>
              <div className="text my-2">
                <h3 className="font-semibold tracking-tight">{d.heading}</h3>
                <p className=" text-zinc-500 mb-10">{d.subheading}</p>
              </div>
            </div>
          ))}

          <h2 className="text-center sm:text-center sm:w-full  underline">
            Browse all Works
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Work;
