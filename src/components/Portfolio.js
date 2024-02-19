import React from "react";
import board from "../assets/portfolio/board.png";
import foodHav from "../assets/portfolio/foodHav.png";
import netGPT from "../assets/portfolio/netGPT.png";
import yt from "../assets/portfolio/yt.png";
import authVer from "../assets/portfolio/authVer.png";
import blog from "../assets/portfolio/blog.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: board,
      alt: "Miro Board",
      demo: "https://miro-board.vercel.app",
      code: "https://github.com/Gurucaara/Miro-Board",
    },
    {
      id: 2,
      src: authVer,
      alt: "Next Auth",
      demo: "https://next-authentication-plum.vercel.app",
      code: "https://github.com/Gurucaara/next-authentication",
    },
    {
      id: 3,
      src: blog,
      alt: "Blog CMS",
      demo: "https://puru-blogs.vercel.app",
      code: "https://github.com/Gurucaara/puru-blogs",
    },
    {
      id: 4,
      src: foodHav,
      alt: "Food Haven",
      demo: "https://foodhaven-theta.vercel.app",
      code: "https://github.com/Gurucaara/Foodhaven",
    },
    {
      id: 5,
      src: netGPT,
      alt: "Netflix GPT",
      demo: "https://netlix-clone-nu.vercel.app",
      code: "https://github.com/Gurucaara/Netlix-clone",
    },
    {
      id: 6,
      src: yt,
      alt: "Youtube Clone",
      demo: "https://yt-clone-gurucaara.vercel.app",
      code: "https://github.com/Gurucaara/yt-clone",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-4">Check Out some of my work right here.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code, alt }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={alt}
                className="rounded-md duration-200 hover:scale-105 "
              />
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={code} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
