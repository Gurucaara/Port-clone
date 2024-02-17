import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import toDoList from "../assets/portfolio/toDoList.png";
import authVer from "../assets/portfolio/authVer.png";
import blog from "../assets/portfolio/blog.png";
import jsonStore from "../assets/portfolio/jsonStore.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: blog,
      demo: "https://puru-blogs.vercel.app",
      code: "https://github.com/Gurucaara/puru-blogs",
    },
    {
      id: 5,
      src: authVer,
      demo: "https://next-authentication-plum.vercel.app",
      code: "https://github.com/Gurucaara/next-authentication",
    },
    {
      id: 6,
      src: jsonStore,
      demo: "https://json-store.vercel.app",
      code: "https://github.com/Gurucaara/JSON-Store",
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
          <p className="py-6">Check Out some of my work right here.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
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
