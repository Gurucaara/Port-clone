import React from "react";
import notesTaking from "../assets/portfolio/notes.png";
import toDoList from "../assets/portfolio/toDoList.png";

const PortfolioTwo = () => {
  const portfolios = [
    {
      id: 1,
      src: toDoList,
      demo: "https://to-do-list-sigma-dun.vercel.app/",
      code: "https://github.com/Gurucaara/To-Do-List",
    },
    {
      id: 2,
      src: notesTaking,
      demo: "https://notes-taking-two.vercel.app/",
      code: "https://github.com/Gurucaara/Notes-taking",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-800 to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
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

export default PortfolioTwo;
