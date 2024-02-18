import React from "react";
import heroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight, MdOutlineLink } from "react-icons/md";
import { Link } from "react-scroll";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Crafting engaging web applications using React, Next.js, and
            Tailwind CSS, while continuously expanding skills with technologies
            like GraphQL, Prisma, and beyond.
          </p>

          <div className="flex">
            <div className="mr-4">
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-400 to-green-800"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={20} className="ml-1" />
                </span>
              </Link>
            </div>
            <div className="mt-2">
              <Button
                href="https://puru-blogs.vercel.app"
                variant="contained"
                target="_blank"
                size="large"
                style={{ textTransform: "none" }}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-400 to-purple-800 "
              >
                Blog
                <span className="group-hover:translate-x-4 duration-300">
                  <MdOutlineLink size={20} className="ml-1" />
                </span>
              </Button>
            </div>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            alt="my profile"
            className="rounded-3xl mx-auto w-2/3 md:w-full "
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
