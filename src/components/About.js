import React from "react";
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          My name is Puru Rana, a passionate web developer based in London,
          Canada. With a knack for both web and mobile application development,
          driven by my passion for innovation. I'm committed to pushing
          boundaries and surpassing expectations with each project I undertake.
          Keeping a keen eye on industry trends, I'm always on the lookout for
          emerging technologies and techniques to incorporate into my work,
          ensuring that I deliver solutions that are creative.
        </p>

        <br />

        <p className="text-xl">
          Beyond just coding, I believe in the power of collaboration and
          communication. Understanding your vision and goals is paramount to me,
          and I'm dedicated to working closely with you every step of the way to
          bring that vision to life.
        </p>
        <p className="text-xl">
          So, let's embark on this journey together. Let's brainstorm, create,
          and innovate. Let's turn your ideas into captivating digital
          experiences that shine. Get in touch, and let's make magic happen.
        </p>
      </div>
    </div>
  );
};

export default About;
